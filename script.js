console.log("In js");
console.log($('.btn'));
var $btns = $('.btn').click(function() {
  console.log("Button Clicked");
  if (this.id == 'all') {
    $('#parent > li ').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > li ').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
