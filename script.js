const grid = document.querySelector('#glow-grid');
const labels = ['BRAND SYSTEM','PACKAGE','WEB & SITE','OPERATION','AI MODEL','AI SPACE','BUSINESS SYSTEM','EDITORIAL','PRODUCTION','CONTENTS','STRATEGY','EVENT'];
const count = window.innerWidth < 800 ? 45 : 72;

for (let i = 0; i < count; i += 1) {
  const card = document.createElement('div');
  card.className = 'glow-card';
  card.dataset.label = labels[i % labels.length];
  grid.appendChild(card);
}

const cards = [...document.querySelectorAll('.glow-card')];
let pointer = { x: innerWidth / 2, y: innerHeight / 2 };
let frame;

function paint() {
  document.documentElement.style.setProperty('--mx', `${pointer.x}px`);
  document.documentElement.style.setProperty('--my', `${pointer.y}px`);
  cards.forEach(card => {
    const box = card.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const distance = Math.hypot(pointer.x - cx, pointer.y - cy);
    const glow = Math.max(0, 1 - distance / 290);
    card.style.setProperty('--glow', glow.toFixed(3));
    card.style.setProperty('--lx', `${pointer.x - box.left}px`);
    card.style.setProperty('--ly', `${pointer.y - box.top}px`);
    card.style.transform = `perspective(700px) translate3d(0,${glow * -5}px,${glow * 12}px) rotateX(${((pointer.y-cy)/box.height)*glow*-1.4}deg) rotateY(${((pointer.x-cx)/box.width)*glow*1.4}deg)`;
    card.style.borderColor = `rgba(155,195,255,${.11 + glow * .22})`;
    card.style.boxShadow = `0 ${glow * 14}px ${glow * 34}px rgba(37,93,190,${glow * .12})`;
  });
  frame = null;
}

addEventListener('pointermove', event => {
  pointer = { x: event.clientX, y: event.clientY };
  if (!frame) frame = requestAnimationFrame(paint);
});

if (matchMedia('(pointer: coarse)').matches) {
  let t = 0;
  (function drift(){
    t += .006;
    pointer.x = innerWidth * (.5 + Math.sin(t) * .32);
    pointer.y = innerHeight * (.48 + Math.cos(t * .8) * .24);
    paint(); requestAnimationFrame(drift);
  })();
} else paint();

const header = document.querySelector('#header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 40), { passive: true });


const menuButton = document.querySelector('.menu-button');
const mobilePanel = document.querySelector('#mobile-panel');
const mobileLinks = mobilePanel ? mobilePanel.querySelectorAll('a') : [];

function setMenu(open) {
  if (!menuButton || !mobilePanel) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  mobilePanel.classList.toggle('open', open);
  mobilePanel.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
}

if (menuButton && mobilePanel) {
  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  mobileLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });
  addEventListener('resize', () => {
    if (innerWidth > 800) setMenu(false);
  }, { passive: true });
}
