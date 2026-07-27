const technologyGrid=document.querySelector("[data-technology-grid]");
const technologyToggle=document.querySelector("[data-technology-toggle]");
const technologyState=document.getElementById("technology-state");
const technologyHero=document.querySelector("[data-technology-hero]");

document.querySelectorAll(".role-grid article").forEach(article=>article.style.position="relative");

if(technologyGrid&&technologyToggle){
  const nodes=[...technologyGrid.querySelectorAll(".tech-node")];
  nodes.forEach(node=>node.style.setProperty("--order",node.dataset.order||1));

  const setTechnologyState=active=>{
    technologyGrid.classList.toggle("is-active",active);
    technologyToggle.setAttribute("aria-pressed",String(active));
    const label=technologyToggle.querySelector("[data-core-label]");
    if(label)label.textContent=active?"SYSTEM ACTIVE":"ACTIVATE SYSTEM";
    if(technologyState)technologyState.textContent=active?"ENABLE AI가 전체 기술 체계를 활성화했습니다.":"중앙의 ENABLE AI를 눌러 시스템을 활성화하세요.";
  };

  technologyToggle.addEventListener("click",()=>{
    const active=technologyToggle.getAttribute("aria-pressed")!=="true";
    setTechnologyState(active);
  });
}

if(technologyHero&&!window.matchMedia("(pointer: coarse)").matches){
  let frame;
  technologyHero.addEventListener("pointermove",event=>{
    if(frame)cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
      const rect=technologyHero.getBoundingClientRect();
      const x=((event.clientX-rect.left)/rect.width)*100;
      const y=((event.clientY-rect.top)/rect.height)*100;
      technologyHero.style.setProperty("--tx",`${x}%`);
      technologyHero.style.setProperty("--ty",`${y}%`);
    });
  });
}

const revealItems=document.querySelectorAll("[data-reveal]");
if(revealItems.length){
  if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -8%"});
    revealItems.forEach(item=>observer.observe(item));
  }else{
    revealItems.forEach(item=>item.classList.add("is-visible"));
  }
}
