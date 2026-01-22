// Simple script to wrap h4 and p tags in spec-content divs
const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Digital Win Technologies\\Alpine Vistas\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Regular expression to find spec-item blocks and wrap h4 and p in spec-content
content = content.replace(
    /(<div class="spec-item">)\r?\n(\s+)(<div class="spec-icon">.*?<\/div>)\r?\n(\s+)(<h4>.*?<\/h4>)\r?\n(\s+)(<p>[\s\S]*?<\/p>)\r?\n(\s+)(<\/div>)/g,
    function(match, openDiv, indent1, icon, indent2, h4, indent3, p, indent4, closeDiv) {
        return `${openDiv}\r\n${indent1}${icon}\r\n${indent1}<div class="spec-content">\r\n${indent1}    ${h4.trim()}\r\n${indent1}    ${p.trim()}\r\n${indent1}</div>\r\n${indent4}${closeDiv}`;
    }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated spec-items with spec-content wrappers!');
