// Cache selectors
var lastId,
    topMenu = $("#nav-links"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   // DAVID mods
   // Force registry id if bottom of page met (by 30px to fix safari bounce)
   if($(window).scrollTop() + $(window).height() >= getDocHeight() - 30) {
       id = "registry";
   }

   if (lastId !== id) {
       // DAVID: Only change background if changed section
       // updateNavBg(id, lastId);
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});

// DAVID's function to update nav background
function updateNavBg(id, lastId) {
  // If switching into wedding section
  if (id === "wedding") {
    $('#second-bg').css('opacity', '1')
    // $('#nav').css('background-image', 'url("/img/chapel.jpg")');
  } else {
    // If switching out of wedding section
    if (lastId === "wedding") {
      $('#second-bg').css('opacity', '0')

      // $('#nav').css('background-image', 'url("/img/bg.jpg")');
    }
  }
}

// Helper function
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
