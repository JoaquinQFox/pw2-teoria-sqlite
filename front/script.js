const tableBody = document.getElementById('actorTableBody');

fetch('./actores')
.then(response => response.json())
.then(data => {
    console.log(data);
    let output = '';

    for (let i = 0; i < 20; i++) {
        output += `<tr><td>${data[i].Name}</td></tr>`
    }

    tableBody.innerHTML = output;
})
.catch(error => console.error(error));