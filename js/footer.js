$(function(){    
    //SNSリンク作成
    setSnsShare($("meta[property='og:url']").attr("content"),$("meta[property='og:title']").attr("content"));
    // フッターランダム表示
    var linklist=[
      '<a href="https://kimachk.com/contents/201910/20191022_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191022_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>すぐに暖まる</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191023_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191023_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>風呂上りを涼しく</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191024_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191024_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>着る毛布で暖まる</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191025_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191025_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>ゴリラ思考</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191026_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191026_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>洗濯を時短</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191027_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191027_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>楽にスキンケア</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191027_02.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191027_02_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>マットレスで快眠</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191028_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191028_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>楽は手抜き？</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191029_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191029_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>香りのいいヘアクリーム</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191030_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191030_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>ホットサンドメーカーでお餅</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191031_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191031_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>時短しよう</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191101_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191101_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>否定されたら自分で自分を褒める</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191102_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191102_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>エアコン掃除は楽できない</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191103_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191103_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>片付けは捨てる</h2></div></div></a>'
    ];

    var no = Math.floor(Math.random() * linklist.length);
    document.getElementById("link1").innerHTML=linklist[no];
    linklist.splice(no,1);
    no = Math.floor(Math.random() * linklist.length);
    document.getElementById("link2").innerHTML=linklist[no];
    linklist.splice(no,1);
    no = Math.floor(Math.random() * linklist.length);
    document.getElementById("link3").innerHTML=linklist[no];
    linklist.splice(no,1);
    no = Math.floor(Math.random() * linklist.length);
    document.getElementById("link4").innerHTML=linklist[no];
    linklist.splice(no,1);
    no = Math.floor(Math.random() * linklist.length);
    document.getElementById("link5").innerHTML=linklist[no];
    linklist.splice(no,1);
    no = Math.floor(Math.random() * linklist.length);
    document.getElementById("link6").innerHTML=linklist[no];
    linklist.splice(no,1);
    no = Math.floor(Math.random() * linklist.length);
    document.getElementById("link7").innerHTML=linklist[no];
    linklist.splice(no,1); 

  });