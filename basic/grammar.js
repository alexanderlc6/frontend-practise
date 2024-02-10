/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-29 17:53:26
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-02-01 00:55:29
 * @FilePath: \TS\basic\grammar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var number1 = 5;
var number2 = 2;
var number3 = 3;
function doSth() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log("finally i = ", i)
}
//doSth();
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(number1, number2));
var isTrue = true;
// isTrue = "true";
var nu = null;
var unDef = undefined;
console.log(nu === unDef); //false
var sy1 = Symbol();
var sy2 = Symbol();
console.log('symbol', sy1 === sy2);
// const bg1: bigint = 122112222223222333n;    //ES2020+支持
var bg2 = BigInt(122112222223222333);
var total = 0;
var firstName = "Alex";
var str = "Name: ".concat(firstName);
//数组
var list1 = [1, 2, 3, 4, 5];
var lstString = ['a', 'b', 'c'];
var list2 = [11, 22, 33, 'ab'];
var list3 = [1, 2, 3, 4];
var list4 = [1, "ddd"];
var list5 = [1, "aa", true];
//Tuple类型
var person1 = [1, "Alex", true];
// person1[0] = "ddd"
// person1[1] = 1
// person1[2] = 122
// person1.push(3)  //ERROR 这是个bug(不能push)
//不指定类型时即默认为Union类型
var person2 = [1, "Alex"];
person2[0] = "abcd";
person2[1] = 333;
person2[2] = 44;
//Union联合类型
var union;
union = 2;
union = "aac";
// union = true     //ERROR
var union2;
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
var mergeNumber = merge(2, 5, "as-number");
var mergeNumber2 = merge(2, 5, "as-string");
var mergeString = merge("hello", "Alex", "as-string");
console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
//字面量类型(leteral)
var union3;
union3 = 1;
// union3 = 4
var literal;
//枚举类型(Enum)
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 10] = "green";
    Color[Color["blue"] = 1] = "blue";
    Color["grey"] = "GRY";
})(Color || (Color = {}));
var crBlue = Color.blue;
console.log(crBlue);
var crGrey = Color.grey;
console.log(crGrey);
//any和unknown类型,若未声明则默认为any类型
//let randomValue: any = 66   //有安全隐患
var x;
x = 1;
x = 'abc';
var randomValue = 66; //安全
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
//never类型,永远不会有返回值(因为执行中截断了)
function throwError(msg, errCode) {
    throw {
        msg: msg,
        errCode: errCode
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
var a = {
    x: 'aa',
    y: 'bb'
    // z: 12   //不存在类型中的成员不能赋值
};
console.log(a);
var func1 = function () { return false; };
var func3 = function () { return true; };
function func2(params) {
    return false;
}
//对象-Object定义
var obj = {
    a: 1,
    b: 2
};
var obj1 = {
    a: '1',
    b: '2'
};
//void类型:没有任何返回值
var v = function () { };
