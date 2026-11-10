/* 記事ページ用：目次の自動生成＋表の横スクロール（2026-11-10） */
(function () {
  var art = document.querySelector('article');
  if (!art) return;
  // 表を横スクロール枠で包む
  art.querySelectorAll('table').forEach(function (t) {
    if (t.parentNode.classList && t.parentNode.classList.contains('table-wrap')) return;
    var w = document.createElement('div');
    w.className = 'table-wrap';
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });
  // 目次（h2 が3つ以上ある記事だけ）
  var hs = art.querySelectorAll('h2');
  if (hs.length < 3 || art.querySelector('.toc')) return;
  var nav = document.createElement('nav');
  nav.className = 'toc';
  var ttl = document.createElement('p');
  ttl.className = 'toc-title';
  ttl.textContent = '目次';
  nav.appendChild(ttl);
  var ol = document.createElement('ol');
  hs.forEach(function (h, i) {
    if (!h.id) h.id = 'sec' + (i + 1);
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    ol.appendChild(li);
  });
  nav.appendChild(ol);
  hs[0].parentNode.insertBefore(nav, hs[0]);
})();
