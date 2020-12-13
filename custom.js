

// $('.filho').collapse({
//     toggle: true
//   })

//abre filho
$(window).on("load", function(){
    $( ".collapse-pai" ).on( "click", function() {
        $( this ).closest('.pai').find('.filho').collapse('toggle');
        $(this).closest('#accordion').find('.pai .show').collapse('toggle'); 
    });
});

//abre conteudo
$(window).on("load", function(){
    $( ".collapse-filho" ).on( "click", function() {
        $(this).closest('.filho').find('.conteudo').collapse('toggle');
        $(this).closest('.pai').find('.filho .show').collapse('toggle');
    });
});