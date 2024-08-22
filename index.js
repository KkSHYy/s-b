import axios from "axios";
import express from "express";
import productRoutes from "./routes/productRoutes.js";

const port = 5000;
const app = express();



app.get('/', (req, res) => {
 return res.status(200).json({data: 'Hello'});
});

app.use(productRoutes);

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

app.listen(port, (e) => {
  console.log('connected');
});

