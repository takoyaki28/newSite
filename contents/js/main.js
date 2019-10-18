jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 48
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });
});

$(function(){
	//テキストの読み込み
	//$("#txtLoad").load("DATA/sample.txt")

	$("#load").toggle(
		function(){
			//リンクをクリックするとsample.txtが読み込まれ、リセット用のリンクテキストが表示されます
			$(this).text("リセット")
			$("#txtLoad").load("DATA/sample.txt")
			},
		function(){
			//リセット用のテキストがクリックされた後の処理になります
			$(this).text("読み込む")
			$("#txtLoad").text("読み込んでいません")
	});
});

$(function(){
  $("#header").load("../../header.html");
  $("#footer").load("../../footer.html");
});


