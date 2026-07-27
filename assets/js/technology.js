const technologyGrid=document.querySelector("[data-technology-grid]");
const technologyToggle=document.querySelector("[data-technology-toggle]");
const technologyHero=document.querySelector("[data-technology-hero]");

document.querySelectorAll(".role-grid article").forEach(article=>article.style.position="relative");

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

if(technologyHero&&!window.matchMedia("(pointer: coarse)").matches){
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
  if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}
      });
    },{threshold:.12,rootMargin:"0px 0px -8%"});
    revealItems.forEach(item=>observer.observe(item));
  }else revealItems.forEach(item=>item.classList.add("is-visible"));
}
