import express from "express";
import productRoutes from "./routes/productRoutes.js";
import  userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import fileUpload from "express-fileupload";

const port = 5000;

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.aces8.mongodb.net/ShopUs').then((val) => {
app.listen(port, (e) => {
  console.log('connected');
});

}).catch((err) => {
 console.log(err);
});

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  abortOnLimit:true
}));

app.get('/', (req, res) => {
 return res.status(200).json({data: 'Hello'});
});

app.use('/api/products',productRoutes);
app.use('/api/users', userRoutes);


 app.use('/',(req,res) =>
  {
  return res.status(404).json({data: 'Api Not found'});
  });
// apis for product
// /api/products   ---- getAll Products--- add product--query
// api/products/:id --- delete update getById

// getAllproduct
// getProductById
// updateProduct
// deleteProduct
// add Product
// getProductByHighPrice



