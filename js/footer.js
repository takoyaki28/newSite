$(function(){    
    //SNSリンク作成
    setSnsShare($("meta[property='og:url']").attr("content"),$("meta[property='og:title']").attr("content"));
  });

  function arcF(){
    obj = $("#linkselectA").val();
    window.location.href = "https://kimachk.com/arc#"+obj;
  }

  function categoryF(){
    obj = $("#linkselectC").val();
    window.location.href = "https://kimachk.com/category#"+obj;
  }

//フッターリンク
$(function (){
  $.ajax({
      url　: 'https://kimachk.com/info/footer.txt',
      dataType : 'html',
      success　: function(data){
        linklist=$(data).filter('.portfolio-popup');
        var no = Math.floor(Math.random() * linklist.length);
        $('#link1').append(linklist[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link2').append(linklist[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link3').append(linklist[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link4').append(linklist[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link5').append(linklist[no]);
        linklist.splice(no,1);
      },
  });
});
