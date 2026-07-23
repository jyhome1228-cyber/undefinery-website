import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const solutions = [
  {n:"01",en:"BRAND FOUNDATION",title:"신규 브랜드 구축",lead:"아이디어를 시장에서 작동하는 하나의 브랜드로 만듭니다.",desc:"브랜드 전략과 네이밍부터 아이덴티티, 패키지, 웹사이트까지 신규 사업에 필요한 기반을 통합 구축합니다.",items:["시장·경쟁 환경 진단","브랜드 전략 및 네이밍","로고·아이덴티티 시스템","패키지·웹사이트·소개서","브랜드 가이드라인"]},
  {n:"02",en:"BRAND RENEWAL",title:"브랜드 리뉴얼 및 체계화",lead:"흩어진 브랜드 자산을 하나의 기준으로 다시 정렬합니다.",desc:"이미 운영 중이지만 메시지와 디자인이 일관되지 않은 브랜드를 진단하고, 고객과 내부 구성원이 함께 사용할 수 있는 기준을 만듭니다.",items:["기존 브랜드 진단","포지셔닝 및 메시지 정비","비주얼 아이덴티티 리뉴얼","콘텐츠·채널 기준 정리","운영 가이드 구축"]},
  {n:"03",en:"CORPORATE BRAND MANAGEMENT",title:"기업 브랜드·디자인 통합관리",lead:"기업의 모든 접점이 같은 인상과 기준으로 움직이게 합니다.",desc:"회사소개서, 제안서, 웹사이트, 홍보물처럼 반복적으로 발생하는 기업 디자인을 일관된 체계 안에서 관리합니다.",items:["기업 브랜드 진단","회사소개서·IR·제안서","웹사이트 및 디지털 채널","영업·홍보 디자인","자료 템플릿과 자산 관리"]},
  {n:"04",en:"BRAND OPERATION",title:"브랜드 유지관리 및 운영",lead:"완성된 브랜드가 매일의 운영에서도 흐트러지지 않게 합니다.",desc:"월간·주간 계획을 기반으로 SNS, 프로모션, 상세페이지와 각종 운영 소재를 지속적으로 기획하고 제작합니다.",items:["월간·주간 운영 계획","SNS 피드·카드뉴스","프로모션·배너·상세페이지","웹사이트 유지관리","콘텐츠 아카이브"]},
  {n:"05",en:"PERSONAL BRAND MANAGEMENT",title:"개인·전문가 브랜드 관리",lead:"사람의 전문성과 활동을 신뢰할 수 있는 브랜드로 정리합니다.",desc:"대표자, 전문가, 연구자와 크리에이터의 정체성과 이력을 구조화하고, 프로필부터 콘텐츠 채널까지 일관되게 구축합니다.",items:["정체성·전문성 정의","프로필·포트폴리오","개인 웹사이트·채널","콘텐츠 기획·운영","강연·연구·활동 아카이브"]},
  {n:"06",en:"AI CONTENT SYSTEM",title:"AI 콘텐츠 제작 시스템",lead:"필요한 이미지를 반복해서 생산할 수 있는 브랜드 자산으로 만듭니다.",desc:"AI 모델, 제품 비주얼과 공간 이미지를 브랜드 기준에 맞춰 개발하고 여러 채널에 확장 가능한 제작 시스템으로 구축합니다.",items:["AI 모델 프로덕션","제품 비주얼 프로덕션","공간 비주얼 프로덕션","캠페인 콘텐츠 확장","제작 기준·자산 아카이브"]},
];

export default function Solutions(){
  return <><SiteHeader/><main className="subpage solutions-page">
    <section className="page-hero"><p>SOLUTIONS</p><h1>브랜드의 문제를 발견하고,<br/>성장하는 구조로 바꿉니다.</h1><div className="hero-note">구축이 필요한 순간부터 지속적인 운영이 필요한 단계까지, 기업과 브랜드의 현재 상황에 맞는 여섯 가지 솔루션을 제공합니다.</div></section>
    <section className="solutions-list">{solutions.map(s=><article id={`solution-${s.n}`} key={s.n}><div className="solution-no"><span>{s.n}</span><small>{s.en}</small></div><div className="solution-main"><h2>{s.title}</h2><h3>{s.lead}</h3><p>{s.desc}</p></div><ul>{s.items.map(i=><li key={i}>{i}</li>)}</ul></article>)}</section>
    <section className="simple-cta"><p>NOT SURE WHERE TO START?</p><h2>현재 상황부터<br/>함께 진단합니다.</h2><a className="pill pill-dark" href="/contact">REQUEST A CONSULTATION <span>↗</span></a></section>
  </main><SiteFooter/></>;
}
