const saveActualExchangeRates = () => {
  const header = document.querySelector('header');

  /* create a button to save exchange rates in localStorage */
  const button = document.createElement('button');
  button.className = 'save-actual-exchcange-rates';
  button.textContent = 'zapisz';

  /* if localStorage is null, create button to save actual exchangeRates */
  if(localStorage.getItem('exchangeRates') === null) header.appendChild(button);
    
  button.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = "modal-to-save-exchange-rates";
    modal.innerHTML = `
      <h1>zapisz kursy walut</h1>
      <p>
        Funkcja ta umowżliwia zapisanie wszystkich kursów walut przedstawionych na stronie z dnia dzisiejszego,
        jeśli chcesz aby kursy walut z dziś zapisały się do pamięci twojej przeglądarki kliknij zapisz.
      </p>
      <button type="button" class="save-exchange-rates">zapisz</button>
      <button type="button" class="close-modal">anuluj</button>`;
    document.body.appendChild(modal);
    document.body.classList.add('opened-message-error');
  })

  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-modal')){
      document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]);
      document.body.classList.remove('opened-message-error');
    }
    else if(e.target.classList.contains('save-exchange-rates')){
      const li = document.querySelectorAll('nav > ul > li');
      const exchangeRates = {
      date: new Date().toLocaleString(),
        value: [
          li[0].textContent,
          li[1].textContent,
          li[2].textContent,
          li[3].textContent,
          li[4].textContent,
          li[5].textContent,
        ]
      }
      alert('poprawnie zapisano kursy walut!');
      /* check is browser serve a localStorage? */
      if(typeof(Storage) !== 'undefined'){
        localStorage.setItem('exchangeRates', JSON.stringify(exchangeRates));
      }
      else{
        console.error('Twoja przeglądarka nie obsługuje LocalStorage!');
      }
      /* check is browser serve a localStorage? */  
    }
    else{
      return;    
    }
  })
}

document.addEventListener('DOMContentLoaded', saveActualExchangeRates, false);