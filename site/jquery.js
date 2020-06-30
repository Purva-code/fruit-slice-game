var playing = false;
var score;
var trialsleft;
var step;
var action; //used for setInterval
var fruits = ['apple', 'cherry', 'grapes','mango','orange','peach','pear','pineapple','watermelon'];
$(function(){
    //click on start reset button
   $("#startreset").click(function(){
       //are we playing?
       if(playing == true){
           //reload page
           location.reload();
          }
       else{
           //we are not playing
           playing = true; //game initiated
           //set score to 0
           score = 0;
           $("#scorevalue").html(score);
           
           //show trials left
           $("#trialsleft").show();
           trialsleft = 3;
           addHearts();
           
           //change button text
           $("#startreset").html("Reset Game");
       }
       
       //hide game over
       $("#gameOver").hide();
       
       //start sending fruits
       startAction();
       
   });
    if (window.matchMedia('(max-width: 768px)').matches){
$("#fruit1").swipe(function(){
      score++;
        $("#scorevalue").html(score); //update score
        $('#fruit1').css('cursor', 'crosshair');
//        document.getElementById("slicesound").play();
        //or
        $("#slicesound")[0].play(); //play sound
        
        //stop fruit
        clearInterval(action);
        
        //hidefruit
        $("#fruit1").hide("explode",500); //slice fruit
        
        //send new fruit
        setTimeout(startAction, 600); 
   });
}
    
    $("#fruit1").mouseover(function(){
       score++;
        $("#scorevalue").html(score); //update score
        $('#fruit1').css('cursor', 'crosshair');
//        document.getElementById("slicesound").play();
        //or
        $("#slicesound")[0].play(); //play sound
        
        //stop fruit
        clearInterval(action);
        
        //hidefruit
        $("#fruit1").hide("explode",500); //slice fruit
        
        //send new fruit
        setTimeout(startAction, 600);
    });
    


function addHearts(){
    $("#trialsleft").empty();
    for(i=0; i<trialsleft; i++){
               $("#trialsleft").append('<img src="images/heart.png" class="life">');
           }
}
function startAction(){
    
    //generate a fruit
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left':Math.round(500*    Math.random()),'top':-30});
    if (window.matchMedia('(max-width: 768px)').matches)
{
   $("#fruit1").css({'left':Math.round(200*    Math.random()),'top':-30});
}
    
    //random position
    
    //generate a random step
    step = 1*Math.round(5*Math.random()); //change step
    
    //move fruit down by one step every 10ms
    action = setInterval(function(){
        $("#fruit1").css('top',$("#fruit1").position().top + step); //move fruit by one step
        
        //check if the fruit is too low
        if($("#fruit1").position().top>$("#question").height()){
            //check if we have trials left
            if(trialsleft>1){
                //generate a fruit
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left':Math.round(500*    Math.random()),'top':-30});
    if (window.matchMedia('(max-width: 768px)').matches)
{
   $("#fruit1").css({'left':Math.round(200*    Math.random()),'top':-30});
}
    
    //random position
    
    //generate a random step
    step = 1*Math.round(5*Math.random()); //change step
                //reduce trials by one
                trialsleft--;
                
                //populate trialsLeft box
                addHearts();
                
               }else{ //game over
                   playing = false; //we are not playing anymore
                   $("#startreset").html("Start Game"); //change button to Start Game
                   $("#gameOver").show();
                   $("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score +'</p>');
                   
                   $("#trialsleft").hide();
                   
                   stopAction();
               }
        }
        
        
    },10);
    
}
//generate a random fruit
function chooseFruit()
{
    $("#fruit1").attr('src','images/' + fruits[Math.round(8*Math.random())] +'.png');
}

//Stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    
    
    
});

//click on start reset button
 //are we playing?
  //yes
   //reload page
  //no
   //show trials left
   //change button text to "reset game"
   //1.create a random fruit
   //define a random step
   //2.move fruit down by one step every 30sec
     //is fruit too low?
        //no->repeat nb2
        //yes->any trials left?
           //yes: repeat nb1
           //no: show game over, button text: start game

//slice a fruit
   //play sound
      //explode fruit
     
   