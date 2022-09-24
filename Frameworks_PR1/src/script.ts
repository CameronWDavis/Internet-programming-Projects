//Author Cameron Davis 
//Project 1 Web Dev Frameworks 


//global declaration of an array 
const arrayTest: number[] = []; 
//main function
function main(){
    //getting elements from html page
    const name = document.getElementById("name") as HTMLInputElement; 
    const rating = document.getElementById("Rating") as HTMLInputElement;
    const review = document.getElementById("review") as HTMLInputElement; 
    const template = document.getElementById("myTemplate");
    const commentInsert = document.getElementById("commentHere"); 
    const avgRating = document.getElementById("avg_rating"); 
    var date = new Date().toLocaleString(); 
    //resetting the value of the txt content so new average can show
    avgRating!.textContent = null; 
    

    //assigning values 
    const nameValue = name?.value; 
    const ratingValue = rating?.value; 
    const reviewValue = review?.value; 
    let averageNumber = ratingValue; 
    let y = parseFloat(averageNumber); 
    let p = parseFloat(nameValue);

    //input checking to make sure name is not a number
    if(!isNaN(p))
    {
        alert("Your name cannot be a number!");
        return false; 
    }
    
    //input checking to make sure rating is a number and is bounded
    if(isNaN(y)){
        alert("Rating must be a number! Please enter a number"); 
        return false; 
    }

    if(y > 5 || y < 0 ){
        alert("Rating has to be on a scale of  0 - 5 "); 
        return false; 
    }

    //getting average from function
    let score: number = calcAverage(y) ;
    score = Math.round(score * 10) / 10; 
    let stringInput = "Average Review Score:  " + score; 
    avgRating!.textContent = stringInput; 
    

    //creating elements add adding them to the div
    let newH2 = document.createElement('h2'); 
    let newH21 = document.createElement('h2');
    let inputBreak = document.createElement('br');
    let h2Title = document.createElement('h2');
    let newP = document.createElement('h3');
    let dateUpdate = document.createElement("h2");
    var newName = "Customer: " + nameValue;
    var newRating = "Rating: " + ratingValue;
    var title = "Comments"
    var newReview =  reviewValue; 

    //this is my file for 
    newH2.textContent = newName; 
    newH21.textContent = newRating;
    newP.textContent = newReview; 
    h2Title.textContent = title; 
    dateUpdate.innerHTML = date; 

    //appending my elements to the div
    commentInsert?.appendChild(newH2); 
    commentInsert?.appendChild(newH21);
    commentInsert?.appendChild(h2Title);
    commentInsert?.appendChild(newP); 
    commentInsert?.appendChild(inputBreak); 
    commentInsert?.appendChild(dateUpdate); 

    
    return false; 

}


//function to calculate the average 
function  calcAverage(x: number)
{
    //function that adds the rating to an array and then gets the average
    let score = 0 ; 
    arrayTest.push(x); 
        for(let i = 0; i < arrayTest.length; i++){
            score += arrayTest[i]; 
        }
        score = score / arrayTest.length; 
    
    return score; 
}