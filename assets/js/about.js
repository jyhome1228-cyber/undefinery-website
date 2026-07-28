const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=window.matchMedia('(pointer: fine)').matches;

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
    },{threshold:.12,rootMargin:'0px 0px -7%'});
    revealItems.forEach(item=>observer.observe(item));
  }else{
    revealItems.forEach(item=>item.classList.add('is-visible'));
  }
}

const builderRows=[...document.querySelectorAll('[data-builder-row]')];
const builderVisual=document.querySelector('[data-builder-visual]');
const visualNumber=document.querySelector('[data-visual-number]');
const visualTitle=document.querySelector('[data-visual-title]');

const builderStates={
  business:{number:'01',title:'BUSINESS STRUCTURE'},
  brand:{number:'02',title:'BRAND SYSTEM'},
  digital:{number:'03',title:'DIGITAL INFRASTRUCTURE'},
  operation:{number:'04',title:'OPERATION SYSTEM'}
};

const setBuilderRow=(targetRow,open)=>{
  builderRows.forEach(row=>{
    const isTarget=row===targetRow&&open;
    row.classList.toggle('is-open',isTarget);
    const button=row.querySelector('button');
    if(button)button.setAttribute('aria-expanded',String(isTarget));
  });

  if(open&&targetRow&&builderVisual){
    const state=targetRow.dataset.stage||'business';
    const content=builderStates[state]||builderStates.business;
    builderVisual.dataset.state=state;
    if(visualNumber)visualNumber.textContent=content.number;
    if(visualTitle)visualTitle.textContent=content.title;
  }
};

builderRows.forEach(row=>{
  const button=row.querySelector('button');
  if(!button)return;
  button.addEventListener('click',()=>{
    const shouldOpen=!row.classList.contains('is-open');
    setBuilderRow(row,shouldOpen);
  });

  if(finePointer){
    button.addEventListener('mouseenter',()=>{
      const state=row.dataset.stage||'business';
      const content=builderStates[state]||builderStates.business;
      if(builderVisual){
        builderVisual.dataset.state=state;
        if(visualNumber)visualNumber.textContent=content.number;
        if(visualTitle)visualTitle.textContent=content.title;
      }
    });
  }
});

const technologyRows=[...document.querySelectorAll('[data-tech-row]')];
technologyRows.forEach(row=>{
  const button=row.querySelector('button');
  if(!button)return;
  button.addEventListener('click',()=>{
    const shouldOpen=!row.classList.contains('is-open');
    technologyRows.forEach(other=>{
      const otherButton=other.querySelector('button');
      other.classList.toggle('is-open',other===row&&shouldOpen);
      if(otherButton)otherButton.setAttribute('aria-expanded',String(other===row&&shouldOpen));
    });
  });
});

const hero=document.querySelector('[data-about-hero]');
const stage=document.querySelector('[data-builder-stage]');
if(hero&&stage&&finePointer&&!reducedMotion){
  let frame;
  hero.addEventListener('pointermove',event=>{
    if(frame)cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
      const rect=hero.getBoundingClientRect();
      const px=(event.clientX-rect.left)/rect.width;
      const py=(event.clientY-rect.top)/rect.height;
      stage.style.setProperty('--my',`${((px-.5)*7).toFixed(2)}deg`);
      stage.style.setProperty('--mx',`${((.5-py)*6).toFixed(2)}deg`);
    });
  });
  hero.addEventListener('pointerleave',()=>{
    stage.style.setProperty('--my','0deg');
    stage.style.setProperty('--mx','0deg');
  });
}
