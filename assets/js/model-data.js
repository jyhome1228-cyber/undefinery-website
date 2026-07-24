const modelProfiles = [
  ["01","kim-seoa","KIM SEOA","김서아","REFINED · MODERN","BEAUTY · FASHION · LIFESTYLE","절제된 표정과 깨끗한 스타일링을 중심으로 프리미엄 뷰티와 라이프스타일 캠페인에 적합합니다.","THE QUIET EDITOR","차분하지만 판단이 빠르고, 말보다 정확한 선택으로 자신을 드러냅니다.","새벽의 조용한 스튜디오. 음악 한 곡을 반복해 들으며 하루의 이미지를 정리해요.","오래된 은색 콤팩트. 시간이 지나도 변하지 않는 취향을 기억하게 해주거든요.","차갑다는 말을 듣지만, 사실은 감정을 쉽게 소비하지 않는 편이에요.","누군가의 작은 습관을 오래 기억해 주는 것. 과장되지 않은 다정함이 좋아요."],
  ["02","kim-jinha","KIM JINHA","김진하","CALM · NATURAL","WELLNESS · LIVING · EDITORIAL","편안하고 자연스러운 인상을 기반으로 웰니스, 리빙, 데일리 브랜드의 진정성 있는 장면을 구성합니다.","THE SLOW OBSERVER","주변의 온도와 표정을 천천히 읽으며 자연스러운 균형을 만듭니다.","햇빛이 오래 머무는 창가. 식물에 물을 주고 차를 마시는 시간이 가장 편해요.","손때 묻은 유리 화병. 완벽하지 않은 모양이 오히려 오래 보고 싶게 만들어요.","조용해서 소극적이라고 생각하지만, 필요한 순간에는 먼저 움직이는 사람이에요.","같은 공간에서 각자의 일을 편안히 하는 것. 침묵도 대화가 될 수 있다고 믿어요."],
  ["03","novak","NOVAK","노박","BOLD · GLOBAL","FASHION · TECH · CAMPAIGN","선명한 존재감과 글로벌한 무드로 패션, 테크, 콘셉트 중심의 캠페인 비주얼에 활용하기 좋습니다.","THE NEW FRONTIER","낯선 환경을 즐기고 익숙한 규칙을 자신만의 방식으로 다시 해석합니다.","도시의 가장 높은 곳. 멀리까지 보이면 생각의 크기도 달라지는 기분이 들어요.","여행마다 붙인 스티커가 가득한 금속 케이스. 내가 지나온 장소들의 지도예요.","강해 보이지만 새로운 일을 앞두면 누구보다 많이 준비해요. 용감함은 준비에서 나온다고 생각해요.","서로의 세계를 바꾸려 하지 않고 함께 더 넓은 곳으로 가는 것."],
  ["04","dan-nahee","DAN NAHEE","단나희","SOFT · ELEGANT","BEAUTY · JEWELRY · FASHION","부드러운 인상과 우아한 분위기를 살려 뷰티, 주얼리, 여성 패션의 섬세한 이미지를 전개합니다.","THE GENTLE MUSE","섬세한 감각과 안정된 태도로 평범한 순간 안의 아름다움을 발견합니다.","작은 꽃집이나 오래된 서점. 조용한 향과 종이의 감촉이 마음을 가라앉혀요.","할머니에게 받은 진주 귀걸이. 중요한 날보다 평범한 날에 더 자주 착용해요.","부드러운 인상 때문에 쉽게 양보할 것 같다는 말을 듣지만, 좋아하는 것에는 분명한 기준이 있어요.","상대의 속도에 맞춰 나란히 걷는 것. 앞서지도 뒤처지지도 않는 마음이에요."],
  ["05","david-kim","DAVID KIM","데이비드 킴","SMART · CONFIDENT","BUSINESS · TECH · LIFESTYLE","신뢰감 있고 정돈된 인상으로 비즈니스, 테크, 프리미엄 라이프스타일 분야에 적합합니다.","THE CLEAR STRATEGIST","복잡한 상황에서도 핵심을 빠르게 찾고 신뢰할 수 있는 방향을 제시합니다.","사람이 적은 오전의 카페. 노트 한 장에 해야 할 일을 정리하면 하루가 선명해져요.","첫 프로젝트 때 사용한 검은 만년필. 중요한 결정을 할 때마다 자연스럽게 찾게 됩니다.","계산적이라는 인상을 주지만, 사실 모두의 시간이 낭비되지 않도록 미리 생각하는 편이에요.","서로의 목표를 존중하면서도 힘든 순간에는 가장 먼저 연락할 수 있는 관계."],
  ["06","robin-fer","ROBIN FER","로빈 페르","CLASSIC · CINEMATIC","FASHION · TRAVEL · EDITORIAL","클래식하고 시네마틱한 분위기를 바탕으로 패션 에디토리얼과 여행·문화 콘텐츠를 구성합니다.","THE CINEMATIC DRIFTER","익숙한 장소에서도 한 편의 장면을 발견하며 천천히 이야기를 수집합니다.","오래된 극장의 마지막 열. 영화가 끝난 뒤 조명이 켜지는 순간까지 자리에 남아 있어요.","필름이 든 작은 카메라. 결과를 바로 확인할 수 없다는 점이 마음에 들어요.","혼자 있는 걸 좋아하지만 외로운 사람은 아니에요. 혼자여야 더 잘 들리는 이야기들이 있거든요.","같은 장면을 보고 서로 다른 이야기를 떠올린 뒤 오래 나누는 것."],
  ["07","lina-seo","LINA SEO","리나 서","BRIGHT · FRIENDLY","BEAUTY · FOOD · LIFESTYLE","밝고 친근한 에너지로 대중적인 뷰티, 푸드, 라이프스타일 캠페인에 자연스럽게 어울립니다.","THE SUNNY CONNECTOR","밝은 에너지로 낯선 사람과 공간 사이의 거리를 자연스럽게 좁힙니다.","주말의 작은 시장. 새로운 음식을 맛보고 상인들과 짧게 대화하는 시간이 좋아요.","친구들이 남긴 메모를 모은 투명 상자. 힘이 필요할 때 하나씩 꺼내 읽어요.","늘 밝아서 고민이 없다고 생각하지만, 웃음은 어려운 순간을 통과하는 나만의 방식이에요.","아무 이유 없이 맛있는 것을 사 들고 찾아가 함께 나눠 먹는 순간."],
  ["08","park-seojun","PARK SEOJUN","박서준","URBAN · CLEAN","FASHION · GROOMING · TECH","도시적이고 단정한 인상을 중심으로 남성 패션, 그루밍, 테크 브랜드의 현대적인 장면을 만듭니다.","THE URBAN MINIMALIST","불필요한 요소를 덜어내고 기능과 태도가 선명한 도시의 리듬을 즐깁니다.","늦은 밤 불이 남은 작업실. 도시가 조용해지면 오히려 집중이 잘돼요.","모서리가 닳은 카드 지갑. 필요한 것만 가지고 다니는 습관의 시작이었어요.","무심해 보인다고 하지만, 마음에 둔 사람과 일에는 아주 오래 집중하는 편이에요.","매일의 동선 안에 자연스럽게 서로의 자리가 생기는 것."],
  ["09","park-taejun","PARK TAEJUN","박태준","ACTIVE · CASUAL","SPORTS · OUTDOOR · LIFESTYLE","활동적이고 캐주얼한 무드를 살려 스포츠, 아웃도어, 일상형 콘텐츠에 역동성을 더합니다.","THE EVERYDAY RUNNER","몸을 움직이며 에너지를 얻고 실패도 다음 시도를 위한 기록으로 받아들입니다.","강변 러닝 코스. 같은 길도 날씨와 속도에 따라 매번 다르게 느껴져요.","첫 완주 때 받은 낡은 번호표. 잘하는 것보다 끝까지 가는 게 중요하다는 증거예요.","가벼워 보일 수 있지만 약속한 일은 반드시 끝냅니다. 꾸준함이 내 장점이에요.","함께 새로운 길을 달리다가 힘들면 속도를 맞춰 주는 것."],
  ["10","seo-yerin","SEO YERIN","서예린","PURE · MINIMAL","SKINCARE · WELLNESS · LIVING","맑고 미니멀한 분위기로 스킨케어, 웰니스, 리빙 브랜드의 깨끗한 이미지를 표현합니다.","THE CLEAN PAUSE","맑고 단정한 감각으로 복잡한 일상에 잠깐의 여백과 호흡을 만듭니다.","물이 잔잔한 수영장이나 흰 침구가 있는 방. 아무것도 없는 공간에서 마음이 편해져요.","작은 백자 잔. 손에 닿는 매끈한 온도와 단순한 형태를 좋아해요.","순해 보여서 기준이 없다고 생각하지만, 내 생활의 리듬은 쉽게 바꾸지 않아요.","함께 있을 때 더 천천히 숨 쉴 수 있게 되는 사람과 보내는 시간."],
  ["11","seo-harin","SEO HARIN","서하린","CHIC · DISTINCTIVE","FASHION · BEAUTY · EDITORIAL","시크하고 개성 있는 인상을 기반으로 패션과 뷰티 에디토리얼의 강한 콘셉트를 소화합니다.","THE BOLD CURATOR","자신만의 기준으로 낯선 조합을 선택하고 강한 인상을 하나의 스타일로 완성합니다.","새로운 전시의 설치가 끝난 늦은 밤. 아무도 보기 전의 긴장감이 좋아요.","검은 가죽 장갑. 평범한 옷도 태도를 바꾸는 작은 장치라고 생각해요.","까다롭다는 말을 듣지만, 좋은 결과를 위해 애매함을 그냥 넘기지 않는 것뿐이에요.","서로의 날카로운 면까지 바꾸려 하지 않고 매력으로 바라봐 주는 것."],
  ["12","song-eunha","SONG EUNHA","송은하","WARM · GRACEFUL","WELLNESS · BEAUTY · LIFESTYLE","따뜻하고 안정적인 분위기로 웰니스, 뷰티, 라이프스타일 브랜드에 신뢰감 있는 인상을 더합니다.","THE WARM KEEPER","상대의 마음을 세심하게 살피며 편안하고 오래 지속되는 분위기를 만듭니다.","오후의 부엌. 천천히 음식을 준비하고 접시를 고르는 시간이 좋아요.","여러 번 수선한 리넨 앞치마. 오래 쓸수록 더 편안해지는 물건을 좋아합니다.","늘 배려만 할 것 같지만, 나를 지키는 선도 분명해요. 그래야 다정함도 오래가니까요.","아픈 날 말없이 따뜻한 한 끼를 준비해 주는 마음."],
  ["13","yoon-seulbi","YOON SEULBI","윤슬비","YOUTHFUL · FRESH","FASHION · BEAUTY · SOCIAL","생기 있고 감각적인 무드로 영 패션, 뷰티, 소셜 캠페인의 트렌디한 장면을 구성합니다.","THE PLAYFUL SPARK","빠르게 변하는 감각을 즐기며 작은 호기심을 생동감 있는 장면으로 바꿉니다.","사진 부스가 있는 골목과 레코드숍. 계획 없이 걷다가 발견하는 것들이 좋아요.","친구들과 찍은 작은 스티커 사진. 완벽하지 않은 표정이라 더 진짜 같아요.","즉흥적이지만 아무 생각이 없는 건 아니에요. 재미있는 답을 찾는 속도가 조금 빠를 뿐이에요.","사소한 농담 하나로 평범한 하루를 기억에 남게 만드는 것."],
  ["14","lee-yuna","LEE YUNA","이유나","POISED · PREMIUM","BEAUTY · JEWELRY · LUXURY","정제된 포즈와 고급스러운 인상을 살려 프리미엄 뷰티, 주얼리, 럭셔리 캠페인에 적합합니다.","THE POISED ICON","흔들리지 않는 태도와 정제된 움직임으로 조용하지만 깊은 존재감을 남깁니다.","호텔의 조용한 라운지. 사람들의 움직임을 바라보며 다음 일정을 정리해요.","어머니가 건넨 얇은 금반지. 화려하지 않지만 어떤 옷에도 자연스럽게 어울려요.","거리감이 있다는 말을 듣지만, 신뢰가 생기면 오래 관계를 지키는 편이에요.","큰 약속보다 매일 같은 태도로 존중을 보여 주는 것."],
  ["15","lee-yujun","LEE YUJUN","이유준","FRESH · CASUAL","FASHION · EDUCATION · LIFESTYLE","밝고 자연스러운 분위기를 바탕으로 캐주얼 패션, 교육, 일상 콘텐츠에 친근함을 더합니다.","THE OPEN BEGINNER","새로운 것을 배우는 과정 자체를 즐기며 솔직한 반응으로 친근함을 만듭니다.","학교 근처의 농구장. 사람들과 가볍게 몸을 움직이면 생각도 정리돼요.","처음 직접 조립한 작은 스피커. 서툴러도 끝까지 만들었던 기억이 좋아요.","어려 보인다는 인상과 달리, 맡은 일은 여러 번 확인해야 마음이 놓이는 편이에요.","잘 보이려 애쓰지 않아도 함께 웃을 수 있는 편안한 관계."],
  ["16","jung-haram","JUNG HARAM","정하람","MODERN · VERSATILE","FASHION · BEAUTY · COMMERCIAL","현대적이고 균형 잡힌 인상으로 패션부터 뷰티, 일반 상업 이미지까지 폭넓게 확장할 수 있습니다.","THE ADAPTIVE CREATOR","장면의 목적을 빠르게 이해하고 서로 다른 분위기 안에서도 자신의 균형을 유지합니다.","빛이 좋은 렌털 스튜디오. 빈 공간이 어떤 장면으로 변할지 상상하는 게 좋아요.","색이 묻은 작은 스케치북. 떠오른 생각을 완성하기 전의 상태로 간직하고 있어요.","무난하다는 말도 듣지만, 어떤 환경에서도 핵심을 잃지 않는 것이 내 개성이에요.","서로 다른 취향을 섞어 둘만의 새로운 방식을 만들어 가는 것."],
  ["17","jung-hoyoung","JUNG HOYOUNG","정호영","MATURE · TRUSTED","BUSINESS · FINANCE · HEALTHCARE","성숙하고 신뢰감 있는 분위기로 비즈니스, 금융, 헬스케어 커뮤니케이션에 적합합니다.","THE STEADY ADVISOR","경험에서 나온 안정감으로 복잡한 순간에도 믿을 수 있는 기준을 보여 줍니다.","이른 아침의 서재. 뉴스를 읽고 하루를 준비하는 조용한 시간이 필요해요.","아버지가 쓰던 손목시계. 시간을 지키는 태도까지 함께 물려받았다고 생각합니다.","진지해서 재미없어 보일 수 있지만, 가까운 사람들 앞에서는 의외로 농담을 많이 해요.","어려운 결정을 앞뒀을 때 가장 솔직한 이야기를 나눌 수 있는 신뢰."],
  ["18","timber","TIMBER","팀버","RUGGED · OUTDOOR","OUTDOOR · SPORTS · TRAVEL","강인하고 자연 친화적인 인상을 살려 아웃도어, 스포츠, 여행 브랜드의 현장감 있는 장면을 만듭니다.","THE WILD MAKER","거친 환경을 두려워하지 않고 손으로 직접 부딪치며 자신만의 길을 만듭니다.","비가 그친 숲이나 작업대가 있는 차고. 흙과 나무 냄새가 나는 곳이 편해요.","오래 사용한 멀티툴. 작은 흠집마다 지나온 장소와 해결한 문제가 남아 있어요.","거칠어 보이지만 자연과 물건을 아주 조심스럽게 다뤄요. 오래 쓰는 것을 중요하게 생각하거든요.","말보다 행동으로 곁을 지키고 함께 먼 길을 가는 것."],
  ["19","han-siwoo","HAN SIWOO","한시우","GENTLE · INTELLECTUAL","EDUCATION · TECH · LIFESTYLE","부드럽고 지적인 인상으로 교육, 테크, 일상 서비스 브랜드의 신뢰도 높은 이미지를 구성합니다.","THE CURIOUS THINKER","차분한 호기심으로 질문을 이어 가며 어려운 이야기를 친절한 언어로 바꿉니다.","늦게까지 여는 도서관. 모르는 분야의 책을 한 권씩 꺼내 보는 시간이 좋아요.","여백에 메모가 가득한 첫 전공 서적. 내가 무엇을 몰랐는지 보여 주는 기록이에요.","말이 적어서 관심이 없어 보일 수 있지만, 상대의 말을 오래 생각하고 기억하는 편이에요.","서로의 질문을 귀찮아하지 않고 함께 답을 찾아가는 관계."],
  ["20","han-yujin","HAN YUJIN","한유진","LIVELY · CONTEMPORARY","BEAUTY · FASHION · SOCIAL","생동감 있고 동시대적인 분위기로 뷰티, 패션, 소셜 중심 캠페인에 선명한 에너지를 더합니다.","THE CULTURE PULSE","새로운 문화와 사람의 에너지를 빠르게 흡수해 지금의 감각으로 표현합니다.","음악이 좋은 팝업과 북적이는 거리. 새로운 사람들의 스타일을 보는 게 재미있어요.","공연장에서 받은 형광색 손목띠. 그날의 소리와 움직임이 그대로 떠올라요.","늘 자신 있어 보이지만 중요한 일을 시작하기 전에는 누구보다 긴장해요. 그래서 더 크게 웃어요.","좋아하는 노래를 함께 듣다가 말없이 같은 부분에서 웃는 순간."],
  ["21","heo-chanhee","HEO CHANHEE","허찬희","SHARP · SOPHISTICATED","FASHION · GROOMING · LUXURY","날렵하고 세련된 인상을 중심으로 남성 패션, 그루밍, 프리미엄 브랜드의 강한 비주얼을 전개합니다.","THE PRECISE EDGE","선명한 취향과 절제된 긴장감으로 익숙한 장면에도 날카로운 인상을 남깁니다.","예약이 끝난 바버숍이나 조용한 테일러 숍. 정교한 손의 움직임을 보는 걸 좋아해요.","정확히 맞춘 첫 수트의 커프링크. 작은 차이가 전체 태도를 바꾼다는 걸 배웠어요.","완벽주의자로 보이지만 모든 걸 통제하려는 건 아니에요. 중요한 디테일을 놓치고 싶지 않을 뿐이에요.","서로의 가장 예민한 기준까지 이해하고 존중해 주는 것."]
].map(([no,slug,name,ko,mood,use,direction,archetype,character,place,object,misunderstood,romance])=>({
  no,slug,name,ko,mood,use,direction,
  archetype,character,place,object,misunderstood,romance,
  base:`assets/images/model-profiles/${slug}`
}));

const englishProfileCopy = {
  "kim-seoa": ["Her composed expression and clean styling suit premium beauty, fashion, and lifestyle campaigns.", "Quietly decisive, she expresses herself through precise choices rather than excess.", "A quiet studio at dawn, with one song playing on repeat while I organize the images in my head.", "An old silver compact. It reminds me that real taste can remain unchanged over time.", "People sometimes read me as distant. I simply prefer not to spend emotion carelessly.", "Remembering the small habits of someone I care about. I like affection that never needs to announce itself."],
  "kim-jinha": ["Her relaxed, natural presence creates sincere moments for wellness, living, and editorial brands.", "She reads the temperature of a room slowly and brings an effortless sense of balance.", "A sunlit window, watering plants and making tea. That is when everything feels unhurried.", "A handmade glass vase marked by years of use. Its imperfections make it worth keeping.", "Quietness is often mistaken for passivity, but I step forward quickly when a moment truly needs me.", "Sharing a room while each person does their own thing. I believe silence can be a form of conversation."],
  "novak": ["A bold global presence built for fashion, technology, and concept-driven campaigns.", "He enjoys unfamiliar territory and instinctively rewrites familiar rules in his own way.", "Somewhere high above the city. A wider view always makes my ideas feel larger.", "A metal case covered in travel stickers. It is a map of every place that has changed me.", "Confidence can look effortless, but I prepare more than most people realize. Courage begins with preparation.", "Moving toward a wider world together without trying to reshape each other."],
  "dan-nahee": ["Her soft expression and elegant presence bring nuance to beauty, jewelry, and fashion imagery.", "Sensitive and grounded, she notices beauty in moments most people pass by.", "A small flower shop or an old bookstore. Quiet fragrance and the texture of paper settle my mind.", "A pair of pearl earrings from my grandmother. I wear them more often on ordinary days than special ones.", "A gentle appearance does not mean I have no boundaries. I am very clear about what I value.", "Walking beside someone at the same pace—never leading, never leaving them behind."],
  "david-kim": ["A polished, trustworthy presence suited to business, technology, and premium lifestyle communication.", "He finds the essential point in complex situations and turns it into a clear direction.", "A nearly empty café in the morning. One page of notes can bring the whole day into focus.", "The black fountain pen from my first project. I still reach for it whenever a decision matters.", "Planning ahead can look calculating. I simply do not want anyone's time to be wasted.", "Respecting each other's ambitions while still being the first person either of us can call."],
  "robin-fer": ["A classic, cinematic character for fashion editorials, travel stories, and cultural campaigns.", "He finds a film-like scene in familiar places and collects stories without rushing them.", "The last row of an old cinema. I stay until the lights come on and the room becomes real again.", "A small film camera. I like that the result cannot be checked immediately.", "I enjoy solitude, but I am not lonely. Some stories can only be heard when everything else is quiet.", "Seeing the same scene differently, then taking time to exchange the stories it gave us."],
  "lina-seo": ["Bright, approachable energy for beauty, food, and lifestyle campaigns with broad appeal.", "She closes the distance between unfamiliar people and places with natural warmth.", "A small weekend market, tasting something new and exchanging a few words with the vendors.", "A clear box filled with notes from friends. I read one whenever I need to borrow a little courage.", "People assume a bright person has no worries. Smiling is simply how I move through difficult moments.", "Arriving with something delicious for no particular reason and sharing it together."],
  "park-seojun": ["A clean urban image for contemporary menswear, grooming, and technology brands.", "He removes what is unnecessary and enjoys a city rhythm defined by function and attitude.", "A studio still lit late at night. I focus best after the city becomes quiet.", "A card wallet with worn edges. It began my habit of carrying only what I need.", "I can appear indifferent, but I stay deeply committed to the people and work I choose.", "When two lives make room for each other naturally within the rhythm of every day."],
  "park-taejun": ["An active, casual presence that adds movement to sports, outdoor, and everyday lifestyle content.", "He gains energy through motion and treats every setback as a record for the next attempt.", "A riverside running path. The same route feels new whenever the weather or pace changes.", "The race bib from my first finish. It reminds me that completing something matters more than looking effortless.", "I may seem easygoing, but I always finish what I promise. Consistency is my strongest trait.", "Running toward something new together and adjusting pace when one of us needs it."],
  "seo-yerin": ["A clear, minimal presence for skincare, wellness, and refined living imagery.", "She creates a clean pause in busy environments through a calm and disciplined sensibility.", "A still pool or a room with white bedding. Empty space helps me breathe more slowly.", "A small white porcelain cup. I love its smooth temperature and uncomplicated form.", "A soft appearance is sometimes mistaken for having no standards. My personal rhythm is actually very firm.", "Time with someone who makes it easier to breathe more slowly."],
  "seo-harin": ["A chic, distinctive character capable of carrying strong fashion and beauty concepts.", "She combines unexpected elements through a sharp personal standard and turns them into style.", "A gallery late at night, just after installation. I like the tension before anyone else has seen it.", "A pair of black leather gloves. A small detail can change the attitude of an ordinary outfit.", "Precision is often called difficulty. I simply do not let ambiguity weaken a good result.", "Seeing each other's sharper edges as character, not something that needs to be corrected."],
  "song-eunha": ["A warm, graceful presence that brings trust to wellness, beauty, and lifestyle brands.", "She notices emotional details and creates an atmosphere that feels comfortable and lasting.", "An afternoon kitchen, preparing food slowly and choosing the right plate for it.", "A linen apron repaired several times. I love objects that become more comfortable with age.", "Kindness does not mean having no boundaries. Protecting my own limits is what lets warmth last.", "Preparing a warm meal without being asked when someone is having a difficult day."],
  "yoon-seulbi": ["Fresh, expressive energy for young fashion, beauty, and social-first campaigns.", "She turns quick curiosity and changing cultural signals into lively visual moments.", "A street with a photo booth and a record shop. The best discoveries happen without a plan.", "A tiny sticker photo with friends. The imperfect expressions make it feel more honest.", "Spontaneity is not thoughtlessness. I simply find playful answers faster than most people do.", "A small joke that turns an ordinary day into something worth remembering."],
  "lee-yuna": ["A poised premium image for luxury beauty, jewelry, and refined fashion campaigns.", "Her controlled movement and steady attitude create a quiet but lasting presence.", "A quiet hotel lounge, watching the room move while I arrange the rest of my day.", "A thin gold ring from my mother. It is understated enough to belong with anything.", "Reserve is sometimes read as distance. Once trust is built, I tend to protect a relationship for a long time.", "Showing respect through the same thoughtful attitude every day, not only through grand gestures."],
  "lee-yujun": ["A fresh, casual presence for fashion, education, and approachable lifestyle content.", "He enjoys the process of learning and builds connection through honest reactions.", "A basketball court near school. Moving with other people clears my mind.", "A small speaker I assembled myself. It was imperfect, but I remember finishing it.", "Looking young does not mean I am careless. I check every responsibility more than once.", "A relationship where neither person needs to perform in order to laugh comfortably."],
  "jung-haram": ["A modern, versatile image that adapts across fashion, beauty, and commercial campaigns.", "She understands the purpose of a scene quickly while preserving her own visual balance.", "An empty rental studio with beautiful light. I like imagining what the space could become.", "A paint-marked sketchbook filled with ideas before they learned how to be finished.", "Versatility can be mistaken for being ordinary. Keeping the essential idea clear in any setting is my identity.", "Blending different tastes until they become a new language shared by two people."],
  "jung-hoyoung": ["A mature, dependable presence for business, finance, and healthcare communication.", "Experience gives him a steady point of view, even when the situation is complex.", "An early morning study, reading the news and preparing quietly before the day begins.", "My father's wristwatch. I like to think I inherited his respect for time with it.", "A serious first impression hides a dry sense of humor that appears around people I trust.", "Being able to speak with complete honesty when a difficult decision has to be made."],
  "timber": ["A rugged, nature-driven character for outdoor, sports, and travel storytelling.", "He works directly with his environment and creates a path through action rather than explanation.", "A forest after rain or a garage with a workbench. Earth and timber feel more familiar than polished rooms.", "A well-used multitool. Every scratch remembers a place and a problem it helped solve.", "A rough exterior does not mean carelessness. I handle nature and useful objects with great respect.", "Staying beside someone through a long journey and letting actions carry the meaning."],
  "han-siwoo": ["A gentle, intelligent image for education, technology, and everyday service brands.", "He follows calm curiosity and translates difficult ideas into language people can trust.", "A library open late, choosing one book at a time from a field I know nothing about.", "My first major textbook, filled with notes in the margins. It records everything I once did not know.", "Silence can look like disinterest. I usually remember and consider far more than I say in the moment.", "Never treating each other's questions as a burden and looking for answers together."],
  "han-yujin": ["A lively contemporary presence that adds energy to beauty, fashion, and social campaigns.", "She absorbs new culture quickly and expresses it through a distinctly current sensibility.", "A music-filled pop-up or a crowded street. Watching how people style themselves is endlessly interesting.", "A fluorescent wristband from a concert. One glance brings back the sound and movement of that night.", "Confidence does not erase nerves. Before something important, I often smile even more brightly.", "Listening to a favorite song together and laughing at exactly the same moment."],
  "heo-chanhee": ["A sharp, sophisticated image for menswear, grooming, and premium brand campaigns.", "He brings precise taste and restrained tension to even the most familiar scene.", "A barbershop after the final appointment or a quiet tailor's studio. Precise handwork holds my attention.", "The cuff links from my first perfectly fitted suit. They taught me how a small detail changes an entire attitude.", "Perfectionism is not a need to control everything. I simply do not want an important detail to disappear.", "Understanding and respecting even the most exacting standards in each other."]
};

modelProfiles.forEach(model => {
  const copy = englishProfileCopy[model.slug];
  [model.direction, model.character, model.place, model.object, model.misunderstood, model.romance] = copy;
});

const catalog = document.querySelector("[data-model-catalog]");
if (catalog) {
  catalog.innerHTML = modelProfiles.map((m,i)=>`
    <a class="model-card" href="models/${m.slug}.html" aria-label="View ${m.name} profile">
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
        <span>${model.archetype}</span>
      </div>
      <dl>
        <div><dt>MOOD</dt><dd>${model.mood}</dd></div>
        <div><dt>BEST FOR</dt><dd>${model.use}</dd></div>
        <div><dt>PRODUCTION</dt><dd>CUSTOM STYLING AVAILABLE</dd></div>
      </dl>
    </section>
    <section class="model-profile-gallery model-profile-gallery-top" aria-label="${model.name} opening gallery">
      ${[1,2,3].map((n,i)=>`<figure><img src="${assetRoot}${model.base}/${n}.webp" alt="${model.name} profile ${n}" ${i?"loading=\"lazy\"":""}></figure>`).join("")}
    </section>
    <section class="model-persona">
      <p class="model-section-label">PROFILE</p>
      <div class="model-persona-grid">
        <div><small>NAME</small><strong>${model.name}</strong></div>
        <div><small>CHARACTER</small><strong>${model.archetype}</strong></div>
        <div><small>MOOD</small><strong>${model.mood}</strong></div>
        <div><small>BEST FOR</small><strong>${model.use}</strong></div>
        <div><small>EXPRESSION</small><strong>${model.mood.split(" · ")[0]} AND CONTROLLED</strong></div>
        <div><small>STYLING</small><strong>CUSTOM DIRECTION</strong></div>
        <div><small>LIGHT</small><strong>SOFT CINEMATIC LIGHT</strong></div>
        <div><small>FAVORITE COLOR</small><strong>${["IVORY","DEEP GREEN","ELECTRIC BLUE","PEARL","NAVY","BURGUNDY","SUNNY YELLOW","GRAPHITE","ORANGE","MILK WHITE","INK BLACK","WARM BEIGE","LIME","CHAMPAGNE","SKY BLUE","SILVER","DARK BROWN","FOREST GREEN","BOOK BLUE","VIVID PINK","MATTE BLACK"][Number(model.no)-1]}</strong></div>
        <div class="persona-wide"><small>KEYWORD</small><strong>${model.character}</strong></div>
        <div><small>PRODUCTION</small><strong>CUSTOM STYLING AVAILABLE</strong></div>
        <div><small>CAMPAIGN TONE</small><strong>${model.direction}</strong></div>
      </div>
    </section>
    <section class="model-profile-gallery model-profile-gallery-bottom" aria-label="${model.name} secondary gallery">
      ${[4,5].map(n=>`<figure><img src="${assetRoot}${model.base}/${n}.webp" alt="${model.name} profile ${n}" loading="lazy"></figure>`).join("")}
      <figure class="gallery-monochrome"><img src="${assetRoot}${model.base}/1.webp" alt="${model.name} monochrome profile" loading="lazy"></figure>
    </section>
    <section class="model-character-interview">
      <p class="model-section-label">CHARACTER INTERVIEW</p>
      <ol>
        <li><span>01</span><div><h2>How would you describe your presence on camera?</h2><p>${model.direction}</p></div></li>
        <li><span>02</span><div><h2>Where do you feel most at ease?</h2><p>${model.place}</p></div></li>
        <li><span>03</span><div><h2>What is one object you would never part with?</h2><p>${model.object}</p></div></li>
        <li><span>04</span><div><h2>What do people often misunderstand about you?</h2><p>${model.misunderstood}</p></div></li>
        <li><span>05</span><div><h2>What matters most when you step in front of the camera?</h2><p>I begin by understanding the emotional temperature of the brand. A convincing image comes from responding to the story, not repeating a fixed expression.</p></div></li>
        <li><span>06</span><div><h2>What does a meaningful connection look like to you?</h2><p>${model.romance}</p></div></li>
      </ol>
    </section>
    <section class="model-profile-note">
      <p>${model.name} · AI MODEL ${model.no}</p>
      <h2>EXPLORE THIS MODEL<br>FOR YOUR NEXT PROJECT.</h2>
    </section>`;
}
