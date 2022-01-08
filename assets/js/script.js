(function () { "use strict"; var j = document.getElementsByTagName('iframe')[0], k = j.contentDocument || j.contentWindow.document, l = k.head, m = k.body, n, o; if (!k) return false; m.setAttribute('contenteditable', 'true'); m.setAttribute('spellcheck', 'false'); m.setAttribute('role', 'textbox'); n = k.createElement('style'); n.innerHTML = `:root {--body-bg:#ffffff;--title-color:#000000;--text-color:#545454;--link-color:#1a0dab;--body-font: Roboto, -apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}@font-face {font-family: Roboto;font-style: normal;font-weight: 400;font-display: swap;src: url(../font/Roboto/Roboto-Regular.ttf)}@font-face {font-family: Roboto;font-style: italic;font-weight: 400;font-display: swap;src: url(../font/Roboto/Roboto-Italic.ttf)}@font-face {font-family: Roboto;font-style: normal;font-weight: 700;font-display: swap;src: url(../font/Roboto/Roboto-Bold.ttf)}@font-face {font-family: Roboto;font-style: italic;font-weight: 700;font-display: swap;src: url(../font/Roboto/Roboto-BoldItalic.ttf)}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6{margin:1.7em 0 20px;font-weight:700;font-family:var(--body-font);color:var(--title-color);line-height:1.4em} h1, .h1{font-size:1.7rem} h2, .h2{font-size:1.6rem} h3, .h3{font-size:1.4rem} h4, .h4{font-size:1.2rem} h5, .h5{font-size:1.1rem} h6, .h6{font-size:1rem}a{color:var(--link-color);} a:hover{opacity:.7;transition:opacity .15s}table{border-spacing:0} iframe{max-width:100%;border:0;margin-left:auto;margin-right:auto} input, button, select, textarea{font:inherit;font-size:100%;color:inherit;line-height:normal;vertical-align:baseline} img{display:block;position:relative;max-width:100%;height:auto;cursor:move;border-radius:2px;} figure{margin:20px auto;text-align:center}ul, ol {padding-left:20px}ul ul, ul ol, ol ol, ol ul{font-size:95%}ol ul {list-style-type:disc}::-webkit-scrollbar{-webkit-appearance: none;width:5px;height:5px}::-webkit-scrollbar-track{background:rgba(0,0,0,0.15)}::-webkit-scrollbar-thumb{background: rgba(0,0,0,.25);border-radius:10px}p{margin:1.7em 0}::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,0.5)}::-webkit-scrollbar-thumb:active{background:rgba(0,0,0,0.5)}body {position: relative;margin: 0;padding: 0 16px;width: 100%;font-family: var(--body-font);font-size: 14px;line-height: 1.6em;color: var(--text-color);background-color: var(--body-bg);-webkit-font-smoothing: antialiased;word-break: break-word;transition: .1s ease}body > *:first-child {margin-top: 0}body > *:last-child {margin-bottom: 0}`; l.appendChild(n); o = k.createElement('p'); o.innerHTML = '<br/>'; m.appendChild(o); m.addEventListener('paste', (e) => { e.preventDefault(); var t = e.clipboardData.getData('text/plain'); k.execCommand('insertText', false, t) }); k.execCommand('defaultParagraphSeparator', false, 'p') })();

(function () { "use strict"; var a = document.getElementsByTagName('iframe')[0], b = a.contentDocument || a.contentWindow.document, c = document.querySelectorAll('.tB[role=button]'); for (let i = 0; i < c.length; i++) { c[i].addEventListener('mousedown', () => { let d = c[i].dataset.command; if (d !== 'createLinkUrl' || d !== 'editImage') { b.execCommand(d, false, null) } }) } })();

(function () { "use strict"; var a = document.getElementsByTagName('iframe')[0], b = a.contentDocument || a.contentWindow.document, c = document.querySelector('.tB[data-command=insertLinkUrl'), d = document.querySelector('.cTer'), e, f, g; c.addEventListener('click', () => { var h = document.createElement('div'); h.classList = 'tPop'; h.innerHTML = `<div class='pIn'><div class='iH'><h2 class='title'>Insert link</h2><span class='close' aria-label='Close' aria-hidden='true'></span></div><div class='iI iI-1'><div class='iG'><input class='iL' type='text' id='oL' autocomplete="off" required></input><label for='oL'>Place your link here</label></div></div><div class='iI iI-2'><div class='iC'><input class='iT hidden' type='checkbox' id='oT'></input><label for='oT'>Open in new tab</label></div></div><div class='iB'><span aria-label='Submit' role='button'>Submit</span></div></div><span class='cover pCov'></span>`; d.appendChild(h); e = document.querySelector('span[aria-label=Close]'); f = document.querySelector('.pCov'); g = document.querySelector('span[aria-label=Submit]'); function c(e) { e.addEventListener('click', () => { document.querySelector('.tPop').remove() }) } c(e); c(f); g.addEventListener('click', () => { var l = document.getElementById('oL'), t = document.getElementById('oT'); if (b.getSelection().toString()) { var a = b.createElement('a'); a.href = l.value; if (t.checked) a.target = "_blank"; b.getSelection().getRangeAt(0).surroundContents(a) } document.querySelector('.tPop').remove() }) }) })();

(function () { "use strict"; var a = document.getElementsByTagName('iframe')[0], b = a.contentDocument || a.contentWindow.document, c = document.querySelector('.tB[data-command=editImage'), d = document.querySelector('.cTer'), e, f, g; c.addEventListener('click', () => { var h = document.createElement('div'); h.classList = 'tPop'; h.innerHTML = `<div class='pIn'><div class='iH'><h2 class='title'>Insert Image</h2><span class='close' aria-label='Close' aria-hidden='true'></span></div><div class='iI'><div class='iG iG-1'><input class='iU' type='text' id='oU' autocomplete="off" required></input><label for='oU'>Place your image URL here</label></div><div class='iG iG-2'><input class='iT' type='text' id='oT' autocomplete="off" required></input><label for='oT'>Image Title</label></div><div class='iG iG-2'><input class='iA' type='text' id='oA' autocomplete="off" required></input><label for='oA'>Image Alt</label></div></div><div class='iB'><span aria-label='Submit' role='button'>Submit</span></div></div><span class='cover pCov'></span>`; d.appendChild(h); e = document.querySelector('span[aria-label=Close]'); f = document.querySelector('.pCov'); g = document.querySelector('span[aria-label=Submit]'); function c(e) { e.addEventListener('click', () => { document.querySelector('.tPop').remove() }) } c(e); c(f); g.addEventListener('click', () => { var u = document.getElementById('oU'), t = document.getElementById('oT'), a = document.getElementById('oA'); if (u.value == '') return false; var i = document.createElement('img'); i.src = u.value; if (t.value != '') i.title = t.value; if (a.value != '') i.alt = a.value; b.body.appendChild(i); document.querySelector('.tPop').remove() }) }) })();

(function () { "use strict"; var x = document.getElementsByTagName('iframe')[0], y = x.contentDocument || x.contentWindow.document, z = document.querySelectorAll('.tB[data-value]'); for (var i = 0; i < z.length; i++) { let v = z[i].dataset.value; z[i].addEventListener('mousedown', () => { y.execCommand('formatBlock', false, v) }) } })();

(function () {
  "use strict";

  var j = document.querySelector('.tV')
    , k = document.querySelector('.cTer');

  j.addEventListener('click', () => {
    var a = document.getElementsByTagName('iframe')[0]
      , b = a.contentDocument || a.contentWindow.document
      , e, f, g;

    var c = document.createTextNode(b.body.innerHTML);
    var d = document.createElement('div');
    d.className = 'tCod';
    d.innerHTML = `
    <div class='cIn'>
      <div class='iH'>
        <h2 class='title'>Source code</h2>
        <span class='close' aria-label='Close' aria-hidden='true'></span>
      </div>
      <pre class='iEd' contenteditable='true'></pre>
      <div class='iB'>
        <span class='bS' aria-label='Change' role='button'>Change</span>
        <span class='bC' aria-label='Cancel' role='button'>Cancel</span>
      </div>
    </div>
    <span class='cover cCov'></span>
    `;
    k.appendChild(d);
    document.querySelector('.iEd').appendChild(c);

    e = document.querySelector('span[aria-label=Close]');
    f = document.querySelector('.cCov');
    g = document.querySelector('span[aria-label=Cancel]')
    function z(e) { e.addEventListener('click', () => { document.querySelector('.tCod').remove() }) } z(e); z(f); z(g);

    var h = document.querySelector('span[aria-label=Change]');
    h.addEventListener('click', () => {
      var m = document.querySelector('.tCod pre');
      var n = m.innerHTML;
      var o = n.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/\&amp;amp;/g, "&");

      b.body.innerHTML = o;
      b.body.focus();
      document.querySelector('.tCod').remove()
    })

    var m = document.querySelector('.tCod pre');
    m.addEventListener("paste", (e) => {
      e.preventDefault()
      var s = e.clipboardData.getData('text/plain')
      document.execCommand('insertText', false, s)
    })
    document.execCommand('defaultParagraphSeparator', false, null);
  })
})();

(function () {
  var a = document.getElementsByTagName('iframe')[0]
    , b = a.contentDocument || a.contentWindow.document
    , c = b.body;

  c.addEventListener('input', () => {
    var text = c.innerHTML.split(' ')
      , count = document.querySelector('.tCou')
      , word;

    for (var i = 0; i <= text.length; i++) {
      if (text[i] !== ' ' && text[i] !== '\n') {
        word = text.length;
        count.setAttribute('data-count', word);
      }
    }
  })
})();

// SEO Tools
(function () {
  var d = new Date()
    , m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  document.querySelector('.mD').innerHTML = d.getDate().toString() + ' ' + m[d.getMonth()] + ' ' + d.getFullYear().toString() + ' — ';
})();