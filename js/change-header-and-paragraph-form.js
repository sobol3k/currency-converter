
const changeTextContent = (e) => {
  const headerForm = document.querySelector('.main-part-form > h2');
  const paragraphForm = document.querySelector('.main-part-form > p');
  const array = [{
    h2: "USD => PLN",
    p: "zamień dolary na złotówki"
  }, 
  {
    h2: "EUR => PLN",
    p: "zamień euro na złótówki",
  }, 
  {
    h2: "CHF => PLN",
    p: "zamień franki na złotówki",
  }, 
  {
    h2: "GBP => PLN",
    p: "zamień funty na złotówki"
  }];

  /* change content of header and paragraph */
  if(e.target.classList.contains('fa-redo-alt')){
    if(headerForm.textContent === 'PLN => USD'){
      headerForm.textContent = array[0].h2;
      paragraphForm.textContent = array[0].p;
    } 
    else if(headerForm.textContent === 'PLN => EUR'){
      headerForm.textContent = array[1].h2;
      paragraphForm.textContent = array[1].p;
    } 
    else if(headerForm.textContent === 'PLN => CHF'){
      headerForm.textContent = array[2].h2;
      paragraphForm.textContent = array[2].p;
    } 
    else if(headerForm.textContent === 'PLN => GBP'){
      headerForm.textContent = array[3].h2;
      paragraphForm.textContent = array[3].p;
    } 
    else{
      return;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', changeTextContent, false);
})