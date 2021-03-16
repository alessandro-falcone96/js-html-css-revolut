
$('#link-funzionalita').mouseenter(function() {
  $('.funzionalita').toggle();
});
$('#link-funzionalita').mouseleave(function() {
  $('.funzionalita').toggle();
});

$('#link-abbonamenti').mouseenter(function() {
  $('.abbonamenti').toggle();
});
$('#link-abbonamenti').mouseleave(function() {
  $('.abbonamenti').toggle();
});

$('#link-chi-siamo').mouseenter(function() {
  $('.chi-siamo').toggle();
});
$('#link-chi-siamo').mouseleave(function() {
  $('.chi-siamo').toggle();
});

$('#link-aiuto').mouseenter(function() {
  $('.aiuto').toggle();
});
$('#link-aiuto').mouseleave(function() {
  $('.aiuto').toggle();
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
