





export const getProducts = (req, res) =>
{
  console.log(req.query);
  return res.status(200).json({data: 'all products'});
}