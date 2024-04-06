// let score = "23asd";
// let score1 = true;

// console.log(typeof score)
// console.log(typeof (score))

// let valueinnumber = Number (score1)
// console.log(typeof valueinnumber)
// console.log(valueinnumber)
// console.log(typeof score1)

// /*
// "12"= 12
// "12ab"= NaN
// TRUE = 1; false = 0

// */
// // let isloggedin = ""
// // let booleanisloggedin = Boolean(isloggedin)
// // console.log(booleanisloggedin)

// // 1 =true; 0 = false
// // "" = false
// // "shikha"= true
// // let somenumber = 23
// //  let string = String(somenumber)
// //  console.log(string)
// //  console.log(typeof string)


// //  ________________operations_______________________________
// // let value = 3
// // let negativevalue = -value
// // console.log(negativevalue)
// // console.log(2+2)
// // console.log(2-2)
// // console.log(2*2)
// // console.log(2/2)
// // console.log(2%2)
// // console.log(2**2)

// // let a = "hii"
// // let b = "hello"
// // let c = a+b
// // console.log(c)

// // console.log("1"+1)
// // console.log(1 +"1")
// // console.log("1"+1+1)
// // console.log(1 + "1"+ 1)
// // console.log(1 + 1+ "1")

// // console.log(+true)
// // console.log(+"")


// // let a, b, c
// // a=b=c=2+3
// // let count = 100
// // ++count;
// // console.log(count)

// // console.log(2>1)
// // console.log(2>=1)
// // console.log(2<1)
// // console.log(2==1)
// // console.log(2!=1)
// // console.log(2===1)


// // console.log("3"<1)
// // console.log("03">1)
// // console.log(null>1)
// // console.log(null>0)
// // console.log(null<0)
// // console.log(null>=0)
// // console.log(null==0)
// // console.log(undefined==0)
// /*
// === iska mean ye sirf value ko hi ni ye data type bhi check karta h*/
// // console.log("2"===2);

// let a, b, c
// a=b=c=2+3

// let a, b, c
// a = b = c = 2+3
// console.log(a);
/*
// _________________primitive data type
Number, String, Boolean, Symbol, Undefined, null, BigInt
____________________nonprimitive data type
Array, objects, function
*/
// symbol
const a= Symbol('12')
const b = Symbol('12')
console.log(a=== b)

// bigInt
const big = 2345678976543245n
console.log(typeof big)
// array
const array = [2,3,4,5,]
console.log(array)

// object
const obj ={
    name :"shikha",
    age:12
}

// function
const myfun = function(){
    console.log("hii")
}
console.log(typeof myfun)


// stack (primitive) or heap(non-primitive)


// let tomar = "hiii"
// let shikha = tomar
// shikha = "girl"
// let hii = shikha
// hii ="hello"
// console.log(tomar)
// console.log(shikha)
// console.log(hii)


// heap
let hii = {
    name:"shikha",
    age:12
}   
let hello= hii
hello.name = "shikha@gmail.com"
hello.age =123
console.log(hello.name , hello.age)
// console.log(hii.name)
// console.log(hello.age)
// console.log(hii.age)