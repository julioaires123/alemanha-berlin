function atualizarRelogio() {
    let rel = document.getElementById('relogio01');
    let data = new Date();

    // Converter para UTC+4 corretamente
    let utcMais4 = new Date(data.getTime() + (4 * 60 * 60 * 1000));

    let h = utcMais4.getUTCHours();
    let m = utcMais4.getUTCMinutes();
    let s = utcMais4.getUTCSeconds();

    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    
    rel.innerHTML = `${h}:${m}:${s}`;
}

// Atualizar relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Atualizar data corretamente para UTC+4
function exibirDataAtualizada() {
    let meses = [
        "Januar", "Februar", "März", "April", "Mai", "Juni", 
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    
    let semanas = [
        "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
    ];

    let data = new Date();
    let utcMais4 = new Date(data.getTime() + (4 * 60 * 60 * 1000));

    let diasem = utcMais4.getUTCDay();
    let dia = utcMais4.getUTCDate();
    let mes = utcMais4.getUTCMonth();
    let ano = utcMais4.getUTCFullYear();

    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia}. ${meses[mes]} ${ano}`;
}

// Função que verifica se chegou 00:00:00 UTC+4
function verificarMudancaDeDia() {
    let data = new Date();
    let utcMais4 = new Date(data.getTime() + (4 * 60 * 60 * 1000));

    let horas = utcMais4.getUTCHours();
    let minutos = utcMais4.getUTCMinutes();
    let segundos = utcMais4.getUTCSeconds();

    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }

    setTimeout(verificarMudancaDeDia, 1000);
}

// Inicializar
exibirDataAtualizada();
verificarMudancaDeDia();
