const express = require('express');
const router = express.Router();

const { database } = require('../config/helpers');


/** GET ALL PRODUCTS */
// http://localhost:3636/api/products?page=1&limit=2
router.get('/', (req, res) => {
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1; //Set the page number
    let limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10; //Set the limit count

    let startValue; 
    let endValue; 
    
    if( page > 0){
        startValue = (page * limit ) - limit;  // 0, 10, 20, 30
        endValue = page * limit; // 10, 20, 30, 40
    }else{
        startValue = 0;
        endValue = 0;
    }

    database.table('products as p')
        .join([
            {
                table: 'categories as c',
                on: `c.id = p.cat_id`
            }
        ])
        .withFields([
            'c.title as category',
            'p.title as name',
            'p.price',
            'p.quantity',
            'p.description',
            'p.image',
            'p.id'
        ])
        .slice(startValue, endValue)
        .sort({id: .1})
        .getAll()
        .then( (prods) => {
            if(prods.length > 0){
                res.status(200).json({
                    count: prods.length,
                    products: prods
                })
            }else{
                res.json({ message: " No Products Found "})
            }
        })
        .catch( err => console.log(err))
});

/** GET SINGLE PRODUCT BY ID */
router.get('/:prodId', (req, res) => {
    let productId = req.params.prodId;

    database.table('products as p')
        .join([
            {
                table: 'categories as c',
                on: `c.id = p.cat_id`
            }
        ])
        .withFields([
            'c.title as category',
            'p.title as name',
            'p.price',
            'p.quantity',
            'p.description',
            'p.image',
            'p.id'
        ])
        .filter({'p.id': productId})
        .get()
        .then( prod => {
            if(prod){
                res.status(200).json(prod);
            } else{
                res.json({ message: `No Product found with id ${productId}`})
            }
        })
        .catch(err => res.json(err))
})

/** GET  PRODUCTS BY CATEGORY */
router.get('/category/:catName', (req, res) => {
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1; //Set the page number
    let limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10; //Set the limit count

    let startValue; 
    let endValue; 
    
    if( page > 0){
        startValue = (page * limit ) - limit;  // 0, 10, 20, 30
        endValue = page * limit; // 10, 20, 30, 40
    }else{
        startValue = 0;
        endValue = 0;
    }

    //Get Category title value from param
    const cat_title = req.params.catName;

    database.table('products as p')
        .join([
            {
                table: 'categories as c',
                on: `c.id = p.cat_id WHERE c.title LIKE '%${cat_title}%'` 
            }
        ])
        .withFields([
            'c.title as category',
            'p.title as name',
            'p.price',
            'p.quantity',
            'p.description',
            'p.image',
            'p.id'
        ])
        .slice(startValue, endValue)
        .sort({ id: 1})
        .getAll()
        .then(prods => {
            if(prods.length > 0) {
                res.status(200).json({
                    count: prods.length,
                    products: prods
                });
            } else{
                res.json({message: `No products found matching the category ${cat_title}`});
            }
        }).catch( err => res.json(err));
})

module.exports = router; 


















