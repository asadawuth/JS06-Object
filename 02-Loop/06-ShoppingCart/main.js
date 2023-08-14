let name = prompt("Enter Product");
let quantity = +prompt("Enter Quantity");
let price = Number(prompt("Enter Price"));
let discount = prompt('Enter Discount') * 1;

/*const product = {
    name : name,
    quantity : quantity,
    price : price,
    discount : discount
}*/

//เมื่อค่า key ชื่อตรงกับ ตัวแปรที่เก็บValue

const products = {
    name,
    quantity,
    price,
    discount,
};

console.log(products)

/**function calcPrice(price,quantity,discount) {
        let totalPrice = price * quantity * (1-discount);
        return totalPrice
}

let result = calcPrice(product.price, product.quantity, product.discount)*/

function calcPrice(productsObj) {
    let price = productsObj.price
    let quantity = productsObj.quantity
    let discount = productsObj.discount ? productsObj.discount : 0;
      return price * quantity * (1 - discount)
}

let result = calcPrice(products);
console.log(result)