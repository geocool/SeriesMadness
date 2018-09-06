$(document).ready(function() {
        $('.Carousel').slick({centerMode:true,variableWidth:true,autoplay:false,arrows:false
        });

        $(".FeaturedSeries-leftArrow").on("click",()=>{
          $(".Carousel").slick("slickPrev");
        });

        $(".FeaturedSeries-rightArrow").on("click",()=>{
          $(".Carousel").slick("slickNext");
        });
        /*
        $('.Carousel').on('afterChange',function(){
          var margin = 10;
          var translateX = 512 - margin - $(".CarouselCard[current]").find(".title").width();
          $(".CarouselCard[current]:hover").css("transform","translate(" + translateX + ",-120px)");
        });

        // Hover Effect for featured cards.
        $(".CarouselCard").hover(function(){
          if ($(this).attr("current") == "") {
            var cardTitle = $(this).find(".CarouselCard-title");
            var translateX = $(this).width() / 2 - $(cardTitle).width() / 2 - parseInt($(cardTitle).css("left")) ;
            var translateY = - $(this).height() / 2 + $(cardTitle).height() / 2 + parseInt($(cardTitle).css("bottom"));
            var transformString = "translate(" + translateX + "px," + translateY + "px)";
            $(cardTitle).css("transform",transformString);
          }
        },function(){
          var cardTitle = $(this).find(".title");
          $(cardTitle).css("transform","none")
        });


        resizeFeaturedCard();
        resizeSectionRevealer();

        $(window).resize (function (){
          resizeFeaturedCard();
          resizeSectionRevealer();
        });

        // Workaround for detecting touch devices in CSS
        if (!("ontouchstart" in document.documentElement)) {
          document.documentElement.className += " no-touch";
        }*/
  });

      function resizeFeaturedCard() {
        var cardWidth = window.innerWidth * 0.75;

        // Set max width
        if (cardWidth > 900)
          cardWidth = 900;

        var cardHeight = cardWidth * (368/1024);

        // Set min height
        if (window.innerWidth > 720 && cardHeight < 270) {
          cardHeight = 270;
        } else if (window.innerWidth <= 400) {
          cardHeight = 140;
        } else if (window.innerWidth < 720) {
          cardHeight = 180;
        }

        $(".CarouselCard").css("height",Math.round(cardHeight));
        $(".CarouselCard").css("width",Math.round(cardWidth));
      }

      function resizeSectionRevealer() {
        var marginFromTop = 410;
        if ((window.innerWidth <= 400))
          marginFromTop = 260;
        else if (window.innerWidth <= 720)
          marginFromTop = 330;


        if ($(".trending-series").attr("revealed") != "yes")
          $(".series-wrapper-row").eq(0).css("max-height",marginFromTop);

        if ($(".mini-series").attr("revealed") != "yes")
          $(".series-wrapper-row").eq(1).css("max-height",marginFromTop);
      }

      function getRevealerPosition () {
        var marginFromTop = 410;

        if ((window.innerWidth <= 400))
          marginFromTop = 370;
        else if (window.innerWidth <= 720)
          marginFromTop = 450;

        return marginFromTop;
      }

      function revealSection(revealButton,selector) {

        var targetElement = selector == ".trending-series" ? $(".popular-series").find(".series-wrapper-row") : $(".trending-series").find(".series-wrapper-row");
        if ($(selector).attr("revealed") === "yes") {
          var heightMoved = $(selector).offset().top - $(targetElement).offset().top  - getRevealerPosition();

          $(selector).attr("revealed","no")
          $(revealButton).attr("direction","down");
          $(targetElement).css("max-height",getRevealerPosition() + "px");

          $('html, body').stop().animate({
             scrollTop: $(document).scrollTop() - heightMoved
          }, 200);

        } else {
          $(selector).attr("revealed","yes")
          $(revealButton).attr("direction","up");
          $(targetElement).css("max-height","2400px");
        }
      }