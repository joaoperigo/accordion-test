//APARECE nav bar
//show hide desktop and mobile menu
$(window).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.nav-topo').addClass('bg-secondary90');
    } else {
      $('.nav-topo').removeClass('bg-secondary90');
    }
  });

//COLLAPSE conteudo post
$(window).on("load", function(){
    $(document).on('click','.saiba-mais',function(){
        //encontra collapse no mesmo pai
        $(this).closest('.wrapper-conteudo-collapse').find('.collapse').collapse('toggle');
        //troca palavra
        if($(this).find('span').html()=='FECHAR') {
            $(this).find('span').html('SAIBA MAIS');
            $(this).find('img').css('transform', 'rotate(0deg)');
        }
        else {
            $(this).find('span').html('FECHAR');
            $(this).find('img').css('transform', 'rotate(45deg)');
        }  
      });
      //girar cruz
  });


//FILTER risk (may be better with css?)
// function recursion(c){
//     setTimeout(function(c){
//         c = c || 0;
//         $( ".img-destacada-home-js" ).css('filter', 'hue-rotate(' + c++ + 'deg)');
//         if(c==360) c=0;
//         recursion(c);
//     },500,c);
// }
// recursion();

/****** lembrar de colocar setinterval ou algo assim pois qdo clica rapido ferra tudo */
//abre filho
$(window).on("load", function(){
    $( ".collapse-pai" ).on( "click", function() {
        //abre filhos
        $( this ).closest('.pai').find('.filho').collapse('toggle');
        //fecha outros pais abertos
        $(this).closest('#accordion').find('.pai .show').collapse('toggle'); 
        //remove focus em pais fechado
        if($(this).closest('#accordion').find('.pai h1 button').hasClass('focus')) 
            $(this).closest('#accordion').find('.pai h1 button').not(this).removeClass('focus');
        //toggle focus no botao apertado 
        //acao na cruz
        if(!$(this).hasClass('focus')) {
            $(this).addClass('focus');
            $(this).find('img').attr('src', './img/cruz-primaria.svg');
            $(this).find('img').css('transform', 'rotate(45deg)');
        }
        else {
            $(this).removeClass('focus');
            $(this).find('img').attr('src','./img/cruz.svg');
            $(this).find('img').css('transform', 'rotate(0deg)');
        } 
        //sempre remove dos filhos
        $( ".collapse-filho" ).removeClass('focus');
        //desabilita botao por 2 segundos para debug
        //testar quais seletores
        $('button').css('pointer-events', 'none');
        setTimeout(function() {
            $('button').css('pointer-events', 'auto');
            //alert("sad");
        }, 200);
    });
});

//abre conteudo
$(window).on("load", function(){
    $( ".collapse-filho" ).on( "click", function() {
        //abre conteudo
        $(this).closest('.filho').find('.conteudo').collapse('toggle');
        //fecha outros filhos
        $(this).closest('.pai').find('.filho .show').collapse('toggle');
        //remove focus em pais fechado
        if($(this).closest('.pai').find('.filho h2 button').not(this).hasClass('focus')) $(this).closest('.pai').find('.filho h2 button').removeClass('focus');
        //toggle focus no botao apertado 
        //acao na cruz
        if(!$(this).hasClass('focus')) {
            $(this).addClass('focus');
            $(this).find('img').attr('src', './img/cruz-primaria.svg');
            $(this).find('img').css('transform', 'rotate(45deg)');
        }
        else {
            $(this).removeClass('focus');
            $(this).find('img').attr('src','./img/cruz.svg');
            $(this).find('img').css('transform', 'rotate(0deg)');
        } 
    });
});