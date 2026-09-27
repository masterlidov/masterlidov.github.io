(function () {
  var current = new Date().getFullYear();
  var nodes = document.querySelectorAll('[data-year-start]');
  for (var i = 0; i < nodes.length; i++) {
    var start = parseInt((nodes[i].textContent || '').trim(), 10);
    if (isNaN(start) || start > current) {
      nodes[i].textContent = String(current);
    } else if (start < current) {
      nodes[i].textContent = start + '–' + current;
    } else {
      nodes[i].textContent = String(current);
    }
  }
})();
