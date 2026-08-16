const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '../assets/pics/greek text/1/Screenshot 2026-08-09 164902.png'),
  path.join(__dirname, '../assets/pics/greek text/1/προγραμμα.png')
];

files.forEach(file => {
  potrace.trace(file, { color: '#8b0000', optTolerance: 0.2, turdSize: 2 }, function(err, svg) {
    if (err) {
      console.error('Error on', file, err);
      return;
    }
    const outFile = file.replace('.png', '.svg');
    fs.writeFileSync(outFile, svg);
    console.log('Converted', file, 'to', outFile);
  });
});
