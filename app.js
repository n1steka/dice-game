/// Тоглогчийн ээлжийг хадгалах хувисагч 
var  activePlater = 1;
///  Тоглолгчийн тсуглуулсан оноог хадгалах хувисагч 
var scores = [0,0]; 

/// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог харуулах хувисагч 
var roundScore =  0; 
/// шооний али талаараа бууснийг хадгалагх хувисагч  1-6 гэсэн утгийг хуйвсагчинд оноож өгнө 
var  dice  = Math.floor(  Math.random()  * 6+ 1   ) ;
console.log(dice);

// <div class="player-score" id="score-0">43</div>

window.document.querySelector('#score-0').textContent =0; 



// {/* <div class="player-score" id="score-1">72</div> */}

document.querySelector('#score-1').textContent =  0; 

document.querySelector(".dice").style.display = "none";

document.querySelector("#current-0").textContent =  0 ; 
