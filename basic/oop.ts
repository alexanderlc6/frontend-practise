/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-29 20:32:42
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-01-30 19:28:20
 * @FilePath: \TS\basic\oop.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Point } from "./point";
//Interface, Class
//ES6 Normal
// let drawPoint = (x, y) => {
//     console.log({x, y})
// }

//TS usage
// let drawPoint = (point : Point) => {
//     console.log({x: point.x, y: point.y})
// }

// drawPoint({x:102, y:19});
// // drawPoint({x:"Alex", y:"Mr Lu"});
// // drawPoint({weather: "晴", temperature: "6oC"})

// let getDistances = (a: Point, b: Point) => {
//     //...
// }

//Test demo
const point1 = new Point(2)
// point.x = 2
// point.y = 5
point1.drawPoint()

//对象object、类class、实例instance

//Access Modifier访问修饰符
const point2 = new Point(3,9)
// point2.x = 30
// point2.y = 10
point2.setX(10)
// point2.setX(-8)
point2.setY(20)

//简便方式
console.log(point2.X)

//泛型Generics
let list1: number[] = [1,2,3,4]
let list2: Array<string> = ["aa", "bb"]

let lastInArray =  <T>(arr : Array<T>) => {
    return arr[arr.length - 1]
}

const l1 = lastInArray([1,2,3,4]);
const l2 = lastInArray(["a","b","c"])
const l3 = lastInArray<string | number>(["a","b","c"])

//默认类型后(例如Y = number),调用时可以省略
let makeTuple = <T, Y = number>(x: T, y: Y) => [x,y]
const v1 = makeTuple(1, "one")
const v2 = makeTuple<boolean>(true, 2)
