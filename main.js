function register() {
    const email = document.querySelector("input[name='email']").value
    const password = document.querySelector("input[name='psw']").value
    const repeatPassword = document.querySelector("input[name='psw-repeat']").value
    if (!validateEmail(email)) {
        alert(" Пожалуйста,введите правильный адрес электронной почты.")
        return
    }

    if (password !== repeatPassword) {
        alert("Пароли не совпадают.")
        return;
    }
    localStorage.setItem(email, password)
    alert("Регистрация прошла успешно!")
    showLoginForm();
}
function loginUser() {
    const loginEmail = document.getElementById("login-email").value
    const loginPassword = document.getElementById("login-psw").value
    const storedPassword = localStorage.getItem(loginEmail)

    if (storedPassword && storedPassword === loginPassword) {
        alert("Авторизация успешна!")
    } else {
        alert("Неправильный адрес электронной почты или пароль.")
    }
}
function showLoginForm() {
    document.getElementById("registration-container").style.display = "none"
    document.getElementById("login-container").style.display = "block"
}
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}
showRegistrationForm()
