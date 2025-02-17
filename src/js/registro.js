document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registro')
  const nombre = document.getElementById('nombre')
  const apellido = document.getElementById('apellido')
  const email = document.getElementById('email')
  const area = document.getElementById('area')
  const celular = document.getElementById('celular')
  const contrasena1 = document.getElementById('contrasena1')
  const contrasena2 = document.getElementById('contrasena2')
  const mode = document.getElementById('mode')


  function validateName (name) {
    const regex = /^[a-zA-Z\s]+$/
    return regex.test(name.trim())
  }

  function validateEmail (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email.trim())
  }
  function validatePhone (phone) {
    const regex = /^\d{2,10}$/
    return regex.test(phone.trim())
  }

  function validatePassword (password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regex.test(password.trim())
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!validateName(nombre.value)) {
      window.alert('El nombre no es válido. Solo se permiten letras.')
      return
    }

    if (!validateName(apellido.value)) {
      window.alert('El apellido no es válido. Solo se permiten letras.')
      return
    }

    if (!validateEmail(email.value)) {
      window.alert('El email no tiene un formato válido.')
      return
    }

    if (!validatePhone(area.value)) {
      window.alert('El código de área debe contener solo números y tener entre 2 y 4 dígitos.')
      return
    }

    if (!validatePhone(celular.value)) {
      window.alert('El número de celular debe contener solo números y tener entre 6 y 10 dígitos.')
      return
    }

    if (!validatePassword(contrasena1.value)) {
      window.alert('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula, y un número.')
      return
    }

    if (contrasena1.value !== contrasena2.value) {
      window.alert('Las contraseñas no coinciden.')
      return
    }
    window.alert('Registro exitoso.')
    form.submit()
  })
})
