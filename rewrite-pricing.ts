import fs from 'fs';

let html = fs.readFileSync('store-details.html', 'utf8');

const regex = /<!-- Pricing Section -->[\s\S]*?<\/main>/;
const replacement = `<!-- Interactive Customization Section -->
          <div class="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10" id="store-configurator">
            <div class="flex items-center justify-center gap-3 mb-8">
              <i class="ph-fill ph-sliders-horizontal text-3xl text-primary"></i>
              <h2 class="text-2xl font-bold text-primary m-0">
                خصص متجرك
              </h2>
            </div>

            <!-- Base Price Note -->
            <div class="bg-blue-50 text-blue-800 p-4 rounded-xl mb-6 flex items-start gap-3 border border-blue-100">
              <i class="ph-fill ph-info text-xl shrink-0 mt-0.5"></i>
              <p class="text-sm">
                تكلفة برمجة الموقع والبوتات الأساسية هي <strong>20$</strong> (تدفع مرة واحدة). يرجى اختيار النطاق والاستضافة لإكمال تسعير متجرك.
              </p>
            </div>

            <!-- Domain Configuration -->
            <div class="mb-8 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 class="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                <i class="ph-fill ph-globe text-accent"></i> هل تمتلك نطاق (Domain) خاص بك؟
              </h3>
              
              <div class="flex gap-4 mb-4">
                <label class="cursor-pointer flex items-center gap-2">
                  <input type="radio" name="hasDomain" value="yes" class="w-4 h-4 text-accent" onchange="updateConfigurator()">
                  <span class="font-medium">نعم أمتلك</span>
                </label>
                <label class="cursor-pointer flex items-center gap-2">
                  <input type="radio" name="hasDomain" value="no" class="w-4 h-4 text-accent" checked onchange="updateConfigurator()">
                  <span class="font-medium">لا، أريد شراء واحد</span>
                </label>
              </div>

              <!-- If YES: Enter Domain -->
              <div id="domain-input-section" class="hidden animate-fade-in mt-4">
                <label class="block text-sm font-medium text-slate-700 mb-2">أدخل نطاقك هنا (بدون رسوم إضافية):</label>
                <input type="text" id="existing-domain" placeholder="مثال: mystore.com" class="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none font-sans" dir="ltr" oninput="updateConfigurator()" autocomplete="off">
              </div>

              <!-- If NO: Select Domain -->
              <div id="domain-select-section" class="animate-fade-in mt-4 space-y-3">
                <label class="block text-sm font-medium text-slate-700 mb-2">اختر نوع النطاق الذي تود شراءه (سنوياً):</label>
                
                <label class="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                  <div class="flex items-center gap-3">
                    <input type="radio" name="domainType" value="sy" class="w-4 h-4 text-accent" checked onchange="updateConfigurator()">
                    <span class="font-mono text-slate-800 font-bold" dir="ltr">.sy</span>
                    <span class="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold">ينصح به</span>
                  </div>
                  <span class="font-bold text-slate-800" dir="ltr">$3</span>
                </label>

                <label class="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                  <div class="flex items-center gap-3">
                    <input type="radio" name="domainType" value="store" class="w-4 h-4 text-accent" onchange="updateConfigurator()">
                    <span class="font-mono text-slate-800 font-bold" dir="ltr">.store</span>
                  </div>
                  <span class="font-bold text-slate-800" dir="ltr">$6</span>
                </label>

                <label class="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                  <div class="flex items-center gap-3">
                    <input type="radio" name="domainType" value="com" class="w-4 h-4 text-accent" onchange="updateConfigurator()">
                    <span class="font-mono text-slate-800 font-bold" dir="ltr">.com</span>
                  </div>
                  <span class="font-bold text-slate-800" dir="ltr">$12</span>
                </label>
              </div>
            </div>

            <!-- Hosting Configuration -->
            <div class="mb-8 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 class="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                <i class="ph-fill ph-hard-drives text-accent"></i> اختر الاستضافة (شهرياً)
              </h3>
              
              <div class="space-y-3">
                <label class="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                  <div class="flex items-center gap-3">
                    <input type="radio" name="hostingType" value="basic" class="w-4 h-4 text-accent" checked onchange="updateConfigurator()">
                    <div>
                      <span class="font-bold text-slate-800 block">استضافة عادية</span>
                      <span class="text-xs text-slate-500">مبدئياً للمتاجر الجديدة</span>
                    </div>
                  </div>
                  <span class="font-bold text-slate-800" dir="ltr">$4</span>
                </label>

                <label class="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                  <div class="flex items-center gap-3">
                    <input type="radio" name="hostingType" value="medium" class="w-4 h-4 text-accent" onchange="updateConfigurator()">
                    <div>
                      <span class="font-bold text-slate-800 flex items-center gap-2 flex-wrap">استضافة متوسطة <span class="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full inline-block">ينصح بها لاحقاً</span></span>
                      <span class="text-xs text-slate-500 mt-1 block">مناسب لأكثر من 5000 مستخدم</span>
                    </div>
                  </div>
                  <span class="font-bold text-slate-800" dir="ltr">$7</span>
                </label>

                <label class="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                  <div class="flex items-center gap-3">
                    <input type="radio" name="hostingType" value="high" class="w-4 h-4 text-accent" onchange="updateConfigurator()">
                    <div>
                      <span class="font-bold text-slate-800 flex items-center gap-2 flex-wrap">استضافة عالية <span class="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full inline-block">ينصح بها لاحقاً</span></span>
                      <span class="text-xs text-slate-500 mt-1 block">للمتاجر ذات الحركة الكثيفة جداً</span>
                    </div>
                  </div>
                  <span class="font-bold text-slate-800" dir="ltr">$12</span>
                </label>
              </div>
            </div>

            <!-- Total Price -->
            <div class="flex flex-col items-center gap-2 mb-8 mt-6 bg-white p-6 rounded-xl border border-slate-100 shadow-lg relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 pointer-events-none"></div>
              <h3 class="text-lg font-bold text-slate-600 relative z-10">السعر الإجمالي (المقدر)</h3>
              <div class="flex items-baseline justify-center gap-2 relative z-10">
                <span class="text-5xl font-extrabold text-primary font-sans" dir="ltr" id="total-price">$27</span>
              </div>
              <div class="mt-4 w-full border-t border-slate-100 pt-4 relative z-10">
                <ul class="text-sm text-slate-500 space-y-2 font-medium" id="price-breakdown">
                  <li class="flex justify-between"><span>برمجة وبوتات:</span> <span dir="ltr">$20</span></li>
                  <li class="flex justify-between"><span>نطاق (.sy):</span> <span dir="ltr">$3 سنوياً</span></li>
                  <li class="flex justify-between"><span>استضافة (عادية):</span> <span dir="ltr">$4 شهرياً</span></li>
                </ul>
              </div>
            </div>

            <!-- Action Area -->
            <div class="text-center">
              <a
                href="#"
                id="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto mx-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] transform hover:-translate-y-1 text-lg mb-4"
              >
                <i class="ph-fill ph-whatsapp-logo text-2xl"></i>
                اطلب متجرك عبر واتساب
              </a>
              <p class="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-4">
                لكي لا نحسب لك بسعر لا يناسبك يمكنك تخصيص شراء متجرك لشرائه بأقل سعر مناسب لك
              </p>
            </div>
          </div>

          <script>
            function updateConfigurator() {
              const basePrice = 20;
              
              const hasDomain = document.querySelector('input[name="hasDomain"]:checked').value === 'yes';
              const domainInputSection = document.getElementById('domain-input-section');
              const domainSelectSection = document.getElementById('domain-select-section');
              
              if (hasDomain) {
                domainInputSection.classList.remove('hidden');
                domainSelectSection.classList.add('hidden');
              } else {
                domainInputSection.classList.add('hidden');
                domainSelectSection.classList.remove('hidden');
              }

              let domainPrice = 0;
              let domainName = "لدي نطاق: " + (document.getElementById('existing-domain').value || 'لم يحدد');
              
              if (!hasDomain) {
                const domainTypeRadio = document.querySelector('input[name="domainType"]:checked');
                if(domainTypeRadio) {
                  if(domainTypeRadio.value === 'sy') { domainPrice = 3; domainName = "نطاق .sy"; }
                  if(domainTypeRadio.value === 'store') { domainPrice = 6; domainName = "نطاق .store"; }
                  if(domainTypeRadio.value === 'com') { domainPrice = 12; domainName = "نطاق .com"; }
                }
              }

              let hostingPrice = 0;
              let hostingName = "";
              const hostingTypeRadio = document.querySelector('input[name="hostingType"]:checked');
              if(hostingTypeRadio) {
                if(hostingTypeRadio.value === 'basic') { hostingPrice = 4; hostingName = "استضافة عادية"; }
                if(hostingTypeRadio.value === 'medium') { hostingPrice = 7; hostingName = "استضافة متوسطة"; }
                if(hostingTypeRadio.value === 'high') { hostingPrice = 12; hostingName = "استضافة عالية"; }
              }

              const totalPrice = basePrice + domainPrice + hostingPrice;
              document.getElementById('total-price').textContent = '$' + totalPrice;

              let breakdownHtml = '<li class="flex justify-between"><span>برمجة وبوتات:</span> <span dir="ltr">$20</span></li>';
              if(hasDomain) {
                breakdownHtml += '<li class="flex justify-between"><span>نطاق:</span> <span>يمتلك نطاق</span></li>';
              } else {
                breakdownHtml += '<li class="flex justify-between"><span>' + domainName + ':</span> <span dir="ltr">$' + domainPrice + ' سنوياً</span></li>';
              }
              breakdownHtml += '<li class="flex justify-between"><span>' + hostingName + ':</span> <span dir="ltr">$' + hostingPrice + ' شهرياً</span></li>';
              
              document.getElementById('price-breakdown').innerHTML = breakdownHtml;

              // Generate Whatsapp Message
              let message = "أهلاً، أرغب بطلب متجر إلكتروني بهذه المواصفات:\\n\\n";
              message += "1- النطاق (الدومين): " + domainName + "\\n";
              message += "2- الاستضافة: " + hostingName + "\\n";
              message += "3- التكلفة التقريبية المحسوبة: " + "$" + totalPrice + "\\n\\n";
              message += "أرجو التواصل معي لإتمام الطلب، شكراً.";

              const encodedMessage = encodeURIComponent(message);
              document.getElementById('whatsapp-btn').href = "https://wa.me/212773963897?text=" + encodedMessage;
            }

            // Bind events directly if needed, but onchange inline is already there. Let's do it cleanly to make sure it fires.
            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", updateConfigurator);
            } else {
              updateConfigurator();
            }
          </script>
        </div>
      </div>
    </main>
`;

html = html.replace(regex, replacement);
fs.writeFileSync('store-details.html', html);
