function Submit(){
    
    let firstInput = document.getElementById("Input").value;
    let secondInput = document.getElementById("Input2").value;
    if(isNaN(firstInput)==false && isNaN(secondInput)==false)
    {
    let area = Number(firstInput) + Number(secondInput);
    document.getElementById("final").style.color = "black";
    document.getElementById("final").style.fontSize = "20px";
    document.getElementById("final").innerText = `the area is ${area}` ;
    }
    else alert("wrong input");
    

}
function changepara(){
    let firstInput = document.getElementById("Input").value;
    let secondInput = document.getElementById("Input2").value;
    let parameter = 2 * (Number(firstInput)+Number(secondInput));
    document.getElementById("final").style.color = "red";
    document.getElementById("final").style.fontSize = "55px";
    document.getElementById("final").innerText = `the parameter is ${parameter}`;
}