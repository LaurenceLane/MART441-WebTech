        function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("story");
            if(myChoice === "Jump")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice2").style.display="block";
                document.getElementById("btnSubmit2").style.display="block";
                

                myQuestion.innerHTML = "He\'s been practicing, of course he can do this, even if all that training has been clumsily practicing parkour at the old skatepark. He takes a few steps back, readying himself before running towards the edge.";
            }
            else if(myChoice === "Don't")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice3").style.display="block";
                document.getElementById("btnSubmit3").style.display="block";
                myQuestion.innerHTML = "Sure, he\'s trained for this, but all that training has been clumsily practicing parkour at the old skatepark. There\'s over 30 feet between him and the ground if he falls short, maybe another night. He heads back towards the fire escape, scrambling down the creaky metal stairs.";

            }
            else
            {
                myQuestion.innerHTML = "Invalid answer";
            }
        
        }
        function getChoice2()
        {
            var answer = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("story");
            if(answer === "Jump!")
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice3").style.display="block";
                document.getElementById("btnSubmit3").style.display="block";
                myQuestion.innerHTML = "Roswell reaches the edge, leaping across the gap, adrenalin running through his veins. Grin plastered on his face, he lands on all fours, quickly rising back up. He\'s lightning in a bottle. But does he keep going?";
            }
            else if(answer === "Stop!")
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block";
                myQuestion.innerHTML = "Roswell\'s almost at the edge when it hits him, he can\'t do this. There\'s over 30 feet between him and the ground if he falls short. But it\'s too late to stop and his hesitation causes him to stumble, barely catching himself before he\'s in the air. Ice runs through his veins, he\'ll make it, but he has no idea on how he\'s going to land.";
             
            }
        }

        function getChoice3()
        {
            var answer = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("story");
            if(answer === "That's enough")
            {
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";
                
                document.getElementById("choice5").style.display="block";
                document.getElementById("btnSubmit5").style.display="block";
                myQuestion.innerHTML = "The adrenaline seeps out of him, leaving Roswell breathless. His hands are shaking, as glad as he is that he\'s done it, that\'s enough for tonight.";
            }
            else if(answer === "Go further")
            {
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";
                
                document.getElementById("choice6").style.display="block";
                document.getElementById("btnSubmit6").style.display="block";
                myQuestion.innerHTML = "He can't stop, quickly picking up speed and making the next gap between buildings. A laugh bubbles out of him, he\'s done it." + "<br> Restart or Quit";
            }
        }


        function getChoice4()
        {
            var answer = document.getElementById("choice4").value;
            var myQuestion = document.getElementById("story");
            if(answer === "Try to land on his feet")
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block";
                myQuestion.innerHTML = "Hoping for the best, Roswell hits the roof feet first. He curses as a sharp pain races up his ankle, sending him tumbling. He lays there for a moment, gasping for breath as the adrenalin rush comes down. He\'s definitely sprained it, it\'ll be awhile before he can try again." ;
            }
            else if(answer === "Tuck and roll")
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice7").style.display="block";
                document.getElementById("btnSubmit7").style.display="block";
                myQuestion.innerHTML = "He\'s done this before, he knows what to do. He leans forward, hitting the ground on his hand and forearm, rolling forwards. Rolling forward, he slows to a stop, laying on the cold concrete. He\'s sore and bruised from the impact, but at least nothing\'s busted.";

            }
        }

        function getChoice5()
        {
            var answer = document.getElementById("choice5").value;
            var myQuestion = document.getElementById("story");
            if(answer === "Restart")
            {
                document.getElementById("choice5").style.display="none";
                document.getElementById("btnSubmit5").style.display="none";
                
                document.getElementById("choice").style.display="block";
                document.getElementById("btnSubmit").style.display="block";

                myQuestion.innerHTML =  "Roswell stands on the roof of an old brick building, shuffling from foot to foot, staring out to the next rooftop, roughly 6 feet away. Logically he knows he can make the jump, but should he?";
            }
            else if(answer === "Quit")
            {
                document.getElementById("choice5").style.display="none";
                document.getElementById("btnSubmit5").style.display="none";

                myQuestion.innerHTML = "Thank you!";
                document.getElementById("key").style.visibility = 'visible';
  
            }
        }

        function getChoice6()
        {
            var answer = document.getElementById("choice6").value;
            var myQuestion = document.getElementById("story");
            if(answer === "Restart")
            {
                document.getElementById("choice6").style.display="none";
                document.getElementById("btnSubmit6").style.display="none";
                
                document.getElementById("choice").style.display="block";
                document.getElementById("btnSubmit").style.display="block";

                myQuestion.innerHTML =  "Roswell stands on the roof of an old brick building, shuffling from foot to foot, staring out to the next rooftop, roughly 6 feet away. Logically he knows he can make the jump, but should he?";
            }
            else if(answer === "Quit")
            {
                document.getElementById("choice6").style.display="none";
                document.getElementById("btnSubmit6").style.display="none";

                myQuestion.innerHTML = "Thank you!";
                document.getElementById("key").style.visibility = 'visible';
  
            }
        }

        
        function getChoice7()
        {
            var answer = document.getElementById("choice7").value;
            var myQuestion = document.getElementById("story");
            if(answer === "Restart")
            {
                document.getElementById("choice7").style.display="none";
                document.getElementById("btnSubmit7").style.display="none";
                
                document.getElementById("choice").style.display="block";
                document.getElementById("btnSubmit").style.display="block";

                myQuestion.innerHTML =  "Roswell stands on the roof of an old brick building, shuffling from foot to foot, staring out to the next rooftop, roughly 6 feet away. Logically he knows he can make the jump, but should he?";
            }
            else if(answer === "Quit")
            {
                document.getElementById("choice7").style.display="none";
                document.getElementById("btnSubmit7").style.display="none";

                myQuestion.innerHTML = "Thank you!";
                document.getElementById("key").style.visibility = 'visible';
  
            }
        }

