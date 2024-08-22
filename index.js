import express from "express";
import productRoutes from "./routes/productRoutes.js";
import  userRoutes from "./routes/userRoutes.js";
import { expressJoiValidations } from "express-joi-validations";

const port = 5000;
const app = express();

app.use(express.json());
app.use(expressJoiValidations( ));

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

app.listen(port, (e) => {
  console.log('connected');
});

