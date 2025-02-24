document.getElementById('add_money_box').addEventListener('click', function() {
    document.getElementById('cashout_money_section').style.display = "none";
    document.getElementById('add_money_section').style.display= "block";
})

document.getElementById('cashout_money_box').addEventListener('click', function() {
    document.getElementById('add_money_section').style.display = "none";
    document.getElementById('cashout_money_section').style.display= "block";
})