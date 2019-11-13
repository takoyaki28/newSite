$(function(){    
    //SNSリンク作成
    setSnsShare($("meta[property='og:url']").attr("content"),$("meta[property='og:title']").attr("content"));
    // フッターランダム表示
    var linklist=[
      '<a href="https://kimachk.com/contents/201910/20191022_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191022_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>セラミックヒーターの利点は？暖まる速度にある。</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191023_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191023_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>熱い風呂あがり。楽に涼しくなれるシャンプーがある。</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191024_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191024_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>暖房なしで楽に暖まれるのは着る毛布！</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191026_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191026_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>ジェルボールとは？洗濯を時間短縮し手間を減らす洗剤。</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191027_02.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191027_02_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>マットレスの硬さと選び方。いいマットレスを選んで快適で楽な睡眠を。</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191028_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191028_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>楽をすることは手を抜くこと？</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191029_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191029_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>べたつかない、香りがよいヘアクリームで髪を整える</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191110_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191110_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>インターネットでお仕事の依頼。作業を任せて楽をする！</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201910/20191031_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191031_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>【少しでも】結果が同じなら時短しよう【楽したい】</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191101_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191101_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>指摘されたら全否定された気持ちになる。そんな気持ちを少しでも楽にする考え</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191102_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191102_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>エアコンの掃除は楽できない。素直に業者を利用したほうがいい理由とは？</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191103_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191103_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>片付けを楽に。捨てて捨てて捨てまくるのがコツ。</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191103_02.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191103_02_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>足が臭い、酸っぱい匂い、グランズレメディで楽に消臭</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191104_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191104_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>汚れの種類と洗剤。種類によって変えることで楽に汚れ落とし！</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191104_02.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191104_02_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>横向きに寝ると肩が痛い？どの向きで寝ても高さが一定の枕で解決</h2></div></div></a>',
      '<a href="https://kimachk.com/contents/201911/20191105_01.html" class="portfolio-popup"style="height: 100%;"><img src="https://kimachk.com/contents/img/blogimg/20191105_01_01.jpg" alt="" style="height: 100%;"><div class="portfolio-overlay"><div class="portfolio-info"><h2>洗濯かごがいらなくなる。洗濯の手間を軽減するのはズボラーネット</h2></div></div></a>',
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