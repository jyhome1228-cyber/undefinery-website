import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  {
    id: "model",
    number: "01",
    eyebrow: "AI MODEL PRODUCTION",
    title: <>브랜드를 위해 설계된<br />하나의 얼굴.</>,
    description: "브랜드의 타깃과 태도에 맞는 AI 모델을 개발하고, 여러 채널에서 일관되게 활용할 수 있는 모델 기준과 이미지 자산을 함께 구축합니다.",
    scope: ["브랜드 전용 AI 모델 개발", "외형·스타일·페르소나 설계", "패션·뷰티·라이프스타일 연출", "표정·포즈·구도 테스트", "캠페인·SNS·상세페이지 확장", "모델 활용 가이드 및 아카이브"],
    process: "BRAND ANALYSIS → MODEL DEVELOPMENT → STYLE TEST → MASTER MODEL → CONTENT PRODUCTION",
  },
  {
    id: "product",
    number: "02",
    eyebrow: "PRODUCT VISUAL PRODUCTION",
    title: <>촬영의 한계를 넘어선<br />제품 비주얼.</>,
    description: "실제 제품의 형태와 브랜드 기준을 바탕으로 단독컷부터 사용 장면, 광고와 상세페이지까지 목적에 맞는 제품 이미지를 제작합니다.",
    scope: ["제품 단독 및 히어로 이미지", "화장품·식품·패키지 연출", "제품 사용 장면과 라이프스타일 컷", "광고·배너·프로모션 비주얼", "상세페이지 및 커머스 콘텐츠", "리터칭·합성·채널별 규격화"],
    process: "PRODUCT REVIEW → VISUAL DIRECTION → SCENE TEST → RETOUCHING → CHANNEL DELIVERY",
  },
  {
    id: "space",
    number: "03",
    eyebrow: "SPATIAL VISUAL PRODUCTION",
    title: <>존재하지 않던 공간을<br />브랜드의 장면으로.</>,
    description: "공간 사진이나 도면, 브랜드 콘셉트를 기반으로 가상의 공간과 활용 장면을 설계합니다. 실제 촬영이 어려운 장소도 캠페인과 콘텐츠의 배경으로 확장합니다.",
    scope: ["브랜드 맞춤형 가상 공간 제작", "매장·전시·숙박·건축 공간 연출", "스튜디오·리빙·뷰티 공간 제작", "제품과 인물이 포함된 활용 장면", "계절·시간·조명·분위기 변형", "공간 콘텐츠 아카이브 구축"],
    process: "SPACE RESEARCH → CONCEPT DESIGN → SCENE BUILD → DETAIL REVIEW → CONTENT EXPANSION",
  },
];

export default function Production() {
  return <>
    <SiteHeader dark />
    <main className="production-page production-redesign">
      <section className="production-hero">
        <p>AI PRODUCTION SYSTEM</p>
        <h1>MODELS, PRODUCTS<br />AND SPACES<br /><em>BEYOND REALITY.</em></h1>
        <div className="production-intro">
          <p>AI 모델과 제품, 공간을 기반으로 브랜드가 필요로 하는 새로운 상업 이미지를 제작합니다.</p>
          <p>단발성 이미지 생성이 아니라, 반복적으로 활용할 수 있는 제작 기준과 콘텐츠 자산까지 함께 구축합니다.</p>
        </div>
        <nav className="production-nav" aria-label="AI 프로덕션 서비스">
          {services.map(service => <a href={`#${service.id}`} key={service.id}><span>{service.number}</span>{service.eyebrow}<b>↓</b></a>)}
        </nav>
      </section>

      <section className="production-services">
        {services.map((service, index) =>
          <article className="production-service" id={service.id} key={service.id}>
            <div className="service-heading">
              <p>{service.number} — {service.eyebrow}</p>
              <h2>{service.title}</h2>
            </div>
            <div className={`service-visual service-visual-${index + 1}`} aria-hidden="true">
              <span>{service.eyebrow.split(" ")[0]}</span><i>{service.number}</i>
            </div>
            <div className="service-content">
              <p className="service-description">{service.description}</p>
              <div className="service-scope">
                <h3>PRODUCTION SCOPE</h3>
                <ul>{service.scope.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="service-process"><h3>PROCESS</h3><p>{service.process}</p></div>
            </div>
          </article>
        )}
      </section>

      <section className="production-cta">
        <p>START A PRODUCTION</p>
        <h2>브랜드에 필요한 장면을<br />함께 설계합니다.</h2>
        <Link className="pill pill-dark" href="/contact">PRODUCTION INQUIRY <span>↗</span></Link>
      </section>
    </main><SiteFooter />
  </>;
}
