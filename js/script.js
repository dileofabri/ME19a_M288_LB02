function getBalance() {
    /* var elMsg = document.getElementById('result');
    var elAddress = document.getElementById('public-address');
    if (elAddress.value.length < 26) {
        elMsg.textContent = 'Wrong!';
    } else {
        elMsg.textContent = '';
    } */
    var myJSON = {"final_balance":""};
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name;
}