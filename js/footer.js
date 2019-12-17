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
        var no = Math.floor(Math.random() * $(data).filter('.portfolio-popup').length);

        $('#link1').append($(data).filter('.portfolio-popup')[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link2').append($(data).filter('.portfolio-popup')[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link3').append($(data).filter('.portfolio-popup')[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link4').append($(data).filter('.portfolio-popup')[no]);
        linklist.splice(no,1);
        no = Math.floor(Math.random() * linklist.length);
        $('#link5').append($(data).filter('.portfolio-popup')[no]);
        linklist.splice(no,1);
      },
  });
});
