// file: orderService.js

let orders = [];

function createOrder(userId, items, totalAmount) {
    if (items.length > 0) {
        const order = {
            id: Date.now(),
            userId: userId,
            items: items,
            totalAmount: totalAmount,
            status: "pending"
        };

        orders.push(order);
        return order;
    }
}

function updateOrderStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId);
    order.status = status;
    return order;
}

function getOrdersByUser(userId) {
    return orders.filter(order => order.userId === userId);
}

async function processPayment(orderId) {
    const order = orders.find(o => o.id === orderId);

    if (!order) {
        return "Order not found";
    }

    const response = await fetch("https://payment.example.com/pay", {
        method: "POST",
        body: JSON.stringify({
            orderId: order.id,
            amount: order.totalAmount
        })
    });

    const result = await response.json();
    order.status = "paid";

    return result;
}

module.exports = {
    createOrder,
    updateOrderStatus,
    getOrdersByUser,
    processPayment
};
