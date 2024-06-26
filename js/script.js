$(function () {
  const $window = $(window);
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu-wrap');
  const $banner = $('.banner-slide');
  const $btnMenu = $('.btn-menu');
  const duration = 300;
  // 모바일
  const $btnMmenu = $('.btn-m-menu');
  const $mSubmenu = $('.m-submenu-wrap');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');

  $btnMenu.on('click', function () {
    $mSubmenu.addClass('active');
    $dim.fadeIut(duration);
  });
  $btnClose.on('click', function () {
    $mSubmenu.removeClass('active');
    $dim.fadeOut(duration);
  });
  // 마우스가 메뉴에 들어오면(mouseenter)
  $menu.on('mouseenter', function () {
    const menuIdx = $(this).index();
    $menu.removeClass('on').eq(menuIdx).addClass('on');
    $submenu.find('li').removeClass('on').eq(menuIdx).addClass('on');

    openMenu();
  });
  // 마누스가 나가면(mouseleave)
  $header.on('mouseleave', function () {
    $menu.removeClass('on');
    $submenu.find('li').removeClass('on');
    closeMenu();
  });

  //메뉴버튼을 클릭해쓰을때
  $btnMenu.on('click', openMenu);

  // 메뉴의 동작을 함수로 정의
  function openMenu() {
    $header.addClass('active');
    $submenu.stop().fadeIn(duration);
    $banner.stop().fadeIn(duration);
  }
  function closeMenu() {
    $header.removeClass('active');
    $submenu.stop().fadeOut(duration);
    $banner.stop().fadeOut(duration);
  }

  let scrollTop = $window.scrollTop();
  const visualHeight = $('.visual').outerHeight();
  setWhiteBackground();

  function setWhiteBackground() {
    if (scrollTop >= visualHeight) {
      $header.addClass('w-bg');
    } else {
      $header.removeClass('w-bg');
    }
  }
  // 스크롤 이벤트
  $window.on('scroll', function () {
    // 얼마나 스크롤 되었는지
    scrollTop = $(this).scrollTop();
    setWhiteBackground();
    // 비주얼 영역의 세로크기 저장
  });
});
