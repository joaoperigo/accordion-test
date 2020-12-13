function recursion(c){
    setTimeout(function(c){
        c = c || 0;
        console.log(c++);
        recursion(c);
    },0,c);
}

recursion();

//FILTER
// function mudaCor(nFilter) {
//     window.setInterval(function() {
//         console.log(nFilter);
//         $( ".img-destacada-home" ).css('filter', 'hue-rotate(' + nFilter + 'deg)');
//         nFilter++;
//         if(nFilter==360) nFilter=0;
//         mudacor(nFilter);
//     }, 1000);
// }
// window.setInterval(function() {
//     mudaCor(0);
// }, 1000);

//ACCORDION
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