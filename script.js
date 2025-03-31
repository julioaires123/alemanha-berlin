function atualizarRelogio() {
    let rel = document.getElementById('relogio01');
    let data = new Date();

    // Pegar hora UTC e somar 4 horas para UTC+4
    let h = data.getUTCHours() + 4;
    let m = data.getUTCMinutes();
    let s = data.getUTCSeconds();

    // Garantir que a hora fique dentro do intervalo de 0 a 23
    if (h >= 24) h -= 24;

    // Formatar com dois dígitos
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
    
    // Ajuste de fuso UTC+4
    let h = data.getUTCHours() + 4;
    if (h >= 24) {
        data.setUTCDate(data.getUTCDate() + 1);
    }

    let diasem = data.getUTCDay();
    let dia = data.getUTCDate();
    let mes = data.getUTCMonth();
    let ano = data.getUTCFullYear();

    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia}. ${meses[mes]} ${ano}`;
}

// Função que verifica se chegou 00:00:00 UTC+4
function verificarMudancaDeDia() {
    let data = new Date();

    // Pegar a hora UTC e somar 4 para converter corretamente
    let horas = data.getUTCHours() + 4;
    let minutos = data.getUTCMinutes();
    let segundos = data.getUTCSeconds();

    // Garantir que a hora fique dentro do intervalo de 0 a 23
    if (horas >= 24) horas -= 24;

    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }

    setTimeout(verificarMudancaDeDia, 1000);
}

// Inicializar
exibirDataAtualizada();
verificarMudancaDeDia();
