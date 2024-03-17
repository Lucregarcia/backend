
class ProductManager{
constructor() {
    this.products = []
}

static id = 0 ; 

addProduct(title, description, price, thumbnail, code, stock) {

    for (let i=0; i < this.products.length; i++){
        if (this.products[i].code === code){
            console.log("El codigo ${code} esta repetido");
            break;
        }
    }

    const nuevoProducto = {
        title, 
        description, 
        price, 
        thumbnail, 
        code,
        stock
    };

    if (!Object.values(nuevoProducto).includes(undefined)){
        ProductManager.id++
        this.products.push({
        ...nuevoProducto,
        id:ProductManager.id
        });
    } else{
        console.log("Todos los campos son requeridos");
    }

}

getProduct(){
        return this.products;
    }

getProductById(id){
    if (!this.products.find((producto) => producto.id === id)){
        console.log ("NOT FOUND");
    } else{
        console.log(this.products.find((producto) => producto.id === id));
    }
}
}

//array vacio
const productos = new ProductManager;
console.log(productos.getProduct());

//array con productos agregados
productos.addProduct("Collar Argenta", "Collar de perlas", 10000, "imagen1","1A", 10);
productos.addProduct("Collar Amalfi", "Collar de oro laminado", 9000, "imagen2","1B", 5);

console.log(productos.getProduct());


//agrego un producto con mismo codigo y lo rechaza.
productos.addProduct("Collar Amalfi", "Collar de oro laminado", 9000, "imagen2","1A", 5);

// BUSQUEDA POR ID
productos.getProductById(1);
productos.getProductById(3);

//producto incompleto 
productos.addProduct("Collar Amalfi", "Collar de oro laminado", 9000, "imagen2");

