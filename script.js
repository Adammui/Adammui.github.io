/*/* SLIDERRR*/ 
(function() {

  init(); //on page load - show first slide, hidethe rest

  function init() {

    parents = document.getElementsByClassName('slideshow-container');

    for (j = 0; j < parents.length; j++) {
      var slides = parents[j].getElementsByClassName("mySlides");
      var dots = parents[j].getElementsByClassName("dot");
      slides[0].classList.add('active-slide');
      dots[0].classList.add('active');
    }
  }

  dots = document.getElementsByClassName('dot'); //dots functionality

  for (i = 0; i < dots.length; i++) {

    dots[i].onclick = function() {

      slides = this.parentNode.parentNode.getElementsByClassName("mySlides");

      for (j = 0; j < this.parentNode.children.length; j++) {
        this.parentNode.children[j].classList.remove('active');
        slides[j].classList.remove('active-slide');
        if (this.parentNode.children[j] == this) {
          index = j;
        }
      }
      this.classList.add('active');
      slides[index].classList.add('active-slide');

    }
  }
//prev/next functionality
  links = document.querySelectorAll('.slideshow-container a');

  for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      current = this.parentNode;

      var slides = current.getElementsByClassName("mySlides");
      var dots = current.getElementsByClassName("dot");
      curr_slide = current.getElementsByClassName('active-slide')[0];
      curr_dot = current.getElementsByClassName('active')[0];
      curr_slide.classList.remove('active-slide');
      curr_dot.classList.remove('active');
      if (this.className == 'next') {

        if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
          curr_slide.nextElementSibling.classList.add('active-slide');
          curr_dot.nextElementSibling.classList.add('active');
        } else {
          slides[0].classList.add('active-slide');
          dots[0].classList.add('active');
        }

      }

      if (this.className == 'prev') {

        if (curr_slide.previousElementSibling) {
          curr_slide.previousElementSibling.classList.add('active-slide');
          curr_dot.previousElementSibling.classList.add('active');
        } else {
          slides[slides.length - 1].classList.add('active-slide');
          dots[slides.length - 1].classList.add('active');
        }

      }

    }

  }
})();



/*/* MOBILE MENU*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hideup() {
  var x = document.getElementById("MyLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



/*/* SCROLL*/
const animItems= document.querySelectorAll('._anim-items');

if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for(let index=0;index< animItems.length;index++){
            const animItem=animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset =offset(animItem).top;
            const animStart =4;

            let animItemPoint =window.innerHeight-animItemHeight / animStart;
            if(animItemHeight >window.innerHeight){
                animItemPoint =window.innerHeight -window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset- animItemPoint)&& pageYOffset <(animItemOffset+animItemHeight)){
                animItem.classList.add('_active');
            }
            else{
                animItem.classList.remove('_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft =window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop =window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top +scrollTop, left: rect.left+scrollLeft}
    }
    animOnScroll();
}

/*EASY SLIDE SHOW */
 /*   var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlide(slider) {
        showSlides(slideIndex += 1);
    }
    function minusSlide(slider) {
        showSlides(slideIndex -= 1);  
    }
    function currentSlide(slider,n) {
        showSlides(slideIndex = n);
    }
     function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("slider-dots_item");
            if (n > slides.length) {
              slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
    }

*/