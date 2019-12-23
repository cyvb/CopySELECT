// ==UserScript==
// @name           Copy SELECT
// @version        0.1
// @namespace      cyvb
// @author         cyvb
// @description    Click a SELECT tag to copy selected item's text
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
            window.getSelection().removeAllRanges();
            $temp.remove();
        }
    });
})();