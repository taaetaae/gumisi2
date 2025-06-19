$(function () {


  // 헤더 드롭다운 메뉴
  $(".h_menu li").on({

    mouseover: function () {
      // 마우스 오버했을 때
      $(".h_dmenu_wrap", this).stop().slideDown();
      $(".h_dmenu").css({
        backgroundColor:'#fff'
      })
    },

    mouseout: function () {
      // 마우스 뗐을 때
      $(".h_dmenu_wrap", this).stop().slideUp();
    }
  });

  //  모바일 검색창 켤때 
  $(".ms_btn").click(function () {

    $(".mb_search_hidden").stop().show();
    $(".sub_mtop", ".big_menu").stop().hide();

  });

  // 모바일 검색창 끌 때
  $(".ms_exex").click(function () {

    $(".mb_search_hidden").stop().hide();
    $(".sub_mtop", ".big_menu").stop().show();

  });


  // 모바일 서브메뉴 ham bar
  $("header .ham").click(function () {

    $(".m_submenu_hidden").stop().animate({
      right: '0'
    }, 1000)
  });

  // 모바일 서브메뉴 끄기
  $(".m_submenu_hidden .exex").click(function () {

    $(".m_submenu_hidden").stop().animate({
      right: '-300%'
    }, 1000)
  });


  // 모바일 서브메뉴 드롭다운 

  $(".big_menu li").click(function () {
    $(".mobile_hmenu").toggleClass("toggle"); // "toggle" 클래스를 토글
    if ($(".mobile_hmenu").hasClass("toggle")) { // "toggle" 클래스가 있는 경우
      $(".mobile_hmenu", this).slideDown(); // 슬라이드 다운
    } else {
      $(".mobile_hmenu", this).slideUp(); // 아닌 경우에는 슬라이드 업
    }
  });

  // sec2 드롭다운 메뉴
  $(".h_drop li").on({
    mouseover: function () {
      // 마우스 오버했을 때
      $(".movemenu", this).stop().slideDown();
    },

    mouseout: function () {
      // 마우스 뗐을 때
      $(".movemenu", this).stop().slideUp();
    }
  })


  // sec3 슬라이드



  $('.slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    speed: '2000',
    centerMode: 'true'
  });






  // sec4 모바일에서 youtube 슬라이드 
  $('.mh_slide').slick({
    centerMode: true,
    arrows: false,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    dots: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,

        }
      },

      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: false

        }
      }

    ]
  });



  let scrollT;
  let scrollP = 0;
  let delta = 5;

  let headerH = $("header").outerHeight();
  // headerH라는 변수에 header의 높이값 데이터를 담음
  console.log(headerH)

  $(window).scroll(function () {
    scrollT = true;

    console.log(scrollT)
    // 스크롤 할때마다 ture 나옴
  })

  setInterval(function () {
    if (scrollT) {
      scrolled();
      // 밑에서 만든 함수를 호출해서 if 식안에 넣어줘야함
      scrollT = false
      // 스크롤 내리면 거짓이 됨
      console.log(scrollT)
    }
  }, 300)

  function scrolled() {
    // 함수 만들기
    let st = $(this).scrollTop();
    // window창의 자식 요소는 전부 다 개별적으로 선택 > this / window의 수직 좌표값을 찾겠다는 의미

    if (Math.abs(scrollP - st) <= delta)
      // 스크롤의 위치가 delta(5)보다 작거나 같을 때 실행되는 실행문


      return;
    // 함수를 밖으로 꺼낸다
    if (st > scrollP && st > headerH)
    // st가 0보다 크고, 헤더의 높이값보다 작을 때
    {
      $("header").addClass('navup')
      // 스크롤 올리면 navup 클래스가 생기고, 
    } else {
      if (st + $(window).height() < $(document).height()) {
        // 윈도우height= 전체 높이/ document height=문서창의 높이

        $("header").removeClass('navup')

      }
    }

    scrollP = st;
  }

  // topbtn 900px 아래에서부터 보이게 하기
  window.addEventListener('scroll', function() {

    let topbtn = document.querySelector('.topbtn');
    if (window.scrollY < 800) { // Change 100 to the height you want
        $(".topbtn").fadeOut(),100;
    } else {
      $(".topbtn").fadeIn(),100;
    }
  
  });


  // topbtn click 하면 제일 위로

  $(".topbtn ").on({

    click: function() {
      
      $("html, body").animate({ scrollTop: '0' }, "slow");
    
    },

    mouseover: function(){
      $(".topbtn").stop().css({
        backgroundColor:'#0065b3'
      });
    },

    mouseout: function(){
      $(".topbtn").stop().css({
        backgroundColor:'#ccc'
      })
    }

  }),

  



  // sec4 이미지 마우스 오버시 줌되게 

  $(".lists img").on({

    mouseover: function () {

      $(this).css({
        transform: 'scale(1.2)',
        transition: '1s'
      });

    },

    mouseout: function () {

      $(this).css({
        transform: 'scale(1)',
        transition: '1s'
      });

    }
  })
  ////////
});



