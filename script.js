const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const compScore = document.getElementById("compScore");
const userScore = document.getElementById("userScore");
const playarea = document.getElementById("playArea");
const summary = document.getElementById("summary");
const userStone = document.getElementById("userStone");
const userPaper = document.getElementById("userPaper");
const userScissor = document.getElementById("userScissor");
const compStone = document.getElementById("compStone");
const compPaper = document.getElementById("compPaper");
const compScissor = document.getElementById("compScissor");
const won = document.getElementById("won");
const lost = document.getElementById("lost");
const tie = document.getElementById("tie");
const playAgain = document.getElementById("playAgain");
const replay = document.getElementById("replay");
const layer1 =  document.getElementById("layer1");
const layer2 =  document.getElementById("layer2");
const award = document.getElementById("award");
const scorecard = document.getElementById("scorecard");
const next1 = document.getElementById("next");
const result = document.getElementById("result");
const userChoice = document.getElementById("userChoice");
const compChoice = document.getElementById("compChoice");
const rules = document.getElementById("rule");
const ruleButton = document.getElementById("ruleButton");
const close = document.getElementById("close");
const stoneUser = document.getElementById("stoneUser");
const paperUser = document.getElementById("papeUser");
const scissorUser = document.getElementById("scissorUser");
const stoneComp = document.getElementById("stonecomp");
const paperComp = document.getElementById("paperComp");
const scissorComp = document.getElementById("scissorComp");
const youPicked = document.getElementById("youPicked");
const pcPicked = document.getElementById("pcPicked");


playarea.classList.remove("hidden");
scorecard.classList.remove("hidden");
result.classList.remove("hidden");
userChoice.classList.remove("hidden");
compChoice.classList.remove("hidden");
ruleButton.classList.remove("hidden");
youPicked.classList.add("hidden");
pcPicked.classList.add("hidden");


function refresh(){
    window.location.reload();
}


next1.addEventListener("click", function(){
    playarea.classList.add("hidden");
    scorecard.classList.add("hidden");
    result.classList.add("hidden");
    userChoice.classList.add("hidden");
    compChoice.classList.add("hidden");
    award.classList.remove("hidden");
    youPicked.classList.add("hidden");
    pcPicked.classList.add("hidden");
    this.classList.add("hidden");
    ruleButton.style.margin="40px";
})


ruleButton.addEventListener("click", function(){
    rules.classList.toggle("hidden");
})



close.addEventListener("click", function(){
   rules.classList.add("hidden");
})


const randomSelect = ()=>{
    const choice = ["stone", "paper", "scissor"];
    const generateRandom = Math.floor(Math.random()* choice.length);
    return choice[generateRandom];
}

function updateScore() {
    const newScore = parseInt(userScore.value) + 1;
    userScore.value = newScore;
    localStorage.setItem("userScore", newScore);
}

function updateCompScore(){
    const newCompScore = parseInt(compScore.value) + 1;
    compScore.value = newCompScore;
    localStorage.setItem("compScore", newCompScore);
}


stone.addEventListener("click",function(){
const randomChoice = randomSelect();
if(randomChoice==="stone"){
  console.log("tie")
 summary.classList.remove("hidden");
 playarea.classList.add("hidden");
  userStone.classList.remove("hidden");
  compStone.classList.remove("hidden");
  tie.classList.remove("hidden");
  replay.classList.remove("hidden");
  youPicked.classList.remove("hidden");
  pcPicked.classList.remove("hidden");
  rules.style.bottom="40px";
}
if(randomChoice==="paper"){
    console.log("lose")
    updateCompScore()
    summary.classList.remove("hidden");
    playarea.classList.add("hidden");
    userStone.classList.remove("hidden");
    compPaper.classList.remove("hidden");
    lost.classList.remove("hidden");
    playAgain.classList.remove("hidden");
    layer2.classList.remove("hidden");
    youPicked.classList.remove("hidden");
    pcPicked.classList.remove("hidden");
    rules.style.bottom="40px";
}if(randomChoice==="scissor"){
    console.log("Win");
    updateScore();
    summary.classList.remove("hidden");
    playarea.classList.add("hidden");
    userStone.classList.remove("hidden");
    compScissor.classList.remove("hidden");
    won.classList.remove("hidden");
    playAgain.classList.remove("hidden");
    layer1.classList.remove("hidden");
    next1.classList.remove("hidden");
    ruleButton.style.marginRight="150px";
    youPicked.classList.remove("hidden");
    pcPicked.classList.remove("hidden");
    rules.style.bottom="40px";
}   
})

paper.addEventListener("click",function(){
    const randomChoice = randomSelect();
    if(randomChoice==="stone"){
      console.log("win")
      updateScore();
      summary.classList.remove("hidden");
      playarea.classList.add("hidden");
      userPaper.classList.remove("hidden");
      compStone.classList.remove("hidden");
      won.classList.remove("hidden");
      playAgain.classList.remove("hidden");
      layer1.classList.remove("hidden");
      next1.classList.remove("hidden");
      ruleButton.style.marginRight="150px";
      youPicked.classList.remove("hidden");
      pcPicked.classList.remove("hidden");
      rules.style.bottom="40px";
    }
    if(randomChoice==="paper"){
        console.log("tie")
        summary.classList.remove("hidden");
      playarea.classList.add("hidden");
      userPaper.classList.remove("hidden");
      compPaper.classList.remove("hidden");
      tie.classList.remove("hidden");
      replay.classList.remove("hidden");
      youPicked.classList.remove("hidden");
      pcPicked.classList.remove("hidden");
      rules.style.bottom="40px";
    }if(randomChoice==="scissor"){
        console.log("lose")
        updateCompScore()
        summary.classList.remove("hidden");
        playarea.classList.add("hidden");
        userPaper.classList.remove("hidden");
        compScissor.classList.remove("hidden");
        lost.classList.remove("hidden");
        playAgain.classList.remove("hidden");
        layer2.classList.remove("hidden");
        youPicked.classList.remove("hidden");
        pcPicked.classList.remove("hidden");
        rules.style.bottom="40px";
    }
    })

scissor.addEventListener("click",function(){
        const randomChoice = randomSelect();
        if(randomChoice==="stone"){
          console.log("lose")
          updateCompScore()
          summary.classList.remove("hidden");
          playarea.classList.add("hidden");
          userScissor.classList.remove("hidden");
          compStone.classList.remove("hidden");
          lost.classList.remove("hidden");
          playAgain.classList.remove("hidden");
          layer2.classList.remove("hidden");
          youPicked.classList.remove("hidden");
          pcPicked.classList.remove("hidden");
          rules.style.bottom="40px";
        }
        if(randomChoice==="paper"){
            console.log("win")
            updateScore();
            summary.classList.remove("hidden");
            playarea.classList.add("hidden");
            userScissor.classList.remove("hidden");
            compPaper.classList.remove("hidden");
            won.classList.remove("hidden");
            playAgain.classList.remove("hidden");
            layer1.classList.remove("hidden");
            next1.classList.remove("hidden");
            ruleButton.style.marginRight="150px";
            youPicked.classList.remove("hidden");
            pcPicked.classList.remove("hidden");
            rules.style.bottom="40px";
        }if(randomChoice==="scissor"){
            console.log("tie")
            summary.classList.remove("hidden");
            playarea.classList.add("hidden");
            userScissor.classList.remove("hidden");
            compScissor.classList.remove("hidden");
            tie.classList.remove("hidden");
            replay.classList.remove("hidden");
            youPicked.classList.remove("hidden");
            pcPicked.classList.remove("hidden");
            rules.style.bottom="40px";
        }
        })

        let userScoreValue =  localStorage.getItem('userScore')||0;
        let compScoreValue = localStorage.getItem('compScore')||0;

        userScore.value = userScoreValue;
        compScore.value = compScoreValue

       