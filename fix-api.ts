import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');

const apiTabStart = html.indexOf('id="tab-api"');
const customTabStart = html.indexOf('id="tab-custom"');

let preApi = html.slice(0, apiTabStart);
let apiHtml = html.slice(apiTabStart, customTabStart);
let postApi = html.slice(customTabStart);

apiHtml = apiHtml.replace(/text-\[8px\] md:text-\[10px\]/g, 'text-[10px]');
apiHtml = apiHtml.replace(/w-full h-20 sm:h-36 md:h-56/g, 'w-full h-56');
apiHtml = apiHtml.replace(/p-2 sm:p-4 md:p-6/g, 'p-6');
apiHtml = apiHtml.replace(/text-\[10px\] sm:text-base md:text-xl font-bold text-primary mb-1 md:mb-4 leading-tight/g, 'text-xl font-bold text-primary mb-4');
apiHtml = apiHtml.replace(/text-\[9px\] sm:text-sm md:text-base font-bold hover:text-accent transition-colors pt-2 md:pt-4/g, 'font-bold hover:text-accent transition-colors pt-4');
apiHtml = apiHtml.replace(/text-xs md:text-lg/g, 'text-lg');

html = preApi + apiHtml + postApi;

fs.writeFileSync('index.html', html);
