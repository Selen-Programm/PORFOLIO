// find elements
$featurePic = $(".pic")
$picMessage = $(".picMessage")

// handle hover
$featurePic.mouseenter(
function(){
  $(this).find($picMessage).animate({'top': '30px' }, 'medium');
});

$featurePic.mouseleave(
function(){
  $(this).find($picMessage).animate({'top': '87%' }, 'medium');
});

