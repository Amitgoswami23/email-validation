const btnSubmit = () => {
    const InputField = document.getElementById('ChackEmail')
    const inputValue = InputField.value 
    

    var pattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
    if(pattern.test(inputValue)){
        document.getElementById('allMessage').innerText = `Hurray your Email is correct`;
    }else{
        document.getElementById('allMessage').innerText = `Your Email pattern is not correct. please try again.`
    }
}