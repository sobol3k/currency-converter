const getDate = () =>{
    const nav = document.querySelector('nav');
    const ul = nav.querySelector('ul');

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    const spanElement = document.createElement('span');
    spanElement.className = 'date';
    spanElement.style.marginLeft = '5' + 'px';
    spanElement.style.alignSelf = 'center';
    spanElement.style.color = '#111';
    spanElement.style.fontFamily = 'Lato, sans-serif';
    spanElement.style.fontWeight = '600';
    spanElement.style.fontSize = '16' + 'px';
    spanElement.textContent = `Notowania z dnia ${day}.${month}.${year}`;
    
    nav.insertBefore(spanElement, ul);
}

document.addEventListener('DOMContentLoaded', getDate, false);