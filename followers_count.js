let count = 0;
let counts = 2

function displayCount(){

  document.getElementById('countDisplay').innerHTML=count

}

function displayCounts(){
  document.getElementById('countDisplays').innerHTML = counts 
}

function checkCountValue(){
  if (count == 10){
    alert("Your Instagram post gained 10 followers! Congrads")
  } else if (count == 20){
    alert("Your Instagram post gained 20 followers! keep it up")
  }
}

function increaseCount() {
  count++; 
  counts--;
  displayCount(); 
  displayCounts();
  checkCountValue(); 
}