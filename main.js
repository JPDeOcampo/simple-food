//Anchor link to accordion
function toggleAccordionAndScroll() {
    $('.scrollToAccordion').each(function (){
    $(this).on('click', function(){
        
            let windowsize = $(window).width();
            let targetId = $(this).attr('href').substring(1);
            
            $('.card-body').each(function () {
                if (!$(this).find(`#${targetId}`).length) {
                    $(this.firstElementChild).collapse('hide');
                } else {
                    $(this.firstElementChild).collapse('show');
                }
            });

            if (!$('#announcementsBanner').length == 0 || $('#announcementsBanner').hasClass('d-none') ) {
                if (windowsize <= 820) {
                    $('html, body').animate({
                        scrollTop: $('#' + targetId).offset().top - 200 //200
                    }, 1000);
                }else{
                    $('html, body').animate({
                        scrollTop: $('#' + targetId).offset().top - 190 //200
                    }, 1000);
                }
            }else{
                $('html, body').animate({
                    scrollTop: $('#' + targetId).offset().top - 200 //250
                }, 1000);
            }
        });
    });
}
toggleAccordionAndScroll();