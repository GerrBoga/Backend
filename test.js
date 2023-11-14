async function testProductManager() {
    const ProductManager = require("./ProductManager");
  
    // Nueva clase
    const productManager = new ProductManager("./products.json");
  
    await productManager.clearProducts();
  
    // Llamar a getProducts
    console.log({ products: await productManager.getProducts() });
  
    // Llamar a addProducts
    await productManager.addProduct("Samgung s8", "Excelente procesador y muy economico", 10000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.game-station.com.ar%2FMLA-738032215-samsung-galaxy-s8-sm-g950f-reacondicionado-64gb-4gb-ram-_JM&psig=AOvVaw0D9I-uDjrvV4VKCRmwlQT9&ust=1700087125465000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLinm53ExIIDFQAAAAAdAAAAABAE", "S8", 8);
    await productManager.addProduct("Samsung flyp 4", "Comodida genial y muy avanzado", 25000, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nb.com.ar%2Fi%2Fnb_SAMSUNG-CELULAR-GALAXY-Z-FLIP4-GRAPHITE-256GB_ver_f96ca34d8a7a14e4aa84babcf2175947.jpg&tbnid=9i8n4Cme_SUEdM&vet=12ahUKEwi50LbdxMSCAxUITLgEHSNkBngQMygBegUIARChAQ..i&imgrefurl=https%3A%2F%2Fwww.hardvisionlr.com.ar%2Fcelulares-y-telefonia%2Fcelulares-y-telefonia_1%2Fsamsung-celular-galaxy-z-flip4-graphite-256gb-969.html&docid=5RBH-KjyWb5SpM&w=1500&h=1670&q=samsung%20flyp4&ved=2ahUKEwi50LbdxMSCAxUITLgEHSNkBngQMygBegUIARChAQ", "F4", 2);
  
    console.log({ productsAfterInsert: await productManager.getProducts() });
  
    // Error
    try {
      await productManager.addProduct("", "Mejorado samsung j8 con nuevas tecnologias", 8000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xatakamovil.com%2Fsamsung%2Fsamsung-galaxy-j8-caracteristicas-precio-ficha-tecnica&psig=AOvVaw37O3eNDV5RPuLC0ynFkghI&ust=1700087387507000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCpiZjFxIIDFQAAAAAdAAAAABAE", "J8", 3);
    } catch (error) {
      console.log({ error: error.message });
    }
  
    // Error en (SD)
    try {
      await productManager.addProduct("Samsung J8", "Mejorado samsung j8 con nuevas tecnologias", 8000, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xatakamovil.com%2Fsamsung%2Fsamsung-galaxy-j8-caracteristicas-precio-ficha-tecnica&psig=AOvVaw37O3eNDV5RPuLC0ynFkghI&ust=1700087387507000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCpiZjFxIIDFQAAAAAdAAAAABAE", "J9", 3);
    } catch (error) {
      console.log({ error: error.message });
    }
  
    // Llamar con un id falso
    try {
      await productManager.getProductById(10);
    } catch (error) {
      console.log({ error: error.message });
    }
  
    // Llamar con id correcto
    console.log({ specificProduct: await productManager.getProductById(1) });
  
    try {
      const updatedProduct = await productManager.updateProduct(
        1,
        "Samgung s8+",
        "Excelente procesador, muy economico y con excelente camara",
        15000,
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.game-station.com.ar%2FMLA-738032215-samsung-galaxy-s8-sm-g950f-reacondicionado-64gb-4gb-ram-_JM&psig=AOvVaw0D9I-uDjrvV4VKCRmwlQT9&ust=1700087125465000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLinm53ExIIDFQAAAAAdAAAAABAE",
        "S8+",
        7
      );
      console.log({ updatedProduct });
      console.log({ updatedProduct: await productManager.getProductById(1) });
    } catch (error) {
      console.log({ error: error.message });
    }
  

    try {
      const deletedProduct = await productManager.deleteProduct(1);
      console.log({ deletedProduct });
      console.log({ productsAfterDelete: await productManager.getProducts() });
    } catch (error) {
      console.log({ error: error.message });
    }
    await productManager.clearProducts();
  }
  
  testProductManager()
    .then(() => console.log("HECHO"))
    .catch((error) => console.log(error));