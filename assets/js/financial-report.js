/**
 * resize image height
 */
 var resizeImageHeight = function(){
    var images = $(".gallery img.img-responsive");
    if(images.length > 0){
        var minheight = 0;// images[0].height;
        $.each(images, function(index, item){
			
			if ( minheight < $( this ).height()) {
				 minheight = $(this).height();
				 //console.log(minheight);
			}
        
            //var item = $(item);
         
            //if(minheight<item.height()){
                //minheight = item.height();
          
			//}
        });
        $.each(images, function(index, value){
            var item = $(value);
			if(minheight>0){
				item.css("max-height", minheight);	
			}        
        });
		
    }
};
$(window).load(function() {
  resizeImageHeight();
});

