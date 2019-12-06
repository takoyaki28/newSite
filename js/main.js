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

// ブラウザback対応
window.addEventListener("pageshow",function(){
  arc();
  category();
},false);

//初期表示時のhtml読み込み
$(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

$(function(){
  // URLのアンカー（#以降の部分）を取得
  var urlHash = location.hash;
  var prm = urlHash.slice( 1 ) ;
  // URLにアンカーが存在する場合
  if(urlHash){
    document.getElementById('linkselect').value = prm;
  }
});



//おすすめページリンク
$(function(){
	//テキストの読み込み
  $("#txtLoadgood").load("info/linkList.txt .good").addClass("item_box_width");
});

//新着リンク
$(function (){
  $.ajax({
      url　: 'info/linkList.txt',
      dataType : 'html',
      success　: function(data){
        $('#txtLoadmain').append($(data).filter('.new')[0]);
        $('#txtLoadmain2').append($(data).filter('.new')[1]);
        $('#txtLoadmain3').append($(data).filter('.new')[2]);
        $('#txtLoadmain4').append($(data).filter('.new')[3]);
        $('#txtLoadmain5').append($(data).filter('.new')[4]);
        $('#txtLoadmain6').append($(data).filter('.new')[5]);
        $('#txtLoadhima').append($(data).filter('.hima')[0]);
        $('#txtLoadhima2').append($(data).filter('.hima')[1]);
        $('#txtLoadhima3').append($(data).filter('.hima')[2]);
        $('#txtLoadhima4').append($(data).filter('.hima')[3]);
      },
  });
});


//アーカイブの月選択
function arc(){

  obj = $("#linkselect").val();
  $("#txtLoad").load("info/linkList.txt "+"."+obj).addClass("item_box_width"); 

/*
  tagu1='<div class="container"> <div class="row"><div class="col-md-4 width95"><div class="centered"><p class="txt" style="margin-bottom:0;">';
  tagu2='</p></div></div><div class="col-md-4 width95"><div class="centered"><p class="txt" style="margin-bottom:0;">';
  tagu3='</p></div></div></div></div>';

  obj = $("#linkselect").val();
  if(obj!=''){
    $('.shiro').hide();
  }


  $.ajax({
    url　: 'info/linkList.txt',
    dataType : 'html',
    success　: function(data){
      obj = $("#linkselect").val();
      for(i=0;i<$(data).filter('.'+obj).length;i++){
        tagumain=$(data).filter('.'+obj)[i];
        $('#txtLoad').append(tagumain);
      }
    },
  });

*/

}

//カテゴリー選択
function category(){
  obj = $("#linkselect").val();
  $("#txtLoad").load("info/linkList.txt "+"."+obj).addClass("item_box_width"); 
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
  $(shareSelector).attr("href", "https://twitter.com/share?shareUrl=" + encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(description) + encodeURIComponent(shareUrl) );
  setShareEvent(shareSelector, 'Twitter', shareUrl);
}

function setFacebookLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl) + "&t=" + encodeURIComponent(description));    
  setShareEvent(shareSelector, 'Facebook', shareUrl);
}

function setGooglePlusLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "https://plus.google.com/share?shareUrl=" + encodeURIComponent(shareUrl));
  setShareEvent(shareSelector, 'Google+', shareUrl);
}

function setHatebuLink(shareSelector, shareUrl, description) {
  $(shareSelector).attr("href", "https://b.hatena.ne.jp/add?mode=confirm&shareUrl=" + encodeURIComponent(shareUrl) + "&description=" + encodeURIComponent(description));
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
      window.open(current.href, '_blank', 'width=600, height=600, menubar=no, toolbar=no, scrollbars=yes');
      e.preventDefault();
  }); 
}

  
  