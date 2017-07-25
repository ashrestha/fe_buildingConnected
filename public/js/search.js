

function callSearch(){
    var q = document.getElementById("search").value;
    var request = new XMLHttpRequest();
    request.open('POST','http://localhost:3000/api/companies?q=' + q, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(q);
}