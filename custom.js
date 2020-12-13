//FILTER risk (may be better with css?)
function recursion(c){
    setTimeout(function(c){
        c = c || 0;
        $( ".img-destacada-home-js" ).css('filter', 'hue-rotate(' + c++ + 'deg)');
        if(c==360) c=0;
        recursion(c);
    },500,c);
}
recursion();

//abre filho
$(window).on("load", function(){
    $( ".collapse-pai" ).on( "click", function() {
        //
        $( this ).closest('.pai').find('.filho').collapse('toggle');
        //
        $(this).closest('#accordion').find('.pai .show').collapse('toggle'); 
        //
        $(this).addClass('focus');
    });
});

//abre conteudo
$(window).on("load", function(){
    $( ".collapse-filho" ).on( "click", function() {
        //
        $(this).closest('.filho').find('.conteudo').collapse('toggle');
        //
        $(this).closest('.pai').find('.filho .show').collapse('toggle');
        //
        $(this).addClass('focus');
    });
});