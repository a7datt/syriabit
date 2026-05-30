import fs from 'fs';

let content = fs.readFileSync('store-details.html', 'utf8');

// 1. Update Domain section options
content = content.replace(
  /<label class="cursor-pointer flex items-center gap-2 group">\s*<input[^>]+name="hasDomain"[^>]+value="no"[^>]*>\s*<span[^>]*>.*?<\/span>\s*<\/label>/ms,
  `<label class="cursor-pointer flex items-center gap-2 group">
                        <input type="radio" name="hasDomain" value="no" class="w-4 h-4 text-accent border-slate-300 focus:ring-accent" checked onchange="updateConfigurator()">
                        <span class="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">لا أمتلك نطاق</span>
                      </label>`
);

content = content.replace(
  /<div id="domain-select-section"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- Hosting Configuration -->/ms,
  `<div id="domain-select-section" class="animate-fade-in space-y-3 mt-4">
                      <div class="bg-amber-50 text-amber-800 p-4 rounded-xl border border-amber-100/50 flex gap-3 text-sm leading-relaxed">
                        <i class="ph-fill ph-warning-circle text-xl shrink-0 text-amber-500"></i>
                        <p>
                          يجب عليك شراء نطاق مخصص سيتم الإتفاق على سعره مع الشركة بعد طلب الخدمة وليس ضمن السعر المجمل للمتجر.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Hosting Configuration -->`
);

// 2. Remove "ينصح بها لاحقا" from high hosting
content = content.replace(
  /استضافة احترافية\s*<span[^>]*>ينصح بها لاحقاً<\/span>/,
  `استضافة احترافية`
);

// 3. Update the JavaScript updateConfigurator function
content = content.replace(
  /let domainPrice = 0;[\s\S]*?let hostingPrice = 0;/ms,
  `let domainPrice = 0;
              let domainName = "يمتلك نطاق: " + (document.getElementById("existing-domain").value || "لم يحدد");

              if (!hasDomain) {
                domainName = "سيتم التنسيق لشرائه لاحقاً";
              }

              let hostingPrice = 0;`
);

// Specifically replace the breakdown items construction
const breakdownRegex = /let breakdownHtml = '[^']*';\s*if\s*\(hasDomain\)\s*\{[\s\S]*?\}\s*breakdownHtml\s*\+=\s*'<li class="flex justify-between"><span>'\s*\+\s*hostingName\s*\+\s*':<\/span> <span class="font-medium" dir="ltr">\$'\s*\+\s*hostingPrice\s*\+\s*' شهرياً<\/span><\/li>';/ms;

const newBreakdown = `let breakdownHtml = '<li class="flex justify-between"><span>برمجة وبوتات:</span> <span class="font-medium" dir="ltr">$20</span></li>';
              if (hasDomain) {
                breakdownHtml +=
                  '<li class="flex justify-between"><span>النطاق:</span> <span class="font-medium text-slate-500">مملوك مسبقاً</span></li>';
              } else {
                breakdownHtml +=
                  '<li class="flex justify-between"><span>النطاق:</span> <span class="font-medium text-slate-500 text-xs text-right w-1/2">يحدد لاحقاً خارج التكلفة</span></li>';
              }
              breakdownHtml +=
                '<li class="flex justify-between"><span>' +
                hostingName +
                ':</span> <span class="font-medium" dir="ltr">$' +
                hostingPrice +
                ' شهرياً</span></li>';`;

content = content.replace(breakdownRegex, newBreakdown);


fs.writeFileSync('store-details.html', content);
