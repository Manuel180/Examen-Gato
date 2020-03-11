
$(document).ready(function()
{

   $(".container2").hide();
   $("#barra-progreso").hide();
   $(".puntos").hide();
   $('.letras div').css({'opacity':'0%'});
     var cont=0;
     var jugadorX=0;
     var jugadorO=0;

 $(".cuadrado").click(function()
	{
        
  if (cont==0) {
  $(this).html("O");
        cont=1;
        
        }

else
{
$(this).html("X");
 cont=0;
 
}

if ($("#Cuno").html()=="O" && $("#Cdos").html()=="O" && $("#Ctres").html()=="O"||
$("#Ccuatro").html()=="O" && $("#Ccinco").html()=="O" && $("#Cseis").html()=="O"||
$("#Csiete").html()=="O" && $("#Ceight").html()=="O" && $("#Cnueve").html()=="O"||
$("#Cuno").html()=="O" && $("#Ccinco").html()=="O" && $("#Cnueve").html()=="O"||
$("#Ctres").html()=="O" && $("#Ccinco").html()=="O" && $("#Csiete").html()=="O"|| 
$("#Cuno").html()=="O" && $("#Ccuatro").html()=="O" && $("#Csiete").html()=="O"||
$("#Cdos").html()=="O" && $("#Ccinco").html()=="O" && $("#Ceight").html()=="O"||
$("#Ctres").html()=="O" && $("#Cseis").html()=="O" && $("#Cnueve").html()=="O") {
  alert("Ganó O");
$("#Cuno").empty();
$("#Cdos").empty();
$("#Ctres").empty();
$("#Ccuatro").empty();
$("#Ccinco").empty();
$("#Cseis").empty();
$("#Csiete").empty();
$("#Ceight").empty();
$("#Cnueve").empty();
 jugadorO++;
 $(".espanO").html(jugadorO);
}


else if (
  $("#Cuno").html()=="X" && $("#Cdos").html()=="X" && $("#Ctres").html()=="X"||
$("#Ccuatro").html()=="X" && $("#Ccinco").html()=="X" && $("#Cseis").html()=="X"||
$("#Csiete").html()=="X" && $("#Ceight").html()=="X" && $("#Cnueve").html()=="X"||
$("#Cuno").html()=="X" && $("#Ccinco").html()=="X" && $("#Cnueve").html()=="X"||
$("#Ctres").html()=="X" && $("#Ccinco").html()=="X" && $("#Csiete").html()=="X"|| 
$("#Cuno").html()=="X" && $("#Ccuatro").html()=="X" && $("#Csiete").html()=="X"||
$("#Cdos").html()=="X" && $("#Ccinco").html()=="X" && $("#Ceight").html()=="X"||
$("#Ctres").html()=="X" && $("#Cseis").html()=="X" && $("#Cnueve").html()=="X") {
  alert("Ganó X");
$("#Cuno").empty();
$("#Cdos").empty();
$("#Ctres").empty();
$("#Ccuatro").empty();
$("#Ccinco").empty();
$("#Cseis").empty();
$("#Csiete").empty();
$("#Ceight").empty();
$("#Cnueve").empty();
jugadorX++;
 $(".espanX").html(jugadorX);
}



});

});
 



    function animar()
	{
		$("#boton").hide();
		$("#barra-progreso").show();
      document.getElementById("hola").classList.toggle("final");
      $('.letras div').css({'opacity':'100%'});
      $("#barra-progreso").delay(10000).fadeOut('slow');
       $(".letras").delay(10000).fadeOut('slow');
       $(".container2").delay(11000).fadeIn('slow');
       $(".puntos").delay(11000).fadeIn('slow');
	}


  
   
  


