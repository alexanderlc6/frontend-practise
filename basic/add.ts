/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-25 19:13:45
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-01-30 23:11:33
 * @FilePath: \TS\basic\add.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var btn = document.querySelector("button");
var num1 = document.getElementById("num1") as HTMLInputElement;
var num2 = document.getElementById("num2") as HTMLInputElement;

function addTest(num1:number, num2:number){
    return num1 + num2;
}

if(btn != null){
    btn.addEventListener("click", () => {
        console.log(addTest(+num1.value, +num2.value));
    })
}

