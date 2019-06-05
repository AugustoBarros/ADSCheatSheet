// Cria e configura as accotions
$( ".accordion" ).accordion({
    active: true,
    animate: 100,
    heightStyle: "content",
    collapsible: true,
});

// Cria os jqueryUI buttons
$( "#close, #open" ).button({
  create: function( event, ui ) {}
});

// Click do botão - esconde todas as accordion
$( "#close" ).click(function() {
    $( ".accordion" ).accordion( {active:true} );
});

// Click do botão - mostra todas as accordion
$( "#open" ).click(function() {
    $( ".accordion").accordion( {active:0} );
});