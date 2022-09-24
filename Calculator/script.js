/*
Author: Cameron Davis 
StudentID: N01368602
Class: Internet Programming
Teacher: Jim Littleton 

Purpose: The purpose of this program is to use array manipulation in javascript to calculate 9 mathmatical formulas. Then display them in the browser. 
*/
//This function interacts directly with the form field it is the main function in this program and transfers all the data
function performStatistics()
{

    //variables 
   var userInput = document.getElementById("input-area").value;
   var userNumber = userInput.split(" "); 
   let j = 0; 
   var counter = 0; 
   //This for loop finds the strings turns them into Integer data types and counts the zeros
   for(let i = 0; i < userNumber.length; i++)
   {
    //turn items into integers
    userNumber[i] = parseInt(userNumber[i]);
    //find the zero and increment the counter if zero is found
    if(userNumber[i] === 0)
     {
        counter++;
     }

    } 
    //filter the array into a new array this removes the NaN and zero values 
    var arrayNumber = userNumber.filter(Number);
    //zeros are readded since order does not matter yet and they can be pushed onto the end
    while(j < counter)
    {
        arrayNumber.push(0); 
        j++; 
    }
    //calling our textfields and ther functions with our new array 
   document.getElementById("max").value = findMax(arrayNumber);
   document.getElementById("minimum").value = findMin(arrayNumber); 
   document.getElementById("sum").value = calcSum(arrayNumber); 
   document.getElementById("mean").value = calcMean(arrayNumber);
   document.getElementById("median").value = calcMedian(arrayNumber); 
   document.getElementById("variance").value = calcVariance(arrayNumber);
   document.getElementById("stdDev").value = calcStdDev(arrayNumber); 

   
   
//return false to avoid errors
return false; 
} 

/*
This function is used to find the max how it works is it starts at the first index and loops through the array seeing if any index is greater than it is currently 
*/
function findMax(array)
{
    //start the variable at the first index
    let max = array[0]; 
    //loop through the array seeing if values are greater
    for(let i = 1; i < array.length; i++)
    {
        //if they are greater than set that equal to the max
        if(array[i] > max)
        {
            max = array[i]; 
        }
    }

    //max is converted to 2 decimal places per program requirment 
    max = max.toFixed(2); 
    //return the max value 
    return max; 

}
// this is the function for find min 
function findMin(array)
{
    //declare min as first index
    let min = array[0]; 
    //loop through the array 
    for(let i = 1; i < array.length; i++)
    {
        if(array[i] < min)
        {
            min = array[i]; 
        }
    }

    min = min.toFixed(2); 
    return min; 
}

function calcVariance(array)
{
    let mean = calcMean(array);
    let variance = 0; 
    let size = array.length; 
    let sumVar = 0;

    for(let i = 0; i < size; i++)
    {
        //formula for vaiance 
        sumVar += ((array[i] - mean) ** 2);  
    } 
    variance = sumVar / size ; 
    variance = variance.toFixed(2); 
    return variance
}

function calcStdDev(array)
{
    //all standard deviation is the square root of the variance 
    let variance = calcVariance(array); 
    let std_dev = Math.sqrt(variance);
    std_dev = std_dev.toFixed(2);
    return std_dev; 
}

function calcSum(array)
{
    var sum = 0;
    // loop through the array and
    for(var i = 0; i < array.length; i++)
    {
        sum += array[i]; 
    }
    sum = sum.toFixed(2); 
    return sum; 

}




function calcMean(array)
{
    let mean = 0; 
    let arraySolution = calcSum(array); 
    
    mean = arraySolution/ array.length;
    mean = mean.toFixed(2); 

return mean; 
}

function calcMedian(array)
{
    array = array.sort(function(x,y){return x - y}); 
    let size = array.length; 
    let median = 0;
    let middle = Math.floor(size / 2);

    if(size % 2 === 0)
    {

        median = (array[middle - 1] + array[middle]) / 2.0;
        median = median.toFixed(2); 
        return median; 
    }
    
    median = array[middle] / 1.0;
    median = median.toFixed(2);
    return median; 
}





