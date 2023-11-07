class ProductManager{
    constructor(){
        this.products = []
    }

    static id=0

    addProduct(titulo, descripcion, precio, imagen, codigo, stock){

        for(let i = 0; i < this.products.length;i++){
            if(this.products[i].code === code){ 
                console.log(`Este codigo: ${codigo}, ya existe.`);
                break;
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
        return this.products.find((producto)=> producto.id === id)
    }

    getProductById(id){
        if(!this.esta(id)){
            console.log("No se encontro")
        } else {
            console.log("Se encontro")
        }
    }
}

const productos = new ProductManager

productos.addProduct( 'Manzana', 'Deliciosa', 1500, "imagencualquiera", "M1", 10 )
productos.addProduct( 'Banana', 'Grande', 2000, "imagencualquiera", "B1", 20 )

console.log(productos.getProduct())

productos.getProductById(2)