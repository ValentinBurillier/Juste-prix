//Génération du nb aléatoire entre 0 et 1000
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let x = getRandomInt(1000)
  alert(x)
  //Evènement lors du clique avec la souris
  let btn = document.querySelector('#button'); //Récupère le boutton
  function test() { //
    let number = document.querySelector('#input').value; //Récupère valeur dans l'input
    if (x > number) { // Les différents cas 
      alert('C\'est plus');
      let audio = new Audio("Audios/cestplus/cestplus.m4a"); //Ajout + déclarationaudio
      audio.play(); //Lancement de l'audio
    } else if (x < number) {
      alert('C\'est moins');
      let audio = new Audio("Audios/juste_prix_cestmoins/juste_prix_cestmoins.m4a");
      audio.play();
    } else if (x == number) {
      alert('C\'est gagné');
      let audio = new Audio('Audios/cestgagne/cestgagne.m4a');
      audio.play();
    }
  }
  btn.addEventListener('click', test); // Evènement lors du clique
  
  let enter = document.querySelector('#input'); //Evènement en appuyant sur 'Enter'
  enter.addEventListener('keyup', function(event){
    if(event.key == 'Enter') {
      test();
    }
  })
  
  //--------------CODE DE BASE DU JEU----------------------//
  
  