/*PIRACY GDANSK RIDERS ANIMATION*/
var textWrapper = document.querySelector('.ml10 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 3300,
        delay: (el, i) => 45 * i
      }).add({
        targets: '.ml10',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });


      

