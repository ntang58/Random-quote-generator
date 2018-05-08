
$(document).ready(function(){
  generateRandom();
  $("#quoteBtn").on("click", function(e){
    e.preventDefault();
    //call function to do random generation of the page
    generateRandom();
  });
  $("#twitterBtn").on("click", function(e){
    var author = $("#author").html();    
    var quote = $("#quote").html();
    window.open("https://twitter.com/intent/tweet?text=\""+quote+"\""+author);
  });
});

function generateRandom(){
      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(json) {
      var post = json.shift();
      var html = post.content;
      // console.log(html);
      $("#text").html(html);                         
      $("#text p").html("<i class='fa fa-quote-left' aria-hidden='true'></i><span id = \"quote\">"+$("#text p").html()+"</span>");
      $("#author").html("- "+post.title);
});
    
    var red = Math.floor(Math.random() * 255); 
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255); 
    var rgb = "rgb("+red+", "+green +", "+ blue+")";
    //$("#text").html(rgb);
    $("body").css("background-color",rgb);
    $(".box").css("color", rgb);
    $("#quoteBtn").css("background-color",rgb);
    $("#twitterBtn").css("background-color",rgb);
    $("#tumblrBtn").css("background-color",rgb);
}