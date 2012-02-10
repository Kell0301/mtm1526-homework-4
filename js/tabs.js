$(document).ready(function () {
	
	 $(".tabs > li").click(function(e){  
		switch(e.target.id){
			 case "kittens":  
			 
				$("#kittens").addClass("active");  
				$("#puppies").removeClass("active");  
                $("#lambs").removeClass("active");
				$("#tarantulas").removeClass("active"); 
                
				$("div.kittens").slideDown(500);  
                $("div.puppies").css("display", "none");  
                $("div.lambs").css("display", "none"); 
				$("div.tarantulas").css("display", "none"); 
            break;  

			case "puppies":  
                $("#kittens").removeClass("active");  
                $("#puppies").addClass("active");  
                $("#lambs").removeClass("active"); 
				$("#tarantulas").removeClass("active");

                $("div.puppies").slideDown(500);  
                $("div.kittens").css("display", "none");  
                $("div.lambs").css("display", "none");
				$("div.tarantulas").css("display", "none");  
            break;  
            case "lambs":  
                $("#kittens").removeClass("active");  
                $("#puppies").removeClass("active"); 
				 $("#tarantulas").removeClass("active");  
                $("#lambs").addClass("active");  
                $("div.lambs").slideDown(500);  
                $("div.kittens").css("display", "none");  
                $("div.puppies").css("display", "none");
				 $("div.tarantulas").css("display", "none");  
            break;
			case "tarantulas":  

                $("#kittens").removeClass("active");  
                $("#puppies").removeClass("active"); 
				 $("#lambs").removeClass("active");  
                $("#tarantulas").addClass("active");  

                $("div.tarantulas").slideDown(500);  
                $("div.kittens").css("display", "none");  
                $("div.puppies").css("display", "none");
				$("div.lambs").css("display", "none");   
            break;    
        }  
         
        
    });  


});