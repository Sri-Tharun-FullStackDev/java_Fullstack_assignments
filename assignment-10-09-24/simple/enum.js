var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define the OrderStatus enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
// Function to change the status of an order
function changeOrderStatus(order, newStatus) {
    return __assign(__assign({}, order), { status: newStatus });
}
// Example usage
var myOrder = {
    id: 1,
    status: OrderStatus.Pending
};
console.log('Before status change:', myOrder);
var updatedOrder = changeOrderStatus(myOrder, OrderStatus.Shipped);
console.log('After status change:', updatedOrder);
