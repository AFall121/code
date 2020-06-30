fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        const table = document.createElement('table')
        table.innerHTML = `
        <thead>
            <tr><td>key</td><td>value</td></tr>
        </thead>
        <tbody>
        </tbody>`
        table.className = 'dataTable'
        const tbody = table.querySelector('tbody')
        document.body.insertAdjacentElement('beforebegin',table)
        for (const key in response) {
            // const h2 = document.createElement('h2')
            // h2.innerHTML =  `key:${key}     value:${response[key]}`
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${key}</td>
                <td>${response[key]}</td>`
            console.log(tr)
            tbody.insertAdjacentElement('beforeend',tr)
        }
    })