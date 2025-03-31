setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    let options = { timeZone: 'Europe/Berlin', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let horaFormatada = new Intl.DateTimeFormat('de-DE', options).format(data);
    rel.innerHTML = horaFormatada;
}, 1000);

// Dia, mês e ano em alemão
function exibirDataAtualizada() {
    let meses = [
        "Januar", "Februar", "März", "April", "Mai", "Juni", 
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    
    let semanas = [
        "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" ,  "Sonntag"
    ];

    let data = new Date();
    let options = { timeZone: 'Europe/Berlin', day: '2-digit', month: '2-digit', year: 'numeric' };
    let dataFormatada = new Intl.DateTimeFormat('de-DE', options).format(data);
    
    let partes = dataFormatada.split('.');
    let dia = partes[0].trim();
    let mes = meses[parseInt(partes[1]) - 1];
    let ano = partes[2].trim();
    let diaSemana = semanas[data.getDay()];

    document.getElementById("date").innerHTML = `${diaSemana}, ${dia}. ${mes} ${ano}`;
}

// Atualiza a data a cada segundo
function atualizarData() {
    let data = new Date();
    let options = { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    let horaFormatada = new Intl.DateTimeFormat('de-DE', options).format(data);

    if (horaFormatada === "00:00:00") {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000);
}

exibirDataAtualizada();
atualizarData();
