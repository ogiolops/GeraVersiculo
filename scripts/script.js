
const quotes = [
    {prase: 'Então Jesus tornou a falar-lhes, dizendo: Eu sou a luz do mundo; quem me segue de modo algum andará em trevas, mas terá a luz da vida.', author:'João 8:12'},
    {prase: 'Ó minha alma, espera silenciosa somente em Deus, porque dele vem a minha esperança.', author:'Salmos 62:5'},
    {prase: 'Pois tu és a minha esperança, Senhor Deus; tu és a minha confiança desde a minha mocidade.', author:'Salmos 71:5'},
    {prase: 'Ora, o Deus de esperança vos encha de todo o gozo e paz na vossa fé, para que abundeis na esperança pelo poder do Espírito Santo.', author:'Romanos 15:13'},
    {prase: 'Que por ele credes em Deus, que o ressuscitou dentre os mortos e lhe deu glória, de modo que a vossa fé e esperança estivessem em Deus.', author:'1 Pedro 1:21'},

]

function changeQuote() {
    //Change prase
    var prase = document.querySelector('#quote')
    aleatory = parseInt(Math.random() *quotes.length)
    prase.innerHTML = ' " ' + quotes[aleatory].prase + ' " '

    //change author
    var author = document.querySelector('#author')
    aleatory = parseInt(Math.random() *quotes.length)
    author.innerHTML =  quotes[aleatory].author

}