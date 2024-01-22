var quotes = [
    '"I don\'t condone violence, I do however condone sending a message."',
    '"God gives his silliest battles to his funniest clowns."',
    '"It\'s not a Mojo Dojo Casa House, it\'s a Mojo Dojo Casa Home."',
    '"In <i>this</i> economy?"',

]


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];}