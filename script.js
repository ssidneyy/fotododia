function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {          // se a hora atual for maior ou igual a 00:00 e hora for abaixo de 12:00
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'    // muda a cor do fundo
    } else if (hora >= 12 && hora <= 18) { // se nao se a hora atual for maior ou igual a 12:00 e hora for menor ou igual a 18:00
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'    // muda a cor do fundo
    } else {                               // se nao nenhuma das opcoes acima (18:00 a 00:00)
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'    // muda a cor do fundo
    }
}