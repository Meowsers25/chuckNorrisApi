$(document).ready(function() {
   
   $('#myBtn a').click(function(e) {
       var url = "test.php";
       e.preventDefault();
       console.log('clicked');
       $('#output').load(url, function(a,b,c) {
           console.log(a);//always response
           console.log(b);//always status
           console.log(c);//always object
       });
       
   });
    
});