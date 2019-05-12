import kakle_blue from "../images/kakle_blue.png";
import kakle_rose from "../images/kakle_rose.png";
import kakle_yellow from "../images/kakle_yellow.png";
import kakle_green from "../images/kakle_green.png";
import mono_blue from "../images/mono_blue.png";
import mono_rose from "../images/mono_rose.png";
import mono_yellow from "../images/mono_yellow.png";
import mono_green from "../images/mono_green.png";
import norway_blue from "../images/norway_blue.png";
import norway_rose from "../images/norway_rose.png";
import norway_yellow from "../images/norway_yellow.png";
import norway_green from "../images/norway_green.png";
import omg_blue from "../images/omg_blue.png";
import omg_rose from "../images/omg_rose.png";
import omg_yellow from "../images/omg_yellow.png";
import omg_green from "../images/omg_green.png";


//How add product to mongoDB - for example via RoboMongo

//Insert one product
//db.products.insertOne({product_id: 1, name: "kakle blue", category: "kakle", color: "blue", price: "29.99", magazine_amount: 20})
//kakleshop.products

//Or insert many products
// db.products.insertMany([
//     {
//         product_id: 3,
//         name: "kakle rose",
//         category: "kakle",
//         color: "rose",
//         price: "25.99",
//         magazine_amount: 7
//     },
//     {
//         product_id: 4,
//         name: "kakle yellow",
//         category: "kakle",
//         color: "yellow",
//         price: "23.99",
//         magazine_amount: 154
//     },
//     {
//         product_id: 5,
//         name: "mono blue",
//         category: "mono",
//         color: "blue",
//         price: "29.99",
//         magazine_amount: 56
//     },
//     {
//         product_id: 6,
//         name: "mono green",
//         category: "mono",
//         color: "green",
//         price: "27.99",
//         magazine_amount: 2
//     },
//     {
//         product_id: 7,
//         name: "mono rose",
//         category: "mono",
//         color: "rose",
//         price: "25.99",
//         magazine_amount: 654
//     },
//     {
//         product_id: 8,
//         name: "mono yellow",
//         category: "mono",
//         color: "yellow",
//         price: "23.99",
//         magazine_amount: 25
//     },
//     {
//         product_id: 9,
//         name: "norway blue",
//         category: "norway",
//         color: "blue",
//         price: "29.99",
//         magazine_amount: 17
//     },
//     {
//         product_id: 10,
//         name: "norway green",
//         category: "norway",
//         color: "green",
//         price: "27.99",
//         magazine_amount: 25
//     },
//     {
//         product_id: 11,
//         name: "norway rose",
//         category: "norway",
//         color: "rose",
//         price: "25.99",
//         magazine_amount: 1
//     },
//     {
//        product_id: 12,
//         name: "norway yellow",
//         category: "norway",
//         color: "yellow",
//         price: "23.99",
//         magazine_amount: 5
//     },
//     {
//         product_id: 13,
//         name: "omg blue",
//         category: "omg",
//         color: "blue",
//         price: "29.99",
//         magazine_amount: 58
//     },
//     {
//         product_id: 14,
//         name: "omg green",
//         category: "omg",
//         color: "green",
//         price: "27.99",
//         magazine_amount: 25
//     },
//     {
//         product_id: 15,
//         name: "omg rose",
//         category: "omg",
//         color: "rose",
//         price: "25.99",
//        magazine_amount: 8
//     },
//     {
//         product_id: 16,
//         name: "omg yellow",
//         category: "omg",
//         color: "yellow",
//         price: "23.99",
//         magazine_amount: 555
//     }
// ])



// export const productsData = [
//     {
//         id: 1,
//         name: "kakle blue",
//         category: "kakle",
//         color: "blue",
//         price: "29.99",
//         image: kakle_blue,
//         magazine_amount: 20
//     },
//     {
//         id: 2,
//         name: "kakle green",
//         category: "kakle",
//         color: "green",
//         price: "27.99",
//         image: kakle_green,
//         magazine_amount: 5
//     },
//     {
//         id: 3,
//         name: "kakle rose",
//         category: "kakle",
//         color: "rose",
//         price: "25.99",
//         image: kakle_rose,
//         magazine_amount: 7
//     },
//     {
//         id: 4,
//         name: "kakle yellow",
//         category: "kakle",
//         color: "yellow",
//         price: "23.99",
//         image: kakle_yellow,
//         magazine_amount: 154
//     },
//     {
//         id: 5,
//         name: "mono blue",
//         category: "mono",
//         color: "blue",
//         price: "29.99",
//         image: mono_blue,
//         magazine_amount: 56
//     },
//     {
//         id: 6,
//         name: "mono green",
//         category: "mono",
//         color: "green",
//         price: "27.99",
//         image: mono_green,
//         magazine_amount: 2
//     },
//     {
//         id: 7,
//         name: "mono rose",
//         category: "mono",
//         color: "rose",
//         price: "25.99",
//         image: mono_rose,
//         magazine_amount: 654
//     },
//     {
//         id: 8,
//         name: "mono yellow",
//         category: "mono",
//         color: "yellow",
//         price: "23.99",
//         image: mono_yellow,
//         magazine_amount: 25
//     },
//     {
//         id: 9,
//         name: "norway blue",
//         category: "norway",
//         color: "blue",
//         price: "29.99",
//         image: norway_blue,
//         magazine_amount: 17
//     },
//     {
//         id: 10,
//         name: "norway green",
//         category: "norway",
//         color: "green",
//         price: "27.99",
//         image: norway_green,
//         magazine_amount: 25
//     },
//     {
//         id: 11,
//         name: "norway rose",
//         category: "norway",
//         color: "rose",
//         price: "25.99",
//         image: norway_rose,
//         magazine_amount: 1
//     },
//     {
//         id: 12,
//         name: "norway yellow",
//         category: "norway",
//         color: "yellow",
//         price: "23.99",
//         image: norway_yellow,
//         magazine_amount: 5
//     },
//     {
//         id: 13,
//         name: "omg blue",
//         category: "omg",
//         color: "blue",
//         price: "29.99",
//         image: omg_blue,
//         magazine_amount: 58
//     },
//     {
//         id: 14,
//         name: "omg green",
//         category: "omg",
//         color: "green",
//         price: "27.99",
//         image: omg_green,
//         magazine_amount: 25
//     },
//     {
//         id: 15,
//         name: "omg rose",
//         category: "omg",
//         color: "rose",
//         price: "25.99",
//        image: omg_rose,
//        magazine_amount: 8
//     },
//     {
//         id: 16,
//         name: "omg yellow",
//         category: "omg",
//         color: "yellow",
//         price: "23.99",
//         image: omg_yellow,
//         magazine_amount: 555
//     }
// ]

