const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn1');

btn.addEventListener('click', () => {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue && passwordValue){

        console.log('Login successfull');
        alert('Bienvenido, has iniciado sesión correctamente');
    } else {
        alert('Por favor, ingresa tu correo y contraseña');

    }
    
});

