function btn() {
    let nome = window.prompt('Digiti aqui o seu nome')
    let res = window.document.getElementById('resultado')
    res.innerHTML = (`<p>Olá, ${nome}! É um prazer te conhecer! &#x1F596`)

}