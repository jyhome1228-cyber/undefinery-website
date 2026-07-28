const sharedPageHeadingStyle=document.createElement('link');
sharedPageHeadingStyle.rel='stylesheet';
sharedPageHeadingStyle.href='assets/css/page-title-system.css';
document.head.appendChild(sharedPageHeadingStyle);

const architectureStyle=document.createElement('style');
architectureStyle.textContent=`
  .architecture-description{display:block!important;max-height:0;overflow:hidden;opacity:0;transition:max-height .42s cubic-bezier(.2,.8,.2,1),opacity .28s ease}
  .architecture-row.is-active .architecture-description{max-height:180px;opacity:1}
`;
document.head.appendChild(architectureStyle);

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=window.matchMedia('(pointer: fine)').matches;

const revealItems=document.querySelectorAll('[data-tech-reveal]');
if(revealItems.length){
  if('IntersectionObserver' in window&&!reducedMotion){
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -7%'});
    revealItems.forEach(item=>revealObserver.observe(item));
  }else{
    revealItems.forEach(item=>item.classList.add('is-visible'));
  }
}

const systemRows=[...document.querySelectorAll('[data-system-row]')];
const setSystemRow=(row,open)=>{
  const button=row.querySelector(':scope > button');
  row.classList.toggle('is-open',open);
  if(button)button.setAttribute('aria-expanded',String(open));
};

systemRows.forEach(row=>{
  const button=row.querySelector(':scope > button');
  if(!button)return;
  button.addEventListener('click',()=>{
    const shouldOpen=!row.classList.contains('is-open');
    systemRows.forEach(other=>setSystemRow(other,false));
    setSystemRow(row,shouldOpen);
  });
});

if(location.hash==='#enable-stack'){
  const stackRow=document.querySelector('#enable-stack');
  if(stackRow){
    systemRows.forEach(row=>setSystemRow(row,row===stackRow));
    window.setTimeout(()=>stackRow.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'center'}),120);
  }
}

const architectureRows=[...document.querySelectorAll('[data-architecture-row]')];
const architectureVisual=document.querySelector('[data-architecture-visual]');
const architectureNumber=document.querySelector('[data-architecture-number]');
const architectureTitle=document.querySelector('[data-architecture-title]');

const architectureLabels={
  intelligence:['01','DESIGN INTELLIGENCE'],
  analysis:['02','BUSINESS ANALYSIS'],
  definition:['03','SYSTEM DEFINITION'],
  interface:['04','INTERFACE & APPLICATION'],
  data:['05','DATA & OPERATION']
};

const setArchitecture=(row)=>{
  const state=row.dataset.architecture||'intelligence';
  architectureRows.forEach(item=>{
    const active=item===row;
    item.classList.toggle('is-active',active);
    const button=item.querySelector('button');
    if(button)button.setAttribute('aria-pressed',String(active));
  });
  if(architectureVisual)architectureVisual.dataset.state=state;
  const label=architectureLabels[state]||architectureLabels.intelligence;
  if(architectureNumber)architectureNumber.textContent=label[0];
  if(architectureTitle)architectureTitle.textContent=label[1];
};

architectureRows.forEach(row=>{
  const button=row.querySelector('button');
  if(!button)return;
  button.addEventListener('click',()=>setArchitecture(row));
  if(finePointer){
    button.addEventListener('mouseenter',()=>setArchitecture(row));
    button.addEventListener('focus',()=>setArchitecture(row));
  }
});

const technologyHero=document.querySelector('[data-technology-hero]');
const technologyStage=document.querySelector('[data-technology-stage]');
if(technologyHero&&technologyStage&&finePointer&&!reducedMotion){
  let frame;
  technologyHero.addEventListener('pointermove',event=>{
    if(frame)cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
      const rect=technologyHero.getBoundingClientRect();
      const px=(event.clientX-rect.left)/rect.width;
      const py=(event.clientY-rect.top)/rect.height;
      technologyStage.style.setProperty('--stage-ry',`${((px-.5)*13).toFixed(2)}deg`);
      technologyStage.style.setProperty('--stage-rx',`${((.5-py)*10-4).toFixed(2)}deg`);
    });
  });

  technologyHero.addEventListener('pointerleave',()=>{
    technologyStage.style.setProperty('--stage-ry','8deg');
    technologyStage.style.setProperty('--stage-rx','-7deg');
  });
}