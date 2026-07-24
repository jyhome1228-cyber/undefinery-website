const modelProfiles = [
  ["01","kim-seoa","KIM SEOA","김서아","REFINED · MODERN","BEAUTY · FASHION · LIFESTYLE","절제된 표정과 깨끗한 스타일링을 중심으로 프리미엄 뷰티와 라이프스타일 캠페인에 적합합니다."],
  ["02","kim-jinha","KIM JINHA","김진하","CALM · NATURAL","WELLNESS · LIVING · EDITORIAL","편안하고 자연스러운 인상을 기반으로 웰니스, 리빙, 데일리 브랜드의 진정성 있는 장면을 구성합니다."],
  ["03","novak","NOVAK","노박","BOLD · GLOBAL","FASHION · TECH · CAMPAIGN","선명한 존재감과 글로벌한 무드로 패션, 테크, 콘셉트 중심의 캠페인 비주얼에 활용하기 좋습니다."],
  ["04","dan-nahee","DAN NAHEE","단나희","SOFT · ELEGANT","BEAUTY · JEWELRY · FASHION","부드러운 인상과 우아한 분위기를 살려 뷰티, 주얼리, 여성 패션의 섬세한 이미지를 전개합니다."],
  ["05","david-kim","DAVID KIM","데이비드 킴","SMART · CONFIDENT","BUSINESS · TECH · LIFESTYLE","신뢰감 있고 정돈된 인상으로 비즈니스, 테크, 프리미엄 라이프스타일 분야에 적합합니다."],
  ["06","robin-fer","ROBIN FER","로빈 페르","CLASSIC · CINEMATIC","FASHION · TRAVEL · EDITORIAL","클래식하고 시네마틱한 분위기를 바탕으로 패션 에디토리얼과 여행·문화 콘텐츠를 구성합니다."],
  ["07","lina-seo","LINA SEO","리나 서","BRIGHT · FRIENDLY","BEAUTY · FOOD · LIFESTYLE","밝고 친근한 에너지로 대중적인 뷰티, 푸드, 라이프스타일 캠페인에 자연스럽게 어울립니다."],
  ["08","park-seojun","PARK SEOJUN","박서준","URBAN · CLEAN","FASHION · GROOMING · TECH","도시적이고 단정한 인상을 중심으로 남성 패션, 그루밍, 테크 브랜드의 현대적인 장면을 만듭니다."],
  ["09","park-taejun","PARK TAEJUN","박태준","ACTIVE · CASUAL","SPORTS · OUTDOOR · LIFESTYLE","활동적이고 캐주얼한 무드를 살려 스포츠, 아웃도어, 일상형 콘텐츠에 역동성을 더합니다."],
  ["10","seo-yerin","SEO YERIN","서예린","PURE · MINIMAL","SKINCARE · WELLNESS · LIVING","맑고 미니멀한 분위기로 스킨케어, 웰니스, 리빙 브랜드의 깨끗한 이미지를 표현합니다."],
  ["11","seo-harin","SEO HARIN","서하린","CHIC · DISTINCTIVE","FASHION · BEAUTY · EDITORIAL","시크하고 개성 있는 인상을 기반으로 패션과 뷰티 에디토리얼의 강한 콘셉트를 소화합니다."],
  ["12","song-eunha","SONG EUNHA","송은하","WARM · GRACEFUL","WELLNESS · BEAUTY · LIFESTYLE","따뜻하고 안정적인 분위기로 웰니스, 뷰티, 라이프스타일 브랜드에 신뢰감 있는 인상을 더합니다."],
  ["13","yoon-seulbi","YOON SEULBI","윤슬비","YOUTHFUL · FRESH","FASHION · BEAUTY · SOCIAL","생기 있고 감각적인 무드로 영 패션, 뷰티, 소셜 캠페인의 트렌디한 장면을 구성합니다."],
  ["14","lee-yuna","LEE YUNA","이유나","POISED · PREMIUM","BEAUTY · JEWELRY · LUXURY","정제된 포즈와 고급스러운 인상을 살려 프리미엄 뷰티, 주얼리, 럭셔리 캠페인에 적합합니다."],
  ["15","lee-yujun","LEE YUJUN","이유준","FRESH · CASUAL","FASHION · EDUCATION · LIFESTYLE","밝고 자연스러운 분위기를 바탕으로 캐주얼 패션, 교육, 일상 콘텐츠에 친근함을 더합니다."],
  ["16","jung-haram","JUNG HARAM","정하람","MODERN · VERSATILE","FASHION · BEAUTY · COMMERCIAL","현대적이고 균형 잡힌 인상으로 패션부터 뷰티, 일반 상업 이미지까지 폭넓게 확장할 수 있습니다."],
  ["17","jung-hoyoung","JUNG HOYOUNG","정호영","MATURE · TRUSTED","BUSINESS · FINANCE · HEALTHCARE","성숙하고 신뢰감 있는 분위기로 비즈니스, 금융, 헬스케어 커뮤니케이션에 적합합니다."],
  ["18","timber","TIMBER","팀버","RUGGED · OUTDOOR","OUTDOOR · SPORTS · TRAVEL","강인하고 자연 친화적인 인상을 살려 아웃도어, 스포츠, 여행 브랜드의 현장감 있는 장면을 만듭니다."],
  ["19","han-siwoo","HAN SIWOO","한시우","GENTLE · INTELLECTUAL","EDUCATION · TECH · LIFESTYLE","부드럽고 지적인 인상으로 교육, 테크, 일상 서비스 브랜드의 신뢰도 높은 이미지를 구성합니다."],
  ["20","han-yujin","HAN YUJIN","한유진","LIVELY · CONTEMPORARY","BEAUTY · FASHION · SOCIAL","생동감 있고 동시대적인 분위기로 뷰티, 패션, 소셜 중심 캠페인에 선명한 에너지를 더합니다."],
  ["21","heo-chanhee","HEO CHANHEE","허찬희","SHARP · SOPHISTICATED","FASHION · GROOMING · LUXURY","날렵하고 세련된 인상을 중심으로 남성 패션, 그루밍, 프리미엄 브랜드의 강한 비주얼을 전개합니다."]
].map(([no,slug,name,ko,mood,use,direction])=>({
  no,slug,name,ko,mood,use,direction,
  persona:`이 페르소나의 핵심 키워드는 ${mood}입니다. ${direction}`,
  interview:`${use.replaceAll(" · ",", ")} 분야의 장면에서 가장 자연스럽습니다. 정해진 표정을 반복하기보다 브랜드가 말하고 싶은 감정과 이미지의 목적부터 이해합니다.`,
  base:`assets/images/model-profiles/${slug}`
}));

const catalog = document.querySelector("[data-model-catalog]");
if (catalog) {
  catalog.innerHTML = modelProfiles.map((m,i)=>`
    <a class="model-card" href="models/${m.slug}.html" aria-label="${m.name} 상세 프로필 보기">
      <span class="model-card-images">
        <img src="${m.base}/1.webp" alt="${m.name} AI model" loading="${i<3?"eager":"lazy"}">
        <img class="model-card-hover" src="${m.base}/2.webp" alt="" loading="lazy">
      </span>
      <span class="model-card-info"><small>AI MODEL ${m.no}</small><strong>${m.name}</strong></span>
    </a>`).join("");
}

const detailRoot = document.querySelector("[data-model-detail]");
if (detailRoot) {
  const slug = detailRoot.dataset.model || new URLSearchParams(location.search).get("model");
  const model = modelProfiles.find(m=>m.slug===slug) || modelProfiles[0];
  const inModelDirectory = location.pathname.includes("/models/");
  const assetRoot = inModelDirectory ? "../" : "";
  document.title = `${model.name} — Undefinery AI Model`;
  detailRoot.innerHTML = `
    <section class="model-profile-head">
      <a href="${assetRoot}ai-models.html">← ALL AI MODELS</a>
      <div>
        <p>AI MODEL ${model.no}</p>
        <h1>${model.name}</h1>
        <span>${model.ko}</span>
      </div>
      <dl>
        <div><dt>MOOD</dt><dd>${model.mood}</dd></div>
        <div><dt>BEST FOR</dt><dd>${model.use}</dd></div>
        <div><dt>PRODUCTION</dt><dd>CUSTOM STYLING AVAILABLE</dd></div>
      </dl>
    </section>
    <section class="model-profile-gallery" aria-label="${model.name} 이미지 갤러리">
      ${[1,2,3,4,5].map((n,i)=>`<figure class="gallery-${i+1}"><img src="${assetRoot}${model.base}/${n}.webp" alt="${model.name} profile ${n}" ${i?"loading=\"lazy\"":""}></figure>`).join("")}
    </section>
    <section class="model-profile-story">
      <p>PERSONA</p>
      <div>
        <h2>${model.direction}</h2>
        <p>${model.persona}</p>
      </div>
      <p>CHARACTER INTERVIEW</p>
      <div class="model-interview">
        <h3>“어떤 장면에서 가장 자연스럽나요?”</h3>
        <p>${model.interview}</p>
      </div>
    </section>
    <section class="model-profile-note">
      <p>CREATE WITH ${model.name}</p>
      <h2>이 페르소나를 브랜드의<br>새로운 장면으로 확장합니다.</h2>
      <div>
        <p>목록의 이미지는 기본 무드와 활용 가능성을 보여주는 예시입니다. 실제 프로젝트에서는 캠페인 목적과 매체 규격에 맞춰 의상, 표정, 포즈와 공간을 새롭게 설계합니다.</p>
        <a href="${assetRoot}contact.html">이 모델로 프로젝트 문의 <span>↗</span></a>
      </div>
    </section>`;
}
