//window.alert("test test")
/*
function fight(){
    window.alert("Fight");
};

fight();
var playerName = window.prompt("What is your robot's name?");

console.log("your name is " + playerName);*/

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// check to see if the value of the playerHealth variable is greater than 0
/*if (playerHealth>0){
    console.log(playerName + " is still alive");
};*/

console.log("Your name is "+playerName,",","Your HP is "+playerHealth,",",
            "Your Attack is "+playerAttack,".");

var enemyName = "Lucas";
var enemyHealth = 50;
var enemyAttack = 2;

console.log("Enemy name is "+enemyName,",","Enemy HP is "+enemyHealth,",",
            "Enemy Attack is "+enemyAttack,".");

var fight = function(){
    
  // Alert players that they are starting the round
  window.alert("Welcome to Robot GladiatorsII!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0){
    window.alert(enemyName + "has died");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }


  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0){
    window.alert(playerName + "has died");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }


};

fight();