var _a;
//传统方式--冗余
function processOrder(order) {
    if (order.status === OrderStatus.Pending) {
        //执行待处理订单的逻辑
    }
    else if (order.status === 1) {
        //执行已发货订单的逻辑
    }
    else if (order.status === 2) {
        //执行已完成订单的逻辑
    }
    else if (order.status === 3) {
        //执行已取消状态的订单
    }
    else {
        //执行未知状态的订单
    }
}
//普通枚举
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Completed"] = 2] = "Completed";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
    OrderStatus[OrderStatus["Unknown"] = 4] = "Unknown";
})(OrderStatus || (OrderStatus = {}));
//表驱动方式,使用Record类型
var orderHandlers = (_a = {},
    //定义映射和动作
    _a[OrderStatus.Pending] = function (order) {
        //执行待处理订单的逻辑
    },
    _a[OrderStatus.Shipped] = function (order) {
        //执行已发货订单的逻辑
    },
    _a);
function processOrderNew(order) {
    var handler = orderHandlers[order.status] || orderHandlers[OrderStatus.Unknown];
    handler(order);
}
var Obj1;
(function (Obj1) {
    Obj1[Obj1["a"] = 0] = "a";
    Obj1[Obj1["b"] = 0] = "b";
    Obj1[Obj1["c"] = Math.random()] = "c";
    Obj1[Obj1["d"] = 3] = "d";
    // e = () => false      //ERROR 不可以
})(Obj1 || (Obj1 = {}));
console.log(0 /* ConstOrderStatus.Pending */);
