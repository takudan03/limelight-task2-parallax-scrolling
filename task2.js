function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

$(window).bind('scroll',function(){
    var scrolled = $(window).scrollTop(); 

    $('.wrapper').each(function(index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var endY  = initY + $(this).height()
    
        var visible = isInViewport(this)
        if(visible) {
          var diff = scrolled - initY
          var ratio = Math.round((diff / height) * 100)
          $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
          $('.gear-1').css('top',(0+(scrolled*0.2))+'px');
          $('.gear-2').css('top',(0+(scrolled*0.7))+'px');
          $('.gear-3').css('top',(0+(scrolled*0.6))+'px');
          $('.gear-4').css('top',(0+(scrolled*0.5))+'px');
        }
      });
    $('.footer').each(function(index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var endY  = initY + $(this).height()
    
        // Check if the element is in the viewport.
        var visible = isInViewport(this)
        if(visible) {
          var diff = scrolled - initY
          var ratio = Math.round((diff / height) * 100)
          $(this).css('background-position','center ' + parseInt(-(ratio * 5)) + 'px')
        }
      });
      
    

    });
