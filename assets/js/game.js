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
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyNames + " has died");
        break;
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }


    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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

var startGame = function(){

    // reset player stats
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {

        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        if(playerHealth>0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            enemyHealth = 20;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            // if we're not at the last enemy in the array
            // if player is still alive and we're not at the last enemy in the array
            if(playerHealth>0 && i<enemyNames.length - 1){
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                // if yes, take them to the store() function
                if(storeConfirm){
                    shop();
                }                
            };
        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }    
            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;
    }
    //End the game
    endGame();
    //Play again
    //startGame();
};

// function to end the entire game
var endGame = function(){
    // if player is still alive, player wins!
    if(playerHealth>0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        // restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    
};
//Function for shop
var shop = function(){
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    // use switch to carry out action
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                console.log(playerName + "now has" + playerHealth);
            }else{
                window.alert("no money");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }else{
                window.alert("no money");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.")
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};



startGame();