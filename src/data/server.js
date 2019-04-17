//żeby uruchomić serwer musisz uruchomić/ komendy w oddzielnych konsolach: mongod i mongo (z głównego katalogu)
//, nodemon server (z katalogu data. de facto ta komenda wykonuje komendę node server.js ) 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const kakleRoutes = express.Router();

let KakleProducts = require('./kakle.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/kakleshop', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

kakleRoutes.route('/').get(function(req, res) {
    KakleProducts.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});

// kakleRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     KakleProducts.findById(id, function(err, products) {
//         res.json(products);
//     });
// });

// todoRoutes.route('/add').post(function(req, res) {
//     let product = new KakleProducts(req.body);
//     todo.save()
//         .then(product => {
//             res.status(200).json({'product': 'new product added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new product failed');
//         });
// });

// todoRoutes.route('/update/:id').post(function(req, res) {
//     KakleProducts.findById(req.params.id, function(err, product) {
//         if (!product)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             KakleProducts.save().then(product => {
//                 res.json('product updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });



app.use('/products', kakleRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});