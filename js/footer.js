$(function(){    
    //SNSリンク作成
    setSnsShare($("meta[property='og:url']").attr("content"),$("meta[property='og:title']").attr("content"));
    // フッターランダム表示
    var linklist=[
      '<a href="https://kimachk.com/contents/201910/20191022_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191022_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191023_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191023_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191024_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191024_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191026_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191026_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191027_02.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191027_02_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191028_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191028_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191029_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191029_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191110_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191110_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191031_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191031_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191101_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191101_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191102_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191102_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191103_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191103_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191103_02.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191103_02_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191104_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191104_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191104_02.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191104_02_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191105_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191105_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191115_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191115_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191125_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191125_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191127_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191127_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191118_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191118_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"></div></a>'
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

  });