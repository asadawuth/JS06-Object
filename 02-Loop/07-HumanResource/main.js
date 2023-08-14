const employees = {
   john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
   peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
   mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
   sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
 };
 
 let name = prompt("Name")
 
 if (name === "john" || name === "peter" || name === "mike" || name === "sarah" ) {
     console.log(`name : ${name}, salary : ${employees.john.salary}, address : ${employees.john.address.district}, ${employees.john.address.province}` )
 } else {
    console.log("Not Found")
 }


