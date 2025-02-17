
let carrito = JSON.parse(localStorage.getItem('carrito')) || {};


function actualizarVistaCarrito() {
    const productosCarrito = document.getElementById('productos-carrito');
    productosCarrito.innerHTML = '';

    
    if (Object.keys(carrito).length === 0) {
        productosCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
    
        for (const productName in carrito) {
            const cantidad = carrito[productName];
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-carrito');
            productoDiv.innerHTML = `
                <span>${productName} | Cantidad: ${cantidad}</span>
                <button class="agregar-otro">Agregar otro</button>
                <button class="eliminar-producto">Eliminar</button>
            `;
            productosCarrito.appendChild(productoDiv);
        }
    }
}


function manejarEliminacion(event) {
    if (event.target.classList.contains('eliminar-producto')) {
        const productName = event.target.parentElement.querySelector('span').textContent.split('|')[0].trim();

        if (carrito[productName]) {
          
            carrito[productName]--;

            
            if (carrito[productName] === 0) {
                delete carrito[productName];
            }

            
            localStorage.setItem('carrito', JSON.stringify(carrito));

            
            actualizarVistaCarrito();
        }
    }
}


function manejarAgregarOtro(event) {
    if (event.target.classList.contains('agregar-otro')) {
        const productName = event.target.parentElement.querySelector('span').textContent.split('|')[0].trim();

        if (carrito[productName]) {
            carrito[productName]++; 
        } else {
            carrito[productName] = 1; 
        }

        localStorage.setItem('carrito', JSON.stringify(carrito)); 
        actualizarVistaCarrito(); 
    }
}

document.getElementById('volver').addEventListener('click', function() {
    window.location.href = 'paginaPrincipal.html'; 
});

document.getElementById('finalizar-compra').addEventListener('click', function() {
    alert('Compra finalizada!');
});


document.addEventListener('click', function(event) {
    manejarEliminacion(event);
    manejarAgregarOtro(event);
});


actualizarVistaCarrito();
