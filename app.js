/// Тоглогчийн ээлжийг хадгалах хувисагч 
var activePlater;
var scores ; 
var roundScore ; 
initGame();


var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Тоглоом эхлүүлнэ 
initGame(); 

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
        switchToNextPlayer()

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


document.querySelector(".btn-hold").addEventListener('click', function () {
    // Уг тоглогчийн ээлжийн оноог глобал оноон дээр нэмэж өгнө 
    // if(activePlater === 0 ) 
    // {
    //     scores[0] = scores[0] + roundScore ; 

    // }else {
    //     scores[1] = scores[1] + roundScore ; 
    // }  

    scores[activePlater] = scores[activePlater] + roundScore;
    document.getElementById("score-" + activePlater).textContent = scores[activePlater];


    // Али тоглогч хожсон эсэхийг шалгана 
    if (scores[activePlater] >= 10) {
        document.getElementById("name-" + activePlater).textContent = 'Яалалт';


    }

    else {

    }

    // Ээлжийн оноог нь 0 болгоно 
    // Тоглогчийн ээлжийг zсолино
    switchToNextPlayer();

});

function switchToNextPlayer() {

    // Ээлжийн оноог нь 0 болгоно 
    roundScore = 0;
    document.getElementById("current-" + activePlater).textContent = 0;
    activePlater === 0 ? (activePlater = 1) : (activePlater = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
}




/// шинэ тоглоом эхлүүлэх 
document.querySelector(".btn-new").addEventListener('click', function () {
    initGame(); 
})


function initGame(){
     activePlater = 0;
///  Тоглолгчийн тсуглуулсан оноог хадгалах хувисагч 
 scores = [0, 0];

/// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог харуулах хувисагч 
 roundScore = 0;
/// шооний али талаараа бууснийг хадгалагх хувисагч  1-6 гэсэн утгийг хуйвсагчинд оноож өгнө 

// <div class="player-score" id="score-0">43</div>

window.document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = ' 0';
/// Программ эхлэх код 
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';


}