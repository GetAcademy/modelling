function buy(productId){
    model.shoppingCart.push(
        { productId: productId, count: 1, },
    );
    model.currentPage = 'shoppingCartPage';
    updateView();
}