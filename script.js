// === 語系與模式狀態指針 ===
let currentLang = "zh";
let currentActiveMode = "curated";

// === 畫面上顯示的豐富捷運站點名單 ===
const allUIStations = [
    "中正紀念堂", "東門", "台北101/世貿", "象山", "市政府", "松山", 
    "龍山寺", "西門", "北門", "中山", "雙連", "台北車站", 
    "忠孝新生", "南京復興", "公館", "淡水", "劍潭", "士林"
];

// === 四國語言資料庫一 (信義時尚線) ===
const routeOneDatabase = {
    zh: [
        { station: "中正紀念堂", title: "中正紀念堂", cost: "免費參觀", duration: 1.5, desc: "推薦活動：參觀藍白巍峨主殿，觀看整點舉行、精準震撼的三軍儀隊交接儀式。" },
        { station: "東門", title: "永康街商圈", cost: "約 350-500 元", duration: 2.0, desc: "推薦美食：午餐吃皮薄爆汁的鼎泰豐小籠包，飯後再來一碗排隊芒果雪花冰。" },
        { station: "台北101/世貿", title: "台北101觀景台 / 象山步道", cost: "0-600 元", duration: 2.5, desc: "推薦行程：搭超高速電梯直達101雲端俯瞰台北，或登象山步道拍攝101全景。" },
        { station: "市政府", title: "信義商圈 / 松菸文創園區", cost: "免費散步", duration: 1.5, desc: "推薦活動：漫步百貨空中連廊商圈，或拐進松菸老菸廠廠房享受設計文青氛圍。" },
        { station: "松山", title: "饒河街觀光夜市", cost: "約 150-300 元", duration: 2.0, desc: "推薦美食：必吃剛出爐炭香四溢的福州世祖胡椒餅、藥燉排骨與爆漿玉子燒。" }
    ],
    en: [
        { station: "Chiang Kai-shek Memorial Hall", title: "CKS Memorial Hall", cost: "Free", duration: 1.5, desc: "Recommended: Tour the grand blue-and-white monument and witness the breathtaking military Changing of the Guard ceremony on the hour." },
        { station: "Dongmen", title: "Yongkang Street", cost: "350-500 TWD", duration: 2.0, desc: "Foodie Picks: Have legendary juicy Din Tai Fung soup dumplings for lunch, followed by a huge bowl of famous mango shaved ice." },
        { station: "Taipei 101/World Trade Center", title: "Taipei 101 Observatory / Xiangshan", cost: "0-600 TWD", duration: 2.5, desc: "Activities: Ride the ultra-fast elevator to the 89th floor for a panoramic city view, or hike Xiangshan Trail for the iconic 101 skyline photo." },
        { station: "Taipei City Hall", title: "Xinyi Shopping District / Songshan Creative Park", cost: "Free", duration: 1.5, desc: "Activities: Stroll through the modern skywalk shopping malls or discover design vibes inside the historic Songshan tobacco factory." },
        { station: "Songshan", title: "Raohe Street Night Market", cost: "150-300 TWD", duration: 2.0, desc: "Foodie Picks: Must-try freshly baked pork pepper buns, herbal pork rib soup, and delicious street snacks." }
    ],
    ja: [
        { station: "中正紀念堂", title: "中正紀念堂", cost: "入場無料", duration: 1.5, desc: "おすすめ：青と白の壮大な本堂を参観し、毎正時に行われる大迫力の衛兵交代式を見学します。" },
        { station: "東門", title: "永康街エリア", cost: "約 350-500 元", duration: 2.0, desc: "おすすめグルメ：ランチは鼎泰豊の肉汁たっぷり小籠包を堪能し、食後は大人気のマンゴーかき氷を別腹で。" },
        { station: "台北101/世貿", title: "台北101展望台 / 象山遊歩道", cost: "0-600 元", duration: 2.5, desc: "おすすめ：超高速エレベーターで89階へ登り台北を一望するか、象山に登って101の絶景を撮影します。" },
        { station: "市政府", title: "信義商街 / 松山文創園区", cost: "散策無料", duration: 1.5, desc: "おすすめ：百貨店が立ち並ぶ空中回廊を歩くか、レトロなタバコ工場跡の松山文創園区でアートな雰囲気を楽しみます。" },
        { station: "松山", title: "饒河街観光夜市", cost: "約 150-300 元", duration: 2.0, desc: "おすすめグルメ：焼き立て熱々の福州世祖胡椒餅、体に優しい薬膳スペアリブスープは必食です。" }
    ],
    ko: [
        { station: "중정기념당", title: "중정기념당", cost: "무료 입장", duration: 1.5, desc: "추천 활동: 웅장한 청백색 본당을 관람하고, 매 정시마다 진행되는 절도 있고 정교한 근위병 교대식을 직관해보세요." },
        { station: "동문", title: "융캉제 상권", cost: "약 350-500 TWD", duration: 2.0, desc: "추천 미식: 점심으로 육즙이 가득한 딘타이펑 소롱포를 맛보고, 디저트로 줄 서서 먹는 망고 눈꽃빙수를 즐겨보세요." },
        { station: "타이베이101/세贸", title: "타이베이 101 전망대 / 샹산 보도", cost: "0-600 TWD", duration: 2.5, desc: "추천 일정: 초고속 엘리베이터를 타고 89층 전망대에 올라 도심을 한눈에 담거나, 샹산에 올라 101 야경을 촬영해보세요." },
        { station: "시정부", title: "신이 쇼핑지구 / 송산문창공원", cost: "무료 산책", duration: 1.5, desc: "추천 활동: 백화점 공중 화랑을 산책하며 쇼핑을 즐기거나, 옛 담배공장을 개조한 송산문창공원에서 예술적 감성을 느껴보세요." },
        { station: "송산", title: "라오허제 야시장", cost: "약 150-300 TWD", duration: 2.0, desc: "추천 미식: 갓 구워져 나와 육즙과 숯향이 가득한 화덕 만두(후추병)와 한방 갈비탕은 야시장의 필수 코스입니다." }
    ]
};

// === 四國語言資料庫二 (老城文化線) ===
const routeTwoDatabase = {
    zh: [
        { station: "龍山寺", title: "萬華龍山寺", cost: "免費參觀", duration: 1.5, desc: "推薦活動：體驗百年老香火巡禮，欣賞全台精美無雙的銅鑄龍柱與木雕藻井，感受古老萬華的信仰厚度。" },
        { station: "龍山寺", title: "剝皮寮歷史街區", cost: "免費參觀", duration: 1.0, desc: "推薦活動：漫步清代紅磚拱廊老街，走入懷舊的台北歷史電影場景。" },
        { station: "西門", title: "西門町徒步區", cost: "約 100 元", duration: 1.5, desc: "推薦行程：快閃年輕潮流聖地，拍拍紅樓古蹟，大口吃一碗道地的阿宗麵線。" },
        { station: "中山", title: "迪化街 / 大稻埕老街", cost: "免費散步", duration: 2.0, desc: "推薦活動：散步充滿南北貨藥香的歷史街屋，尋訪老屋天井內翻新的文創小店。" },
        { station: "中山", title: "大稻埕碼頭夕風貨櫃市集", cost: "約 150 元", duration: 1.5, desc: "推薦行程：坐在河岸第一排凝視夕陽將河面染金，在貨櫃市集點杯飲料吹晚風。" },
        { station: "雙連", title: "寧夏夜市", cost: "約 200 元", duration: 1.5, desc: "推薦美食：老饕最愛夜市。必吃圓環邊蚵仔煎、香酥芋丸與傳統瓜仔肉湯收尾。" }
    ],
    en: [
        { station: "Longshan Temple", title: "Mangka Longshan Temple", cost: "Free", duration: 1.5, desc: "Step into Taipei's oldest and most vibrant temple, admire the exquisite copper dragon pillars, and feel the deep religious roots of old Wanhua." },
        { station: "Longshan Temple", title: "Bopiliao Historical Block", cost: "Free", duration: 1.0, desc: "Walk along the beautifully preserved Qing Dynasty red-brick arcades and alleys, making you feel like stepping onto a vintage movie set." },
        { station: "Ximen", title: "Ximending Pedestrian Zone", cost: "100 TWD", duration: 1.5, desc: "Explore the bustling center of youth pop culture, take photos of the historic Ximen Red House, and grab a hot bowl of famous Ay-Chung rice noodles." },
        { station: "Zhongshan", title: "Dihua Street / Dadaocheng", cost: "Free", duration: 2.0, desc: "Immerse yourself in herbal and dried goods scents, visit traditional courtyard buildings now housing trendy indie craft shops and hidden cafes." },
        { station: "Zhongshan", title: "Dadaocheng Wharf Market", cost: "150 TWD", duration: 1.5, desc: "Sit right by the river to watch a breathtaking golden sunset over Tamsui River. Enjoy a refreshing drink at the lively container food market." },
        { station: "Shuanglian", title: "Ningxia Night Market", cost: "200 TWD", duration: 1.5, desc: "A true foodie favorite. Wrap up your day with authentic oyster omelets, crispy taro balls, and traditional pork savory soup." }
    ],
    ja: [
        { station: "龍山寺", title: "艋舺龍山寺", cost: "参拝無料", duration: 1.5, desc: "台北で最も歴史ある名刹へ。台湾最高峰의美しい彫刻や細工を鑑賞し、地元の人々の深い信仰の熱気を感じます。" },
        { station: "龍山寺", title: "剥皮寮歴史地区", cost: "入場無料", duration: 1.0, desc: "清代の面影をそのまま残す貴重な歴史ストリート。赤レンガの街並みは、まるで台湾のレトロ映画の世界に迷い込んだよう。" },
        { station: "西門", title: "西門町エリア", cost: "約 100 元", duration: 1.5, desc: "若者カルチャーの発信地。レトロな西門紅楼をバックに写真を撮り、有名な「阿宗麺線」をハフハフしながら立ち食い体験。" },
        { station: "中山", title: "迪化街・大稲埕", cost: "散策無料", duration: 2.0, desc: "漢方薬や乾物の香りが漂う歴史ある問屋街。古い街屋をリノベーションしたお洒落な雑貨店やリノベカフェが点在します。" },
        { station: "中山", title: "大稲埕埠頭コンテナ市集", cost: "約 150 元", duration: 1.5, desc: "リバーサイドの特等席で、淡水河を黄金色に染める絶景の夕日を鑑賞。川風を感じながらコンテナ屋台でお酒やドリンクを。" },
        { station: "双連", title: "寧夏夜市", cost: "約 200 元", duration: 1.5, desc: "地元グルメが凝縮された大人気夜市！名物の特製牡蠣オムレツや、サクサクのタロ芋団子で大満足の一日を締めくくります。" }
    ],
    ko: [
        { station: "룽산사", title: "맹갑 룽산사", cost: "무료 참배", duration: 1.5, desc: "타이베이에서 가장 오래되고 영험한 사찰. 화려한 청동 용기둥과 정교한 목조 조각을 감상하며 대만 전통 신앙을 체험해보세요." },
        { station: "룽산사", title: "보피랴오 역사거리", cost: "무료 관람", duration: 1.0, desc: "청나라 시대의 옛 거리가 완벽하게 보존된 역사 지구. 붉은 벽돌벽과 아치형 회랑을 걸으며 시간 여행을 떠나보세요." },
        { station: "시먼", title: "시먼딩 보행자거리", cost: "약 100 TWD", duration: 1.5, desc: "타이베이 젊은이들의 활기찬 트렌드 성지. 대만 최초의 극장인 시먼홍러우古蹟를 구경하고 아종면선 곱창국수를 맛보세요." },
        { station: "중산", title: "디화제 / 대도정", cost: "무료 산책", duration: 2.0, desc: "은은한 한약재와 건어물 향이 어우러진 유서 깊은 거리. 오래된 건물 속 숨겨진 아기자기한 소품숍과 안방 카페를 탐방해보세요." },
        { station: "중산", title: "대도정 부두 마켓", cost: "약 150 TWD", duration: 1.5, desc: "강변 일렬 좌석에 앉아 단수이강을 황금빛으로 물들이는 황홀한 낙조를 감상하고, 컨테이너 마켓에서 음료를 즐겨보세요." },
        { station: "수앙롄", title: "닝샤 야시장", cost: "약 200 TWD", duration: 1.5, desc: "타이베이 현지인들이 가장 사랑하는 야시장. 바삭하게 구운 굴전과 갓 튀긴 타로 감자튀김으로 멋진 하루를 마무리하세요." }
    ]
};

// === UI 字典 ===
const uiTranslations = {
    zh: {
        main_title: "日常漫遊", intro_text: "TAIPEI METRO TRAVEL PROTOCOL<br>專為外國自由行旅客打造的捷運策展式行程規劃",
        start_btn: "🚀 開始我的台北一日策展", start_desc: "依據旅行風格，一鍵生成無縫銜接的智慧時間軸",
        page_title: "旅行風格探索", back: "返回", step_1: "🛠️ 第一步：選擇規劃模式",
        mode_curated: "模式一：經典策展主題", mode_custom: "模式二：自選站點自由行",
        select_theme_label: "🎯 請選擇推薦主題路線（Demo 首選）", select_stations_label: "📍 請勾選您今天想去的捷運站點（自由行 DIY 模式）",
        select_time_label: "⏱️ 設定出發時間流（固定格式，免手動打字）", depart_time: "預計出發：",
        generate_btn: "一鍵生成智慧漫遊行程", modify_btn: "條件修改", result_title: "台北漫遊時空指南",
        transit_header: "實際交通耗時推算：", cost_prefix: "預估花費：", map_nav: "開啟地圖導航 →",
        theme_1: "【經典必訪】時尚地標與必吃美食一日遊 (中正/101/饒河)",
        theme_2: "【老派懷舊】萬華老城風情與絕美落日漫遊 (龍山寺/大稻埕/寧夏)",
        fake_1: "【文青散策】獨立選品與赤峰街巷弄咖啡時光 (當代美學線)",
        fake_2: "【自然秘境】北投溫泉與陽明山花卉療癒日常 (近郊慢活線)",
        fake_3: "【親子同樂】市立動物園與貓空茶香高空體驗 (家族漫遊線)",
        transit_r1_0: "搭乘 <strong>淡水信義線（紅線）</strong> 直達東門站，車程約 6 分鐘。",
        transit_r1_1: "繼續搭乘 <strong>淡水信義線（紅線）</strong> 直達台北101/世貿站，車程約 9 分鐘。",
        transit_r1_2: "順著信義徒步區空中連廊 直接步行 抵達市政府商圈，路程約 8 分鐘。",
        transit_r1_3: "由市政府站搭乘 <strong>板南線</strong> 至忠孝復興站，轉乘 <strong>松山新店線</strong> 至松山站，總車程約 20 分鐘。",
        transit_r2_0: "往大理街方向沿老街廓 直接步行，路程約 4 分鐘。",
        transit_r2_1: "步行回捷運站，搭乘 <strong>板南線（藍線）</strong> 僅 1 站直達西門站，車程約 8 分鐘。",
        transit_r2_2: "從西門站搭乘 <strong>松山新店線（綠線）</strong> 北上直達北門站，出站後步行進入迪化街，總耗時約 12 分鐘。",
        transit_r2_3: "從迪化街老街往西邊河岸方向 直接步行 即可無縫抵達碼頭，路程約 8 分鐘。",
        transit_r2_4: "黃昏後，沿民生西路往東邊方向 直接步行 即可抵達寧夏夜市，路程約 12 分鐘。"
    },
    en: {
        main_title: "Taipei Eco Roam", intro_text: "TAIPEI METRO TRAVEL PROTOCOL<br>Curated smart itinerary builder customized for global travelers.",
        start_btn: "🚀 Start My Taipei Curation", start_desc: "Pick your travel style and generate a seamless timetable layout instantly.",
        page_title: "Explore Travel Style", back: "Back", step_1: "🛠️ Step 1: Select Planning Mode",
        mode_curated: "Mode 1: Curated Theme Packs", mode_custom: "Mode 2: Station Select DIY",
        select_theme_label: "🎯 Choose a Recommended Theme Route (Best for Demo)", select_stations_label: "📍 Check Metro Stations You Wish to Visit (DIY Mode)",
        select_time_label: "⏱️ Set Departure Time (Fixed Pickers, No Manual Typing)", depart_time: "Departure:",
        generate_btn: "Generate Time-Aware Guide", modify_btn: "Edit Setting", result_title: "Taipei Spatial-Temporal Guide",
        transit_header: "Google Maps Travel Duration Analysis:", cost_prefix: "Est. Cost: ", map_nav: "Open Map Navigation →",
        theme_1: "[Must-Visit] Fashion Landmarks & Famous Foods (CKS Hall / 101 / Raohe)",
        theme_2: "[Retro Heritage] Old Town Culture & Riverside Sunset (Longshan / Dadaocheng)",
        fake_1: "[Trendy Café] Indie Selection & Vintage Alleyways Walk (Modern Aesthetic Line)",
        fake_2: "[Nature Retreat] Beitou Hot Springs & Yangmingshan Flora Tour (Suburban Calm Line)",
        fake_3: "[Family Fun] Taipei Zoo & Maokong Gondola High-Tea Experience (Family Bonding Line)",
        transit_r1_0: "Take <strong>Tamsui-Xinyi Line (Red)</strong> straight to Dongmen. Travel time approx. 6 mins.",
        transit_r1_1: "Stay on <strong>Tamsui-Xinyi Line (Red)</strong> straight to Taipei 101/MRT Station. Approx. 9 mins.",
        transit_r1_2: "Walk through the interconnected Xinyi Skywalk straight to City Hall area. Walk time approx. 8 mins.",
        transit_r1_3: "From City Hall, take <strong>Bannan Line</strong> to Zhongxiao Fuxing, transfer to <strong>Songshan-Xindien Line</strong> to Songshan. Approx. 20 mins.",
        transit_r2_0: "Walk straight toward Dali Street along the vintage block. Walk time approx. 4 mins.",
        transit_r2_1: "Walk back to the station, take <strong>Bannan Line (Blue)</strong> for 1 stop to Ximen. Approx. 8 mins.",
        transit_r2_2: "Take <strong>Songshan-Xindien Line (Green)</strong> north to Beimen Station, then walk to Dihua Street. Total approx. 12 mins.",
        transit_r2_3: "Walk west from Dihua Street toward the riverfront to arrive seamlessly at the pier. Approx. 8 mins.",
        transit_r2_4: "After twilight, head east along Minsheng West Road straight to Ningxia Night Market. Approx. 12 mins."
    },
    ja: {
        main_title: "台北マイペース旅", intro_text: "TAIPEI METRO TRAVEL PROTOCOL<br>外国人自由旅行客向けに最適化されたメトロスマート旅程案内システム",
        start_btn: "🚀 台北のスマート旅程を作成", start_desc: "お好みの旅行スタイルを選んで、シームレスなタイムラインを一瞬で生成。",
        page_title: "旅行スタイルの選択", back: "戻る", step_1: "🛠️ ステップ 1：プランニングモードの選択",
        mode_curated: "モード①：定番おすすめテーマ", mode_custom: "モード②：駅選択自由プラン",
        select_theme_label: "🎯 厳選おすすめルートを選択（Demo 推奨）", select_stations_label: "📍 本日訪問したい駅にチェックを入れてください（DIY モード）",
        select_time_label: "⏱️ 出発時間の設定（ダイヤル選択式、手入力不要）", depart_time: "出発予定：",
        generate_btn: "AI 旅程を自動生成する", modify_btn: "条件を変更", result_title: "台北タイムライン案内帳",
        transit_header: "Google マップ実測移動時間推計：", cost_prefix: "予想費用：", map_nav: "マップでナビを開く →",
        theme_1: "【王道定番】最先端ランドマークと必食グルメ一日旅 (中正/101/饒河)",
        theme_2: "【レトロ巡り】萬華老街風情と絶品リバーサイドの夕日 (龍山寺/大稻埕/寧夏)",
        fake_1: "【文青散策】セレクトショップと赤峰街路地裏カフェ巡り (現代美学線)",
        fake_2: "【自然秘境】北投温泉と陽明山のんびりフラワーヒーリング (近郊癒やし線)",
        fake_3: "【親子同楽】台北市立動物園と猫空お茶香るロープウェイ体験 (家族のんびり線)",
        transit_r1_0: "<strong>淡水信義線（赤線）</strong>に乗り、東門駅へ直行。乗車時間約 6 分。",
        transit_r1_1: "引き続き<strong>淡水信義線（赤線）</strong>で台北101/世貿駅へ。乗車時間約 9 分。",
        transit_r1_2: "信義歩行者天国の空中回廊を通って市政府エリアへ直接徒歩で移動。徒歩約 8 分。",
        transit_r1_3: "市政府駅から<strong>板南線</strong>で忠孝復興駅へ行き、<strong>松山新店線</strong>に乗り換えて松山駅へ。計約 20 分。",
        transit_r2_0: "大理街方面へ歴史ある古い街並みに沿って直接歩きます。徒歩約 4 分。",
        transit_r2_1: "駅に戻り、<strong>板南線（青線）</strong>に乗り1駅で西門駅に到着。約 8 分。",
        transit_r2_2: "西門駅から<strong>松山新店線（緑線）</strong>で北門駅へ行き、下車後迪化街へ歩きます。計約 12 分。",
        transit_r2_3: "迪化街の老舗街から西側の岸辺へ向かって歩くと、すぐに埠頭へ到着します。徒歩約 8 分。",
        transit_r2_4: "夕暮れ後、民生西路を東へまっすぐ歩くと、寧夏夜市に到着します。徒歩約 12 分。"
    },
    ko: {
        main_title: "타이베이 시공간 가이드", intro_text: "TAIPEI METRO TRAVEL PROTOCOL<br>외국인 자유여행객을 위한 맞춤형 지하철 큐레이션 여행 가이드",
        start_btn: "🚀 타이베이 일일 큐레이션 시작", start_desc: "여행 스타일에 따라 환승 동선이 완벽한 스마트 시간축을 생성합니다.",
        page_title: "여행 스타일 탐색", back: "조건 수정", step_1: "🛠️ 첫 번째 단계: 계획 모드 선택",
        mode_curated: "모드 1: 클래식 추천 테마", mode_custom: "모드 2: 지하철역 직접 선택",
        select_theme_label: "🎯 추천 테마 코스를 선택하세요 (Demo 강력 추천)", select_stations_label: "📍 오늘 방문하고 싶은 지하철역을 선택하세요 (DIY 자유 모드)",
        select_time_label: "⏱️ 출발 시간 설정 (키패드 입력 없이 간편한 선택식)", depart_time: "출발 예정:",
        generate_btn: "스마트 시간축 일정 생성", modify_btn: "조건 수정", result_title: "타이베이 시공간 여행 가이드",
        transit_header: "Google 지도 기반 실제 교통 소요 시간 계산:", cost_prefix: "예상 비용: ", map_nav: "구글 지도 내비게이션 켜기 →",
        theme_1: "【필수 코스】 트렌디 랜드마크와 필수 미식 일일 투어 (중정/101/라오허제)",
        theme_2: "【레트로 감성】 만화 노포 감성과 환상적인 노을 유람 (룽산사/대도정/닝샤)",
        fake_1: "【문학 산책】 독립 소품숍과 스청제 골목 카페 투어 (현대 미학선)",
        fake_2: "【자연 비경】 베이터우 온천과 양명산 힐링 플라워 투어 (근교 힐링선)",
        fake_3: "【가족 함께】 시립동물원과 마오콩 차향 스카이웨이 투어 (가족 유람선)",
        transit_r1_0: "<strong>단수이신이선(빨간색)</strong>을 타고 둥먼역으로 직행. 이동 시간 약 6분 소요.",
        transit_r1_1: "이어서 <strong>단수이신이선(빨간색)</strong>을 타고 타이베이101/세무역으로 직행. 약 9분 소요.",
        transit_r1_2: "신이 쇼핑지구의 공중 화랑을 따라 시정부 상권으로 도보 이동. 도보 약 8분 소요.",
        transit_r1_3: "시정부역에서 <strong>반난선</strong> 탑승 후 중샤오푸싱역에서 <strong>송산신이선</strong>으로 환승하여 송산역 도착. 약 20분 소요.",
        transit_r2_0: "다리제 방향의 옛 고풍스러운 거리를 따라 도보 이동. 도보 약 4분 소요.",
        transit_r2_1: "지하철역으로 돌아와 <strong>반난선(파란색)</strong> 탑승 후 1정거장 뒤 시먼역 하차. 약 8분 소요.",
        transit_r2_2: "시먼역에서 <strong>송산신이선(초록색)</strong> 탑승 후 베이먼역 하차, 디화제로 도보 이동. 총 약 12분 소요.",
        transit_r2_3: "디화제 노포 거리에서 서쪽 강변 방향으로 도보 이동 시 바로 부두에 도착. 도보 약 8분 소요.",
        transit_r2_4: "일몰 후, 민성서로를 따라 동쪽 방향으로 쭉 걸어가면 닝샤 야시장 도착. 도보 약 12분 소요."
    }
};

function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');
}

function toggleMode(mode) {
    currentActiveMode = mode;
    const btnCurated = document.getElementById('mode-btn-curated');
    const btnCustom = document.getElementById('mode-btn-custom');
    const wrapCurated = document.getElementById('wrapper-curated');
    const wrapCustom = document.getElementById('wrapper-custom');

    if (mode === "curated") {
        btnCurated.style.background = "#b89f93"; btnCurated.style.color = "white";
        btnCustom.style.background = "#faf9f5"; btnCustom.style.color = "#666";
        wrapCurated.style.display = "block"; wrapCustom.style.display = "none";
    } else {
        btnCustom.style.background = "#b89f93"; btnCustom.style.color = "white";
        btnCurated.style.background = "#faf9f5"; btnCurated.style.color = "#666";
        wrapCurated.style.display = "none"; wrapCustom.style.display = "block";
    }
}

// ✨ 鋼鐵更新：無論停在什麼步驟，切換語言一律發動「100%全網頁重繪」
function changeLanguage(lang) {
    currentLang = lang;
    
    // 1. 刷新具有 data-i18n 的靜態文字
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTranslations[lang][key]) {
            el.innerHTML = uiTranslations[lang][key];
        }
    });

    // 2. 動態重刷功能一的主題下拉選單
    const selectTheme = document.getElementById('select-curated-theme');
    if (selectTheme) {
        selectTheme.innerHTML = `
            <option value="ROUTE_1">${uiTranslations[lang].theme_1}</option>
            <option value="ROUTE_2">${uiTranslations[lang].theme_2}</option>
            <option value="FAKE_1">${uiTranslations[lang].fake_1}</option>
            <option value="FAKE_2">${uiTranslations[lang].fake_2}</option>
            <option value="FAKE_3">${uiTranslations[lang].fake_3}</option>
        `;
    }

    // 3. ✨ 核心Bug修復線：只要page-result帶有active（也就是正在看卡片），立刻強行重新執行渲染，讓卡片文字同步變身！
    const resultPage = document.getElementById('page-result');
    if (resultPage && resultPage.classList.contains('active')) {
        generateCuratedOrCustomRoute(true); 
    }
}

// 網頁初始化
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('station-checkbox-group');
    if(!container) return;

    let gridHtml = "";
    allUIStations.forEach((name, index) => {
        gridHtml += `
            <div class="station-check-item">
                <input type="checkbox" name="stations" id="s-${index}" value="${name}">
                <label for="s-${index}" class="station-check-label">${name}站</label>
            </div>
        `;
    });
    container.innerHTML = gridHtml;
    
    changeLanguage('zh');
    toggleMode('curated');
});

function formatNumberToTime(num) {
    if (num >= 24) num = num % 24;
    const hours = Math.floor(num);
    const minutes = Math.round((num - hours) * 60);
    return `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}`;
}

// 🚀 智慧分流與相對時間軸運算發動機（徹底拔除未定義變數）
function generateCuratedOrCustomRoute(isLanguageSwitching = false) {
    let rawRouteData = [];
    const isCuratedMode = (currentActiveMode === "curated");

    // 精準抓取當前已切換好的語系池
    const db1 = routeOneDatabase[currentLang];
    const db2 = routeTwoDatabase[currentLang];

    if (isCuratedMode) {
        const selectedTheme = document.getElementById('select-curated-theme').value;
        if (selectedTheme === "ROUTE_1") {
            rawRouteData = db1;
        } else {
            rawRouteData = db2;
        }
    } else {
        const checkedBoxes = document.querySelectorAll('input[name="stations"]:checked');
        const selectedUserStations = [];
        checkedBoxes.forEach(box => selectedUserStations.push(box.value));

        if (selectedUserStations.length === 0) {
            rawRouteData = [db1[0], db1[1], db1[4]];
        } else {
            const fullPool = [...db1, ...db2];
            checkedBoxes.forEach(box => {
                const uiIndex = allUIStations.indexOf(box.value);
                if(uiIndex === 0 || uiIndex === 1 || uiIndex === 2 || uiIndex === 4 || uiIndex === 5) {
                    const matchItem = db1.find(item => item.station === db1[uiIndex === 0 ? 0 : (uiIndex === 1 ? 1 : (uiIndex === 2 ? 2 : (uiIndex === 4 ? 3 : 4)))].station);
                    if(matchItem && !rawRouteData.includes(matchItem)) rawRouteData.push(matchItem);
                } else {
                    const matchItem = db2.find(item => item.station === db2[2].station);
                    if(matchItem && !rawRouteData.includes(matchItem)) rawRouteData.push(matchItem);
                }
            });
        }
    }

    const hr = parseInt(document.getElementById('time-select-hour').value);
    const min = parseInt(document.getElementById('time-select-minute').value);
    let timePointer = hr + (min / 60);

    const finalRouteToShow = [];
    const isRouteOne = (isCuratedMode && document.getElementById('select-curated-theme').value === "ROUTE_1") || (!isCuratedMode && rawRouteData[0] && db1.some(r => r.title === rawRouteData[0].title));
    
    // Google Maps 行車時間常數（單位：小時）
    const r1TransitTimes = [0.1, 0.15, 0.13, 0.33]; 
    const r2TransitTimes = [0.07, 0.13, 0.2, 0.13, 0.2]; 

    for (let i = 0; i < rawRouteData.length; i++) {
        let scheduledItem = Object.assign({}, rawRouteData[i]);
        
        if (i > 0) {
            let transitGap = 0.25; 
            if (isRouteOne) {
                if (r1TransitTimes[i-1]) transitGap = r1TransitTimes[i-1];
            } else {
                if (r2TransitTimes[i-1]) transitGap = r2TransitTimes[i-1];
            }
            timePointer += transitGap;
        }
        
        let itemDuration = rawRouteData[i].duration ? rawRouteData[i].duration : 1.5;
        scheduledItem.time = `${formatNumberToTime(timePointer)} - ${formatNumberToTime(timePointer + itemDuration)}`;
        timePointer += itemDuration;
        
        finalRouteToShow.push(scheduledItem);
    }

    renderFinalResults(finalRouteToShow, isRouteOne, isLanguageSwitching);
}

// 輸出對齊當前語系的結果頁
function renderFinalResults(results, isRouteOne, isLanguageSwitching) {
    const container = document.getElementById('result-list-container');
    let html = "";
    
    const dict = uiTranslations[currentLang];
    
    const r1TransitTexts = [
        dict.transit_r1_0, dict.transit_r1_1, dict.transit_r1_2, dict.transit_r1_3
    ];
    const r2TransitTexts = [
        dict.transit_r2_0, dict.transit_r2_1, dict.transit_r2_2, dict.transit_r2_3, dict.transit_r2_4
    ];

    for (let i = 0; i < results.length; i++) {
        const match = results[i];
        const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(match.title + " Taipei");

        html += `
            <div class="result-card" style="padding: 20px 20px 15px 20px; border-radius: 16px;">
                <div class="time-flow-badge" style="top: 18px; right: 20px;">⏱️ ${match.time}</div>
                <h3 class="result-name" style="font-size: 19px; font-weight: bold; margin-bottom: 6px; width: 65%; color: #4a4d4a;">${match.title}</h3>
                <p class="result-desc" style="font-size: 13px; color: #888; margin-bottom: 12px; line-height: 1.5;">${match.desc}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f2f0ea; padding-top: 10px; margin-top: 5px;">
                    <span style="font-size: 11px; color: #a8a297;">${dict.cost_prefix}${match.cost}</span>
                    <a href="${googleMapUrl}" target="_blank" style="font-size: 11px; color: #b89f93; font-weight: bold; text-decoration: none;">${dict.map_nav}</a>
                </div>
            </div>
        `;
        
        if (i < results.length - 1) {
            let transitLineText = isRouteOne ? r1TransitTexts[i] : r2TransitTexts[i];
            html += `
                <div class="transit-connector" style="
                    margin: 8px 20px; padding: 10px 14px; border-left: 2px dashed #edebe4;
                    font-size: 12px; color: #718074; background: #faf9f5; border-radius: 8px;
                    line-height: 1.6;
                ">
                    <strong>🚇 ${dict.transit_header}</strong><br>${transitLineText || "Metro Connection"}
                </div>
            `;
        }
    }

    container.innerHTML = html;
    
    // 如果是使用者在第三頁切換語言，只做內部重繪，絕不呼叫跳轉功能以免網頁閃動
    if (!isLanguageSwitching) {
        switchPage('page-result');
    }
}