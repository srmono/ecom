const express = require('express');
const router = express.Router();

const { database } = require('../config/helpers');

// GET ALL ORDERS
router.get('/', (req, res) => {
    database.table('orders_details as od')
        .join([
            {
                table: 'orders as o',
                on: 'o.id = od.order_id'
            },
            {
                table: 'products as p',
                on: 'p.id = od.product_id'
            },
            {
                table: 'users as u',
                on: 'u.id = o.user_id'
            }
        ])
        .withFields([
            'o.id',
            'p.title',
            'p.description',
            'p.price',
            'u.username'
        ])
        .getAll()
        .then( orders => {
            if(orders.length > 0){
                res.json(orders)
            } else {
                res.json( { message: "No Orders found"})
            }
        })
        .catch(err => res.json(err))
});

//GET SINGLE ORDER
router.get('/:id', (req, res) => {
    let orderId = req.params.id;

    database.table('orders_details as od')
        .join([
            {
                table: 'orders as o',
                on: 'o.id = od.order_id'
            },
            {
                table: 'products as p',
                on: 'p.id = od.product_id'
            },
            {
                table: 'users as u',
                on: 'u.id = o.user_id'
            }
        ])
        .withFields([
            'o.id',
            'p.title',
            'p.description',
            'p.price',
            'u.username'
        ])
        .filter({ 'o.id': orderId})
        .getAll()
        .then( orders => {
            if( orders.length > 0){
                res.json(orders)
            } else {
                res.json({message: 'NO ORDERS FOUND'});
            }
        })
        .catch( err => res.json(err));
})

//PLACE NEW ORDER
router.post('/new', (req, res) => {
    let {userId, products } = req.body;

    if( userId !== null && userId > 0){
        database.table('orders')
            .insert({
                user_id: userId
            }).then( (newOrderId) => {
                if(newOrderId > 0){
                    products.forEach( async (p) => {
                        let data = await database.table('products').filter({id: p.id}).withFields(['quantity']).get();
                        let inCart = parseInt(p.incart)
                        console.log("cartttttttt", inCart)
                        // Deduct the number of pieces ordered from the quantity in database
                        if( data.quantity > 0){
                            data.quantity = data.quantity - inCart;
                            
                            if(data.quantity < 0) {
                                data.quantity = 0;
                            }
                        }else {
                            data.quantity = 0;
                        }

                        // Insert order details w.r.t the newy created order Id 
                        database.table('orders_details')
                            .insert({
                                order_id: newOrderId,
                                product_id: p.id,
                                quantity: inCart
                            }).then( newId => {
                                database.table('products')
                                    .filter({id: p.id})
                                    .update({
                                        quantity: data.quantity
                                    }).then( successNum => {})
                                    .catch( err => console.log(err))
                            }).catch(err => console.log(err))
                    });
                } else{
                    res.json({ message: "New order failed while adding order details", success: false})
                }

                res.json({
                    message: `Order Placed Successfully with order Id ${newOrderId}`,
                    success: true,
                    order_id: newOrderId,
                    products: products
                })
            })
            .catch( err => res.json(err));
    }else{
        res.json({message: 'New Order Failed', success: false})
    }
})

//FAKE PAYMENT GATEWAY

module.exports = router; 