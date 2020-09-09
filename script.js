function compute()
{
    p = document.getElementById("principal").value;
    r= document.getElementById("rate").value;
    y= document.getElementById("years").value;

 
    //logic for principal amount to be a positive number
    function num() {
          var v=document.getElementById("principal").value;
          if(v<=0)
          {
              alert('value should be a positive number')
          } 
        }
    
    // logic to read slider value and display it
    function Slider(val) {
          document.getElementById('slider').value=val; 
        }
    
    // var slider=document.getElementById("slider");
    // slider.innerHTML=r;

    // logic to get the actual year 
    var dateobj = new Date(); 
    var B = dateobj.getFullYear();
    year = B+y; 
    
     
    // interest calculation
    var interest = (p*r*y)/100;


    // amount calculation
    var amt=p+interest;
    var result=document.getElementById("result");
    result.innerHTML="If you deposit "+p+", at an interest rate of "+r+"%. You will receive an amount of " +amt+" ,in the year"+year;
    

}
