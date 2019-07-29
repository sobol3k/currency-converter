function deleteLocalStorage(){
  const date = JSON.parse(localStorage.getItem('exchangeRates')).date;
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-exchange-rates')){
      if(confirm(`Czy na pewno chcesz wyczyścić kursy walut notowane z dnia ${date}`)){
        localStorage.clear();
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', deleteLocalStorage, false);