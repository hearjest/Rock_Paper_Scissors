document.getElementById('RockButton').addEventListener('click',function(){
    game('rock');
});

document.getElementById('PaperButton').addEventListener('click',function(){
    game('paper');
});

document.getElementById('ScissorsButton').addEventListener('click',function(){
    game('scissors');
});
let scoreCap=prompt('Intended score to reach?',5);
function computerinput(){
    let choice= Math.floor(Math.random()*3);
    if(choice===0){
        return 'rock'
    }else if(choice===1){
        return 'paper';
    }
    return 'scissors'
}

function updateScore(text){
    if(text.includes('You win!')){
        document.getElementById('playerScore').textContent=Number(document.getElementById('playerScore').textContent)+1;
    }else if(text.includes('You lose!')){
        document.getElementById('computerScore').textContent=Number(document.getElementById('computerScore').textContent)+1;
    }
    if(Number(document.getElementById('playerScore').textContent)===Number(scoreCap)||Number(document.getElementById('computerScore').textContent)===Number(scoreCap)){
        endGame();
    }
}

function game(player){
    const computer=computerinput();
    let result;
    if((player==='rock'&&computer==='scissors')||(player==='paper'&&computer==='rock')||(player==='scissors'&&computer==='paper')){
        document.getElementById('Results').textContent=(`${player} > ${computer}`);
        result='You win!';
    }else if((player==='rock'&&computer==='paper')||(player==='paper'&&computer==='scissors')||(player==='scissors'&&computer==='rock')){
        document.getElementById('Results').textContent=(`${player} < ${computer}`);
        result='You lose!';
    }else{
        document.getElementById('Results').textContent=(`${player} === ${computer}`);
        result='Draw!';
    }
    updateScore(result);
}

function endGame(){
const text=document.createElement('div');

const gameFinish=document.createElement('div');
gameFinish.append(text);
gameFinish.style.cssText='background-color:black;color:white;height:100%;width:100%;display:flex;align-items:center;text-align:center;justify-content:center';
if(Number(document.getElementById('playerScore').textContent)>Number(document.getElementById('computerScore').textContent)){
    text.textContent=('Player wins');
}else{
    text.textContent=('Computer wins');
}
document.body.insertBefore(gameFinish,document.querySelector('#container')); 
}
//Test

