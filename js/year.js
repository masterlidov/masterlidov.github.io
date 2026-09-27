(function () {
  var y = String(new Date().getFullYear());
  var nodes = document.querySelectorAll('[data-current-year]');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].textContent = y;
  }
})();
