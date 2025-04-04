setInterval(function relog() { 
    let rel = document.getElementById('relogio01');
    let data = new Date();
    
    // Adiciona 23 segundos
    data.setSeconds(data.getSeconds() + 23);
    
    // Determina o horário de verão na Alemão
    let ano = data.getUTCFullYear();
    let inicioVerao = new Date(ano, 2, 31); // Último domingo de março
    while (inicioVerao.getDay() !== 0) inicioVerao.setDate(inicioVerao.getDate() - 1);
    let fimVerao = new Date(ano, 9, 31); // Último domingo de outubro
    while (fimVerao.getDay() !== 0) fimVerao.setDate(fimVerao.getDate() - 1);
    
    let fusoHorario = (data >= inicioVerao && data < fimVerao) ? 3 : 2; // UTC+3 no horário de verão, UTC+2 no padrão
    data.setUTCHours(data.getUTCHours() + fusoHorario - 1); // Redução de 1 hora
    
    let h = data.getUTCHours().toString().padStart(2, '0');
    let m = data.getUTCMinutes().toString().padStart(2, '0');
    let s = data.getUTCSeconds().toString().padStart(2, '0');
    
    rel.innerHTML = `${h}:${m}:${s}`;
}, 1000);

// Exibição da data em Alemão
function exibirDataAtualizada() {
    let meses = [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    let semanas = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    
    let data = new Date();
    // Adiciona 23 segundos
    data.setSeconds(data.getSeconds() + 23);
    
    let ano = data.getUTCFullYear();
    let inicioVerao = new Date(ano, 2, 31);
    while (inicioVerao.getDay() !== 0) inicioVerao.setDate(inicioVerao.getDate() - 1);
    let fimVerao = new Date(ano, 9, 31);
    while (fimVerao.getDay() !== 0) fimVerao.setDate(fimVerao.getDate() - 1);
    
    let fusoHorario = (data >= inicioVerao && data < fimVerao) ? 3 : 2;
    data.setUTCHours(data.getUTCHours() + fusoHorario - 1); // Redução de 1 hora
    
    document.getElementById("date").innerHTML = `${semanas[data.getUTCDay()]}, ${data.getUTCDate()} ${meses[data.getUTCMonth()]}, ${data.getUTCFullYear()}`;
}

// Atualiza a data à meia-noite na Alemão
function atualizarData() {
    let data = new Date();
    // Adiciona 23 segundos
    data.setSeconds(data.getSeconds() + 23);
    
    let ano = data.getUTCFullYear();
    let inicioVerao = new Date(ano, 2, 31);
    while (inicioVerao.getDay() !== 0) inicioVerao.setDate(inicioVerao.getDate() - 1);
    let fimVerao = new Date(ano, 9, 31);
    while (fimVerao.getDay() !== 0) fimVerao.setDate(fimVerao.getDate() - 1);
    
    let fusoHorario = (data >= inicioVerao && data < fimVerao) ? 3 : 2;
    data.setUTCHours(data.getUTCHours() + fusoHorario - 1); // Redução de 1 hora
    
    if (data.getUTCHours() === 0 && data.getUTCMinutes() === 0 && data.getUTCSeconds() === 0) {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000);
}

// Inicializa a data e a atualização automática
exibirDataAtualizada();
atualizarData();
