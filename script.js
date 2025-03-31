function atualizarRelogio() {
    let rel = document.getElementById('relogio01');
    let data = new Date();

    // Garantir que pegamos sempre UTC puro e adicionamos apenas 4 horas
    let h = (data.getUTCHours() + 2) % 24; // Ajustar para 24h
    let m = data.getUTCMinutes();
    let s = data.getUTCSeconds();

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
    
    // Garantir que a data esteja sempre sincronizada com UTC+4
    let h = (data.getUTCHours() + 2) % 24;
    if (h < data.getUTCHours()) {
        data.setUTCDate(data.getUTCDate() + 1);
    }

    let diasem = data.getUTCDay();
    let dia = data.getUTCDate();
    let mes = data.getUTCMonth();
    let ano = data.getUTCFullYear();

    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia}. ${meses[mes]} ${ano}`;
}

// Verifica se é 00:00:00 UTC+4 e muda a data
function verificarMudancaDeDia() {
    let data = new Date();

    // Ajuste correto para UTC+4
    let horas = (data.getUTCHours() + 2) % 24;
    let minutos = data.getUTCMinutes();
    let segundos = data.getUTCSeconds();

    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }

    setTimeout(verificarMudancaDeDia, 1000);
}

// Inicializar
exibirDataAtualizada();
verificarMudancaDeDia();
