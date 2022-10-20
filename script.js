function calculation(){

  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var bmi = weight / (height ** 2);
  
  if(bmi <=18.5 ){
    document.getElementById('result').value = "Недостаточный вес"; 
   }else if (bmi <=25 ) {
    document.getElementById('result').value = "Нормально";
   }else if(bmi <=30){
    document.getElementById('result').value = "У вас излишек веса";
   }
   else if(bmi >30){
    document.getElementById('result').value = "Ожирение";

  }
  
}