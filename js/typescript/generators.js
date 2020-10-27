function *sequence(){
    yield "something one";
    yield "something two";
    yield "something three";
    yield "something four";
    //return "something";
}
let gen = sequence(); 

for(let g of gen){
    console.log(g)
} 