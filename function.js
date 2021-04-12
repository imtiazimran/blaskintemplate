var images = ["image/bgimg2.jpg","image/img1.jpg","image/img2.jpg","image/img3.jpg","image/img4.jpg","image/img5.jpg","image/ladywithglass.jpg","image/mountain.jpg","image/tree.jpg"];

var eliment= document.querySelector(".sliderimg");
var count= 0;

function next() {
    count++;
   
   if(count >= images.length){
       eliment.src = "bgimg2.jpg"
       count=0;
       eliment.scr = images[count];
   }
   else{
       eliment.src = images[count];
   }

};

var eliment2= document.querySelector(".sliderimg");
var count= 0;

function previous() {
    count--;
   
   if(count <= 0){
    count=images.length-1;
       eliment2.scr = images[count];
   }
   else{
       eliment2.src = images[count];
   }

}









function userAlart(){
    alert("please read the messege: keep in mind that 'the page is not responsive so you have to use it on full screen mood you can not resize the window' ");
}

 
     var day;
     switch (new Date().getDay()) {
         case 0:
             day ="Sunday" 
             break;
             case 1:
             day = "Monday"
             break;
             case 2: 
             day = "Tuesday"
             break;
             case 3:
             day ="Wednesday"
             break;
             case 4: 
             day = "Thursday"
             break;
             case 5:
             day ="Friday"
             break;
             case 6:
             day = "Satarday"
             break;
     
         default:
             day = "Please Fix Your Date & Time"
     }

    /*var newDate= new Date();
    document.querySelector("#Date").innerHTML= dateForamtting(newDate+"<br/>")*/

    function calender(){
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        month++;
        var year = date.getFullYear();
        var tarikh = day+ "/"+ month+"/"+year;
        document.querySelector("#Date").innerHTML= tarikh;
    }
    calender();



     function time(){
         var somoy = new Date();
         var hour = somoy.getHours();
         var minute = somoy.getMinutes();
         var second = somoy.getSeconds();
         
         
         
         if(hour == 0 ){
            hour= 12;
         }
         else if(hour > 12 ){
            hour= hour-12;
         }
         else if(hour < 10) {
             hour = "0"+ hour;
         }
         else if(minute < 10) {
            minute = "0"+ minute;
        }
        else if(second < 10) {
            second = "0"+ second;
        }
         
         var clock = hour+ ":"+ minute+":"+second;
         document.querySelector("#time").innerHTML="Time Is: " + clock;
         setTimeout(time,1000);
     }
     time();
 document.querySelector("#day").innerHTML="Today Is: "+ day; 
