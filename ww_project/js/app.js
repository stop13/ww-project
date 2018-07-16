const $blog = $('#blog');
const $contact = $('#contact');
const $navBar = $('.navBar')    
    
    

$indexNavBar.click(function(){
    if($indexNavBar.hasClass('clicked')){
        $indexNavBar.removeClass('clicked');
    }else{
        $(this).addClass('clicked');
    }
});    
    
    
    
    
