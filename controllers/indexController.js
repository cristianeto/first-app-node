const items = [
    {id: 1, name: 'Product1',},
    {id: 2, name: 'Product2',},
    {id: 3, name: 'Product3',}
];

const index = (req, res) =>{
    //res.end('Hola Cristian!'); responde a la vista 
    res.render('index',{
        title:'my Web Cristian',
    });
}
const ListOfProducts = (req,res,next)=>{
    res.render('products',{
        title: 'List of Products',
        items: items,
    })
}
const newProduct = (req, res, next) => {
    //const newItem = req.body.newItem; Javascript antiguo
    const {newItem} = req.body;// es lo mismo de arriba solo que en javascript actualizado
    items.push({
        id: items.length+1,
        name: newItem
    });
    res.redirect('/products');
}

module.exports = {
    //index:index
    index,
    ListOfProducts,
    newProduct,

}