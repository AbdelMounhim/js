<script type="text/javascript" src="pym.min.js"></script>

<script type="text/javascript">

var jqueryLoaded = setInterval( function() { 
    console.log(" test jquery ");
	if ( window.jQuery)  {
		 console.log("jquery ok ! ");


		 clearInterval(jqueryLoaded); 
		 $(document).ready(function(){ 
         console.log("creation pymChild");  
         var pymChild = new pym.Child({id : "exemple" } ); 
         
     $(window).resize(function(){
		      pymChild.sendHeight();
		      console.log("resize index ici ...");
		 });

$("div.AccordionPanelTab.borderbox.clearfix.colelem").click(function() {
  console.log("y'a un click " ) ;
  $(window).trigger('resize');

});


 });
		    
	}
}, 500);

</script>
