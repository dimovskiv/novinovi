
$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".navbar").addClass("changecolor")
  
        
      
    } else {
       $(".navbar").removeClass("changecolor");
    
       
    }
})

