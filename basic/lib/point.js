"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    //使用public时则无需手动初始化赋值
    // x: number;
    // y: number;
    constructor(_x, _y = 5) {
        this._x = _x;
        this._y = _y;
        this.drawPoint = () => {
            console.log("x = ", this._x, "y = ", this._y);
        };
        this.getDistances = (p) => {
            //Original
            // return Math.pow(p.getX() - this.x, 2) + Math.pow(p.getY() - this.y, 2)
            //简便方式
            return Math.pow(p.X - this._x, 2) + Math.pow(p.Y - this._y, 2);
        };
        // this.x = x;
        // this.y = y;
    }
    // setX = (value: number) => {
    //简便方式
    setX(value) {
        if (value < 0) {
            throw new Error("X value cannot smaller than 0!");
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
    setY(value) {
        if (value < 0) {
            throw new Error("Y value cannot smaller than 0!");
        }
        this._y = value;
    }
    // getY = () => {
    //简便方式
    get Y() {
        return this._y;
    }
}
exports.Point = Point;
