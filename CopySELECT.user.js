// ==UserScript==
// @name           CopySELECT
// @version        0.2.2
// @namespace      cyvb
// @author         cyvb
// @description    Click a SELECT tag to copy selected item's text
// @updateURL      https://raw.githubusercontent.com/cyvb/CopySELECT/master/CopySELECT.user.js
// @include        http*://*.*/*
// @require        https://code.jquery.com/jquery-3.4.1.slim.min.js
// @grant          none
// @license        MIT; https://opensource.org/licenses/MIT
// @copyright      2019
// @run-at         document-end
// ==/UserScript==

(function() {
    'use strict';
    $('body').click(function(event) {
        if (event.target.tagName == 'SELECT') {
            var sel = window.getSelection();
            if (sel.rangeCount > 0) {
                sel.removeRange(sel.getRangeAt(sel.rangeCount - 1));
            }
            var cTag = event.target;
            var sItem = cTag.options[cTag.selectedIndex].text;
            var $temp = $('<p>');
            $('body').append($temp);
            $temp.text(sItem);
            $temp.attr('id', 'ASELECTCLIPBOARD');
            var clipNode = document.querySelector('#ASELECTCLIPBOARD');
            var range = document.createRange();
            range.selectNode(clipNode);
            window.getSelection().addRange(range);
            document.execCommand('copy');
            $temp.remove();
        }
    });
})();