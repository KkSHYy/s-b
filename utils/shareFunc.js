

export const notAllowed = (req, res) => {
  res.status(405).json({ message: "Not found" });
}