// function boasVindas(nome){
//     document.write(`<h1>Ola ${nome}</h1>`);
// }

// boasVindas('Gleidson');
// boasVindas('Marcio');
// boasVindas('Alessandro');
// boasVindas('Sarah');

// function somar(numero1, numero2){
//     return numero1 + numero2;
// }

// somar(2,3);
// somar(10,56);

// document.write(`<h1>O resultado é ${somar(1, 1)}</h1>`);


function preencherSelects(tag, limite){
    for(let i = 1; i < limite; i++){
        tag.innerHTML += `<option>${i}</option>`;
    }
}

preencherSelects(dia, 32)
preencherSelects(mes, 13)