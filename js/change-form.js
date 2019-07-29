const loadAsynchronousContent = (xhr, file) => {
    xhr.open('GET', `../currency/${file}`, true);
    xhr.onload = function(){
      if(this.readyState === 4 && this.status === 200){
        const reponseFile = this.responseText;
        const form = document.querySelector('.main-part-form').innerHTML = reponseFile;;
      }
      else{
        console.error('Upsss. coś poszło nie tak status: ' + this.status);
      }
    }
    xhr.send();           
}

const changeFormConversion = (e) =>{
  if(e.target.classList.contains('fa-redo-alt')){
    /* elements of form */
    const firstElement = document.querySelector('.row-with-pln');
    const secondElement = document.querySelector('.row-with-other-currency');
    const thirdElement = document.querySelector('.row-with-convert-button');

    /* inputs with values of currencies */
    const inputs = {
      polishCurrency: document.querySelector('.pln-input'),
      foreignCurrency: document.querySelector('.other-currency'),
    }

    /* destructuring */
    const {polishCurrency, foreignCurrency} = inputs;

    /* set attributes and properties for child elemets of form */
    if(polishCurrency.getAttribute('disabled') === null && polishCurrency.getAttribute('placeholder') !== ''){
      polishCurrency.setAttribute('disabled', 'disabled');
      polishCurrency.setAttribute('placeholder', 'wartość w PLN');
      polishCurrency.value = null;
    }

    /* set attributes and properties for child elemets of form */
    if(foreignCurrency.getAttribute('disabled') === '' && foreignCurrency.getAttribute('placeholder') === null){
      foreignCurrency.removeAttribute('disabled');
      foreignCurrency.value = null;
      if(foreignCurrency.classList.contains('usd-input')){
        foreignCurrency.setAttribute('placeholder', 'USD');
      } 
      else if(foreignCurrency.classList.contains('eur-input')){
        foreignCurrency.setAttribute('placeholder', 'EUR');
      } 
      else if(foreignCurrency.classList.contains('chf-input')){
        foreignCurrency.setAttribute('placeholder', 'CHF');
      } 
      else{
        foreignCurrency.setAttribute('placeholder', 'GBP');
      }
    }

    /* change order of elements when user click in the reaload button */
    const children = [firstElement, secondElement, thirdElement];
    const order = [2, 1, 3];
    for(let i=0; i<order.length; i++){
        children[i].style.order = order[i];
    }    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();
  const buttons = document.querySelectorAll('.form > ul > li');
  const mainButton = document.querySelector('.main-button');
  const realoadBtn = document.querySelector('.fa-redo-alt');

  for(const btn of buttons){
    btn.addEventListener('click', () => {        
      if(btn.dataset.currency === 'USD'){
        loadAsynchronousContent(xhr, 'usd.html'); 
      }
      else if(btn.dataset.currency === 'CHF'){
        loadAsynchronousContent(xhr, 'chf.html');
      }
      else if(btn.dataset.currency === 'GBP'){
        loadAsynchronousContent(xhr, 'gbp.html'); 
      } 
      else{
        loadAsynchronousContent(xhr, 'eur.html'); 
      }     
    })
  }

  mainButton.addEventListener('click', () => {
    const number = Math.floor(Math.random() * 4);
    const form = [
      'usd.html',
      'eur.html',
      'chf.html',
      'gbp.html'
    ];

    xhr.open('GET', `../currency/${form[number]}`, true)
    xhr.onload = function(){
      if(this.status === 200 && xhr.readyState === 4){
        const response = this.responseText;
        const parentElement = document.querySelector('.main-part-form').innerHTML = response;
      } 
      else{
        console.error('Upsss. coś poszło nie tak status: ' + this.status);
      }
    }
    xhr.send();
  })
  /* service convertion from foreign currency to polish currency */
  document.addEventListener('click', changeFormConversion);
})



