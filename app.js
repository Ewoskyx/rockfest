import icons from './data.js';
import template from './template.js';
import bands from './bandData.js';

const guide = document.querySelectorAll('.guide-card');
const lineup = document.querySelector('.lineupdiv');

/* Card Hover */
guide.forEach((e, i) => {
  e.addEventListener('mouseenter', () => {
    e.style.border = '1px solid rgba(255,255,255,0.4)';
    const icon = e.querySelector('.card-icon');
    const title = e.querySelector('.guidecard-title');
    icon.setAttribute('src', icons.iconDark[i]);
    title.style.color = '#d3d3d3';
    title.style.transition = 'all 300ms ease-in-out';
    icon.style.transition = 'all 300ms ease-in-out';
  });
});

guide.forEach((e, i) => {
  e.addEventListener('mouseleave', () => {
    e.style.border = '1px solid transparent';
    const icon = e.querySelector('.card-icon');
    const title = e.querySelector('.guidecard-title');
    icon.setAttribute('src', icons.iconLight[i]);
    title.style.color = '#ec5242';
  });
});

/* Lineup populate */
lineup.innerHTML = `${bands.map(template).join('')}`;