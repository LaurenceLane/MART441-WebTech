
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image8", "image9", "image10", "image11", "image12"];

var blankImagePath = "media/Back.png";

var actualImages = new Array();
    
function printBlanks()
{
   
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
    
}

function createRandomImageArray()
{
    var actualImagePath = ["media/Calico.png", "media/Roswell.png", "media/Elanor.png", "media/Howdy.png", "media/Kelpie.png", "media/Key.png", "media/Neko.png", "media/PicoriSunrise.png", "media/Pietro.png", "media/Rush.png", "media/StagBeetle.png", "media/Stop.png"];
    var count = [0,0,0,0,0,0,0,0,0,0,0,0];
    while(actualImages.length < 24)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
  
    
    
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
    
}