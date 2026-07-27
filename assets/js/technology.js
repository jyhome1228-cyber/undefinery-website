const technologyGrid=document.querySelector("[data-technology-grid]");
const technologyToggle=document.querySelector("[data-technology-toggle]");
const technologyHero=document.querySelector("[data-technology-hero]");
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer=window.matchMedia("(pointer: fine)").matches;

if(technologyGrid&&technologyToggle){
  const nodes=[...technologyGrid.querySelectorAll(".tech-node")];
  nodes.forEach((node,index)=>node.style.setProperty("--order",node.dataset.order||index+1));

  const setTechnologyState=active=>{
    technologyGrid.classList.toggle("is-active",active);
    technologyToggle.setAttribute("aria-pressed",String(active));
    const label=technologyToggle.querySelector("[data-core-state]");
    if(label)label.textContent=active?"SYSTEM ACTIVE":"ACTIVATE SYSTEM";
  };

  setTechnologyState(false);
  technologyToggle.addEventListener("click",()=>setTechnologyState(technologyToggle.getAttribute("aria-pressed")!=="true"));
}

if(technologyHero&&finePointer&&!reducedMotion){
  let frame;
  technologyHero.addEventListener("pointermove",event=>{
    if(frame)cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
      const rect=technologyHero.getBoundingClientRect();
      technologyHero.style.setProperty("--tx",`${((event.clientX-rect.left)/rect.width)*100}%`);
      technologyHero.style.setProperty("--ty",`${((event.clientY-rect.top)/rect.height)*100}%`);
    });
  });
}

const revealItems=document.querySelectorAll("[data-reveal]");
if(revealItems.length){
  if("IntersectionObserver" in window&&!reducedMotion){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -8%"});
    revealItems.forEach(item=>observer.observe(item));
  }else revealItems.forEach(item=>item.classList.add("is-visible"));
}

const processCards=document.querySelectorAll("[data-step]");
if(processCards.length){
  if("IntersectionObserver" in window&&!reducedMotion){
    const stepObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-active");
          stepObserver.unobserve(entry.target);
        }
      });
    },{threshold:.28,rootMargin:"0px 0px -5%"});
    processCards.forEach(card=>stepObserver.observe(card));
  }else processCards.forEach(card=>card.classList.add("is-active"));
}

const tiltCards=document.querySelectorAll("[data-tilt]");
if(tiltCards.length&&finePointer&&!reducedMotion){
  tiltCards.forEach(card=>{
    let frame;
    card.addEventListener("pointermove",event=>{
      if(frame)cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{
        const rect=card.getBoundingClientRect();
        const px=(event.clientX-rect.left)/rect.width;
        const py=(event.clientY-rect.top)/rect.height;
        const rotateY=(px-.5)*7;
        const rotateX=(.5-py)*6;
        card.style.setProperty("--rx",`${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--ry",`${rotateY.toFixed(2)}deg`);
        card.style.setProperty("--shine-x",`${(px*100).toFixed(1)}%`);
        card.style.setProperty("--shine-y",`${(py*100).toFixed(1)}%`);
      });
    });

    card.addEventListener("pointerleave",()=>{
      if(frame)cancelAnimationFrame(frame);
      card.style.setProperty("--rx","0deg");
      card.style.setProperty("--ry","0deg");
      card.style.removeProperty("--shine-x");
      card.style.removeProperty("--shine-y");
    });
  });
}

document.querySelectorAll(".widget-object").forEach((widget,index)=>{
  widget.style.animationDelay=`${-(index%7)*.48}s`;
});
