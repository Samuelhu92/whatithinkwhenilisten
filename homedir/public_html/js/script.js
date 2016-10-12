if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger"||navigator.userAgent.toLowerCase().match(/iphone os/i)=="iphone os"||navigator.userAgent.toLowerCase().match(/android/i)=="android") {
        document.getElementById('bgvid').style.display = 'none';
        document.getElementById('bgvid').autoplay = false;
        document.getElementsByClassName('video-fade')[0].style = 'display:none';
        $('.section-dance').addClass('mobile-only');
        }
if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i) != "micromessenger" ){
$(window).scroll(function(){
if(scrollY < 620){
  document.getElementsByClassName('section-dance')[0].style.pointerEvents = 'auto';
  document.getElementsByClassName('section-dance')[0].style.webkitFilter = 'blur('+ scrollY*0.0529891228 + 'px)';
  document.getElementsByClassName('section-dance')[0].style.opacity = '1';
  document.getElementsByClassName('section-dance')[0].style.transform = 'translate3d(0px, 0px, 0px)';
  document.getElementsByClassName('music-recommendation')[0].style.pointerEvents = 'auto';
  document.getElementsByClassName('music-recommendation')[0].style.opacity = (scrollY-150)*0.0028497479;
}
else{
  document.getElementsByClassName('section-dance')[0].style.transform = 'translate3d(0px,' + -scrollY + 'px, 0px)';
}
});}
else{
$(window).scroll(function(){
if(scrollY < 620){
    document.getElementsByClassName('section-dance')[0].style.transform = 'translate3d(0px, 0px, 0px)';
}
else{
    document.getElementsByClassName('section-dance')[0].style.transform = 'translate3d(0px,' + -scrollY + 'px, 0px)';
}
});}
// random insert music recommendation into html
$(document).ready(function(){
      $.getJSON("songoutput/output.json",function(json){
        obj=json;
      });
      var obj = (function () {
      var obj = null;
      $.ajax({
          'async': false,
          'global': false,
          'url': "songoutput/output.json",
          'dataType': "json",
          'success': function (data) {
          obj = data;
          }
      });
    return obj;
})();
      var randomNumber = Math.floor(Math.random()*obj.length);
      var imagesource = obj[randomNumber]["imagesrc"];
      var title1 = obj[randomNumber]["title"];
      var text1 = obj[randomNumber]["text"];
      var songsource = obj[randomNumber]["songsrc"];
      var str = obj[randomNumber]["lyric"];
      var lyric = str.split("／").join("<br>");
      var name = title1.split("－")[0];
      $(".cover").attr("src", imagesource);
      $(".comment-sentence").append(text1);
      $(".audio-title").append(title1);
      $("#audio-player").attr("src", songsource);
      $(".lyric").append(lyric);
      $("title").append("在听 " + name +" 的时候我在想什么");
      $("#WeiImg").attr("src",imagesource);
});
// change button settings
$(".btn").on("click",function(){
       $.getJSON("songoutput/output.json",function(json){
        obj=json;
      });
      var obj = (function () {
      var obj = null;
      $.ajax({
          'async': false,
          'global': false,
          'url': "songoutput/output.json",
          'dataType': "json",
          'success': function (data) {
          obj = data;
          }
      });
    return obj;
})();
      var randomNumber = Math.floor(Math.random()*obj.length);
      var imagesource = obj[randomNumber]["imagesrc"];
      var title1 = obj[randomNumber]["title"];
      var text1 = obj[randomNumber]["text"];
      var songsource = obj[randomNumber]["songsrc"];
      var str = obj[randomNumber]["lyric"];
      var lyric = str.split("／").join("<br>");
      var name = title1.split("－")[0];
      $(".cover").attr("src", " ");
      $(".cover").attr("src", imagesource);
      $(".comment-sentence").html(text1);
      $(".audio-title").html(title1);
      $("#audio-player").attr("src", " ");
      $("#audio-player").attr("src", songsource);
      $(".lyric").html(lyric);
      $("title").html("在听 " + name +" 的时候我在想什么");
      $("#WeiImg").attr("src",imagesource);
      var title1 = null;
      var text1 = null;
      var audio = document.getElementById('audio-player');
})
jQuery('#openWeixin').qrcode({width: 64,height: 64,render:"canvas",text: "http://whatithinkwhenilisten.com"});
jQuery(document).ready(function(){
  $('.qrcode').attr("src", $('#openWeixin').find("canvas")[0].toDataURL("image/png"));
          //分享到微信
        $('.weixin-share').click(function() {
            $('.qrcode').show();
        });
        $(document).on("click", ".qrcode",
        function() {
            $('.qrcode').hide();
        });
});
// background video connection and fadeout
var myvid = document.getElementById('bgvid');
myvid.addEventListener('ended', function() {
    function myvidFade() {
    myvid.classList.add("stopfade");
    }
    myvid.pause();
    myvidFade();
  });

$('#navbar-toggle').click(function (){
    alert('Congrats! You found a fake button!')
  });




