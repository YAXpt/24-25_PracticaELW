const APIlink = 'https://pokeapi.co/api/v2';

window.onload = async () => {
    const dataPoke = await getAllPoke();
    console.table(dataPoke);
    let element = document.getElementById('personatges');
    for (let Poke of dataPoke) {
        const newElement = document.createElement('ul');
        newElement.innerHTML = `
        <li>${Poke.name}</li>
        <button onclick="addToFavourite('${Poke.url}')">Favorit</button>`

        element.appendChild(newElement);
    }

}

async function getAllPoke() {
    const resposta = await fetch(`${APIlink}/pokemon`);
    const respostaJSON = await resposta.json();
    console.table(respostaJSON);
    return respostaJSON.results;
}

async function getPokeByName(name) {
    const resposta = await fetch(`${APIlink}/pokemon/${name}`);
    const respostaJSON = await resposta.json();
    console.table(respostaJSON);
    return respostaJSON;
}

async function addToFavourite(url) {
    const resposta = await fetch(`${url}`);
    const respostaJSON = await resposta.json();
    let elementFavorit = document.getElementById(respostaJSON.id);
    if (elementFavorit == null) {
        const element = document.getElementById('favorits');
        const id = 'id' + respostaJSON.id;
        const newElement = document.createElement('ul');
        newElement.id = `${respostaJSON.id}`;
        newElement.innerHTML = `
    <li id=${respostaJSON.name}>${respostaJSON.name}</li>
    <button id=${id} onclick="showInfo('${url}', '${id}')">Mostra Informació</button>
    <button onclick="removeFromFavourite('${respostaJSON.id}')">Eliminar</button>
    `
        element.appendChild(newElement);
    } else
        alert('Aquest pokemon ja està als favorits');

}

async function showInfo(url, id) {
    const resposta = await fetch(`${url}`);
    const respostaJSON = await resposta.json();
    const element = document.getElementById(respostaJSON.name);
    const button = document.getElementById(id);
    button.remove();
    const newElement = document.createElement('ul');
    newElement.id = `${id}`;
    newElement.innerHTML = `
        <li>Alçada: ${respostaJSON.height}</li>
        <li>Pes: ${respostaJSON.weight}</li>`;

    for (let tipus of respostaJSON.types) {
        newElement.innerHTML += `<li>Tipus: ${tipus.type.name}</li>`;
    }

    newElement.innerHTML += `<button onclick="unshowInfo('${url}', '${id}')">Amaga la informació</button>`;

    element.appendChild(newElement);
}

async function unshowInfo(url, id) {
    const info = document.getElementById(id);
    info.remove();
    const resposta = await fetch(`${url}`);
    const respostaJSON = await resposta.json();
    const element = document.getElementById(respostaJSON.name);
    const newElement = document.createElement('ul');
    newElement.innerHTML = `<button id=${id} onclick="showInfo('${url}', '${id}')">Mostra Informació</button>`;
    element.appendChild(newElement);
}

async function removeFromFavourite(id) {
    const element = document.getElementById(id);
    element.remove();
}