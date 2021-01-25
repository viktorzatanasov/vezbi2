function evenOddArrays(){
    var numberElements = prompt("how many elements do you want");
    var originalArray = [];
    var oddArray = [];
    var evenArray = [];
    for(let i =0 ; i<numberElements;i++)
    {
        originalArray[i]=prompt("vnesete element");
        if(isNaN(originalArray[i])==false){
        
        if(originalArray==0) continue; 

        else if(originalArray[i]%2==0)
        evenArray.push(originalArray[i]);

        else oddArray.push(originalArray[i]);
        }
        else continue;
    }
    console.log(oddArray," ",evenArray);
    return [oddArray,evenArray];
    
    
}
evenOddArrays();
let oddArrayPrint = evenOddArrays[0];
let evenArrayPrint = evenOddArrays[1];
console.log(oddArrayPrint); 
console.log(evenArrayPrint);