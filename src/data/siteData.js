export const NAV_ITEMS = [
  { id: 'portfolio', label: '參與專案' },
  { id: 'personal', label: '個人專案' },
  { id: 'about', label: '關於我' },
  { id: 'resume', label: '經歷' },
  { id: 'contact', label: '聯繫' },
];

export const CONTACT_INFO = {
  email: 'c.l@hsieh.email',
  displayEmail: 'C.L@Hsieh.EMail',
  linkedinUrl: 'https://www.linkedin.com/in/clhsieh/',
};

export const PROJECT_HIGHLIGHTS = [
  '整合永續生態指標，落實環境保育理念',
  '低維護成本植栽策略，確保長期景觀品質',
  '在地材料與原生樹種優先運用',
];

export const DIGITAL_ADVANTAGES = [
  '數據驅動決策，取代傳統經驗法則',
  '高度自動化，減少重複性人工作業',
  '參數化模組設計，輕鬆適應法規變動',
];

export const SKILLS = [
  'AutoCAD',
  'SketchUp',
  'Lumion',
  'Adobe CC',
  '專案控管',
  '植栽設計',
  '施工圖說',
  '永續規劃',
];

export const PROJECTS = [
  {
    id: 1,
    title: '淡水海關碼頭改造 | 歷史地景再造',
    category: '歷史建築 / 水岸景觀',
    year: '2018',
    coverImage: '/images/portfolio/portfolio-01-cover.jpg',
    heroImages: [
      '/images/portfolio/portfolio-01-hero-01.jpg',
      '/images/portfolio/portfolio-01-hero-02.jpg',
      '/images/portfolio/portfolio-01-hero-03.jpg',
    ],
    description:
      '結合百年古蹟修復與淡水河岸景觀縫合，打造具備歷史深度的水岸休憩空間。',
    client: '新北市政府城鄉發展局',
    area: '約 1.5 公頃',
    details: [
      '本案位於具備豐富歷史脈絡的淡水河畔，設計核心在於「隱形與縫合」。我們透過極簡的景觀語彙，退讓出古蹟本體的視覺主導權，並將原本封閉的港區軍用圍牆打開，重新縫合城市街道與淡水河岸的空間動線。',
      '在鋪面與材質的選擇上，團隊嚴格考究歷史文獻，運用具備歲月質感的青斗石與耐候鋼，呼應百年紅磚洋樓與洋行倉庫的歷史氛圍。同時，導入低眩光的間接照明系統，不僅保護了古蹟本體，更營造出夜間獨特的歷史光廊。',
      '水岸邊緣的處理打破了傳統的生硬護岸，改以階梯式親水平台與親水植栽帶交錯配置。這不僅提升了面對淡水河潮汐變化的環境韌性，更為遊客提供了一個能靜賞淡水夕照、與歷史對話的沉浸式水岸地景。',
    ],
  },
  {
    id: 2,
    title: '新北投地熱谷改造活化 | 溫泉地景復育',
    category: '觀光遊憩 / 地質保育',
    year: '2022',
    coverImage: '/images/portfolio/portfolio-02-cover.webp',
    heroImages: [
      '/images/portfolio/portfolio-02-hero-01.webp',
      '/images/portfolio/portfolio-02-hero-02.jpg',
      '/images/portfolio/portfolio-02-hero-03.jpeg',
    ],
    description:
      '克服強酸微氣候的嚴苛環境，建置無障礙環湖生態步道，重塑百年溫泉鄉自然療癒氛圍。',
    client: '台北市政府自來水事業處',
    area: '約 3.5 公頃',
    details: [
      '本專案的核心挑戰在於「極端微氣候下的地景保育與工程實踐」。地熱谷常年處於高溫且富含強酸性硫磺氣體（pH 值約 1.2 至 1.6）的環境，團隊在材質選用上徹底捨棄了傳統易腐蝕的金屬構件與任何天然木材。為確保步道的絕對安全性與長期耐久度，環湖系統全面導入高達 5000 psi 等級的耐候高強度混凝土（PC），內部結合點銲鋼絲網大幅提升結構抗拉韌性，並輔以客製化模具進行現場澆築出模。',
      '為了打破過去遊客單向進出、必須原路折返的動線瓶頸，我們透過精密的 3D 地形測繪，巧妙利用既有山勢的等高線，打造了全線平緩、符合無障礙規範的環湖生態步道。設計團隊更利用地熱谷天然的高溫地氣與獨特的青磺泉微量鐳元素，於步道節點精心規劃了戶外天然青磺岩盤浴與淨手礦泉湯。',
      '在植栽與生態復育方面，團隊針對溫泉區特殊的酸性與地熱土壤，嚴選了北投石韋、大葉楠等在地原生且耐硫磺的特有植物群落。這項改造不僅成功重塑了北投地熱谷氤氳裊裊的仙境氛圍，更在完全不干擾自然溫泉露頭的前提下，建立了一套具備高度環境韌性的永續觀光新標準。',
    ],
  },
  {
    id: 3,
    title: '南港機廠社會住宅 | 循環經濟示範基地',
    category: '社會住宅 / 永續景觀',
    year: '2024',
    coverImage: '/images/portfolio/portfolio-03-cover.jpg',
    heroImages: [
      '/images/portfolio/portfolio-03-hero-01.jpg',
      '/images/portfolio/portfolio-03-hero-02.jpg',
      '/images/portfolio/portfolio-03-hero-03.jpg',
    ],
    description: '全台首座結合循環經濟與立體綠化的大型社會住宅景觀設計。',
    client: '台北市政府都市發展局',
    area: '約 7.8 公頃',
    details: [
      '本專案的核心挑戰在於「巨型人工地盤的綠化與微氣候形塑」。本案採捷運機廠共構設計，於營運中的南港機廠上方加蓋社會住宅。設計團隊突破傳統平面開發框架，將機廠屋頂轉化為大範圍的空中立體公園，透過精密的載重計算與覆土深度控制，在人工基盤上成功植入豐富的喬灌木層次。',
      '設計深度扣合循環經濟的核心理念。面對五樓大平台嚴苛的日照與風勢微氣候，景觀鋪面與附屬設施大量採用輕量化的再生碎石與環保建材，兼顧結構安全與減碳目標。同時，全面導入智慧型雨水回收系統與台灣原生耐旱、抗風植栽，降低了後續社區維護的碳足跡。',
      '這座五樓的空中景觀廣場不僅是千餘戶居民的社區生活與休憩核心，更扮演著都市立體綠肺的關鍵角色。結合隱藏於人工地盤下方的微型滯洪設施與高透水鋪面，成功打造出立體化的海綿城市。',
    ],
  },
  {
    id: 4,
    title: 'One Park Taipei 信義聯勤 | 頂級豪宅景觀',
    category: '超奢華住宅 / 極致工藝',
    year: '2018',
    coverImage: '/images/portfolio/portfolio-04-cover.jpg',
    heroImages: [
      '/images/portfolio/portfolio-04-hero-01.jpg',
      '/images/portfolio/portfolio-04-hero-02.JPG',
      '/images/portfolio/portfolio-04-hero-03.jpg',
    ],
    description:
      '承接國際建築大師理念，無縫延伸大安森林公園綠意，打造絕對私密且尊榮的頂級居住體驗。',
    client: '元利建設',
    area: '約 2,490 坪',
    details: [
      '本案為全台最具指標性的超豪宅地標。景觀設計最大的挑戰在於如何將 Richard Rogers 充滿現代前衛感的建築語彙，與大安森林公園的自然綠意進行無縫借景與縫合。我們透過多層次且具備高度隱密性的喬木林帶配置，創造出大隱於市的莊園級私密領地。',
      '在施工細部與美學定調上，展現了景觀工程的極致工藝。除了大量採用精密切割的頂級進口石材鋪設迎賓水景與步道外，後期設計更具前瞻性地揉合了日式禪意庭園的靜謐精神，讓現代建築基座沉澱出東方哲學中內斂且深邃的空間底蘊。',
      '全區植栽經歷了數次嚴格選樹過程，全面採用頂級珍稀的高檔植栽作為視覺定錨。特別是在大門入口兩側，團隊精心挑選並對稱列植了樹型優美的百年真柏與頂級羅漢松，重新定義了台灣頂級住宅的景觀標竿。',
    ],
  },
  {
    id: 5,
    title: '忠泰老佛爺 | 跨界精品豪宅',
    category: '頂級住宅 / 時尚跨界',
    year: '2023',
    coverImage: '/images/portfolio/portfolio-05-cover.jpg',
    heroImages: [
      '/images/portfolio/portfolio-05-hero-01.jpg',
      '/images/portfolio/portfolio-05-hero-02.jpg',
      '/images/portfolio/portfolio-05-hero-03.webp',
    ],
    description:
      '攜手 Karl Lagerfeld 團隊，將巴黎高級訂製服美學轉譯為景觀語彙的頂尖豪宅大作。',
    client: '忠泰建設',
    area: '約 1,930 坪',
    details: [
      '本案為 Karl Lagerfeld 生前全球唯一親自操刀設計的精品住宅。景觀設計的重大使命在於精準轉譯高訂美學。我們深研品牌經典的黑、白、金元素，將其標誌性的菱格紋轉化為景觀語彙，讓奢華品牌的象徵無縫延伸至整座社區的戶外場域。',
      '在景觀美學的定調上，本案是一場法式優雅與東方禪意的跨界對話。景觀基盤揉合法式庭園嚴謹的對稱軸線與細膩的日式感知，並透過多層次常綠喬木列植，烘托出英國地景藝術家 Wolfgang Buttress 的互動光影藝術裝置《Lumen》。',
      '針對社區的公眾景觀樞紐，設計團隊將連接兩棟建築主體的動線精煉為一座半開放風雨花廊，並結合頂樓 Lounge Bar 戶外星空酒吧規劃，為層峰住戶創造兼具自然借景與都會夜景的立體社交場域。',
    ],
  },
  {
    id: 6,
    title: '永和勝開大地 | 指標性都市更新',
    category: '都市更新 / 大型社區',
    year: '2020',
    coverImage: '/images/portfolio/portfolio-06-cover.JPG',
    heroImages: [
      '/images/portfolio/portfolio-06-hero-01.JPG',
      '/images/portfolio/portfolio-06-hero-02.JPG',
      '/images/portfolio/portfolio-06-hero-03.JPG',
    ],
    description:
      '於高密度都會區中重塑大型全齡化社區，兼顧防災滯洪與鄰里友善的開放綠地空間。',
    client: '勝治機構 / 大陸建設',
    area: '約 3,100 坪',
    details: [
      '本案位於人口密度極高的新北市永和區，是極具指標性的大型公辦都更案。景觀設計肩負著縫合新舊街區與釋放都市呼吸空間的社會使命。我們沿著街角大量退縮，創造出連續性的帶狀開放綠地，將老舊街廓轉化為與鄰里共享的友善林蔭步道。',
      '針對社區內部近七百戶的龐大住戶需求，設計團隊在開放空間的規劃上導入全齡化通用設計。戶外廣場的景觀鋪面採用了精密切割的花卉圖騰拼花設計，全區街道家具與休憩座椅則以高強度耐候混凝土搭配預鑄出模灌製工法，打造出一體成型的立體花型家具。',
      '在永續與防災指標上，由於基地鄰近河川且周邊排水系統老舊，我們在景觀基盤下方建置了大規模的雨水滯洪與滲透系統，配合高保水率的綠地設計，不僅大幅降低了周邊道路的淹水風險，也展現大型都更案在提升城市氣候韌性上的關鍵價值。',
    ],
  },
  {
    id: 7,
    title: '烏石港 BOT 渡假園區 | 凱渡廣場與 OA Hotel',
    category: '商業開發 / 濱海渡假村',
    year: '2023',
    coverImage: '/images/portfolio/portfolio-07-cover.jpg',
    heroImages: [
      '/images/portfolio/portfolio-07-hero-01.jpg',
      '/images/portfolio/portfolio-07-hero-02.jpg',
      '/images/portfolio/portfolio-07-hero-03.jpg',
    ],
    description:
      '主導北台灣最大型濱海 BOT 開發案，整合雙品牌飯店的戶外遊憩與抗風鹽生態地景。',
    client: '連大烏石港度假村（BOT 案）',
    area: '約 10 公頃',
    details: [
      '本案為北台灣最具指標性的濱海 BOT 開發案，涵蓋主打全齡渡假的凱渡廣場酒店與鎖定年輕衝浪客的 OA Hotel 兩大旅宿品牌。景觀設計最大的挑戰在於雙品牌空間的整合與區隔，針對 OA Hotel 的礁岩山脈式建築語彙，團隊以粗獷原生樹種與地被交錯，塑造出充滿海岸活力的遊憩場域。',
      '在凱渡廣場一側，景觀工程的複雜度達到了頂峰。我們在廣闊的戶外空間中，精準配置了滿足全齡需求的高強度水上動態遊憩系統，並將隱密性極高的度假小屋巧妙鑲嵌於人造山丘地景之中，於園區視覺軸線端景處打造象徵啟航的帆船教堂。',
      '面對烏石港第一線的強勁東北季風與高鹽害微氣候，團隊大量選用林投、草海桐與海檬果等原生抗風植栽作為防風林帶，並導入高效率的雨水逕流過濾系統與低光害照明設計，確保大型商業開發與周邊海洋生態取得永續平衡。',
    ],
  },
  {
    id: 8,
    title: '菲律賓克拉克水上樂園 | 國際主題渡假村',
    category: '跨國專案 / 商業遊憩',
    year: '2019',
    coverImage: '/images/portfolio/portfolio-08-cover.JPG',
    heroImages: [
      '/images/portfolio/portfolio-08-hero-01.JPG',
      '/images/portfolio/portfolio-08-hero-02.jpg',
      '/images/portfolio/portfolio-08-hero-03.jpg',
    ],
    description:
      '主導跨國大型水上樂園的景觀總體規劃，融合熱帶植栽與高強度遊憩設施的水景空間。',
    client: '菲律賓克拉克國際休閒集團',
    area: '約 12 公頃',
    details: [
      '本專案為跨國大型商業開發案，佔地高達 12 公頃。設計團隊需克服跨國圖說轉換、熱帶季風氣候等多重挑戰，並導入精密的群眾動線模擬系統，有效分流每日高達數萬人次的龐大遊客量，確保遊憩品質與逃生安全性。',
      '在植栽策略上，為因應菲律賓當地的極端旱雨季，我們大量引進抗風耐旱的特有熱帶棕櫚科植物與色彩鮮豔的當地花卉。配合大型水池的微氣候調節效應，成功為廣大且缺乏天然遮蔽的滑水道區與漂雨河，創造出涼爽且充滿南洋風情的綠色樹冠層。',
      '針對高強度的水上遊樂設施，景觀工程高度整合了地下水循環過濾與雨水貯留回收系統。團隊透過巧妙的等高線設計，將龐大的過濾設備室隱藏於人造假山與地景起伏之中，兼顧了樂園的沉浸式視覺體驗與高效率的機電維管需求。',
    ],
  },
  {
    id: 9,
    title: '上海嘉定 慧創新視界 | 國際商辦園區',
    category: '企業園區 / 商業開發',
    year: '2021',
    coverImage: '/images/portfolio/portfolio-09-cover.jpg',
    heroImages: [
      '/images/portfolio/portfolio-09-hero-01.jpg',
      '/images/portfolio/portfolio-09-hero-02.jpg',
      '/images/portfolio/portfolio-09-hero-03.jpg',
    ],
    description:
      '主導上海西郊具指標性的現代服務產業園區，以微型城市概念整合多企業總部共享的生態綠色基盤。',
    client: '上海慧創現代服務園 / 西郊總部基地',
    area: '約 4.2 公頃',
    details: [
      '本案位於上海市嘉定區江橋板塊，屬於多棟企業總部與研發中心落戶的大型商辦園區。景觀設計最大的挑戰，在於如何將龐大的建築群落透過綠色基盤縫合為一座具備高度空間凝聚力的微型城市。我們透過連續性的林蔭主軸與模組化景觀廣場，創造出既能保持品牌獨立性又能促進跨界交流的共享場域。',
      '因應上海地區嚴格的海綿城市排澇指標，團隊在整體園區規劃上全面導入高承載透水地坪、雨水花園與下沉式綠地系統。這套地下逕流管理系統不僅有效解決華東地區梅雨季的積水隱患，也大幅降低了市政管網的排水壓力。',
      '在植栽配置與遊憩機能上，景觀設計導入了療癒系辦公的理念，大量選用適應當地氣候且具備季節變化的樹種，並在各總部大樓間的退縮空間配置戶外階梯會議區與綠茵咖啡座，成功將冷硬的商辦聚落轉化為兼具高效生產力與人文溫度的綠色國際園區。',
    ],
  },
];

export const PERSONAL_PROJECTS = [
  {
    id: 1,
    title: '雙北綠化法規整合計算機',
    category: '開發工具 / 自動化',
    year: '2024',
    coverImage: '/images/personal/personal-01-cover.jpg',
    heroImages: [
      '/images/personal/personal-01-hero-01.jpg',
      '/images/personal/personal-01-hero-02.jpg',
    ],
    projectUrl: 'https://jesushsieh.github.io/taipei-greenery-calc/',
    description:
      '整合台北市與新北市現行法規的網頁端綠化計算工具，具備跨縣市參數切換功能，自動精準試算綠覆率與相關指標的個人專案。',
    area: '網頁前端程式（React / JS）',
    icon: 'calculator',
    details: [
      '這是我在進修期間自主開發的個人專案作業，主要針對台北市與新北市兩地現行且時常更新的景觀綠化相關法規，進行數位化與跨縣市的程式邏輯整合。',
      '由於雙北在法定空地綠化、保水指標與喬灌木計分標準上存在顯著差異，本系統透過直覺的參數化介面，讓設計師只需一鍵切換基地所在行政區，系統底層即會自動對接對應的法規演算法，即時換算出符合當地規範的檢討報表。',
      '此專案不僅大幅解決了景觀從業人員在處理跨縣市案件時，因法規制度不同而導致的繁瑣人工試算與除錯成本，也展現了我將複雜景觀法規轉化為現代化數位自動化工具的跨領域實踐成果。',
    ],
  },
  {
    id: 2,
    title: '台灣原生植栽資料庫 API',
    category: '數據平台 / 生態復育',
    year: '2024',
    coverImage: '/images/personal/personal-02-cover.jpg',
    heroImages: [
      '/images/personal/personal-02-hero-01.jpg',
      '/images/personal/personal-02-hero-02.jpg',
    ],
    description: '建立高互動性的植栽檢索系統，提供設計師依據微氣候條件精準選種。',
    client: '開源專案',
    area: '雲端資料庫',
    icon: 'database',
    details: [
      '這是一個專為台灣景觀從業人員打造的開源植栽資料庫，收錄超過 1,000 種本土原生與常見景觀植物的詳細生長特性、日照需求、抗風耐鹽等數據。',
      '系統具備智慧篩選功能，設計師可輸入基地的環境參數，例如土壤酸鹼值、年降雨量與季風風向，系統將自動推薦最適合的植栽配置清單。',
      '本資料庫持續以社群共創的方式擴充，期望能成為推動台灣城鄉生態多樣性的重要數位基礎設施。',
    ],
  },
  {
    id: 3,
    title: 'LANDWEAVER AI 景觀設計工具平台',
    category: 'AI 工具平台 / 景觀分析',
    year: '2026',
    coverImage: '/images/personal/personal-03-cover.jpg',
    heroImages: [
      '/images/personal/personal-03-hero-01.jpg',
      '/images/personal/personal-03-hero-02.jpg',
      '/images/personal/personal-03-hero-03.jpg',
    ],
    description:
      '整合基地分析、景觀概念發想與 AI 圖像生成流程的網頁平台，目標是把前期設計決策集中在同一套工作介面中完成。',
    client: '自研平台原型',
    area: 'Web 應用程式 / AI 工作流',
    icon: 'code',
    details: [
      'LANDWEAVER AI 是一套以景觀設計前期流程為核心的整合型平台構想。首頁架構把工作內容拆成基地分析、概念發展、空間視覺生成與平面配置等模組，讓設計師可以依序推進，不必在多個工具之間來回切換。',
      '從介面畫面可以看出，系統不只處理靜態圖像，而是嘗試把 3D 地形、衛星底圖、日照與微氣候分析，以及輸出報告整合在同一個工作流中。這樣的設計更貼近景觀專案從基地判讀到方案發展的真實需求。',
      '專案的核心價值不只是生成結果，而是建立一套適合景觀設計師使用的 AI 工作介面。未來若持續發展，可延伸為基地資料整合、概念提案輔助與初步視覺溝通的數位平台。',
    ],
  },
];

export const EXPERIENCE = [
  {
    role: '景觀設計師 / 景觀設計經理',
    company: '六國景觀設計有限公司',
    period: '2015 - 2026',
    desc: '參與大型都市規劃與複合式景觀開發案，與跨國設計團隊協作推進設計整合，完成多項生態綠地相關公共工程。',
  },
  {
    role: '景觀設計師',
    company: '華谷工程顧問有限公司',
    period: '2014 - 2015',
    desc: '負責景觀都市審議資料整合、預算編列、工期安排與現場調度，統籌專案從設計到施工階段的執行流程。',
  },
  {
    role: '景觀設計師',
    company: '楊天柱建築師事務所',
    period: '2013 - 2014',
    desc: '參與多項公共工程競圖，負責植栽設計、細部圖說繪製、工程估算，以及綠建築與智慧建築相關評估作業。',
  },
  {
    role: '室內設計師',
    company: '達奇室內設計裝修有限公司',
    period: '2010 - 2013',
    desc: '主導知名品牌商旗艦店與百貨櫃位設計，並參與營造商、建材商辦公空間、蘇州飯店客房、豪宅住宅及連鎖零售餐飲空間之規劃與品牌定位。',
  },
];
