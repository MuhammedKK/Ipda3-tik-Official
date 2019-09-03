$(document).ready(function () {

    // 'use strict';

      // App Take A Tour

      $num = $('.my-card').length;
      $even = $num / 2;
      $odd = ($num + 1) / 2;

      if ($num % 2 == 0) {
        $('.my-card:nth-child(' + $even + ')').addClass('active');
        $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $even + ')').next().addClass('next');
      } else {
        $('.my-card:nth-child(' + $odd + ')').addClass('active');
        $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
      }
      
      $('.my-card').click(function() {
        $slide = $('.active').width();
        console.log($('.active').position().left);
        
        if ($(this).hasClass('next')) {
          $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
        } else if ($(this).hasClass('prev')) {
          $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
        }
        
        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');
        
        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
      });
      
      
      // Keyboard nav
      $('html body').keydown(function(e) {
        if (e.keyCode == 37) { // left
          $('.active').next().trigger('click');
        }
        else if (e.keyCode == 39) { // right
          $('.active').prev().trigger('click');
        }
      });

      $('.controls i').click(function() {
        if ($(this).hasClass("right")) {
          $('.active').prev().trigger('click');
        }
        else {
          $('.active').next().trigger('click');
        }
      });

    // trigger NiceScroll
    $('html').niceScroll({
      cursorcolor: '#3498db',
      cursorwidth: '14px',
      cursorMinHeight:100,
      cursorborderradius: '5px'

    });

    // SlideDown Links

    $('.nav-menu i').on('click', function () {
        $('.navbar .nav-content').slideToggle();
    });

    // Replace Class Active With Others Links 
    
    $('.nav-content li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.pagination li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // trigger Slick Plugin on Features

    $('.slider').slick({
        infinite: true,
        speed: 300,
        rtl:true,
        nextArrow: $('i.prev'),
        prevArrow: $('i.next'), 
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    // trigger Slick Plugin on Clients

    $('.carusal').slick({
        infinite: true,
        speed: 300,
        rtl:true,
        nextArrow: $('i.left'),
        prevArrow: $('i.right'), 
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


});