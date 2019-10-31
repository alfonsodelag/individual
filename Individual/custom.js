document.addEventListener("DOMContentLoaded", function() {
    if(window.innerWidth > 1280){
        console.log('XL Query');
    } else if(window.innerWidth <= 1280 && window.innerWidth > 1024){
        console.log('LG Query');
    } else if(window.innerWidth <= 1024 && window.innerWidth > 768){
        console.log('MD Query');
    } else if(window.innerWidth <= 768 && window.innerWidth > 640){
        console.log('SM Query');
    }else{
        console.log('XS Query')
    }
    console.log(window.innerWidth, 'px');
});
