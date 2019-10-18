jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Porfolio - uses the magnific popup jQuery plugin
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
});

$(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});


$(function(){
	//テキストの読み込み
  $("#txtLoadmain").load("info/newlink.html");
  $("#txtLoadgood").load("info/goodlink.html");
});

function arc(){
  $("#arclist").remove()
  obj = $("#linkselect").val();
  $("#txtLoad").load("info/"+obj+".html");
}


// SNSの各種カウントを実装するためのjavascript。
// jqueryとgoogleアナリティクスのロード完了が前提のコードなので注意。
/**
 * SNSシェアボタンを指定された要素の下に埋め込む
 * @param shareUrl シェアするUrl。og:shareUrlの値と一緒にすることをオススメ
 * @param description ツイート本文などに埋め込む文言
 */ 
function setSnsShare(shareUrl, description) {
  // 都合に合わせてセレクタは変えてね！
  setTwitterLink(".twitter_back a", shareUrl,description);
  setFacebookLink(".facebook_back a", shareUrl, description);
  setGooglePlusLink(".google_back a", shareUrl, description);
  setHatebuLink(".hatena_back a", shareUrl, description);
  setLineLink(".line_back a", shareUrl, description);
}


function setTwitterLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "https://twitter.com/share?shareUrl=" + shareUrl + "&text=" + encodeURIComponent(description));
  setShareEvent(shareSelector, 'Twitter', shareUrl);
}

function setFacebookLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl + "&t=" + encodeURIComponent(description));    
  setShareEvent(shareSelector, 'Facebook', shareUrl);
}

function setGooglePlusLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "https://plus.google.com/share?shareUrl=" + shareUrl);
  setShareEvent(shareSelector, 'Google+', shareUrl);
}

function setHatebuLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "https://b.hatena.ne.jp/add?mode=confirm&shareUrl=" + shareUrl + "&description=" + encodeURIComponent(description));
  setShareEvent(shareSelector, 'Hatena Bookmark', shareUrl);
}

function setLineLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "http://line.me/R/msg/text/?" + encodeURIComponent(description + " " + shareUrl));
  setShareEvent(shareSelector, 'LINE', shareUrl);
}

/**
*  シェアボタン押下時にGoogleアナリティクスへイベントを送信する
*  @param selector イベントを付与するセレクタ
*  @param snsName SNSの名前（Googleアナリティクス上の表示に使われる）
*  @param shareUrl シェア対象のURL（Googleアナリティクス上の表示に使われる）
*/
function setShareEvent(selector, snsName, shareUrl) {
  $(selector).on('click', function(e){
      var current = this;
      //　*** Googleアナリティクスにイベント送らないなら、以下のコードは不要 ***
      // 'share'の文字列は任意に変えてもよい（Googleアナリティクス上の表示文字列として使われる）
      // 'nonInteraction' : 1にしないと、直帰率がおかしくなる（イベント発行したユーザーは直帰扱いでなくなる）ので注意
      ga('send', 'social', snsName, 'share', shareUrl, {
          'nonInteraction': 1
      });
      // *** Googleアナリティクス送信ここまで ****

      // このあたりは適当に書き換えて下さい
      window.open(current.href, '_blank', 'width=600, height=600, menubar=no, toolbar=no, scrollbars=yes');
      e.preventDefault();
  }); 
}