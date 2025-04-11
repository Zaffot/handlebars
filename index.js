const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
// dummy database IRL we would get data form MongoDB
const products = [
    {
        name: 'Kia',
        price: 25000
    },
    {
        name: 'Volvo',
        price: 30000
    }
]
//starts handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));
// runs handlebars
app.set('view engine','handlebars');

//route to page
app.get('/',(req,res)=> {
    //res.send("Testing");
    //res.render('index');
    res.render('index',{
        title: 'Home',
        companyName: 'Business Ltd'
    });
}); 


//route to contact page
app.get('/contact',(req,res)=> {
    res.render('contact');
}); 

// route to products page 
app.get('/products',(req,res)=>{
    res.render('products',
    {
        title: "Products",
        products: products
    })
});


//folder to staric files like css jpg etc
app.use(express.static('public'));

app.use((req,res,next) => {
    res.status(404).send("Sorry, could not find the content");
});


//port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listning on port ${PORT}`));