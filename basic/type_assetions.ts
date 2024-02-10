/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-29 20:10:27
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-01-30 23:08:12
 * @FilePath: \TS\basic\type_assetions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//类型适配/断言 Type Assertions

//默认不能识别到string类型
let msg : any;
msg = "abc"
// msg.endWith("c") //ERROR

//方法1:使用断言/强制转换
let aa = (<string>msg).endsWith("c")

//方法2:使用as转换
let aa2 = (msg as string).endsWith("c")


//函数类型
//ES6中
let log = function(msg: string){
    console.log(msg);
}

let log2 = (msg : string) => console.log(msg);
log2("testttt");
// log2(33);   //ERROR
// log2(true);   //ERROR

//添加?符号可在调用时省略传参,则默认是undefined
let log3 = (msg:string, code:number = 0) => {
    console.log(msg, code);
}

// log3("hello", 1)
log3("hello")