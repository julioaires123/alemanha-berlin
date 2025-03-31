setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setHours(data.getHours() + 4); // Ajuste para UTC+4 (Horário de Verão de Berlim)
    data.setSeconds(data.getSeconds() + 19);
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    
    rel.innerHTML = `${h}:${m}:${s}`;
}, 1000);

// Dia, mês e ano em alemão
function exibirDataAtualizada() {
    let meses = [
        "Januar", "Februar", "März", "April", "Mai", "Juni", 
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    
    let semanas = [
        "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
    ];

    let data = new Date();
    data.setHours(data.getHours() + 4); // Ajuste para UTC+4 (Horário de Verão de Berlim)
    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia}. ${meses[mes]} ${ano}`;
}

// Atualiza a data a cada segundo
function atualizarData() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
        let proximaAtualizacao = new Date();
        proximaAtualizacao.setDate(proximaAtualizacao.getDate() + 1);     
        proximaAtualizacao.setHours(0);
        proximaAtualizacao.setMinutes(0);
        proximaAtualizacao.setSeconds(0);
        let tempoAteProximaAtualizacao = proximaAtualizacao.getTime() - data.getTime();
        setTimeout(atualizarData, tempoAteProximaAtualizacao);
    } else {
        setTimeout(atualizarData, 1000);
    }
}

exibirDataAtualizada();
atualizarData();
