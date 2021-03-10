function updateView() {
    if (model.currentPage == 'productListingPage') {
        updateViewProductListing();
    }
    else if (model.currentPage == 'shoppingCartPage') {
        updateViewShoppingCart();
    }
}

function updateViewProductListing() {
    let html = '';
    for (let i = 0; i < model.products.length; i++) {
        let product = model.products[i];
        html += `
            <li>
                ${product.name} - ${product.price}kr
                <button onclick="buy(${product.productId})">Kjøp</button>            
            </li>
            
        `;
    }
    document.getElementById('app').innerHTML = `
        <h2>Produkter</h2>
        ${html}
        `;
}

function updateViewShoppingCart() {
    let html = '';
    for (let i = 0; i < model.shoppingCart.length; i++) {
        let orderLine = model.shoppingCart[i];
        let product = getProduct(orderLine.productId);
        html += `
            <li>
                ${product.name} - ${product.price}kr - Antall: ${orderLine.count}
                <button>x</button>            
            </li>
            
        `;
    }
    document.getElementById('app').innerHTML = `
        <h2>Handlekurv</h2>
        <button onclick="model.currentPage='productListingPage'; updateView()">Handle mer</button><br/>
        ${html}
    `;
}

function getProduct(productId) {
    for (let product of model.products) {
        if (product.productId == productId) return product;
    }
    return null;
}