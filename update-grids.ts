import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Replace grid classes
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">/g, '<div class="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 w-full">');
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">/g, '<div class="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 w-full">');

// Make browser header dots/texts smaller
html = html.replace(/text-\[10px\] text-slate-400 font-mono/g, 'text-[8px] md:text-[10px] text-slate-400 font-mono');

// Replaces in mockup container
html = html.replace(/w-full h-48 bg-slate-100/g, 'w-full h-16 sm:h-32 md:h-48 bg-slate-100');
html = html.replace(/w-full h-56 bg-slate-100/g, 'w-full h-20 sm:h-36 md:h-56 bg-slate-100');
html = html.replace(/class="p-6 bg-white flex flex-col/g, 'class="p-2 sm:p-4 md:p-6 bg-white flex flex-col');

// Titles inside mockups
html = html.replace(/text-xl font-bold text-primary mb-4/g, 'text-[10px] sm:text-base md:text-xl font-bold text-primary mb-1 md:mb-4 leading-tight');

// Footer links inside mockups
html = html.replace(/class="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors pt-4 border-t/g, 'class="inline-flex items-center gap-1 md:gap-2 text-primary text-[9px] sm:text-sm md:text-base font-bold hover:text-accent transition-colors pt-2 md:pt-4 border-t');

html = html.replace(/font-bold text-lg">/g, 'font-bold text-xs md:text-lg">');

fs.writeFileSync('index.html', html);
console.log("Updated index.html");
