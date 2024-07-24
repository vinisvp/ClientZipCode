$(document).ready(function(){
    $("#inputZipCode").mask("00000-000");
})

function fillTheForm(address){
    document.getElementById("inputAddress").value =  address.logradouro;
    document.getElementById("inputDistrict").value = address.bairro;
    document.getElementById("inputCity").value =     address.localidade;
    document.getElementById("inputState").value =    address.uf;
}

function disableNumber(option){
    $("#inputNum").prop("disabled", option);
}

function showZipCode(){
    var zip = document.getElementById("inputZipCode").value;
    var url = `https://viacep.com.br/ws/${zip}/json/`;
    
    $.getJSON(url, (address) => {
        fillTheForm(address);
        disableNumber(false);
    });
}
