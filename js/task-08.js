
const formEl = document.querySelector("form.login-form")

formEl.addEventListener("submit", onSubmitLogin) 

function onSubmitLogin(event){
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const result = {}
    let fail = false
    formData.forEach((value, key) => {
       if(!value) {
            fail = true
       }else{
            result[key] = value
       }
    })

    if(fail){
        alert("Не всі поля заповнені. Всі поля повинні бути заповнені")      
    }else{
        console.log(result)
        event.currentTarget.reset()
    }
}