import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');
const replacement = `<div
          id="tab-custom"
          class="tab-content hidden animate-fade-in flex-col items-center content-center px-4 w-full"
        >
          <div class="mb-8 text-center max-w-2xl mx-auto">
             <p class="text-slate-600 mb-2 text-lg">
              نبني لك ما تحتاجه تمامًا — من الفكرة إلى الإطلاق، موقعك يُصنع خصيصًا لك
             </p>
             <p class="text-sm text-slate-500">
               قم بتعبئة النموذج أدناه لتزويدنا بتفاصيل موقعك وسنتواصل معك بأقرب وقت للمناقشة.
             </p>
          </div>
          
          <div class="w-full max-w-2xl mx-auto bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8 text-right">
            <form id="custom-website-form" class="space-y-6">
               
               <div>
                  <label for="custom-site-name" class="block text-sm font-bold text-slate-700 mb-2">اسم موقعك أو مشروعك:</label>
                  <input type="text" id="custom-site-name" required placeholder="مثال: مطعم سيريابت" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none font-sans transition-all">
               </div>

               <div>
                  <label for="custom-site-service" class="block text-sm font-bold text-slate-700 mb-2">ما هي خدمتك؟</label>
                  <input type="text" id="custom-site-service" required placeholder="مثال: مطعم، كافيه، معرض، موقع شخصي، عيادة..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none font-sans transition-all">
               </div>

               <div>
                  <label for="custom-site-desc" class="block text-sm font-bold text-slate-700 mb-2">صف موقعك (الميزات والأقسام التي تريدها):</label>
                  <textarea id="custom-site-desc" required rows="5" placeholder="اكتب هنا كافة التفاصيل والصفحات التي ترغب بها (من طلبات، حجوزات، أو واجهات عرض)..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none font-sans transition-all resize-y"></textarea>
                  <p class="text-xs text-slate-500 mt-2 text-left" id="word-count">0 / 500 كلمة</p>
               </div>
               
               <button type="button" id="custom-site-submit" class="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,211,102,0.2)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transform hover:-translate-y-1 text-lg mt-4">
                  <i class="ph-fill ph-whatsapp-logo text-2xl"></i>
                  إرسال الطلب عبر واتساب
               </button>
            </form>
          </div>
        </div>`;

html = html.replace(/<div\s*id="tab-custom"[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/ms, replacement + '\n      </div>\n    </section>');

// Add the JS logic
const jsLogic = `
      document.addEventListener("DOMContentLoaded", function () {
        // Word count and custom form submission logic
        const descTextarea = document.getElementById('custom-site-desc');
        const wordCountDisplay = document.getElementById('word-count');

        if (descTextarea && wordCountDisplay) {
          descTextarea.addEventListener('input', function() {
            const text = this.value.trim();
            const words = text ? text.split(/\s+/) : [];
            if (words.length > 500) {
              // limit to 500
              this.value = words.slice(0, 500).join(" ");
              wordCountDisplay.textContent = "500 / 500 كلمة (الحد الأقصى)";
              wordCountDisplay.classList.add('text-red-500');
            } else {
              wordCountDisplay.textContent = words.length + " / 500 كلمة";
              wordCountDisplay.classList.remove('text-red-500');
            }
          });

          // Submit logic
          document.getElementById('custom-site-submit').addEventListener('click', function() {
            const siteName = document.getElementById('custom-site-name').value.trim();
            const siteService = document.getElementById('custom-site-service').value.trim();
            const siteDesc = descTextarea.value.trim();

            if (!siteName || !siteService || !siteDesc) {
              alert("يرجى تعبئة جميع الحقول قبل الإرسال.");
              return;
            }

            let message = "أهلاً بك، أود طلب موقع إلكتروني خاص بهذه المواصفات:\\n\\n";
            message += "📌 اسم الموقع: " + siteName + "\\n";
            message += "💼 نوع الخدمة: " + siteService + "\\n";
            message += "📝 تفاصيل الموقع المطلوبة:\\n" + siteDesc + "\\n\\n";
            message += "أرجو التواصل معي للبدء بالعمل ومناقشة التكلفة، وشكراً لكم.";

            const encodedMessage = encodeURIComponent(message);
            window.open("https://wa.me/212773963897?text=" + encodedMessage, "_blank");
          });
        }
      });
    </script>
  </body>`;

html = html.replace(/<\/script>\s*<\/body>/, jsLogic);

fs.writeFileSync('index.html', html);
