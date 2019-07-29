const getExchangeRatesFromLocalStorage = () => {
  const header = document.querySelector('header');
  if(localStorage.getItem('exchangeRates') !== null){
    /* create a button to get exchangeRates from localStorage of browser */
    const button = document.createElement('button');
    /* add class to element and add textContent */
    button.classList.add('get-exchange-rates-from-local-storage');
    button.textContent = 'pokaż';
    header.appendChild(button);

    button.addEventListener('click', () => {
      /* create modal with exchangeRates which are saved in localStorage */
      const modal = document.createElement('div');
      modal.className = "modal-to-save-exchange-rates";
      modal.innerHTML = `
        <h1>kursy walut</h1>
        <ul class="exchange-rates"></ul>
        <span class="rating-date">notowania z dnia: ${JSON.parse(localStorage.getItem('exchangeRates')).date}</span>   
        <button type="button" class="delete-exchange-rates">usuń</button>
        <button type="button" class="close-modal">anuluj</button>`;
      document.body.appendChild(modal);
      document.body.classList.add('opened-message-error');
      loadExchangeRatesToModal();
    })
  }
}

const loadExchangeRatesToModal = () => {
  /* list with saved exchange rates via user */
  const ul = document.querySelector('.exchange-rates');
  const exchangeRates = JSON.parse(localStorage.getItem('exchangeRates'));
  exchangeRates.value.forEach(currency => {
    if(currency.indexOf('USD') > -1){
      ul.innerHTML += `
      <li>
        <img src="../img/currency-icons/usa.png">
        ${currency}
      </li>`;
    } else if(currency.indexOf('AUD') > -1){
        ul.innerHTML += `
        <li>
          <img src="../img/currency-icons/aus.png">
          ${currency}
        </li>`;
    } else if(currency.indexOf('SGD') > -1){
        ul.innerHTML += `
        <li>
          <img src="../img/currency-icons/sgp.png">
          ${currency}
        </li>`;
    } else if(currency.indexOf('EUR') > -1){
        ul.innerHTML += `
        <li>
          <img src="../img/currency-icons/eu.png">
          ${currency}
        </li>`;
    } else if(currency.indexOf('CHF') > -1){
        ul.innerHTML += `
        <li>
          <img src="../img/currency-icons/ch.png">
          ${currency}
        </li>`;
    } else{
      ul.innerHTML += `
        <li>
          <img src="../img/currency-icons/uk.png">
          ${currency}
        </li>`;
    }
  });
}

document.addEventListener('DOMContentLoaded', getExchangeRatesFromLocalStorage, false);