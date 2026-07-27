const solutionCards=[...document.querySelectorAll("[data-solution-card]")];
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer=window.matchMedia("(pointer: fine)").matches;

const setCardState=(card,open,scroll=false)=>{
  const button=card.querySelector("[data-solution-toggle]");
  const label=card.querySelector("[data-solution-action]");
  card.classList.toggle("is-open",open);
  if(button)button.setAttribute("aria-expanded",String(open));
  if(label)label.textContent=open?"CLOSE DETAILS":"VIEW DETAILS";
  if(open&&scroll){
    window.setTimeout(()=>card.scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"center"}),120);
  }
};

solutionCards.forEach(card=>{
  const button=card.querySelector("[data-solution-toggle]");
  if(!button)return;
  button.addEventListener("click",()=>{
    const shouldOpen=!card.classList.contains("is-open");
    solutionCards.forEach(other=>setCardState(other,false));
    setCardState(card,shouldOpen,true);
  });
});

const requestedCard=location.hash&&document.querySelector(location.hash);
if(requestedCard?.matches("[data-solution-card]")){
  solutionCards.forEach(card=>setCardState(card,card===requestedCard));
  window.setTimeout(()=>requestedCard.scrollIntoView({behavior:"auto",block:"center"}),80);
}

if(finePointer&&!reducedMotion){
  solutionCards.forEach(card=>{
    let frame;
    card.addEventListener("pointermove",event=>{
      if(frame)cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{
        const rect=card.getBoundingClientRect();
        const px=(event.clientX-rect.left)/rect.width;
        const py=(event.clientY-rect.top)/rect.height;
        card.style.setProperty("--rx",`${((.5-py)*4.5).toFixed(2)}deg`);
        card.style.setProperty("--ry",`${((px-.5)*5.5).toFixed(2)}deg`);
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

document.querySelectorAll(".solution-widget,.solution-icon").forEach((item,index)=>{
  item.style.animationDelay=`${-(index%5)*.7}s`;
});
