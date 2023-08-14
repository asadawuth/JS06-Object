let user = {};
undefined
user.name = "John"
'John'
user.surname = "Doe"
'Doe'
user
{name: 'John', surname: 'Doe'}
user.name = "Matt"
'Matt'
user
{name: 'Matt', surname: 'Doe'}
delete user.name
true
user
{surname: 'Doe'}