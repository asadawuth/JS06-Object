const multiplyNumeric = (obj,num) => {
    for(let key in obj) {
        let value = obj[key]
        if (typeof value === 'number') {

            obj[key] *= num;
        }
    }
  };

  let menu = {
    width:200,
    height:300,
    title: 'My menu',
  };

multiplyNumeric(menu,3);
console.log(menu)


