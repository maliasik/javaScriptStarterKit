function addToCart(productName, quantity) {
  console.log("Sepete Eklendi: " + productName + " Adet: " + quantity);
}

addToCart("Elma", 5);

let sayHello = () => {
  console.log("Hello World!");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello World 2");
};

sayHello2();

function addToCart2(productName, quantity, unitPrice) {}

addToCart2("Elma", 3, 10);
addToCart2("Armut", 5, 6);

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

function addToCart3(product) {
  console.log("Ürün: " + product.productName);
  console.log("Adet: " + product.quantity);
  console.log("Fiyat: " + product.unitPrice);
}

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);

let sayi1 = 10;
let sayi2 = 15;
sayi1 = sayi2;
sayi2 = 20;
console.log(sayi1);

function addToCart4(x) {
  console.log(x);
}

let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];

addToCart4(products);
