function atualizarRelogio() {
    let rel = document.getElementById('relogio01');
    let data = new Date();

    // Converter para UTC-2 corretamente
    let utcMenos2 = new Date(data.getTime() - (2 * 60 * 60 * 1000));

    let h = utcMenos2.getUTCHours();
    let m = utcMenos2.getUTCMinutes();
    let s = utcMenos2.getUTCSeconds();

    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    
    rel.innerHTML = `${h}:${m}:${s}`;
}

// Atualizar relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Atualizar data corretamente para UTC-2
function exibirDataAtualizada() {
    let meses = [
        "Januar", "Februar", "März", "April", "Mai", "Juni", 
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    
    let semanas = [
        "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
    ];

    let data = new Date();
    let utcMenos2 = new Date(data.getTime() - (2 * 60 * 60 * 1000));

    let diasem = utcMenos2.getUTCDay();
    let dia = utcMenos2.getUTCDate();
    let mes = utcMenos2.getUTCMonth();
    let ano = utcMenos2.getUTCFullYear();

    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia}. ${meses[mes]} ${ano}`;
}

// Função que verifica se chegou 00:00:00 UTC-2
function verificarMudancaDeDia() {
    let data = new Date();
    let utcMenos2 = new Date(data.getTime() - (2 * 60 * 60 * 1000));

    let horas = utcMenos2.getUTCHours();
    let minutos = utcMenos2.getUTCMinutes();
    let segundos = utcMenos2.getUTCSeconds();

    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }

    setTimeout(verificarMudancaDeDia, 1000);
}

// Inicializar
exibirDataAtualizada();
verificarMudancaDeDia();
