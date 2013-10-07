$(function() {

  // enlarge the admin-sidebar
  $('.sidebar-enlarge').on('click', function() {
    if($(this).hasClass('enlarge-plus')) {
      $(this)
        .hide()
        .next().addClass('minify-plus')
        .parent().css('width', '66%');
    } else {
      $(this)
        .addClass('enlarge-plus')
        .next().show()
        .parent().css('width', '33%');
    }
  });

  // minify the admin-sidebar
  $('.sidebar-minify').on('click', function() {
    if($(this).hasClass('minify-plus')) {
      $(this)
        .removeClass('minify-plus')
        .prev().show()
        .parent().css('width', '33%');
    } else {
      $(this)
        .hide()
        .prev().removeClass('enlarge-plus').show()
        .parent().css('width', '80px');
    }
  });

  // Tabs
  $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  })

  // Draggable img
  $('.drag').draggable({
    scroll: true,
    cursor: 'move',
    distance: 40,
    snap: '.img-zone',
    revert: 'valid'
  });

  // Droppable img-zone
  $('.drop-revert').droppable({
    drop: function(event, ui) {
      $(ui.draggable.context).clone().appendTo($(this));
      $(this).children().removeAttr('style');
    }
  });
});  
