class ProductManager{
    constructor(){
        this.products = []
    }

    static id=0

    addProduct(titulo, descripcion, precio, imagen, codigo, stock){

        for(let i = 0; i < this.products.length;i++){
            if (this.products.some(producto => producto.codigo === codigo)) {

                console.log(`Este código: ${codigo}, ya existe.`)
                console.log( products )
          
            }
        }


        const newProduct={
            titulo,
            descripcion,
            precio,
            imagen,
            codigo,
            stock,
        }
        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({...newProduct, id:ProductManager.id})
        } else {
            console.log("Todos los campos son necesarioss")
        }


       
    }

    getProduct(){
        return this.products;
    }

    esta(id){
        return this.products.find((producto)=> producto.id === id);
    }

    getProductById(id){
    !this.esta(id) ? console.log("No se encontro") : console.log(this.esta(id));
    }
    
}

const productos = new ProductManager

console.log(productos.getProduct())

productos.addProduct( 'Manzana', 'Deliciosa', 1500, "imagencualquiera", "M1", 10 )
productos.addProduct( 'Pera', 'mediana', 100, "imagencualquiera", "P1", 10 )

console.log(productos.getProduct())

productos.addProduct( 'Banana', 'Grande', 2000, "imagencualquiera", "M1", 20 )



//productos.getProductById(2)