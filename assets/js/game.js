//window.alert("test test")
/*
function fight(){
    window.alert("Fight");
};



fight();
var playerName = window.prompt("What is your robot's name?");

console.log("your name is " + playerName);*/

/*var enemyNames = ["Lucas", "Momo", "Lolo"];
console.log(enemyNames);

for(var i= 0; i < enemyNames.length; i++){
    console.log(enemyNames[i],i,enemyNames[i] + " is at " + i + " index");
}
*/


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// check to see if the value of the playerHealth variable is greater than 0
/*if (playerHealth>0){
    console.log(playerName + " is still alive");
};*/

console.log("Your name is "+playerName,",","Your HP is "+playerHealth,",",
            "Your Attack is "+playerAttack,".");


var enemyNames = ["Lucas", "Momo", "Lolo"];
//var enemyHealth = 50;
var enemyAttack = 2;

//console.log("Enemy name is "+enemyNames,",","Enemy HP is "+enemyHealth,",",
//            "Enemy Attack is "+enemyAttack,".");


         
var fight = function(enemyname){
  // repeat and execute as long as the enemy-robot is alive
  while(playerHealth>0 && enemyHealth>0){

    var promptFight = window.prompt("Please enter Fight or Skip");

    if(promptFight === "skip" || promptFight === "SKIP"){
         
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure to skip?");
        // if yes (true), leave fight
        // if no (false), ask question again by running fight() again
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log("playermoney: "+playerMoney);
            break;
        }//else{
            //fight(pickedEnemyName);
        //}
        
        
    }

  
  // Alert players that they are starting the round
  //window.alert("Welcome to Robot GladiatorsII!");


  //ask user to play or skip
  

  // if player choses to fight, then fight
  //if (promptFight === "fight" || promptFight === "FIGHT"){

  

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyNames[i] + " has died");
        break;
    }
    else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
    }


    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0){
        window.alert(playerName + "has died");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  //}
  //else{
    window.alert("please enter fight or skip")
  //}

  }
};



//for(var i = 0; i < enemyNames.length; i++){
    //fight(enemyNames[i]);

//}

for(var i = 0; i < enemyNames.length; i++) {

    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    if(playerHealth>0){
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));
    }else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 20;

    // use debugger to pause script from running and check what's going on at that moment in the code
    //debugger;
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    
}
