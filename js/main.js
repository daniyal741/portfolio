$(document).ready(function(){


    console.log($("#start").css('loading','eager'));

     $(window).resize(function(){
        if ($(window).width() > 768){ 
      
            
            $(".menu ul").css('transform', 'translateX(0%)');
            $('.hamburger').css('display', 'none');
            $('#cross').css('display', 'none');


    
        }  
        else{

            $('.hamburger').css('display','flex');
            $('#cross').css('display', 'flex');
            $(".menu ul").css('transform', 'translateX(-100%)');

        }

        $(window).resize(function(){
            if ($(window).width() > 768){ 
          
                $(".menu ul").css('transform', 'translateX(0%)');
        
            }  
            else{
      
                $(".menu ul").css('transform', 'translateX(-100%)');
                $('.hamburger').css('visibility', 'visible');
      
            }
      
           
           
      
        });
    });

    $(window).scroll(function(){

        if(this.scrollY > 20){

            $('header').addClass('header-active');
            $('.logo > a').css('color','white');
            $('header a').mouseenter(function(){
                $(this).css('color','#53354a');

           });

           $('header a').mouseleave(function(){
            $(this).css('color','white');

            });
        }

        else{

            $('header').removeClass('header-active');
            $('.logo > a').css('color','#e84545');
            $('header a').mouseenter(function(){
                $(this).css('color','#e84545');

           });
           $('header a').mouseleave(function(){
            $(this).css('color','white');

            });

        }

        if(this.scrollY > 400)
        {

            $('.scroll-up').addClass('scroll-active');
        }
        else{

            $('.scroll-up').removeClass('scroll-active');

        }
    });


    $('.scroll-up').click(function(){

        $('html').animate({scrollTop:0});

    });
    $(".hamburger").click(function(){

        

        $(".menu ul").addClass("show-nav");
        $('.hamburger').css('visibility', 'hidden');
        $(".menu ul").css('transform', 'translateX(0%)');
  
        
        
  
        $("#cross").click(function(){
  
        
            $('.hamburger').css('visibility', 'visible');
            $(".menu ul").css('transform', 'translateX(-100%)');
  
    
        });
    });

    var typed = new Typed(".typing", {

        strings: ["Software Engineer", "Website Developer", "Solution Provider"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true 
    });

    var typed2 = new Typed(".typing-2", {

        strings: ["Software Engineer", "Website Developer", "Solution Provider"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true 
    });



});