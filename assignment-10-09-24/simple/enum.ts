// Define the OrderStatus enum
enum OrderStatus {
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled'
}

// Define a type for an Order
interface Order {
    id: number;
    status: OrderStatus;
}

// Function to change the status of an order
function changeOrderStatus(order: Order, newStatus: OrderStatus): Order {
    return {
        ...order,
        status: newStatus
    };
}

// Example usage
const myOrder: Order = {
    id: 1,
    status: OrderStatus.Pending
};

console.log('Before status change:', myOrder);

const updatedOrder = changeOrderStatus(myOrder, OrderStatus.Shipped);

console.log('After status change:', updatedOrder);
