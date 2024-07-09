function addZero(x) {
    return x < 10 ? '0' + x : x;
}

function updateClock() {
    const now = new Date();
    const dia = addZero(now.getDate());
    const mes = addZero(now.getMonth() + 1); // Janeiro é 0!
    const ano = now.getFullYear();
    const horas = addZero(now.getHours());
    const minutos = addZero(now.getMinutes());
    const segundos = addZero(now.getSeconds());

    const formattedTime = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
    document.getElementById('clock').innerText = formattedTime;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez para exibir a hora imediatamente
updateClock();
