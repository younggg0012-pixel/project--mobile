//모든 페이지 공통 js

//스플래시 스크린 처리코드
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');

  // 방문 기록('splashVisited')이 없는 '첫 방문자'일 때만 실행합니다.
  if (!sessionStorage.getItem('splashVisited')) {
    
    // 1. 숨겨져 있던 스플래시 스크린을 화면에 표시합니다.
    splash.classList.add('active');

    // 2. 1초(1000ms) 후에 페이드 아웃 애니메이션을 실행합니다.
    setTimeout(() => {
      splash.classList.add('fade-out');
      // 3. 다음 방문 시에는 뜨지 않도록 세션에 기록을 저장합니다.
      sessionStorage.setItem('splashVisited', 'true');
    }, 1000);
  }
  // 이미 방문한 사용자는 아무런 클래스도 추가되지 않으므로 
  // CSS의 기본값인 display: none 상태가 유지되어 깜빡이지 않습니다.
});



//히어로 섹션에 들어가는 스와이퍼
var swiper1 = new Swiper('.swiper1', {
      autoHeight: true, //높이유동  (.swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween: 0,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      //navigation: {    //이전/다음 버튼
        //nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
      //},
      pagination: {   //페이지 네이션
        el: '.pagination1',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
      autoplay: {  //자동
      delay: 3000,
      disableOnInteraction: false
      },
      //scrollbar: {  //하단 스크롤바
        //el: '.swiper-scrollbar',
        //hide: true
      //}
    });

//브랜드스토리 영역 스와이퍼
var swiper2 = new Swiper('.swiper2', {
      autoHeight: true, //높이유동 (.swiper-container에 height:auto)
      slidesPerView: 1.5,  //단수
      spaceBetween: 10,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      initialSlide:1, //0~시작
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      //navigation: {    //이전/다음 버튼
        //nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
      //},
      // pagination: {   //페이지 네이션
      //   el: '.pagination2',
      //   //dynamicBullets: true,
      //   clickable: true,
      //   //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      // },
      //autoplay: {  //자동
        //delay: 3000,
        //disableOnInteraction: false
      //},
      //scrollbar: {  //하단 스크롤바
        //el: '.swiper-scrollbar',
        //hide: true
      //}
    });


    //상품 팝업처리 코드

    $('.pop .btn_open').click(function(e){
      e.preventDefault();
      $('.pop .modal').show();
      $('.pop .popup').fadeIn('fast');
    });

    $('.pop .btn_close, .pop .modal').click(function(e){
      e.preventDefault();
      $('.pop .modal').hide();
      $('.pop .popup').hide();
    });


    //회사소개 겔러리 부분
      $('.image li:eq(0)').fadeIn('slow'); // 첫번째 이미지만 보여라 
      $('.btn li:eq(0)').children('a').css('color','red').css('background','#0f0'); //첫번째 버튼 활성화
        
      $('.btn a').click(function(e){
            e.preventDefault(); //a태그의 href속성을 막는다.

            var ind = $(this).index('.btn a'); // 0 1 2 3
            //console.log(ind);
            $('.image li').hide(); //모든 이미지를 안보이게 해라.
            $('.image li:eq('+ind+')').fadeIn('slow'); //클릭한 버튼에 index와 동일한 이미지를 보이게 해라.

            $('.btn a').css('color','#333').css('background','#fff'); //모든 버튼을 비활성화
            $(this).css('color','red').css('background','#0f0'); //클릭한 자신의 버튼만 활성화
      });


      //사회활동 탭 스와이퍼 처리
      	var swiper_tab = new Swiper('.swiper_tab', {
					autoHeight: true,
					speed : 500
				});

				swiper_tab.on('slideChange', function () {
					$(".tabs .active").removeClass('active');
					$(".tabs a").eq(swiper_tab.activeIndex).addClass('active');
				});
				
				$(".tabs a").on('touchstart mousedown', function(e) {
					e.preventDefault();
					$(".tabs .active").removeClass('active');
					
					$(this).addClass('active');

					//swiper.swipeTo($(this).index());					
					swiper_tab.slideTo($(this).index());
				});
				
				$(".tabs a").click(function(e) {
				
					e.preventDefault();
				
				});