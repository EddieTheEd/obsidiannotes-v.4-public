(function(document) {
    var toggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('#sidebar');
    var checkbox = document.querySelector('#sidebar-checkbox');
  
    document.addEventListener('click', function(e) {
      e.preventDefault();
      var target = e.target;
  
      if(!checkbox.checked ||
         sidebar.contains(target) ||
         (target === checkbox || target === toggle)) return;
  
      checkbox.checked = false;
    }, false, {passive: true});

    var label = document.querySelector('.sidebar-label');
    label.addEventListener('click', function(e) {
      e.preventDefault(); // prevent the default behavior of the click event
      checkbox.checked = !checkbox.checked; // toggle the checkbox
    }, {passive: true});
  })(document);

  
