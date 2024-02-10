/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-29 20:25:18
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-01-29 20:32:33
 * @FilePath: \TS\basic\object_demo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const person = {
    firstName: 'Alex',
    lastName: 'Lu',
    age: 22
}
//等同于
// const person : {
//     firstName: string,
//     lastName: string,
//     age: number
// }

//笼统定义对象类型Object,无意义,相当于{}
const persont : object = {
    firstName: 'Alex',
    lastName: 'Lu',
    age: 22
}

console.log(person)
console.log(person.lastName)

// console.log(person.nickName)    //仅当persont为any类型时不报错