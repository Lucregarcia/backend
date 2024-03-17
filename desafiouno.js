class ProductManager{
constructor() {
    this.products = []
}
addProduct(title, description, price, thumbnail, code, stock){
    this.products.push({title, description, price , thumbnail, code, stock});
}
}





