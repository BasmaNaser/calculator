const displayed=document.getElementById("display");
function appendToDisplay(input)
{
       displayed.value += input;

}
function cleardisplay()
{
    displayed.value="";
}
function clearone() {
   var sum=displayed.value;
  var sum2="";
   var length=sum.length;
   for(var i=0;i<length-1;i++)
   {
    sum2+=sum[i];
   }
   displayed.value=sum2;
}
function calc(){
   try{
       displayed.value = eval(displayed.value);
   }
   catch{
       displayed.value = "ERROR";
   }
}