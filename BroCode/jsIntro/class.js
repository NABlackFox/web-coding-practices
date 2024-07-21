// similar to tradtional java

class Product{
    constructor(name, price){
        this.name = name;
        this. price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
}

const product = new Product("Shirt", 19.99);
product.displayProduct();

// inheritance using keyword extends like in traditional java

// can also user super keyword 