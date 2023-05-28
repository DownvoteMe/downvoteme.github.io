//Calls a function when "pop" class is clicked
  $(function() {
    $('.pop').on('click', function() {
  //Takes src of the image clicked and adds it to any classes with .imagepreview
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
  //Makes it visible
        $('#imagemodal').modal('show');   
    });		
});