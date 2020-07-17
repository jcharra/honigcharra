var activeMenu;

$(bootstrap);

function bootstrap() {
  $('.section').hide();
  showmenu('news');
}

function showmenu(menuid) {
  if (activeMenu === menuid) {
    return;
  }

  if (activeMenu) {
    $('.item').removeClass('active');

    $('#' + activeMenu).fadeOut(200, function() {
      switchToMenu(menuid);
    });
  } else {
    switchToMenu(menuid);
  }

  $('#menu_' + menuid).addClass('active');
  activeMenu = menuid;
}

function switchToMenu(menuid) {
  $('#' + menuid).fadeIn(200);
}
