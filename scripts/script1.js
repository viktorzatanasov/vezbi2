function numberCheck(){
    let number = prompt("enter your number");
    let brojac = 0;
    if(isNaN(number)==false)
    {
        
        number = Number(number);
        console.log(number);
         if(number<0)
        {
          console.log("your number is negative")
        }
        else if(number>0)  console.log("your number is positive");
        else if(number==0) console.log("your number is 0");
        if(number%2==0)
        {
            console.log("your number is even");
        }
        else console.log("your number is odd");
        while(number>0)
        {
            brojac++;
            number = number/10;
        }
        console.log(`your number has ${brojac}digits`);
        
        } 
    else alert("you havent entered a number");
    }
    numberCheck();