document.addEventListener("DOMContentLoaded", function() {
    var scrollbutton = document.getElementById('aboutme_knop');
    console.log(document.getElementById('Button'))
    scrollbutton.addEventListener('click', function() {
      var targetRegion = document.getElementById('aboutme');
      var targetPosition = targetRegion.getBoundingClientRect().top + window.pageYOffset;
      
        window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });

document.addEventListener("DOMContentLoaded", function() {
  var scrollbutton = document.getElementById('portfolio_knop');
  console.log(document.getElementById('Button'))
  scrollbutton.addEventListener('click', function() {
    var targetRegion = document.getElementById('pfo');
    var targetPosition = targetRegion.getBoundingClientRect().top + window.pageYOffset;
    
      window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var scrollbutton = document.getElementById('contact_knop');
  console.log(document.getElementById('Button'))
  scrollbutton.addEventListener('click', function() {
    var targetRegion = document.getElementById('ct');
    var targetPosition = targetRegion.getBoundingClientRect().top + window.pageYOffset;
    
      window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});