var clients = [];

$(document).ready(function(){
    $("#inputZipCode").mask("00000-000");
});

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

function addClientTable(client){
    var table = document.getElementById("clientsTable");
    var row = table.insertRow();

    var node = document.createTextNode(client.id);
    row.insertCell().appendChild(node);

    node = document.createTextNode(client.name);
    row.insertCell().appendChild(node);

    node = document.createTextNode(client.address);
    var cell = row.insertCell();
    cell.className = "d-none d-lg-table-cell";
    cell.appendChild(node);

    node = document.createTextNode(client.ZipCode);
    row.insertCell().appendChild(node);

    node = document.createTextNode(client.district);
    cell = row.insertCell();
    cell.className = "d-none d-lg-table-cell";
    cell.appendChild(node);

    node = document.createTextNode(client.city);
    cell = row.insertCell();
    cell.className = "d-none d-lg-table-cell";
    cell.appendChild(node);

    node = document.createTextNode(client.state);
    cell = row.insertCell();
    cell.className = "d-none d-lg-table-cell";
    cell.appendChild(node);
}

function addClient(){
    var fullName = document.getElementById("inputName").value
    + " " +        document.getElementById("inputSurName").value;
    
    var client = {
        id :       clients.length + 1,
        name :     fullName,
        address :  `${document.getElementById("inputAddress").value}, ${document.getElementById("inputNum").value}`,
        ZipCode :  document.getElementById("inputZipCode").value,
        district : document.getElementById("inputDistrict").value,
        city :     document.getElementById("inputCity").value,
        state :    document.getElementById("inputState").value
    }

    clients.push(client);
    addClientTable(client);
    document.getElementById("formClient").reset();
    disableNumber(true);
}
