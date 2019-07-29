const convertCurrency = (e) => {
  /* primary elements */
  const form = document.querySelector('form');
  const polishCurrency = document.querySelector('.pln-input');
  const exchangeRates = document.querySelectorAll('nav > ul > li');

  /* exchnage rates */
  const usd = getCurrencyRate(exchangeRates, 'USD');
  const euro = getCurrencyRate(exchangeRates, 'EUR');
  const chf = getCurrencyRate(exchangeRates, 'CHF');
  const gbp = getCurrencyRate(exchangeRates, 'GBP');

  if(e.target.classList.contains('pln-to-usd')){
    if(form.firstElementChild.style.order === ""){
      convertFromPln(polishCurrency, usd, '.usd-input');
    } 
    else{
      convertFromForeignToPln('.usd-input', usd, polishCurrency);
    }
  }
  else if(e.target.classList.contains('pln-to-euro')){
    if(form.firstElementChild.style.order === ""){
      convertFromPln(polishCurrency, euro, '.eur-input');
    }
    else{
      convertFromForeignToPln('.eur-input', euro, polishCurrency);
    }      
  }
  else if(e.target.classList.contains('pln-to-chf')){    
    if(form.firstElementChild.style.order === ""){
      convertFromPln(polishCurrency, chf, '.chf-input');
    } 
    else{
      convertFromForeignToPln('.chf-input', chf, polishCurrency);
    }
  }
  else if(e.target.classList.contains('pln-to-gbp')){  
    if(form.firstElementChild.style.order === ""){
      convertFromPln(polishCurrency, gbp, '.gbp-input');
    }  
    else{
      convertFromForeignToPln('.gbp-input', gbp, polishCurrency);
    } 
  }
  else{
    return;
  } 
}

/* functions */
const convertFromForeignToPln = (foreignCurrency, exchangeRate, input) => {
  const foreignCurrencyValue = parseFloat(document.querySelector(foreignCurrency).value);
  const result = foreignCurrencyValue * exchangeRate;
  return input.value = result.toFixed(2);
}

const getCurrencyRate = (rates, currencySign) => {
  let currency;  
  for(let i=0; i<rates.length; i++){
    if(rates[i].textContent.indexOf(currencySign) > -1){
      currency = rates[i].textContent;
    }
  }
  const exchangeRate = currency.split(' ');
  return parseFloat(exchangeRate[1]);
}

const convertFromPln = (pln, foreignCurrency, input) => {
    let result = 0;
    result = pln.value / foreignCurrency; 
    return document.querySelector(input).value = result.toFixed(2);
}

document.addEventListener('click', convertCurrency, false);