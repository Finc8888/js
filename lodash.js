var arr = [{user:"Ivan",age:23,is_rich:false},{user:"Bob",age:29,is_rich:true},{user:"Lisa",age:20,is_rich:true}];
// var regions = [{"Приморский":{messages:[1,2,3]}},{"Калининский":messages:[3,4,5]}];
var users = {user:"Ted",age:27,is_rich:false};
var boolean = [true,5,"qwerty",0,"0",null,undefined,false];
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

//_.chunck
console.log("##############_.chunck###############")
console.log("chunck",_.chunk(arr,2));
console.log("arr",arr);
console.log("##################################")

//_.compact
console.log("##############_.compact###############")
console.log("_.compact",_.compact(arr));
console.log("arr",arr);
console.log("_.compact",_.compact(boolean));
console.log("boolean",boolean);
console.log("##################################")

//_.concat
console.log("##############_.concat###############")
console.log("_.concat",_.concat(arr,boolean));
console.log("arr",arr);
console.log("_.concat",_.concat(boolean,1,[2,3],[[4,5]]));
console.log("boolean",boolean);
console.log("##################################")

//_.difference
console.log("##############_.difference###############")
console.log("_.difference",_.difference([1,2,3,4,5],[1,3,5]));
console.log("arr",arr);
console.log("_.difference",_.difference(boolean,[true,false]));
console.log("boolean",boolean);
console.log("##################################");

//_.differenceBy
console.log("##############_.differenceBy###############")
console.log("_.differenceBy",_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log("arr,Math.floor",[2.1, 1.2], [2.3, 3.4]);
console.log("_.differenceBy, 'x'",_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
console.log("[{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]",[{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]);
console.log("##################################");

//_.differenceWith
console.log("##############_.differenceWith###############")
console.log("_.differenceWith",_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual));
console.log("objects,_.isEqual)",objects);
console.log("##################################");
