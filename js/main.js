 
 //variable for testimonial slide
let testimonialIndex =1;
let autoTestimonial = 0;

let mobileNav = document.querySelector('.mobile-ul');
let mobileToggleBtn = document.querySelector(".mobile-nav-toggle");
let closeBtn = document.querySelector(".close-toggle");
const ITEM = document.querySelector(".mobile-nav-item ");



  show_autoSlide();

 show_testimonial(testimonialIndex);



 //next and previous buttons

 function get_testimonial(n){

    show_testimonial(testimonialIndex += n);
 }


 
 //show testimonials when click prev and next button 

 function show_testimonial(n){

    let i;
    let testimonials = document.getElementsByClassName("testimonial-box");
    if(n > testimonials.length){
        testimonialIndex =1;
    }
    if(n< 1){testimonialIndex = testimonials.length}
    for(i= 0; i< testimonials.length; i++){

     testimonials[i].style.display = "none";
    }

    testimonials[testimonialIndex-1].style.display = "grid";
     

 }



 //show auto slide function 
 function show_autoSlide(){
  let i;
  let testimonials = document.getElementsByClassName("testimonial-box");
  for(i= 0; i< testimonials.length; i++){

   testimonials[i].style.display = "none";
  }
  autoTestimonial++;
  if (autoTestimonial > testimonials.length) {autoTestimonial = 1}

  testimonials[autoTestimonial-1].style.display = "grid";
  
  // Change testimonial slide automatic every 2 seconds

 setTimeout(show_autoSlide ,2000);
 


 }

 // show back to top btn when the user scroll down 100px from the top of the page 

 let back_top_btn = document.getElementById("back-to-top");

 window.onscroll = function() {scrollDown()};

function scrollDown() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
   back_top_btn.style.display = "block";
  } else {
   back_top_btn.style.display = "none";
  }
}
 
  
 // back to top function
 function back_to_top(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   
 }

//toggle menu for showing mobile nav
  mobileToggleBtn.addEventListener("click" ,(e) => {

    const VISIBILTY = mobileNav.getAttribute("data-visible");
    //console.log(VISIBILTY);
    if(VISIBILTY === "false"){

      mobileNav.setAttribute("data-visible",true);
      mobileToggleBtn.style.display = "none";
      closeBtn.style.display = "block";
      mobileToggleBtn.setAttribute("aria-expanded",true);
      
      
    }else{

      mobileNav.setAttribute("data-visible",false);
      mobileToggleBtn.setAttribute("aria-expanded",false);
      
    }
  });

//close mobile nav
  closeBtn.addEventListener("click" ,(e) => {
    const VISIBILTY = mobileNav.getAttribute("data-visible");

    if(VISIBILTY === "false"){

      mobileNav.setAttribute("data-visible",true);
      mobileToggleBtn.setAttribute("aria-expanded",true);
      closeBtn.setAttribute("aria-expanded",true);
      
      
    }else{

      mobileNav.setAttribute("data-visible",false);
      mobileToggleBtn.setAttribute("aria-expanded",false);
      closeBtn.setAttribute("aria-expanded",false);
      mobileToggleBtn.style.display = "block";
      closeBtn.style.display = "none";
     
      
    }
  });

  //close mobile nav when nav item clicked 
  ITEM.addEventListener("click" ,(e) => {

    const VISIBILTY = mobileNav.getAttribute("data-visible");

    if(VISIBILTY === "false"){

      mobileNav.setAttribute("data-visible",true);
     
      mobileToggleBtn.setAttribute("aria-expanded",true);
      
      
    }else{

      mobileNav.setAttribute("data-visible",false);
      mobileToggleBtn.setAttribute("aria-expanded",false);
      mobileToggleBtn.style.display = "block";
      closeBtn.style.display = "none";
      
    }
  
   });
 
 


  