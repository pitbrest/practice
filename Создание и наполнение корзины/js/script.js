window.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const prodBtns = document.querySelectorAll("button");
    const openCartBtn = document.querySelector(".open");

    function createCart() {
        const cart = document.createElement("div");
        const field = document.createElement("div");
        const heading = document.createElement("h2");
        const closeCartBtn = document.createElement("button");

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeCartBtn.classList.add('close');
        closeCartBtn.textContent = 'Закрыть';
        heading.textContent = 'В вашей корзине : ';
        
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeCartBtn);
        document.body.appendChild(cart);
    }
    createCart();

    const field = document.querySelector('.cart-field');    
    const cart = document.querySelector('.cart');
    const closeCartBtn = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }

    openCartBtn.addEventListener('click', () => {
        openCart();
    })
    closeCartBtn.addEventListener('click', () => {
        closeCart();
    })

    prodBtns.forEach((item, index) => {
        item.addEventListener('click', () => {
            let cartItem = products[index].cloneNode(true);
            let cartItemBtn = cartItem.querySelector('button');
            cartItemBtn.remove();

            field.appendChild(cartItem);
            products[index].remove();            
        })
    })
});
