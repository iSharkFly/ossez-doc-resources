var toctitle = document.getElementById('toctitle');
var path = window.location.pathname;
if (toctitle != null) {
    var oldtoc = toctitle.nextElementSibling;
    var newtoc = document.createElement('div');
    newtoc.setAttribute('id', 'tocbot');
    newtoc.setAttribute('class', 'js-toc desktop-toc');
    oldtoc.setAttribute('class', 'mobile-toc');
    oldtoc.parentNode.appendChild(newtoc);
    tocbot.init({
        contentSelector: '#content',
        headingSelector: 'h1, h2, h3, h4, h5',
        positionFixedSelector: 'body',
        fixedSidebarOffset: 90,
        smoothScroll: false
    });
    if (!path.endsWith("index.html") && !path.endsWith("/")) {
        var link = document.createElement("a");
        if (document.getElementById('index-link')) {
            indexLinkElement = document.querySelector('#index-link > p > a');
            linkHref = indexLinkElement.getAttribute("href");
            link.setAttribute("href", linkHref);
        } else {
            link.setAttribute("href", "index.html");
        }
        link.innerHTML = "<span><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span> Back to index";
        var block = document.createElement("div");
        block.setAttribute('class', 'back-action');
        block.appendChild(link);
        var toc = document.getElementById('toc');
        var next = document.getElementById('toctitle').nextElementSibling;
        toc.insertBefore(block, next);
    }
}

var headerHtml = '<div id="header-spring">\n' +
    '<h1>\n' +
    '<svg width="300" height="80" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n' +
    '<!-- Created with SVG-edit - https://github.com/SVG-Edit/svgedit-->\n' +
    '<defs>\n' +
    '<radialGradient spreadMethod="pad" id="svg_13">\n' +
    '<stop offset="0" stop-color="#a02020"/>\n' +
    '<stop offset="1" stop-color="#5fdfdf"/>\n' +
    '</radialGradient>\n' +
    '</defs>\n' +
    '<g class="layer">\n' +
    '<title>Layer 1</title>\n' +
    '<text font-weight="bold" stroke="#000000" transform="matrix(2.1204121440892294,0,0,1.7485910709689874,38.343161559095435,-13.030432704796025) " xml:space="preserve" text-anchor="middle" font-family="Sans-serif" font-size="24" id="svg_1" y="40.54269" x="13.04218" stroke-width="0" fill="#007fff">OSS</text>\n' +
    '<text font-weight="bold" stroke="url(#svg_13)" transform="matrix(1.8365623336406687,0,0,1.8603774794326031,-436.19223682307717,23.464072434015016) " xml:space="preserve" text-anchor="middle" font-family="Sans-serif" font-size="24" id="svg_11" y="19.20005" x="317.86651" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#007f00">EZ</text>\n' +
    '</g>\n' +
    '</svg>\n' +
    '\n' +
    '</h1>\n' +
    '</div>';

var header = document.createElement("div");
header.innerHTML = headerHtml;
document.body.insertBefore(header, document.body.firstChild);
