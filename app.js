// function show(){
    
document.getElementById("btn").onclick=function(){
    // let screen=document.getElementById("status").value; 
    let heit=parseFloat(document.getElementById("metre").value);
    let wht=parseFloat(document.getElementById("newton").value);
    // console.log("Height="+heit);
    // console.log("weight="+wht);
    let bmi=(wht)/((heit*heit)/10000);
    // console.log("BMI="+bmi);
    bmi=bmi.toFixed(2);
    check(heit,wht,bmi);


 }
 function check(heit,wht,bmi){
    // screen.value="";
    if((heit<243 && heit>30) && (wht<635 && wht>1.5)){
    //    console.log("you are in if block")
        if(bmi<18.5){
            document.getElementById("output-2").textContent=""; 
            document.getElementById("output-3").textContent=""; 
            document.getElementById("output-4").textContent=""; 
            document.getElementById("output-5").textContent=""; 
            document.getElementById("output-1").textContent=`Your BMI :${ bmi} you are underweight`;
            
        }
        else if((bmi>=18.5)&&(bmi<=24.99)){

            document.getElementById("output-1").textContent=""; 
            document.getElementById("output-3").textContent=""; 
            document.getElementById("output-4").textContent=""; 
            document.getElementById("output-5").textContent=""; 

            document.getElementById("output-2").textContent=`Your BMI :${ bmi} ,you are Normal congrats.. keep healthy`;
        }
        else if((bmi>=25.0)&&(bmi<=29.99)){
          
            document.getElementById("output-2").textContent=""; 
            document.getElementById("output-1").textContent=""; 
            document.getElementById("output-4").textContent=""; 
            document.getElementById("output-5").textContent=""; 

            document.getElementById("output-3").textContent=`Your BMI :${ bmi} you are Over weight`;
        }
        else if((bmi>=30.0)&&(bmi<=34.99)){

            document.getElementById("output-2").textContent=""; 
            document.getElementById("output-3").textContent=""; 
            document.getElementById("output-4").textContent=""; 
            document.getElementById("output-1").textContent=""; 

            document.getElementById("output-5").textContent=`Your BMI :${ bmi} you are under Obese-1 category , `;
        }
        else if((bmi>=35.0)&&(bmi<=39.99)){

            document.getElementById("output-2").textContent=""; 
            document.getElementById("output-3").textContent=""; 
            document.getElementById("output-4").textContent=""; 
            document.getElementById("output-1").textContent=""; 

            document.getElementById("output-5").textContent=`Your BMI :${ bmi} you are under Obese-2 category , `;
        }
        else{

            document.getElementById("output-2").textContent=""; 
            document.getElementById("output-3").textContent=""; 
            document.getElementById("output-4").textContent=""; 
            document.getElementById("output-1").textContent=""; 

            document.getElementById("output-5").textContent=`Your BMI :${ bmi} you are under Obese category , `;
        }
        

    }
    else{
        // console.log("you are in else block")
        document.getElementById("output-2").textContent=""; 
            document.getElementById("output-3").textContent=""; 
            document.getElementById("output-4").textContent=""; 
            document.getElementById("output-1").textContent=""; 

        document.getElementById("output-5").textContent=" Wrong input entered,pls check..";
    }
           
}



