/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-29 17:53:26
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-02-01 00:55:29
 * @FilePath: \TS\basic\grammar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var number1 = 5;
let number2 = 2;
const number3 = 3;

function doSth(){
    for(let i = 0; i<5; i++){
        console.log(i)
    }

    //console.log("finally i = ", i)
}

//doSth();

function add(n1:number, n2:number){
    return n1+n2;
}

console.log(add(number1, number2));

let isTrue:boolean = true;
// isTrue = "true";

const nu: null = null;
const unDef: undefined = undefined;
console.log(nu === unDef)  //false

const sy1: symbol = Symbol();
const sy2: symbol = Symbol();
console.log('symbol', sy1 === sy2);

// const bg1: bigint = 122112222223222333n;    //ES2020+支持
const bg2: bigint = BigInt(122112222223222333);


let total:number = 0;
let firstName:string = "Alex"
let str = `Name: ${firstName}`

//数组
let list1:number[] = [1,2,3,4,5]
let lstString: string[] = ['a','b','c'];
let list2:Array<number | string> = [11,22,33, 'ab']
let list3 = [1,2,3,4]

let list4 = [1, "ddd"]
let list5:any[] = [1, "aa", true]

//Tuple类型
let person1:[number, string, boolean] = [1, "Alex", true]
// person1[0] = "ddd"
// person1[1] = 1
// person1[2] = 122
// person1.push(3)  //ERROR 这是个bug(不能push)

//不指定类型时即默认为Union类型
let person2 = [1, "Alex"]
person2[0] = "abcd"
person2[1] = 333
person2[2] = 44

//Union联合类型
let union : string | number
union = 2
union = "aac"
// union = true     //ERROR
let union2 : number | string | boolean | string[]

function merge(n1:number | string, n2:number | string, resultType: "as-number" | "as-string"){
    if(resultType === "as-string"){
        return n1.toString() + n2.toString()
    }

    if(typeof n1 === "string" || typeof n2 === "string"){
        return n1.toString() + n2.toString()
    }else{
        return n1+n2
    }
}

let mergeNumber = merge(2,5, "as-number")
let mergeNumber2 = merge(2,5, "as-string")
let mergeString = merge("hello", "Alex", "as-string")
console.log(mergeNumber)
console.log(mergeNumber2)
console.log(mergeString)

//字面量类型(leteral)
let union3 : 0 | 1 | 2
union3 = 1
// union3 = 4

let literal : 1 | "2" | true | [1,2,3,4]

//枚举类型(Enum)
enum Color{
    red = 5,
    green = 10,
    blue = 1,
    grey = "GRY"
}

let crBlue = Color.blue
console.log(crBlue)

let crGrey = Color.grey
console.log(crGrey)

//any和unknown类型,若未声明则默认为any类型
//let randomValue: any = 66   //有安全隐患
let x;
x = 1;
x = 'abc';

let randomValue : unknown = 66  //安全
randomValue = true
randomValue = "abcde"
randomValue = {}

if(typeof randomValue == 'function'){
    randomValue()
} else if(typeof randomValue == 'string'){
    randomValue.toUpperCase()
}

//void,undefined,never类型
function printResult() : undefined{
    console.log("test here")
    return
}
console.log("hello", printResult())

//never类型,永远不会有返回值(因为执行中截断了)
function throwError(msg:string, errCode:number) : never{
    throw {
        msg,
        errCode
    }
}

// 手动抛出错误
// throwError("Error occured", 9999)

function whileLoop() : never {
    while(true){
        console.log("lol~~~")
    }
}

type A = {
    x: string,
    y: string
}

//定义普通类型
const a : A = {
    x: 'aa',
    y: 'bb'
    // z: 12   //不存在类型中的成员不能赋值
}

console.log(a)

//函数-Function定义
type Fun = (params: string) => void;
const func1: Fun = () => false;
const func3: Fun = () => true;
function func2(params: string): boolean {
    return false;
}

//对象-Object定义
const obj: object = {
    a: 1,
    b: 2
}

// const obj1: { a: string, b: string} = {
interface Obj { a: string, b: string}
    const obj1: Obj = {
    a: '1',
    b: '2'
}

//void类型:没有任何返回值
const v = (): void => {}

