
const honduras = 'https://api.unsplash.com/photos/random?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
const body = document.getElementsByTagName('body')

// let btn1 = addEventListener('click')

function myHint() {
    var hint = prompt("Hint: This is the largest country in South America. It's known for it's carvinal. It hosted the 2014 soccer World Cup. \n Choices: \n Argentina \n Colombia \n Brazil");
    if (hint == null || hint == "") {
      alert("Please make a guess");
    } else if (hint === "A", "a" || hint === "B", "b") {
        yourAnswer(hint);
    } 
  }

  function yourAnswer(hint){
      console.log("yourAnswer")
     
    let secondDiv = document.createElement('div');
    secondDiv.setAttribute('class', 'answer')
    let text = document.createElement('h1');
    let answer = `Your answer is ${hint}`        
    secondDiv.appendChild(text);
    text.innerHTML = answer;
    document.body.appendChild(secondDiv);

}

const card = document.querySelector('.flip-card-inner');
card.addEventListener( 'click', flipCard);

function flipCard(){
    card.classList.toggle('is-flipped');
    console.log('This is firing!')
}

// fetch image to card 

fetch(honduras)
.then(res => {
    return res.json()
})

.then((json)=> {
    let hondurasArr = json;
    console.log(hondurasArr);
    hondurasPics(hondurasArr)
})
 

function hondurasPics(pics){

    document.querySelector('.myImg').src = pics.urls.full
    console.log(pics.urls.full);
    
}

hondurasPics();


// document.querySelector("#myCard").classList.toggle("flip")
