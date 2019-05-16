//reset scores on page loads from the DOM
document.getElementById('bucks-scores').textContent = '0';
document.getElementById('celtic-scores').textContent = '0';


// flag for enable game.
var gamePlaying = true;
//reset counts sums to zero
var countBucks = 0;
var countCeltics = 0;


// GameDay label on loading page
document.getElementById('leading').textContent = 'Game to start';


//final lead points for bucks
var totalBucksLeadPoints = 0;
//final lead points for celtics
var totalCelticsLeadPoints = 0;


// get bucks scores
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
    // console.log(scores);
    //if is a 1 add 1 to it, to make it 2
    if( scores === 1 ){
      scores = scores + 1;  // gets a 2 or a 3
    }
    document.getElementById('bucks-points').textContent = scores + ' ' + 'Points';
    // console.log(scores); //temp

    // Adding scores
    countBucks = countBucks + scores;
    //validate if scores are more than 30 points show style as redish
    if( countBucks >= 5 ){
      var wonGame = document.getElementById('bucks-scores');
      wonGame.classList.add('teams-section--wongame');
      document.getElementById('leading').textContent = 'Bucks won the game!';
      gamePlaying = false;

      var myCheck = document.querySelector('.bucks-check');
      myCheck.classList.add('showOnWinBucks');

      totalLeadBucks();
      readLeads();
    }
    // We display the scores add to the count total to the DOM element.
     var mypoints = document.getElementById('bucks-scores').textContent = countBucks;
     return mypoints = bucksFinalPoints();

  }

});



function totalLeadBucks(){
  totalBucksLeadPoints++;
   return document.getElementById('buckstotal').textContent = totalBucksLeadPoints;

};


// get celtic scores
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
    document.getElementById('celtics-points').textContent = scores + ' ' + 'Points';

    countCeltics = countCeltics + scores;
    //validate if scores are more than 30 points show style as redish
    if( countCeltics >= 5 ){
      var wonGame = document.getElementById('celtic-scores');
      wonGame.classList.add('teams-section--wongame');
      document.getElementById('leading').textContent = 'The Celtics won the game!';

      var myCheckCeltic = document.querySelector('.celtics-check');
      myCheckCeltic.classList.add('showOnWinCeltics');

      gamePlaying = false;
      totalLeadCeltics();
      readLeads();
    }

    // We display the scores add to the count total to the DOM element.
     var mypoints = document.getElementById('celtic-scores').textContent = countCeltics;
     return mypoints = celticFinalPoints();
  }

});


function totalLeadCeltics(){
    totalCelticsLeadPoints++;
    document.getElementById('celticstotal').textContent = totalCelticsLeadPoints;
};

// Leading scores function
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

// read the final scores leads.
function readLeads(){
   var bucks = document.getElementById('buckstotal').textContent;
   console.log(bucks);
   var celtic = document.getElementById('celticstotal').textContent;
   // console.log(celtic);
   if( bucks > celtic ){
     document.getElementById('final-lead').textContent = ' Bucks Leads';
   }if ( bucks < celtic ){
     document.getElementById('final-lead').textContent = ' Celtic Leads';
   }if ( bucks == 2 && celtic == 0  ){
      document.getElementById('final-lead').textContent = ' Bucks won the Serie';
   }if ( bucks == 2 && celtic == 1  ){
      document.getElementById('final-lead').textContent = ' Bucks won the Serie';
    }if ( bucks == celtic ){
      document.getElementById('final-lead').textContent = ' Serie its tie';
    }

};
readLeads();
// reset all DOM elements
function resetDom(){
  // flag for enable game.
  gamePlaying = true;

  //reset scores on page loads from the DOM
  document.getElementById('bucks-scores').textContent = '0';
  document.getElementById('celtic-scores').textContent = '0';

  // GameDay label on loading page
  document.getElementById('leading').textContent = 'Game to start';

  // reset the sum scores
  countCeltics = 0;
  countBucks = 0;
  //remove class for winning team
  var wonGame = document.getElementById('bucks-scores');
  wonGame.classList.remove('teams-section--wongame');

  var wonGame = document.getElementById('celtic-scores');
  wonGame.classList.remove('teams-section--wongame');

  //reset the pointers DOM elements
  document.getElementById('bucks-points').textContent = '0' + ' ' + 'Points';
  document.getElementById('celtics-points').textContent = '0' + ' ' + 'Points';


  var myBcuksCeltic = document.querySelector('.bucks-check');
  var myCheckCeltic = document.querySelector('.celtics-check');

  myBcuksCeltic.classList.remove('showOnWinBucks');
  myCheckCeltic.classList.remove('showOnWinCeltics');

};
// reset all DOM fields
document.getElementById('reset').addEventListener('click', resetDom);








/*
// pending from forum free code camp

var sum;
function addArg(firstArg, secondArg){

    sum = Number(firstArg) + Number(secondArg);

  console.log(sum);
};

addArg(5,7);

*/
