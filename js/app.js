//======================
//Making a sticky navbar
//======================



    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

        // Get the navbar
        var navbar = document.getElementById("navbar");
        // Get the offset position of the navbar
        var sticky = navbar.offsetTop; 


    if ( $(window).width() > 739) {       
        // When the user scrolls the page, execute myFunction 
        window.onscroll = function() {myFunction()};
        function myFunction() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }


//==============================
//Making An Image Lightbox Modal
//==============================

// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the image and insert it inside the modal 
var img = $('.myImg');
var modalImg = $("#img01");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}



//==============================
//Menu button toggle display
//==============================

$('.menu-button').click(function(){
    $('.main-nav').toggle();
});

$(window).on('resize', function(event){
    var windowSize = $(window).width();
    if(windowSize < 768){
        $('.main-nav').css('display', 'none' );
    } else {
        $('.main-nav').css('display', 'flex');
    }
});







