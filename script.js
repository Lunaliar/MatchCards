//DOC ELEMENTS
const cards = Array.from(document.querySelectorAll('.image'));
const cardPlaces = Array.from(document.querySelectorAll('.card'));

let numberArray = [];
let selection = null


cards.forEach(card => {
  card.addEventListener('click',()=>{
    console.log(selection);
    card.classList.remove('hidden')

    if(selection == null){
      selection = card;
      console.log(card)
      console.log(selection)
    }else{
      if(selection.id === card.id){
      console.log('Match')
      selection = null
      }else{
      console.log('Incorrect')
      setTimeout(()=>{
      selection.classList.add('hidden')
      card.classList.add('hidden')
      selection = null;
      },1500)
      }
    }
})});

const shuffleCards = ()=>{
  for(let i=0; i<cardPlaces.length;i++){
    cardPlaces[i].style.setProperty("order",numberArray[i]);
  }
}

const orderGenerator = (min, max)=>{
  for(let i = 0; numberArray.length < 10; i++){
    let rand =Math.floor(Math.random()*(max-min)+min)
    if(!numberArray.includes(rand)){
      numberArray.push(rand) 
    }
  }
}

orderGenerator(0,10);
shuffleCards();
cards.forEach(card=>{
  card.style.setProperty('transition','1s')
})