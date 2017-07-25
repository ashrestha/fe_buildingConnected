/* A get request to get all the data */
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    if(xhr.status === 200){
        responseObject = JSON.parse(xhr.responseText);

        var mainContent = '';
        for (var i =0; i < responseObject.results.length; i ++){
            mainContent += '<tr> <td>';
            mainContent += '<img src="'+ responseObject.results[i].avatarUrl + '" ';
            mainContent += 'alt="' + responseObject.results[i].name + '" />';
            mainContent += '</td><td class="compName">';
            mainContent += '<p>' +responseObject.results[i].name + ' </p>'; 
            mainContent += '</td></tr>'; 
        }
        document.getElementById('company').innerHTML = mainContent;
    }
};
xhr.open('GET', 'http://localhost:3000/api/companies')
xhr.send(null);