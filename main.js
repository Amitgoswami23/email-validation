
function btnSubmit(){
    var emailCheck = document.getElementById('ChackEmail').value;
    var pattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/

    if(pattern.test(emailCheck)){
        document.getElementById('allMessage').innerHTML=`Hurray Your email id is correct`
    }else{
        document.getElementById('allMessage').innerHTML=`Your email id is not correct. Pleae Try again.`;
        return false;
    }
}
