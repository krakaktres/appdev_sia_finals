// script.js

let selectedProducts = [];

function addToOrder(productName, price) {
    const orderList = document.getElementById("order-list");

    const listItem = document.createElement("li");
    listItem.textContent = `${productName} - $${price}`;
    orderList.appendChild(listItem);

    selectedProducts.push({ name: productName, price: price });
}

function checkout() {
    console.log("Selected Products:", selectedProducts);

    const orderList = document.getElementById("order-list");
    orderList.innerHTML = "";
    selectedProducts = [];
}

// Get all elements with the class "dashboard-card"
const productCards = document.querySelectorAll(".dashboard-card");

// Add a click event listener to each product card
productCards.forEach(card => {
    card.addEventListener("click", () => {
        // Get product details from the clicked card
        const productName = card.querySelector(".card-details h4").textContent;
        const price = parseFloat(card.querySelector(".card-details span").textContent.slice(1)); // Extract and convert the price to a number

        // Add the product to the order dashboard
        addToOrder(productName, price);
    });
});
// ... (your existing JavaScript)

function addToOrder(productName, price) {
    const orderList = document.getElementById("order-list");
    const existingItem = findExistingItem(productName);

    if (existingItem) {
        // If the product already exists in the order, increment the quantity
        existingItem.quantity++;
        updateOrderList();
    } else {
        // If the product is not in the order, add a new item
        const newItem = { name: productName, price: price, quantity: 1 };
        selectedProducts.push(newItem);
        updateOrderList();
    }

    // Show a success notification
    showNotification(`${productName} added to cart`);
}

function findExistingItem(productName) {
    // Find the item in the selectedProducts array by name
    return selectedProducts.find(item => item.name === productName);
}

function updateOrderList() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = ""; // Clear the existing list

    // Populate the order list with updated items
    selectedProducts.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price} x${item.quantity}`;
        orderList.appendChild(listItem);
    });
}

// ... (your existing JavaScript)
