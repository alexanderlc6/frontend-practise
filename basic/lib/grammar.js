"use strict";
/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-29 17:53:26
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-01-30 22:58:39
 * @FilePath: \TS\basic\grammar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var number1 = 5;
let number2 = 2;
const number3 = 3;
function doSth() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log("finally i = ", i)
}
//doSth();
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(number1, number2));
let isTrue = true;
// isTrue = "true";
let total = 0;
let firstName = "Alex";
let str = `Name: ${firstName}`;
//数组
let list1 = [1, 2, 3, 4, 5];
let list2 = [11, 22, 33];
let list3 = [1, 2, 3, 4];
let list4 = [1, "ddd"];
let list5 = [1, "aa", true];
//Tuple类型
let person1 = [1, "Alex"];
// person1[0] = "ddd"
// person1[1] = 1
// person1[2] = 122
// person1.push(3)  //ERROR 这是个bug(不能push)
//不指定类型时即默认为Union类型
let person2 = [1, "Alex"];
person2[0] = "abcd";
person2[1] = 333;
person2[2] = 44;
//Union联合类型
let union;
union = 2;
union = "aac";
// union = true     //ERROR
let union2;
function merge(n1, n2, resultType) {
    if (resultType === "as-string") {
        return n1.toString() + n2.toString();
    }
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}
let mergeNumber = merge(2, 5, "as-number");
let mergeNumber2 = merge(2, 5, "as-string");
let mergeString = merge("hello", "Alex", "as-string");
console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
//字面量类型(leteral)
let union3;
union3 = 1;
// union3 = 4
let literal;
//枚举类型(Enum)
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 10] = "green";
    Color[Color["blue"] = 1] = "blue";
    Color["grey"] = "GRY";
})(Color || (Color = {}));
let crBlue = Color.blue;
console.log(crBlue);
let crGrey = Color.grey;
console.log(crGrey);
//any和unknown类型
// let randomValue : any = 66   //有安全隐患
let randomValue = 66; //安全
randomValue = true;
randomValue = "abcde";
randomValue = {};
if (typeof randomValue == 'function') {
    randomValue();
}
else if (typeof randomValue == 'string') {
    randomValue.toUpperCase();
}
//void,undefined,never类型
function printResult() {
    console.log("test here");
    return;
}
console.log("hello", printResult());
function throwError(msg, errCode) {
    throw {
        msg,
        errCode
    };
}
// 手动抛出错误
// throwError("Error occured", 9999)
function whileLoop() {
    while (true) {
        console.log("lol~~~");
    }
}
//定义普通类型
const a = {
    x: 'aa',
    y: 'bb'
    // z: 12   //不存在类型中的成员不能赋值
};
console.log(a);
