// cep.onkeyup = () => {
//     if(cep.value.length == 8){
//         fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
//         .then(resposta => resposta.json())
//         .then(resposta2 => {
//             rua.value = resposta2.logradouro;
//             bairro.value = resposta2.bairro;
//             cidade.value = resposta2.localidade;
//             estado.value = resposta2.uf;
//         })
//         .finally(() => {
//             // alert("procedimento concluido")
//         })
//     }
// }


function buscarRegioes(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(res => res.json())
    .then(res => {
        res.map(regiao => {
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
        })
    })
}

buscarRegioes();

function buscarEstados(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados
    `)
    .then(res => res.json())
    .then(res => {
        estados.innerHTML = "";
        res.map(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        })
    })
}

function buscarCidades(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios
    `)
    .then(res => res.json())
    .then(res => {
        cidades.innerHTML = "";
        res.map(cidade => {
            cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
        })
    })
}