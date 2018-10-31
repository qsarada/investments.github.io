$(document).ready(function(){

    $(".buttonssection3").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });  
    if ($(".buttonssection3").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});





$(document).ready(function(){

    $(".buttonssection4").click(function(){
        var value = $(this).attr('data-item');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter1').show('3000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter1").not('.'+value).hide('3000');
            $('.filter1').filter('.'+value).show('3000');
            
        }
    });  
    if ($(".buttonssection4").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

function multiply() {
    var num1, num2, num3, result;

    num1 = document.getElementById('dl').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('sh').value;
    num2 = parseInt(num2);

    num3 = document.getElementById('vv').value;
    num3 = parseInt(num3);

    result = (num1 * num2 *num3) / 10;

    document.getElementById('out').innerHTML = result;
}