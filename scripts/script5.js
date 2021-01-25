function arrayCheck ()
{
    let numberOfElements = prompt("vnesete kolku elementi ke ima nizata");
    let inputArray = [];
    let newArray = [];
    for (let i = 0; i<numberOfElements;i++)
    {
        inputArray[i]=prompt("vnesete go elementot");
    }
    for(let i = 0; i<numberOfElements;i++)
    {
        
        if(inputArray[i] == "NaN"|| inputArray[i] == "false")
        continue;
        else 
        {
            newArray[i] = inputArray[i];
        }
    }
    console.log(newArray);
}
arrayCheck();