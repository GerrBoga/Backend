const express = require("express");
const ProductManager = require("./productManager");

const app = express();
// El número de puerto 8080 (PORT).
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(201).send("¡Bienvenidos a Celfons!");
});

// Se crea una instancia de la clase ProductManager con la ruta al archivo productos.json.
const productManager = new ProductManager("./src/products.json");

app.get("/products", async (req, res) => {
  console.log(await productManager.getProducts());
  let limit = req.query.limit;
  const returnProducts = await productManager.getProducts();
  if (limit) {
    res.status(200).json({ status: "ok", data: returnProducts.slice(0, limit) });
    // devuelve los primeros productos límite
  } else {
    res.status(200).json({ status: "ok", data: returnProducts });
    // devuelve todos los productos
  }
});

// El método app.get() se utiliza para definir un controlador de ruta para el método
app.get("/products/:pid", async (req, res) => {
  try {
    const id = parseInt(req.params.pid);
    const product = await productManager.getProductById(id);
    res.status(200).json({ status: "ok", data: product });
    // Si se encuentra el producto, responde con un código de estado de 200 y el producto en formato JSON.
  } catch (error) {
    // Si no se encuentra el producto, responde con un código de estado de 404 y un mensaje de error en formato JSON.
    res.status(404).json({ status: "error", message: error.message });
  }
});

// escuchar solicitudes
app.listen(PORT, () => {
  console.log(`Server listening on port http:/localhost:${PORT}`);
});