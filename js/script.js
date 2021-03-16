
$('#link-funzionalita').mouseenter(function() {
  $('.funzionalita').show();
});
$('#link-funzionalita').mouseleave(function() {
  $('.funzionalita').hide();
});

$('#link-abbonamenti').mouseenter(function() {
  $('.abbonamenti').show();
});
$('#link-abbonamenti').mouseleave(function() {
  $('.abbonamenti').hide();
});

$('#link-chi-siamo').mouseenter(function() {
  $('.chi-siamo').show();
});
$('#link-chi-siamo').mouseleave(function() {
  $('.chi-siamo').hide();
});

$('#link-aiuto').mouseenter(function() {
  $('.aiuto').show();
});
$('#link-aiuto').mouseleave(function() {
  $('.aiuto').hide();
});


$("#link-funzionalita").click(function() {
  $(".funzionalita").siblings().hide();
  $(".funzionalita").toggle();
});

$("#link-abbonamenti").click(function() {
  $(".abbonamenti").siblings().hide();
  $(".abbonamenti").toggle();
});

$("#link-chi-siamo").click(function() {
  $(".chi-siamo").siblings().hide();
  $(".chi-siamo").toggle();
});

$("#link-aiuto").click(function() {
  $(".aiuto").siblings().hide();
  $(".aiuto").toggle();
});
