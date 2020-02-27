$(document).ready(function(){
    $("div.heading a.nav").on("click", function(){
        $("div.heading div").toggleClass("open");
    });
});
