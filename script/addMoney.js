document.getElementById('add_money').addEventListener('click', function  (event) {
        event.preventDefault()
        const amount = document.getElementById('amm_number').value;
        const stToNum= parseFloat(amount)
        const pin = document.getElementById('acc_password').value
        const pinToNum= parseInt(pin)

        const mainBalence = document.getElementById('main_balence').innerText;
        const mainBToStr= parseInt(mainBalence)

        if(amount && pin){
            if(pinToNum === 1234){
                const sum= mainBToStr + stToNum;
                document.getElementById('main_balence').innerText= sum;
                document.getElementById('amm_number').value= ''
                document.getElementById('acc_password').value= ''
                document.getElementById('acc_number').value= ''
            }
            else{
                alert("Enter Valid Pin")
            }
        }
        
        // if(pinToNum === 1234) {
        //     const sum= stToNum + mainBToStr;
        //     document.getElementById('main_balence').innerText = sum;
        //     document.getElementById('amm_number').value = '';
        // }
        // else {
        //     console.log('Pin Shotik nah')
        // }
})