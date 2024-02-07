//window.alert("test test")
/*
function fight(){
    window.alert("Fight");
};



fight();
var playerInfo.name = window.prompt("What is your robot's name?");

console.log("your name is " + playerInfo.name);*/

/*var enemy.names = ["Lucas", "Momo", "Lolo"];
console.log(enemy.names);

for(var i= 0; i < enemyInfo.length; i++){
    console.log(enemy.names[i],i,enemy.names[i] + " is at " + i + " index");
}
*/


// function to generate a random numeric value,random number 40-60
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max-min+1)+min);
    
    return value;
};

//var playerName = window.prompt("What is your robot's name?");
//var playerHealth = 100;
//var playerAttack = 10;
//var playerMoney = 10;
var getPlayerName = function(){
    var name = "";
    while(name === null || name === ""){
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
};


var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function (){
        if(this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!");
        }
        
    },
    upgradeAttack: function(){
        if(this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!");
        }
        
    }
};

console.log("Your name is "+playerInfo.name,",","Your HP is "+playerInfo.health,",",
            "Your Attack is "+playerInfo.attack,".");

var enemyInfo = [
    {name: "蓬蓬毛豆豆子", attack: randomNumber(10, 14)},
    {name: "momo", attack: randomNumber(8, 10)},
    {name: "lolo", attack:randomNumber(8, 10)}
];
//var enemyNames = ["蓬蓬毛豆豆子", "Momo", "Lolo"];
//var enemyHealth = 50;
//var enemyAttack = 10;

//console.log("Enemy name is "+enemy.names,",","Enemy HP is "+enemy.health,",",
//            "Enemy Attack is "+enemy.attack,".");

var fightOrSkip = function(){
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();

    // Enter the conditional recursive function call here!
    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerInfo.playerMoney = playerInfo.money - 10;
          console.log("playermoney: "+playerInfo.money);
          return true;
        }
    }
    return false;
}

         
var fight = function(enemy){
    // keep track of who goes first
    var isPlayerTurn = true;
    // randomly change turn order
    if(Math.random()>0.5){
        isPlayerTurn = false;
    }
  // repeat and execute as long as the enemy-robot is alive
  while(playerInfo.health>0 && enemy.health>0){

    if(isPlayerTurn){
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
            // if true, leave fight by breaking loop
            break;
        }
      
        //fightOrSkip();// <-- Replace code with this function call

        //   var promptFight = window.prompt("Please enter Fight or Skip");

        /*  if(promptFight === "skip" || promptFight === "SKIP"){
                
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure to skip?");
                // if yes (true), leave fight
                // if no (false), ask question again by running fight() again
                if (confirmSkip){
                    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                    // subtract money from playerInfo.money for skipping
                    playerInfo.money = Math.max(0, playerInfo.money - 2);
                    console.log("playerInfo.money: "+playerInfo.money);
                    break;
                }//else{
                    //fight(pickedenemy.name);
                //}
                
                
            }   */

  
        // Alert players that they are starting the round
        //window.alert("Welcome to Robot GladiatorsII!");


        //ask user to play or skip
        

        // if player choses to fight, then fight
        //if (promptFight === "fight" || promptFight === "FIGHT"){

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);

        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining." 
        );

        // check enemy's health
        if (enemy.health <= 0){
            window.alert(enemy.name + " has died");
            playerInfo.money = playerInfo.money + 20;
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
            window.alert(playerInfo.name + " 給了 " + enemy.name + "一頓胖揍. " + enemy.name + "現在眼冒金星");
        }
    // player gets attacked first
    }else{

        var damage = randomNumber(enemy.attack-3, enemy.attack);
        
        // remove player's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check player's health
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + "has died");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;

  }
};



//for(var i = 0; i < enemy.names.length; i++){
    //fight(enemy.names[i]);

//}

var startGame = function(){

    

    // reset player stats
    //playerInfo.health = 100;
    //playerInfo.attack = 10;
    //playerInfo.money = 10;
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        

        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        if(playerInfo.health>0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            
            // pick new enemy to fight based on the index of the enemy.names array
            //var pickedenemy.name = enemy.names[i];
            var pickedEnemyObj = enemyInfo[i];
            // reset enemy.health before starting new fight
            //enemy.health = randomNumber(40, 60);
            pickedEnemyObj.health = randomNumber(40, 60);
            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            //fight(pickedenemy.name);
            fight(pickedEnemyObj);
            // if we're not at the last enemy in the array
            // if player is still alive and we're not at the last enemy in the array
            if(playerInfo.health>0 && i<enemyInfo.length - 1){
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
    window.alert("The game has now ended. Let's see how you did!");

    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if(highScore === null){
        highScore = 0;
    }
    // if player has more money than the high score, player has new high score!
    if(playerInfo.money > highScore){
        localStorage.setItem("highscore",playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    }else {
        alert(playerInfo.name + " did not beat the high sore of " + highScore + "!");
    }

    // if player is still alive, player wins!
    if(playerInfo.health>0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
    shopOptionPrompt = parseInt(shopOptionPrompt);
    // use switch to carry out action
    switch(shopOptionPrompt){
        case 1:
            /*if(playerInfo.money >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
                console.log(playerInfo.name + "now has" + playerInfo.health);
            }else{
                window.alert("no money");
            }       */
            playerInfo.refillHealth();
            break;
        case 2:
            /*if(playerInfo.money >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            }else{
                window.alert("no money");
            }   */
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
        case 4:
            endGame();
            break;
        default:
            window.alert("You did not pick a valid option. Try again.")
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};



startGame();