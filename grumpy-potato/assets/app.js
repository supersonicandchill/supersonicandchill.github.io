(function () {
  // mobile nav
  var t = document.querySelector('.nav-toggle'), n = document.getElementById('nav');
  if (t && n) t.addEventListener('click', function () { var o = n.classList.toggle('open'); t.setAttribute('aria-expanded', o); });
  // logo note: Escape closes, touch toggles
  var bw = document.querySelector('.brand-wrap'), note = document.getElementById('logo-note');
  if (bw && note) {
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') document.activeElement && document.activeElement.blur(); });
  }
  // audio: one at a time, never autoplay
  var audios = [].slice.call(document.querySelectorAll('audio.gp-audio'));
  audios.forEach(function (a) { a.addEventListener('play', function () { audios.forEach(function (o) { if (o !== a) o.pause(); }); }); });
  // YouTube click-to-load
  document.querySelectorAll('.yt').forEach(function (box) {
    var b = box.querySelector('.yt-play'); if (!b) return;
    b.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + box.dataset.yt + '?autoplay=1&rel=0';
      f.title = box.dataset.title || 'Video'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
      box.replaceChild(f, b); f.focus();
    });
  });
})();
// if a remote image fails, hide the broken-image icon and alt text
document.addEventListener('error', function (e) { if (e.target.tagName === 'IMG' && e.target.closest('main')) e.target.classList.add('broken'); }, true);
