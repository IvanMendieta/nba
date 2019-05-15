//reset scores on page loads from the DOM
document.getElementById('bucks-scores').textContent = '0';
document.getElementById('celtic-scores').textContent = '0';

//reset counts sums to zero
var countBucks = 0;
var countCeltics = 0;

// flag for enable game.
var gamePlaying = true;

// GameDay label on loading page
document.getElementById('leading').textContent = 'Game to start';

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
    if( countBucks >= 30 ){
      var wonGame = document.getElementById('bucks-scores');
      wonGame.classList.add('teams-section--wongame');
      document.getElementById('leading').textContent = 'Bucks won the game!';
      gamePlaying = false;
      totalLeadBucks();
      readLeads();
    }
    // We display the scores add to the count total to the DOM element.
     var mypoints = document.getElementById('bucks-scores').textContent = countBucks;
     return mypoints = bucksFinalPoints();

  }

});


//final lead points for bucks
var totalBucksLeadPoints = 0;
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
    console.log(scores); //temp
    // if is a 1 add 1 to it, to make it 2
    if( scores === 1 ){
      scores = scores + 1;  // gets a 2 or a 3
    }
    document.getElementById('celtics-points').textContent = scores + ' ' + 'Points';
    console.log(scores); //temp

    countCeltics = countCeltics + scores;
    //validate if scores are more than 30 points show style as redish
    if( countCeltics >= 30 ){
      var wonGame = document.getElementById('celtic-scores');
      wonGame.classList.add('teams-section--wongame');
      document.getElementById('leading').textContent = 'The Celtics won the game!';
      gamePlaying = false;
      totalLeadCeltics();
      readLeads();
    }

    // We display the scores add to the count total to the DOM element.
     var mypoints = document.getElementById('celtic-scores').textContent = countCeltics;
     return mypoints = celticFinalPoints();
  }

});

//final lead points for celtics
var totalCelticsLeadPoints = 0;
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
   var celtic = document.getElementById('celticstotal').textContent;

  if( Number(bucks) > Number(celtic) ){
    document.getElementById('final-lead').textContent = ' Bucks Leads';
  }else if ( bucks < celtic ){
    document.getElementById('final-lead').textContent = ' Celtic Leads';
  }else{
    document.getElementById('final-lead').textContent = ' Tie Game';
  }

};

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

};
// reset all DOM fields
document.getElementById('reset').addEventListener('click', resetDom);


var sum;
function addArg(firstArg, secondArg){

    sum = Number(firstArg) + Number(secondArg);

  console.log(sum);
};

addArg(5,7);
