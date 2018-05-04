
function pickOne() {
    var container = document.getElementById('container');
    container.innerHTML = '';

    var header = document.createElement('h1');
    header.innerText = 'Pick One';

    container.appendChild(header);

    var choices = document.createElement('div');
    choices.className = 'choices';

    container.appendChild(choices);

    var rock = makeItem('rock');
    rock.onclick = playerClickedRock;

    var paper = makeItem('paper');
    paper.onclick = playerClickedPaper;

    var scissors = makeItem('scissors');
    scissors.onclick = playerClickedScissors;

    choices.appendChild(rock);
    choices.appendChild(paper);
    choices.appendChild(scissors);
}

function makeItem(name) {
    var item = document.createElement('div');
    item.className = 'item ' + name;

    var img = document.createElement('img');
    img.src = 'images/' + name + '.png';

    var label = document.createElement('div');
    label.className = 'label';
    label.innerText = name;
    
    item.appendChild(img);
    item.appendChild(label);

    return item;
}

function randomComputerPick() {
    var choices = ['rock', 'paper', 'scissors'];
    var pick = Math.floor(Math.random() * choices.length);

    return choices[pick];
}

function playerClickedRock() {
    var computer = randomComputerPick();
    var player = 'rock';

    showWinner(player, computer);
}

function playerClickedPaper() {
    var computer = randomComputerPick();
    var player = 'paper';

    showWinner(player, computer);
}

function playerClickedScissors() {
    var computer = randomComputerPick();
    var player = 'scissors';

    showWinner(player, computer);
}

function showWinner(playerPick, computerPick) {
    var container = document.getElementById('container');
    container.innerHTML = '';

    var box1 = document.createElement('div');
    box1.className = 'box';

    container.appendChild(box1);

    var header1 = document.createElement('h2');
    header1.innerText = 'Player Picked';
    box1.appendChild(header1);

    var player = makeItem(playerPick);
    box1.appendChild(player);


    var box2 = document.createElement('div');
    box2.className = 'box';

    container.appendChild(box2);

    var header2 = document.createElement('h2');
    header2.innerText = 'Computer Picked';
    box2.appendChild(header2);

    var computer = makeItem(computerPick);
    box2.appendChild(computer);

    var winnerText = getWinner(playerPick, computerPick);
    var winner = document.createElement('h1');
    winner.innerText = winnerText;

    container.appendChild(winner);

    var retry = document.createElement('a');
    retry.href = 'javascript:pickOne()';
    retry.innerText = '(PLAY AGAIN)';
    container.appendChild(retry);
}

function getWinner(playerPick, computerPick) {
    if(playerPick == 'rock') {
        if(computerPick == 'rock') {
            return 'Tie Game.';
        } else if(computerPick == 'paper') {
            return 'You Lose!';
        } else {
            return 'You Win!!';
        }
    } else if(playerPick == 'paper') {
        if(computerPick == 'rock') {
            return 'You Win!!';
        } else if(computerPick == 'paper') {
            return 'Tie Game.';
        } else {
            return 'You Lose!';
        }
    } else {
        if(computerPick == 'rock') {
            return 'You Lose!';
        } else if(computerPick == 'paper') {
            return 'You Win!!';
        } else {
            return 'Tie Game.';
        }
    }
}

