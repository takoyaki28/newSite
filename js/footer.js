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
      url　: 'info/footer.txt',
      dataType : 'html',
      success　: function(data){
        var no = Math.floor(Math.random() * linklist.length);
        //document.getElementById("link1").innerHTML=$(data).filter('.portfolio-popup')[no];
        $('#link1').append($(data).filter('.portfolio-popup')[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        document.getElementById("link2").innerHTML=$(data).filter('.portfolio-popup')[no];
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        document.getElementById("link3").innerHTML=$(data).filter('.portfolio-popup')[no];
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        document.getElementById("link4").innerHTML=$(data).filter('.portfolio-popup')[no];
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        document.getElementById("link5").innerHTML=$(data).filter('.portfolio-popup')[no];
        linklist.splice(no,1);
      },
  });
});
