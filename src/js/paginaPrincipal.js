
let carritoCount = 0;


let carrito = JSON.parse(localStorage.getItem('carrito')) || {};


function actualizarCarrito() {
    const carritoBtn = document.getElementById('carrito-btn');
    carritoCount = Object.values(carrito).reduce((acc, cantidad) => acc + cantidad, 0); 
    if (carritoCount === 0) {
        carritoBtn.textContent = 'CARRITO'; 
    } else {
        carritoBtn.textContent = carritoCount;
    }
}

function manejarCarrito(event) {
    const productButton = event.target;

    if (productButton && productButton.matches('button.add-to-cart')) {
        const productName = productButton.textContent; 

       
        if (!carrito[productName]) {
            carrito[productName] = 1;
        } else {
            carrito[productName]++; 
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarCarrito();
    }
}

document.getElementById('carrito-btn').addEventListener('click', function() {
    window.location.href = 'checkOut.html';
});

document.addEventListener('DOMContentLoaded', function() {
    actualizarCarrito();
});

document.addEventListener('click', manejarCarrito);
