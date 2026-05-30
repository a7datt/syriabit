import fs from 'fs';

for (const file of ['index.html', 'store-details.html']) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/SyriaBit/g, 'SyraBit');
  content = content.replace(/syriabit/g, 'syrabit');
  fs.writeFileSync(file, content);
}
