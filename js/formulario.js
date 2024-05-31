const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const password = document.getElementById("password")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("advertencia")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let advertencia = ""
    let entrar = false
    let regexNombre = /^[a-zA-Z]+$/
    let regexApellido = /^[a-zA-Z]+$/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        advertencia += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <3){
        advertencia += `El apellido no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        advertencia += `El Email no es valido <br>`
        entrar = true
    }
    if(password.value.length < 8){
        advertencia += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = advertencia
    }else{
        parrafo.innerHTML = "Registro realizado con exito"
        formulario.reset()
    }
})