console.log('here is a ts file1');
console.log('here is a ts file2');
var funct = function () {
    var a = 12;
    //  a=13;
    var b = '10';
    var add = a + b;
    console.log(add);
    return add;
};
//const returnAdd: string =funct();
//console.log('returnAdd',returnAdd)
var addFun = function (a, b) { return a + parseInt(b); };
var addFunReturn = addFun(10, 'shreyash').toString();
console.log(addFunReturn);
