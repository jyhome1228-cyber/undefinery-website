import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const posts = [
 ["BRANDING","브랜드는 로고가 아니라 운영의 기준입니다","정리되지 않은 브랜드가 반복해서 비용을 만드는 이유와, 실제 운영 기준을 세우는 방법.","2026.07.23","blue"],
 ["BUSINESS","중소기업에 디자인 시스템이 필요한 순간","자료마다 다른 인상과 방식으로 소통하는 기업을 하나의 체계로 묶는 과정.","2026.07.18","sand"],
 ["AI & TECHNOLOGY","AI 이미지를 브랜드 자산으로 만드는 법","한 번의 생성에 그치지 않고 모델·제품·공간 이미지를 반복 활용하는 기준.","2026.07.15","silver"],
 ["DESIGN","좋은 회사소개서는 무엇을 먼저 보여줘야 할까","정보를 많이 넣는 것보다 기업의 핵심과 신뢰 구조를 먼저 설계해야 하는 이유.","2026.07.10","green"],
 ["RESEARCH","디자인 시스템과 조직의 의사결정","디자인 기준이 구성원의 판단 속도와 결과물의 일관성에 미치는 영향.","2026.07.06","purple"],
 ["OPERATION","브랜드 운영을 월간 단위로 관리하는 방법","주간 업무 계획과 콘텐츠 아카이브가 누락을 줄이고 완성도를 높이는 방식.","2026.07.01","red"],
 ["BRANDING","개인 브랜드도 시스템이 필요합니다","전문가의 이력과 활동이 단편적으로 소비되지 않도록 맥락을 설계하는 방법.","2026.06.24","blue"],
 ["DESIGN","패키지 패밀리룩을 만드는 최소한의 기준","제품군이 늘어나도 브랜드의 인상이 유지되는 정보·색상·레이아웃 규칙.","2026.06.18","silver"],
];

export default function Insights(){return <><SiteHeader/><main className="subpage insights-page"><section className="page-hero"><p>INSIGHTS</p><h1>브랜드와 디자인,<br/>성장을 위한 생각들.</h1></section><section className="insights-index"><div className="filter-row"><button className="active">ALL</button><button>BRANDING</button><button>DESIGN</button><button>BUSINESS</button><button>AI & TECHNOLOGY</button><button>RESEARCH</button></div><div className="insights-grid">{posts.map((p,i)=><article key={p[1]}><a href={`/insights/${i+1}`}><div className={`insight-thumb tone-${p[4]}`}><span>0{i+1}</span></div><p>{p[0]} · {p[3]}</p><h2>{p[1]}</h2><div>{p[2]}</div><b>READ ↗</b></a></article>)}</div></section></main><SiteFooter/></>}
