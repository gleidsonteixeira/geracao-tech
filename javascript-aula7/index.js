// let dia = document.getElementById("dia");
// let dia = document.querySelector("#dia");

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


for(let d = 1; d < 32; d++){
    dia.innerHTML += `<option>${d}</option>`;
}

for(let m = 0; m < 12; m++){
    mes.innerHTML += `<option>${meses[m]}</option>`;
}

for(let a = 2024; a > 1973; a--){
    ano.innerHTML += `<option>${a}</option>`;
}

mes.onchange = () => {
    if(mes.value == "Janeiro" || mes.value == "Março" || mes.value == "Maio" || mes.value == "Julho" || mes.value == "Agosto" || mes.value == "Outubro" || mes.value == "Dezembro"){
        dia.innerHTML = '';
        for(let d = 1; d < 32; d++){
            dia.innerHTML += `<option>${d}</option>`;
        }
    }else if(mes.value == "Abril" || mes.value == "Junho" || mes.value == "Setembro" || mes.value == "Novembro"){
        dia.innerHTML = '';
        for(let d = 1; d < 31; d++){
            dia.innerHTML += `<option>${d}</option>`;
        }
    } else {
        dia.innerHTML = '';
        let bisexto = ano.value % 4 == 0 ? 30 : 29;
        for(let d = 1; d < bisexto; d++){
            dia.innerHTML += `<option>${d}</option>`;
        }
    }
}