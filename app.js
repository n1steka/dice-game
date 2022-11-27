/// Тоглогчийн ээлжийг хадгалах хувисагч 
var activePlater = 0;
///  Тоглолгчийн тсуглуулсан оноог хадгалах хувисагч 
var scores = [0, 0];

/// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог харуулах хувисагч 
var roundScore = 0;
/// шооний али талаараа бууснийг хадгалагх хувисагч  1-6 гэсэн утгийг хуйвсагчинд оноож өгнө 

// <div class="player-score" id="score-0">43</div>

window.document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = ' 0';

/// Программ эхлэх код 

document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0 ';


var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх 1-6 хүртэлх 

document.querySelector(".btn-roll").addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6 + 1);
    // Зургийг вэб-д гаргах 
    diceDom.style.display = "block";

    // зураг дуудах 
    diceDom.src = 'dice-' + diceNumber + '.png';

    // alert('Шоо буулаа :'+ diceNumber); 

    // Тоглолтийн ээлжийг өөрчлөх 

    if (diceNumber !== 1) {
        // 1-ээс ялгаатай тоо буулаа 
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlater).textContent = roundScore;

    }
    else {
        roundScore  = 0;  
        // 1 буусан тул тоглолгчийн ээлжийг энэ хэсэгт солиж өгнө
        document.getElementById("current-" + activePlater).textContent = 0;

        activePlater === 0 ? (  activePlater = 1  ) : (activePlater = 0) ;    
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        // шоог түр алга болгоно 

        diceDom.style.display = "none";


        // if(activePlater=== 0 )
        // {
        //     activePlater  = 1;  
        // }
        // else  {
        //     activePlater= 0 ; 
        // }
    }

}); 

        // Улааан цэгийг  шилжүүлэх 


