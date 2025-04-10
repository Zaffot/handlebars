const express = require('express');
const exphbs = require('express-handlebars');


const app = express();

//starts handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));
// runs handlebars
app.set('view engine','handlebars');

//route to page
app.get('/',(req,res)=> {
    //res.send("Testing");
    res.render('index');
}); 

//route to contact page
app.get('/contact',(req,res)=> {
    res.render('contact');
}); 

//folder to staric files like css jpg etc
app.use(express.static('public'));



//port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listning on port ${PORT}`));