import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Update UI
html = html.replace('0 / 500 كلمة</p>', '0 / 500 حرف</p>');

// Replace logic
html = html.replace(
  /const text = this\.value\.trim[^]*?\}\);/m,
  `const text = this.value;
            if (text.length > 500) {
              // limit to 500
              this.value = text.slice(0, 500);
              wordCountDisplay.textContent = "500 / 500 حرف (الحد الأقصى)";
              wordCountDisplay.classList.add("text-red-500");
            } else {
              wordCountDisplay.textContent = text.length + " / 500 حرف";
              wordCountDisplay.classList.remove("text-red-500");
            }
          });`
);

fs.writeFileSync('index.html', html);
