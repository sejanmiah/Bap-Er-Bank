document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
        const accNumber = document.getElementById('acc_number').value;
        const acc_password= document.getElementById('acc_password').value;

        if(accNumber.length === 10){
            if(parseInt(acc_password)=== 1234){
                window.location.href='./main.html'
            }
            else{
                alert('Account password thik nai')
            }
        }
        else{
            alert('Invalid Account Number')
        }
})