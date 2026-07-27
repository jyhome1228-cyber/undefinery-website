const aboutCards=[...document.querySelectorAll('[data-about-card]')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=window.matchMedia('(pointer: fine)').matches;

const setAboutCard=(card,open)=>{
  const button=card.querySelector('[data-about-toggle]');
  const label=card.querySelector('[data-about-action]');
  card.classList.toggle('is-open',open);
  if(button)button.setAttribute('aria-expanded',String(open));
  if(label)label.textContent=open?'CLOSE DETAILS':'VIEW DETAILS';
};

aboutCards.forEach(card=>{
  const button=card.querySelector('[data-about-toggle]');
  if(!button)return;
  button.addEventListener('click',()=>{
    const open=!card.classList.contains('is-open');
    aboutCards.forEach(other=>setAboutCard(other,false));
    setAboutCard(card,open);
  });
});

const revealItems=document.querySelectorAll('[data-about-reveal]');
if(revealItems.length){
  if('IntersectionObserver' in window&&!reducedMotion){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -8%'});
    revealItems.forEach(item=>observer.observe(item));
  }else revealItems.forEach(item=>item.classList.add('is-visible'));
}

const processCards=document.querySelectorAll('[data-about-step]');
if(processCards.length){
  if('IntersectionObserver' in window&&!reducedMotion){
    const stepObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-active');
          stepObserver.unobserve(entry.target);
        }
      });
    },{threshold:.3,rootMargin:'0px 0px -5%'});
    processCards.forEach(card=>stepObserver.observe(card));
  }else processCards.forEach(card=>card.classList.add('is-active'));
}

const tiltItems=document.querySelectorAll('[data-about-tilt]');
if(tiltItems.length&&finePointer&&!reducedMotion){
  tiltItems.forEach(item=>{
    let frame;
    item.addEventListener('pointermove',event=>{
      if(frame)cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{
        const rect=item.getBoundingClientRect();
        const px=(event.clientX-rect.left)/rect.width;
        const py=(event.clientY-rect.top)/rect.height;
        item.style.setProperty('--rx',`${((.5-py)*4.5).toFixed(2)}deg`);
        item.style.setProperty('--ry',`${((px-.5)*5.5).toFixed(2)}deg`);
        item.style.setProperty('--shine-x',`${(px*100).toFixed(1)}%`);
        item.style.setProperty('--shine-y',`${(py*100).toFixed(1)}%`);
      });
    });
    item.addEventListener('pointerleave',()=>{
      if(frame)cancelAnimationFrame(frame);
      item.style.setProperty('--rx','0deg');
      item.style.setProperty('--ry','0deg');
      item.style.removeProperty('--shine-x');
      item.style.removeProperty('--shine-y');
    });
  });
}

document.querySelectorAll('.about-widget').forEach((widget,index)=>{
  widget.style.animationDelay=`${-(index%7)*.55}s`;
});
