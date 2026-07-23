"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects, newsItems } from "@/lib/content";

const glowLabels = ["BRAND SYSTEM","PACKAGE","WEB & SITE","OPERATION","AI MODEL","AI SPACE","BUSINESS SYSTEM","EDITORIAL","PRODUCTION","CONTENTS","STRATEGY","EVENT"];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = [...hero.querySelectorAll<HTMLElement>(".glow-card")];
    const onMove = (event: PointerEvent) => {
      hero.style.setProperty("--mx", `${event.clientX}px`);
      hero.style.setProperty("--my", `${event.clientY}px`);
      cards.forEach((card) => {
        const box = card.getBoundingClientRect();
        const distance = Math.hypot(event.clientX - box.left - box.width / 2, event.clientY - box.top - box.height / 2);
        const glow = Math.max(0, 1 - distance / 310);
        card.style.setProperty("--glow", glow.toFixed(3));
        card.style.setProperty("--lx", `${event.clientX - box.left}px`);
        card.style.setProperty("--ly", `${event.clientY - box.top}px`);
        card.style.transform = `translateY(${-5 * glow}px)`;
      });
    };
    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, []);

  return <>
    <SiteHeader dark />
    <main>
      <section className="hero" ref={heroRef}>
        <div className="glow-grid" aria-hidden="true">{Array.from({length: 63}, (_, i) => <i className="glow-card" data-label={glowLabels[i % glowLabels.length]} key={i} />)}</div>
        <div className="cursor-light" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> GROWTH ARCHITECTURE COMPANY</p>
          <h1>UNDEFINED PROBLEMS.<br/><em>DEFINED SOLUTIONS.</em></h1>
          <p>정리되지 않은 브랜드와 운영 환경을 진단하고,<br/>전략부터 제작·시스템·지속 운영까지 하나의 기준으로 연결합니다.</p>
          <a className="pill" href="/about">DISCOVER UNDEFINERY <span>↗</span></a>
        </div>
      </section>

      <section className="section intro-block">
        <p className="section-label">01 — ABOUT</p>
        <div><h2>보이는 것을 넘어,<br/>기업이 움직이는 방식을 설계합니다.</h2><p>언디파이너리 솔루션은 흩어진 브랜드와 운영 환경을 진단하고 실제 구성원이 사용할 수 있는 체계로 연결합니다.</p><a className="line-link" href="/about">ABOUT UNDEFINERY <span>↗</span></a></div>
      </section>

      <section className="section home-solutions">
        <header className="section-title"><p className="section-label">02 — SOLUTIONS</p><div><h2>SIX WAYS TO<br/>BUILD GROWTH.</h2><p>브랜드가 놓인 상황에 맞춰 구축, 정비, 운영까지 필요한 해결 방식을 제안합니다.</p></div></header>
        <div className="solution-index">{[
          ["01","신규 브랜드 구축","BRAND FOUNDATION"],
          ["02","브랜드 리뉴얼 및 체계화","BRAND RENEWAL"],
          ["03","기업 브랜드·디자인 통합관리","CORPORATE MANAGEMENT"],
          ["04","브랜드 유지관리 및 운영","BRAND OPERATION"],
          ["05","개인·전문가 브랜드 관리","PERSONAL BRANDING"],
          ["06","AI 콘텐츠 제작 시스템","AI PRODUCTION"],
        ].map(([n,ko,en])=><a href="/solutions" key={n}><span>{n}</span><div><b>{ko}</b><small>{en}</small></div><i>↗</i></a>)}</div>
      </section>

      <section className="section portfolio-section">
        <header className="section-title"><p className="section-label">03 — PORTFOLIO</p><div><h2>SELECTED<br/>PROJECTS.</h2><p>진단과 전략, 제작과 운영까지 실제로 연결한 프로젝트입니다.</p></div></header>
        <div className="filter-row"><button className="active">ALL</button><button>BRAND DESIGN</button><button>PACKAGE</button><button>WEB & SITE</button><button>OPERATION</button><button>EVENT</button></div>
        <div className="project-grid">{projects.slice(0,6).map((p) => <a className={`project-card tone-${p.tone}`} href={`/portfolio/${p.slug}`} key={p.slug}><div className="project-visual"><span>{p.monogram}</span></div><div className="card-meta"><div><p>{p.category}</p><h3>{p.title}</h3></div><span>VIEW ↗</span></div></a>)}</div>
        <Link className="wide-link" href="/portfolio">VIEW ALL PROJECTS <span>↗</span></Link>
      </section>

      <section className="section production-block"><div><p className="section-label">04 — AI PRODUCTION SYSTEM</p><h2>MODELS, PRODUCTS<br/>AND SPACES<br/>BEYOND REALITY.</h2></div><div className="production-list"><p>AI 모델과 제품, 공간을 기반으로 브랜드가 필요로 하는 새로운 상업 이미지를 제작합니다.</p>{[
        ["AI MODEL PRODUCTION","model"],
        ["PRODUCT VISUAL PRODUCTION","product"],
        ["SPATIAL VISUAL PRODUCTION","space"],
      ].map(([label,id],i)=><a href={`/production#${id}`} key={label}><span>0{i+1}</span>{label}<b>↗</b></a>)}</div></section>

      <section className="section news-preview"><header className="section-title"><p className="section-label">05 — INSIGHTS</p><div><h2>IDEAS FOR<br/>BETTER SYSTEMS.</h2><p>브랜딩, 디자인, 비즈니스와 AI에 관한 관점과 연구를 기록합니다.</p></div></header><div className="news-grid insight-preview">{newsItems.map(n=><Link href="/insights" key={n.slug}><div className={`news-image tone-${n.tone}`}>{n.tag}</div><p>{n.date} · {n.category}</p><h3>{n.title}</h3></Link>)}</div><Link className="wide-link" href="/insights">VIEW ALL INSIGHTS <span>↗</span></Link></section>
    </main>
    <SiteFooter />
  </>;
}
