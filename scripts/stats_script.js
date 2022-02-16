API = async () => {
    try {
        const resp = await fetch('https://imc-sebastian.herokuapp.com/users')
        const json = await resp.json()
        return json
    } catch (error) {
        console.log(error);
    }
}

HTML = async () => {
    const html = document.getElementById('listar');
    let data = await API();
    data.forEach(element => {
        const {genero,edad,peso,altura,imc} = element;
        html.innerHTML+=`
        <tr>
            <td class="element" >${genero}</td>
            <td class="element" >${edad}</td>
            <td class="element" >${peso}</td>
            <td class="element" >${altura}</td>
            <td class="element" >${imc}</td>
        </tr>
        `
    });
}

addEventListener('DOMContentLoaded',HTML())
