/**
 * resize image height
 */


var images = $(".gallery img.img-responsive");
//check if it is image gallery
if(images.length > 0){
    var resizeImageHeight = function(){
    var minheight = 0;
    //for all images
    $.each(images, function(index, item){
        //image loaded
        $(item).on("load",function() {  
            var curHeight = $(this).height(); 
            //setup min height
            if ( curHeight < minheight || minheight == 0) {
                minheight = curHeight;
                //reset min-height
                $.each($(".gallery img.img-responsive"), function(index, _item){
                    $(_item).css("max-height", minheight);
                });	
            }  
        });
    });
    }

    resizeImageHeight();
}

$(window).load(function() {
	if(images.length > 0){
		resizeImageHeight();
	}
  });