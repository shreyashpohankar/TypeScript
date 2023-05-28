console.log('here is a ts file1');
console.log('here is a ts file2');


const funct =() => {
   let a:number=12;

    //  a=13;
     const b:string='10';

     const add:string = a+b;

    console.log(add);

    return add;

}
//const returnAdd: string =funct();
//console.log('returnAdd',returnAdd)

   const addFun =(a:number,b:number) => a+b;
   const addFunReturn = addFun(10,4);
  console.log(addFunReturn)
