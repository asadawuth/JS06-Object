//DataTypes
// - Primitive : Boolean, Number,String etc....
// - Non-Primitive : Object

//{} == stand for Object / Scope
// {} stand for Object / Scope





/*
let user = {
    firstName : 'Asadawuth',
    lastName  : 'Paijit',
    age : 31,
    isAdmin : true,
    'like human' : true,
};
*/
/*
console.log(user)
console.log(user.firstName)
console.log(user.firstName === 'Asadawuth')
console.log(user.age)
console.log(user.isAdmin)
console.log(user.salary)*/



/*
user.firstName = "Asadawuths";
user.age = 25
user.age += 2;
user.age++;

user.address = "bankkok";
//console.log(user.age);

delete user.isAdmin
console.log(user)

const employee = {
    fullName : "Asadawuth",
    salary : 500_000,
    address : {
        district : "Phaya Thai",
        province : "Bangkok",
        country : "Thailand",
    },
}

employee.address.province = "Nuthaburian"
 console.log(employee.address.district.ville);
// Dot ใช้กับ OฺbJECT เท่านั้น  !! <obj><key>
//ห้ามใช้กับ undefined <undefind><undefind>.<key>
//วิธีแก้ optional chaining => <undefind>?.<key>
 */

/*
const product = {
    id: 227,
    name : 'IPHONE',
    price : 50_000,
};
// วิธีการตรวจสอบ key เป็น boolean หมด
console.log(product.discount); //undefined
console.log('name' in product);
console.log('discount' in product);
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));
*/


const product = {
    id : 227,
    name : 'IPHONE',
    price : 50_000,
};

console.log(product.id);
console.log(product["id"]);

//console.log(product['is mobile']); crash

product['name'] = "IPHONE-15";

let aaaaa = 'name';
console.log(product['name']);
console.log(product[aaaaa]);
console.log(product.aaaaa);// product.aaaaa = product['aaaaa'] === undefined

