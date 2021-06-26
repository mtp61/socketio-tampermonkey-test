// ==UserScript==
// @name         socketio-test
// @author       You
// @match        https://www.reddit.com/
// @require      http://localhost:3000/socket.io/socket.io.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    // connect to the server
    const socket = io('http://localhost:3000');
    console.log('connected');

    // get the top posts
    const titles = document.querySelectorAll('a.title');

    // send top posts
    for (let i = 0; i < 5; ++i) {
        let titleText = (i + 1).toString() + ' - ' + titles[i].text;
        socket.emit('info', titleText);
        console.log('sent: "' + titleText + '"');
    }

})();