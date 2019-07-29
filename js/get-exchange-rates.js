function getExchangeRate(){
  const path = 'http://api.nbp.pl/api/exchangerates/tables/a?format=json';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.onload = function(){
    if(this.readyState === 4 && this.status === 200){
      const tab = [];
      const response = JSON.parse(this.responseText);
      const array = response[0].rates;
      array.forEach(currency => { 
        if(currency.code === "USD") tab.push(currency.mid.toFixed(2));
        if(currency.code === "AUD") tab.push(currency.mid.toFixed(2));
        if(currency.code === "SGD") tab.push(currency.mid.toFixed(2));
        if(currency.code === "EUR") tab.push(currency.mid.toFixed(2));
        if(currency.code === "CHF") tab.push(currency.mid.toFixed(2));
        if(currency.code === "GBP") tab.push(currency.mid.toFixed(2));
      })
      const li = document.querySelectorAll('nav > ul > li');
      for(let i=0; i<li.length; i++){
        li[i].innerHTML += ' ' + tab[i];
      }
    }
  }
  xhr.send();
}

document.addEventListener('DOMContentLoaded', getExchangeRate, false);