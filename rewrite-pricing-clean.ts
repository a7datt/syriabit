import fs from 'fs';

let html = fs.readFileSync('store-details.html', 'utf8');

const regex = /<!-- Interactive Customization Section -->[\s\S]*?<\/script>\s*<\/div>\s*<\/div>\s*<\/main>/;

const replacement = `<!-- Interactive Customization Section -->
          <div class="mt-16 border-t border-slate-200 pt-16 pb-8" id="store-configurator">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-slate-800 mb-4">
                صمم حزمة متجرك المناسبة
              </h2>
              <p class="text-slate-500 max-w-2xl mx-auto">
                اختر مواصفات متجرك لتظهر لك التكلفة الإجمالية مباشرة، بدون مفاجآت وبكل شفافية. الأساسيات مدمجة وبسعر ثابت.
              </p>
            </div>

            <div class="max-w-5xl mx-auto">
              <!-- Base Price Note -->
              <div class="flex items-center gap-3 bg-blue-50/50 border border-blue-100 text-blue-800 p-4 rounded-xl mb-10 w-fit mx-auto">
                <i class="ph-fill ph-check-circle text-xl shrink-0"></i>
                <p class="text-sm font-medium">
                  تكلفة برمجة الموقع والبوتات الأساسية هي <strong class="font-sans text-base mx-1" dir="ltr">$20</strong> (تدفع مرة واحدة).
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <!-- Domain Configuration -->
                <div class="space-y-6">
                  <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <i class="ph-fill ph-globe text-accent text-xl"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-800">إعداد النطاق (Domain)</h3>
                  </div>
                  
                  <div class="space-y-5">
                    <div class="flex items-center gap-6">
                      <label class="cursor-pointer flex items-center gap-2 group">
                        <input type="radio" name="hasDomain" value="yes" class="w-4 h-4 text-accent border-slate-300 focus:ring-accent" onchange="updateConfigurator()">
                        <span class="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">نعم أمتلك نطاق</span>
                      </label>
                      <label class="cursor-pointer flex items-center gap-2 group">
                        <input type="radio" name="hasDomain" value="no" class="w-4 h-4 text-accent border-slate-300 focus:ring-accent" checked onchange="updateConfigurator()">
                        <span class="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">أريد شراء نطاق</span>
                      </label>
                    </div>

                    <!-- If YES: Enter Domain -->
                    <div id="domain-input-section" class="hidden animate-fade-in bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <label class="block text-sm font-medium text-slate-700 mb-2">أدخل نطاقك هنا:</label>
                      <input type="text" id="existing-domain" placeholder="مثال: mystore.com" class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none font-sans transition-all" dir="ltr" oninput="updateConfigurator()" autocomplete="off">
                      <p class="text-xs text-slate-500 mt-2 flex items-center gap-1"><i class="ph-fill ph-info"></i> بدون أية رسوم إضافية</p>
                    </div>

                    <!-- If NO: Select Domain -->
                    <div id="domain-select-section" class="animate-fade-in space-y-3">
                      <label class="block text-sm font-medium text-slate-600 mb-3">اختر امتداد النطاق (يجدد سنوياً):</label>
                      
                      <label class="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-accent/40 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                        <div class="flex items-center gap-4">
                          <input type="radio" name="domainType" value="sy" class="w-4 h-4 text-accent focus:ring-accent" checked onchange="updateConfigurator()">
                          <div>
                            <span class="font-mono text-slate-800 font-bold text-lg" dir="ltr">.sy</span>
                            <span class="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold mr-2 inline-block">ينصح به</span>
                          </div>
                        </div>
                        <span class="font-bold text-slate-800 text-lg" dir="ltr">$3</span>
                      </label>

                      <label class="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-accent/40 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                        <div class="flex items-center gap-4">
                          <input type="radio" name="domainType" value="store" class="w-4 h-4 text-accent focus:ring-accent" onchange="updateConfigurator()">
                          <span class="font-mono text-slate-800 font-bold text-lg" dir="ltr">.store</span>
                        </div>
                        <span class="font-bold text-slate-800 text-lg" dir="ltr">$6</span>
                      </label>

                      <label class="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-accent/40 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5">
                        <div class="flex items-center gap-4">
                          <input type="radio" name="domainType" value="com" class="w-4 h-4 text-accent focus:ring-accent" onchange="updateConfigurator()">
                          <span class="font-mono text-slate-800 font-bold text-lg" dir="ltr">.com</span>
                        </div>
                        <span class="font-bold text-slate-800 text-lg" dir="ltr">$12</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Hosting Configuration -->
                <div class="space-y-6">
                  <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <i class="ph-fill ph-hard-drives text-blue-500 text-xl"></i>
                    </div>
                    <h3 class="font-bold text-xl text-slate-800">حزمة الاستضافة (شهرياً)</h3>
                  </div>

                  <div class="space-y-4">
                    <label class="flex items-start p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-accent/40 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5 relative">
                      <div class="flex items-start gap-4 w-full">
                        <input type="radio" name="hostingType" value="basic" class="w-4 h-4 text-accent mt-1 focus:ring-accent" checked onchange="updateConfigurator()">
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-1">
                            <span class="font-bold text-slate-800 text-base">استضافة أساسية</span>
                            <span class="font-bold text-slate-800 text-lg" dir="ltr">$4</span>
                          </div>
                          <p class="text-sm text-slate-500 leading-relaxed max-w-[90%]">ممتازة للانطلاقة والمتاجر الجديدة، توفر أداء مستقر لعدد الزوار المبدئي.</p>
                        </div>
                      </div>
                    </label>

                    <label class="flex items-start p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-accent/40 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5 relative">
                      <div class="flex items-start gap-4 w-full">
                        <input type="radio" name="hostingType" value="medium" class="w-4 h-4 text-accent mt-1 focus:ring-accent" onchange="updateConfigurator()">
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-1">
                            <span class="font-bold text-slate-800 text-base flex items-center gap-2">
                              متوسطة الأداء
                              <span class="bg-blue-100/70 text-blue-700 text-[10px] px-2 py-0.5 rounded-full inline-flex tracking-tight">ينصح بها لاحقاً</span>
                            </span>
                            <span class="font-bold text-slate-800 text-lg" dir="ltr">$7</span>
                          </div>
                          <p class="text-sm text-slate-500 leading-relaxed max-w-[90%]">قدرة تحمل عالية وسرعة استجابة فائقة، مناسبة لأكثر من 5000 مستخدم.</p>
                        </div>
                      </div>
                    </label>

                    <label class="flex items-start p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-accent/40 transition-all [&:has(:checked)]:border-accent [&:has(:checked)]:bg-accent/5 relative">
                      <div class="flex items-start gap-4 w-full">
                        <input type="radio" name="hostingType" value="high" class="w-4 h-4 text-accent mt-1 focus:ring-accent" onchange="updateConfigurator()">
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-1">
                            <span class="font-bold text-slate-800 text-base flex items-center gap-2">
                              استضافة احترافية
                              <span class="bg-blue-100/70 text-blue-700 text-[10px] px-2 py-0.5 rounded-full inline-flex tracking-tight">ينصح بها لاحقاً</span>
                            </span>
                            <span class="font-bold text-slate-800 text-lg" dir="ltr">$12</span>
                          </div>
                          <p class="text-sm text-slate-500 leading-relaxed max-w-[90%]">أقصى درجات الأداء للحملات التسويقية وحركة الزوار الكثيفة جداً.</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Footer Actions (Checkout) -->
              <div class="bg-slate-50/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100">
                
                <div class="flex-1 w-full max-w-sm shrink-0">
                  <h3 class="text-slate-500 font-medium mb-3 text-center md:text-right">الملخص والتكلفة</h3>
                  <ul class="text-sm text-slate-600 space-y-2.5 mb-6" id="price-breakdown">
                    <li class="flex justify-between"><span>برمجة وبوتات:</span> <span class="font-medium" dir="ltr">$20</span></li>
                    <li class="flex justify-between"><span>نطاق (.sy):</span> <span class="font-medium" dir="ltr">$3 سنوياً</span></li>
                    <li class="flex justify-between"><span>استضافة (أساسية):</span> <span class="font-medium" dir="ltr">$4 شهرياً</span></li>
                  </ul>
                  
                  <div class="flex items-end justify-between border-t border-slate-200 pt-4">
                    <span class="text-slate-800 font-bold">الإجمالي المتوقع:</span>
                    <span class="text-4xl md:text-5xl font-extrabold text-primary font-sans tracking-tight" dir="ltr" id="total-price">$27</span>
                  </div>
                </div>

                <div class="flex-1 w-full text-center">
                  <p class="text-slate-500 text-sm mb-5 leading-relaxed max-w-sm mx-auto">
                    لكي لا نحسب لك سعراً لا يناسبك، يمكنك تخصيص الحزمة أعلاه وطلبها مباشرة عبر واتساب ليتم تنفيذها في أسرع وقت.
                  </p>
                  <a
                    href="#"
                    id="whatsapp-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full sm:w-auto mx-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-[0_4px_15px_rgba(37,211,102,0.2)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transform hover:-translate-y-1 text-lg"
                  >
                    <i class="ph-fill ph-whatsapp-logo text-2xl"></i>
                    اطلب هذه الحزمة الآن
                  </a>
                </div>

              </div>

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
              let domainName = "يمتلك نطاق: " + (document.getElementById('existing-domain').value || 'لم يحدد');
              
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
                if(hostingTypeRadio.value === 'basic') { hostingPrice = 4; hostingName = "استضافة أساسية"; }
                if(hostingTypeRadio.value === 'medium') { hostingPrice = 7; hostingName = "استضافة متوسطة"; }
                if(hostingTypeRadio.value === 'high') { hostingPrice = 12; hostingName = "استضافة احترافية"; }
              }

              const totalPrice = basePrice + domainPrice + hostingPrice;
              document.getElementById('total-price').textContent = '$' + totalPrice;

              let breakdownHtml = '<li class="flex justify-between"><span>برمجة وبوتات:</span> <span class="font-medium" dir="ltr">$20</span></li>';
              if(hasDomain) {
                breakdownHtml += '<li class="flex justify-between"><span>النطاق:</span> <span class="font-medium text-slate-500">مملوك مسبقاً</span></li>';
              } else {
                breakdownHtml += '<li class="flex justify-between"><span>' + domainName + ':</span> <span class="font-medium" dir="ltr">$' + domainPrice + ' سنوياً</span></li>';
              }
              breakdownHtml += '<li class="flex justify-between"><span>' + hostingName + ':</span> <span class="font-medium" dir="ltr">$' + hostingPrice + ' شهرياً</span></li>';
              
              document.getElementById('price-breakdown').innerHTML = breakdownHtml;

              // Generate Whatsapp Message
              let message = "أهلاً بك، أود طلب متجر إلكتروني بهذه التخصيصات:\\n\\n";
              message += "📦 النطاق: " + domainName + "\\n";
              message += "🖥️ الاستضافة: " + hostingName + "\\n";
              message += "💳 التكلفة المبدئية: " + "$" + totalPrice + "\\n\\n";
              message += "أرجو التواصل معي للبدء بالعمل، وشكراً لكم.";

              const encodedMessage = encodeURIComponent(message);
              document.getElementById('whatsapp-btn').href = "https://wa.me/212773963897?text=" + encodedMessage;
            }

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
