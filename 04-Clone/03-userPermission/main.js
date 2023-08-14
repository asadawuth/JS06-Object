const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate2: true };
const permission3 = { canCreate: false, canDelete2: true };
const permission4 = { canView2: true };

const permissions = Object.assign(permission1,permission2,permission3,permission4)

/*permissions
{canView: false, canDelete: false, canUpdate: true, canCreate2: true, canCreate: false, …}
canCreate
: 
false
canCreate2
: 
true
canDelete
: 
false
canDelete2
: 
true
canUpdate
: 
true
canView
: 
false
canView2
: 
true
[[Prototype]]
: 
Object
*/