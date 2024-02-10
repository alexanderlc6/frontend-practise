/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-02-02 16:36:25
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-02-02 16:43:12
 * @FilePath: \TS\basic\demo_es.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`

function passthru(literals, ...values){
    let output = "";
    let index;

    for(index = 0;index < values.length; index++){
        output += literals[index] + values[index];
    }

    output += literals[index];
    return output;
}

console.log(msg)