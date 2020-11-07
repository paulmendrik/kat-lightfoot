function ready(handler) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
}

ready(function() {
  lightbox.attach('[data-action="lightbox"]', {
    title: true,
    loop: true,
    zoom: true,
    download: true,
    share: true
  });
});
