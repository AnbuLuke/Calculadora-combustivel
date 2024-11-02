function calcular (event){
    event.preventDefault();

    let alcooolInput = document.getElementById("alcool").value; 
    let gasolinaInput = document.getElementById("gasolina").value;
    let content =  document.getElementById("content");
    let textResult =  document.getElementById("textResult");
    let calculo = (alcooolInput / gasolinaInput);
    let gasolinaSpan = document.getElementById("gasolinaResult");
    let alcoolSpan = document.getElementById("alcoolResult");


    if(calculo < 0.7){

        textResult.innerHTML = "Compensa usar álcool";

    } 
    
    else{

        textResult.innerHTML = "Compensa usar gasolina";

        }

        gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
        alcoolSpan.innerHTML = "Álcool R$ " + alcooolInput;

    content.classList.remove("hide");
    
    
}