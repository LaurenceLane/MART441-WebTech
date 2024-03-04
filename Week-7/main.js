var myViewerArray = new Array();


class Viewer
{

    constructor(image, title, description, author, year)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    toString()
    {
        return "Image: " + this.image + ", " +
        "Title: " + this.title + ", " +
        "Description: " + this.description + ", " +
        "Author: " + this.author + ", " +
        "Year of Creation: " + this.year;
    }

    get theTitle()
    {
        return this.title;
    }

    get theImage()
    {
        return this.image;
    }

    get theDescription()
    {
        return this.description;
    }

    get theAuthor()
    {
        return this.author;
    }

    get theYear()
    {
        return this.year;
    }
}

function initializeArray()
{
    var myViewer = new Viewer("images/GayLiberationFront.png", "Gay Liberation Front marches on Times Square", "On August 29th, 1970, over 700 lgbt+ activists held a peaceful protest in Times Square against police harrassment.", "By: Diana Davies", "Taken in: 1970");
    var myViewer1 = new Viewer("images/DemonstratorsInDenver.png", "Demonstrators in Denver protesting the lack of wheelchair lifts on city buses", "Demonstrators in Denver blocked traffic to protest the lack of wheelchair lifts in public transport.", "By: Glen Martin", "Taken in: 1978");
    var myViewer2 = new Viewer("images/AutismNetwork.png", "Autistic and Proud, Autism Network International", "In 1993 Jim Sinclair gave a speech in Toronto, Canada, focusing on how parents of autistic children often mourn their child as if they had died when they're diagnosed. As well as the double-standards in how the same traits in autistic individuals are looked down upon, but praised in neurotypical individuals.", "By: National Museum of American History", "Taken in: 1993");
    var myViewer3 = new Viewer("images/504.png", "Sign 504 Now!", "A sign used by activists pushing for Section 504, prohibiting anyone getting federal aid from discriminating against anyone with a disability.", "By: National Museum of American History", "Taken in: 1977");
    var myViewer4 = new Viewer("images/DemonstrationNewYork.png", "Demonstration at City Hall, New York", "Demonstrators called for Intro 475, which now prohibits discrimination in housing, public accommodation, or employment based on sexual orientation", "By: Diana Davies", "Taken in: 1973");
    myViewerArray.push(myViewer);
    myViewerArray.push(myViewer1);
    myViewerArray.push(myViewer2);
    myViewerArray.push(myViewer3);
    myViewerArray.push(myViewer4);

}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewerArray.length);
    var viewer = myViewerArray[randomNumber];
    document.getElementById("title").innerHTML = viewer.title;
    document.getElementById("description").innerHTML = viewer.description;
    document.getElementById("author").innerHTML = viewer.author;
    document.getElementById("year").innerHTML = viewer.year;
    document.getElementById("image").src = viewer.image;

}