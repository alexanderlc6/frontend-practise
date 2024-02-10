/*
 * @Author: Alex Lu alexanderlc@126.com
 * @Date: 2024-01-30 00:37:36
 * @LastEditors: Alex Lu alexanderlc@126.com
 * @LastEditTime: 2024-01-30 23:08:46
 * @FilePath: \TS\basic\point.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface IPoint {
    //成员默认是public的
    // x: number,
    // y: number,
    drawPoint: () => void;
    getDistances: (p: IPoint) => number;
    // getX: () => number;
    // getY: () => number;
    X: number;
    Y: number;
    setX: (value: number) => void;
    setY: (value: number) => void;
}

export class Point implements IPoint {
    //使用public时则无需手动初始化赋值
    // x: number;
    // y: number;

    constructor(private _x:number, private _y: number = 5){
        // this.x = x;
        // this.y = y;
    }

    drawPoint = () => {
        console.log("x = ", this._x, "y = ", this._y);
    }

    getDistances = (p: IPoint) => {
        //Original
        // return Math.pow(p.getX() - this.x, 2) + Math.pow(p.getY() - this.y, 2)

        //简便方式
        return Math.pow(p.X - this._x, 2) + Math.pow(p.Y - this._y, 2)
    }

    // setX = (value: number) => {
    //简便方式
    setX(value: number){
        if(value < 0){
            throw new Error("X value cannot smaller than 0!")
        }
        this._x = value;
    }

    // getX = () => {
    //简便方式
    get X() {
        return this._x;
    }

    // setY = (value: number) => {
    //简便方式
    setY(value: number){
        if(value < 0){
            throw new Error("Y value cannot smaller than 0!")
        }
        this._y = value;
    }

    // getY = () => {
    //简便方式
    get Y(){
        return this._y;
    }
}
