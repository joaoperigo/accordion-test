
//FILTER
// function mudaCor(nFilter) {
//     $( ".img-destacada-home" ).css('filter', 'hue-rotate(' + nFilter + 'deg)');
//     nFilter++;
//     if(nFilter==360) nFilter=0;
//     setInterval( mudacor(nFilter), 100 );
// }

function mudaCor(nFilter) {
    window.setInterval(function() {
        $( ".img-destacada-home" ).css('filter', 'hue-rotate(' + nFilter + 'deg)');
        nFilter++;
        if(nFilter==360) nFilter=0;
        mudacor(nFilter);
    }, 100);
}

window.setInterval(function() {
    mudaCor(0);
}, 500);

// start open accordion
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