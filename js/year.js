(function () {
  var current = String(new Date().getFullYear());
  var nodes = document.querySelectorAll('[data-year-start]');
  for (var i = 0; i < nodes.length; i++) {
    var start = (nodes[i].textContent || '').trim();
    nodes[i].textContent = start && start !== current ? start + '–' + current : current;
  }
})();
