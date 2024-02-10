interface Order {
    status: number
}

//传统方式--冗余
function processOrder(order: Order){
    if(order.status === OrderStatus.Pending){
        //执行待处理订单的逻辑
    }else if(order.status === 1){
        //执行已发货订单的逻辑
    }else if(order.status === 2){
        //执行已完成订单的逻辑
    }else if(order.status === 3){
        //执行已取消状态的订单
    }else{
        //执行未知状态的订单
    }
}

//普通枚举
enum OrderStatus {
    Pending = 0,
    Shipped = 1,
    Completed = 2,
    Cancelled = 3,
    Unknown = 4
}

//表驱动方式,使用Record类型
const orderHandlers: Record<number, (order: Order) => void> = {
    //定义映射和动作
    [OrderStatus.Pending]: function (order) {
        //执行待处理订单的逻辑
    },
    [OrderStatus.Shipped]: function (order) {
        //执行已发货订单的逻辑
    },
    //...
}

function processOrderNew(order: Order){
    const handler = orderHandlers[order.status] || orderHandlers[OrderStatus.Unknown];
    handler(order);
}

enum Obj1 {
    a,
    b = Obj1.a,
    c = Math.random(),
    d = 1+2,
    // e = () => false      //ERROR 不可以
}

//常量枚举
const enum ConstOrderStatus {
    Pending,
    Shipped,
    Completed,
    Cancelled,
    Unknown
}
console.log(ConstOrderStatus.Pending)
// ConstOrderStatus.Cancelled = 4; //ERROR 枚举是只读类型的
// OrderStatus.Cancelled === ConstOrderStatus.Cancelled    //ERROR 不可比较
// ConstOrderStatus.Pending === ConstOrderStatus.Cancelled    //ERROR 不可比较