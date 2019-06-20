$(document).ready(function(){


    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
      });



/* price range */

// With JQuery








      /* timelinemax */

            

      var t = new TimelineMax({ paused:true});

      t.set(".img1", {display:"none"})
      t.set(".img2", {display:"none"})
      t.set(".img3", {display:"none"})
      
      t.from($(".img1"),1,{display:"block", scale:2, autoAlpha:0})
      t.from($(".img1 h2"),.5,{scaleX:2, autoAlpha:0, ease:Back.easeOut})
      t.from($(".img1 h6"),.5,{scaleX:.5, autoAlpha:0, ease:Back.easeOut})
      t.from($(".img1 a"), .5, {scale:0, autoAlpha:0, ease:Back.easeOut})
      t.to($(".img1"), 1,  {autoAlpha:0}, "+=2");

      t.from($(".img2"),1,{display:"block", scale:2, autoAlpha:0})
      t.from($(".img2 h2"),.5,{scaleX:2, autoAlpha:0, ease:Back.easeOut})
      t.from($(".img2 h6"),.5,{scaleX:.5, autoAlpha:0, ease:Back.easeOut})
      t.from($(".img2 a"), .5, {scale:0, autoAlpha:0, ease:Back.easeOut})
      t.to($(".img2"), 1,  {autoAlpha:0}, "+=2");


      t.from($(".img3"),1,{display:"block", scale:2, autoAlpha:0})
      t.from($(".img3 h2"),.5,{scaleX:2, autoAlpha:0, ease:Back.easeOut})
      t.from($(".img3 h6"),.5,{scaleX:.5, autoAlpha:0, ease:Back.easeOut})
      t.from($(".img3 a"), .5, {scale:0, autoAlpha:0, ease:Back.easeOut})
      t.to($(".img3"), 1,  {autoAlpha:0}, "+=2");

        

      t.play();
      t.repeat(-1);
      
      







      $("#ex2").slider({});

    

})