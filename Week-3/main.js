function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    var key =   document.getElementById("key").style.visibility;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "He\'s been practicing, of course he can do this, even if all that training has been clumsily practicing parkour at the old skatepark. He takes a few steps back, readying himself before running towards the edge.";
        document.getElementById("choice1").innerHTML = "Jump!";
        document.getElementById("choice2").innerHTML = "Stop!";

    } else if (choice == 1 && answer1 == "Jump!") {
        document.getElementById("story").innerHTML = "Roswell reaches the edge, leaping across the gap, adrenalin running through his veins. Grin plastered on his face, he lands on all fours, quickly rising back up. He\'s lightning in a bottle. But does he keep going?";
        document.getElementById("choice1").innerHTML = "Go further";
        document.getElementById("choice2").innerHTML = "That\'s enough";

    } else if (choice == 2 && answer2 == "Stop!") {
        document.getElementById("story").innerHTML = "Roswell\'s almost at the edge when it hits him, he can\'t do this. There\'s over 30 feet between him and the ground if he falls short. But it\'s too late to stop and his hesitation causes him to stumble, barely catching himself before he\'s in the air. Ice runs through his veins, he\'ll make it, but he has no idea on how he\'s going to land.";
        document.getElementById("choice1").innerHTML = "Try to land on his feet";
        document.getElementById("choice2").innerHTML = "Tuck and roll";

   
    // Endings

    } else if (choice == 2 && answer2 == "No") {
    document.getElementById("story").innerHTML = "Sure, he\'s trained for this, but all that training has been clumsily practicing parkour at the old skatepark. There\'s over 30 feet between him and the ground if he falls short, maybe another night. He heads back towards the fire escape, scrambling down the creaky metal stairs.";
    document.getElementById("choice1").innerHTML = "Restart";
    document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 1 && answer1 == "Go further") {
    document.getElementById("story").innerHTML = "He can\'t stop, quickly picking up speed and making the next gap between buildings. A laugh bubbles out of him, he\'s done it." + "<br> Restart?";
    document.getElementById("choice1").innerHTML = "Restart";
    document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 2 && answer2 == "That\'s enough") {
    document.getElementById("story").innerHTML = "The adrenaline seeps out of him, leaving Roswell breathless. His hands are shaking, as glad as he is that he\'s done it, that\'s enough for tonight." + "<br> Restart?";
    document.getElementById("choice1").innerHTML = "Restart";
    document.getElementById("choice2").innerHTML = "Quit";
}
    else if (choice == 1 && answer1 == "Try to land on his feet") {
        document.getElementById("story").innerHTML = "Hoping for the best, Roswell hits the roof feet first. He curses as a sharp pain races up his ankle, sending him tumbling. He lays there for a moment, gasping for breath as the adrenalin rush comes down. He\'s definitely sprained it, it\'ll be awhile before he can try again." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 2 && answer2 == "Tuck and roll") {
        document.getElementById("story").innerHTML = "He\'s done this before, he knows what to do. He leans forward, hitting the ground on his hand and forearm, rolling forwards. Rolling forward, he slows to a stop, laying on the cold concrete. He\'s sore and bruised from the impact, but at least nothing\'s busted." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";

    } else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "Roswell stands on the roof of an old brick building, shuffling from foot to foot, staring out to the next rooftop, roughly 6 feet away. Logically he knows he can make the jump, but should he?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
        document.getElementById("key").style.visibility = 'hidden';

    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "Thank you!";
        document.getElementById("key").style.visibility = 'visible';
    }


}