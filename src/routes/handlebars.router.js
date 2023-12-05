import { Router } from 'express';
const router = Router();
router
.get("/getall", (req, res) => {
    console.log('Renderizando .. /getall..');    
    res.render("home", {
        title: "Listado de productos"
    });
})

.get("/add", (req, res) => {
    console.log('Renderizando .. /add..');    
    res.render("addproduct", {
        title: "ingreso de productos"
    });
});


export { router as default }; 