$(document).ready(function() {
  const menu_btn = $('.menu_btn')
  const navlinks = $('header nav ul');
  const links = $('header nav ul li');

  menu_btn.click(function(event) {
    event.preventDefault();
    navlinks.toggleClass('open');
    links.each(function(index, el) {
      links.addClass('fade');
    });
  });

  const tabs = $('[data-tabcontent]');
  const tabContent = $('.tabContent');
  // tab
  tabs.click(function(event) {
    event.preventDefault();
    var idx = tabs.index(this);
    // tab_item
    tabs.removeClass('active');
    tabs.eq(idx).addClass('active');
    // tab_content
    tabContent.removeClass('active');
    var tab_target = tabs.eq(idx).attr('data-tabcontent');
    $(`#${tab_target}`).addClass('active');
  });

      $(".counter").counterUp({delay:10,time:500});
});
