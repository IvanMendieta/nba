//reset scores on page loads from the DOM
document.getElementById('bucks-scores').textContent = '0';
document.getElementById('celtic-scores').textContent = '0';

//reset counts sums to zero
var countBucks = 0;
var countCeltics = 0;

// flag for enable game.
var gamePlaying = true;


// GameDay label on loading page
document.getElementById('leading').textContent = 'GameDay';

function bucksFinalPoints(value){
  var value = document.getElementById('bucks-scores').textContent;
  return Number(value);

};

// Bucks eventListener to add scores.
document.getElementById('bucks-add').addEventListener('click', function(){

  if(gamePlaying){
    var pointsBucks = document.getElementById('bucks-scores');

    // random generate scores
    var scores = Math.floor(Math.random() * 3) + 1;
    // if is a 1 add 1 to it, to make it 2
    if( scores === 1 ){
      scores = scores + 1;  // gets a 2 or a 3
    }

    // Adding scores
    countBucks = countBucks + scores;
    //validate if scores are more than 30 points show style as redish
    if( countBucks >= 30 ){
      var wonGame = document.getElementById('bucks-scores');
      wonGame.classList.add('teams-section--wongame');
      document.getElementById('leading').textContent = 'Bucks won the game!';
      gamePlaying = false;

    }
    // We display the scores add to the count total to the DOM element.
     var mypoints = document.getElementById('bucks-scores').textContent = countBucks;
     return mypoints = bucksFinalPoints();
  }

});


function celticFinalPoints(value){
  var value = document.getElementById('celtic-scores').textContent;
  return Number(value);

};

// Bucks eventListener to add scores.
document.getElementById('celtic-add').addEventListener('click', function(){

  if( gamePlaying ){
    // random generate scores
    var scores = Math.floor(Math.random() * 3) + 1;
    // if is a 1 add 1 to it, to make it 2
    if( scores === 1 ){
      scores = scores + 1;  // gets a 2 or a 3
    }


    countCeltics = countCeltics + scores;

    //validate if scores are more than 30 points show style as redish
    if( countCeltics >= 30 ){
      var wonGame = document.getElementById('celtic-scores');
      wonGame.classList.add('teams-section--wongame');
      document.getElementById('leading').textContent = 'The Celtic won the game!';
      gamePlaying = false;
    }

    // We display the scores add to the count total to the DOM element.
     var mypoints = document.getElementById('celtic-scores').textContent = countCeltics;
     return mypoints = celticFinalPoints();
  }


});


function leadingScores(){

  //labels
  var bucks = "Bucks!";
  var celtic = 'Celtics!';

  // call the functions warriors and hornets with their corresponding points.
  var totabucks = bucksFinalPoints();
  var totalceltic = celticFinalPoints();
  //var leadScore = Math.abs(totalWar - totalHor);
  var leadScore = Math.abs(totabucks - totalceltic);

  if( totabucks > totalceltic){
      document.getElementById('leading').textContent = bucks + ' are Leading by ' + leadScore;
    }else if( totabucks < totalceltic ) {
        document.getElementById('leading').textContent = celtic + ' are Leading by ' + leadScore;
    }else{
      document.getElementById('leading').textContent = bucks + ' and the  ' + celtic + ' are tie';
    }


};
document.getElementById('total').addEventListener('click', leadingScores);


function resetDom(){
  // flag for enable game.
  gamePlaying = true;

  //reset scores on page loads from the DOM
  document.getElementById('bucks-scores').textContent = '0';
  document.getElementById('celtic-scores').textContent = '0';

  // GameDay label on loading page
  document.getElementById('leading').textContent = 'GameDay';

  // reset the sum scores
  countCeltics = 0;
  countBucks = 0;
  //remove class for winning team
  var wonGame = document.getElementById('bucks-scores');
  wonGame.classList.remove('teams-section--wongame');

  var wonGame = document.getElementById('celtic-scores');
  wonGame.classList.remove('teams-section--wongame');

};
// reset all DOM fields
document.getElementById('reset').addEventListener('click', resetDom);
