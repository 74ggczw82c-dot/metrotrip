// === 語系與模式狀態指針 ===
let currentLang = "zh";
let currentActiveMode = "curated";
let loggedInUser = null; 

// === 畫面上顯示的 18 個豐富捷運站點名單 ===
const allUIStations = [
    "中正紀念堂", "東門", "台北101/世貿", "市政府", "松山", 
    "龍山寺", "西門", "北門", "雙連", "台北車站", 
    "忠孝新生", "南京復興", "公館", "淡水", "劍潭", "士林",
    "象山", "中山"
];

// === 四國語言資料庫一 (路線一：信義時尚線) ===
const routeOneDatabase = {
    zh: [
        { spotKey: "R1_CKS", station: "中正紀念堂", title: "中正紀念堂", cost: "免費參觀", duration: 1.5, desc: "參觀藍白巍峨主殿，觀看整點舉行、精準震撼的三軍儀隊交接儀式。" },
        { spotKey: "R1_YONG", station: "東門", title: "永康街商圈（午餐）", cost: "約 350-500 元", duration: 2.0, desc: "午餐吃皮薄爆汁的鼎泰豐小籠包，飯後再來一碗排隊芒果雪花冰。" },
        { spotKey: "R1_101", station: "台北101/世貿", title: "台北101觀景台 / 象山步道", cost: "0-600 元", duration: 2.5, desc: "搭超高速電梯直達101雲端俯瞰台北，或登象山步道拍攝101全景。" },
        { spotKey: "R1_XINYI", station: "市政府", title: "信義商圈 / 松菸文創園區", cost: "免費散步", duration: 1.5, desc: "漫步百貨空中連廊商圈，或拐進松菸老菸廠廠房享受設計文青氛圍。" },
        { spotKey: "R1_RAO", station: "松山", title: "饒河街觀光夜市", cost: "約 150-300 元", duration: 2.0, desc: "必吃剛出爐炭香四溢的福州世祖胡椒餅、藥燉排骨與爆漿玉子燒。" }
    ],
    en: [
        { spotKey: "R1_CKS", station: "中正紀念堂", title: "CKS Memorial Hall", cost: "Free", duration: 1.5, desc: "Tour the grand blue-and-white monument and witness the Changing of the Guard ceremony." },
        { spotKey: "R1_YONG", station: "東門", title: "Yongkang Street (Lunch)", cost: "350-500 TWD", duration: 2.0, desc: "Have legendary Din Tai Fung soup dumplings for lunch, followed by mango shaved ice." },
        { spotKey: "R1_101", station: "台北101/世貿", title: "Taipei 101 Observatory / Xiangshan Trail", cost: "0-600 TWD", duration: 2.5, desc: "Ride the fast elevator to 89F for a city view, or hike Xiangshan for the skyline photo." },
        { spotKey: "R1_XINYI", station: "市政府", title: "Xinyi Shopping District", cost: "Free", duration: 1.5, desc: "Stroll through modern malls or discover design vibes inside the historic tobacco factory." },
        { spotKey: "R1_RAO", station: "松山", title: "Raohe Street Night Market", cost: "150-300 TWD", duration: 2.0, desc: "Must-try freshly baked pork pepper buns and traditional street snacks." }
    ],
    ja: [
        { spotKey: "R1_CKS", station: "中正紀念堂", title: "中正紀念堂", cost: "入場無料", duration: 1.5, desc: "青と白の壮大な本堂を参観し、毎正時に行われる大迫力の衛兵交代式を見学します。" },
        { spotKey: "R1_YONG", station: "東門", title: "永康街エリア（ランチ）", cost: "約 350-500 元", duration: 2.0, desc: "ランチは鼎泰豊の肉汁たっぷり小籠包を堪能し、食後は大人気のマンゴーかき氷を。" },
        { spotKey: "R1_101", station: "台北101/世貿", title: "台北101展望台 / 象山遊歩道", cost: "0-600 元", duration: 2.5, desc: "超高速エレベーターで89階へ登り台北を一望するか、象山に登って101の絶景を撮影します。" },
        { spotKey: "R1_XINYI", station: "市政府", title: "信義商街 / 松山文創園区", cost: "散策無料", duration: 1.5, desc: "百貨店が立ち並ぶ空中回廊を歩くか、レトロなタバコ工場跡の松山文創園区へ。" },
        { spotKey: "R1_RAO", station: "松山", title: "饒河街観光夜市", cost: "約 150-300 元", duration: 2.0, desc: "焼き立て熱々の福州世祖胡椒餅、体に優しい薬膳スペアリブスープは必食です。" }
    ],
    ko: [
        { spotKey: "R1_CKS", station: "중정기념당", title: "중정기념당", cost: "무료 입장", duration: 1.5, desc: "웅장한 청백색 본당을 관람하고, 매 정시마다 진행되는 군위병 교대식을 직관해보세요." },
        { spotKey: "R1_YONG", station: "東門", title: "융캉제 상권 (점심)", cost: "약 350-500 TWD", duration: 2.0, desc: "점심으로 육즙이 가득한 딘타이펑 소롱포를 맛보고, 디저트로 망고 눈꽃빙수를 즐겨보세요." },
        { spotKey: "R1_101", station: "台北101/世貿", title: "타이베이 101 전망대 / 샹산 보도", cost: "0-600 TWD", duration: 2.5, desc: "초고속 엘리베이터를 타고 89층 전망대에 오르거나, 샹산에 올라 101 야경을 촬영해보세요." },
        { spotKey: "R1_XINYI", station: "市政府", title: "신이 쇼핑지구 / 송산문창공원", cost: "무료 산책", duration: 1.5, desc: "백화점 공중 화랑을 산책하며 쇼핑을 즐기거나, 옛 담배공장을 개조한 송산문창공원을 방문해보세요." },
        { spotKey: "R1_RAO", station: "松山", title: "라오허제 야시장", cost: "약 150-300 TWD", duration: 2.0, desc: "갓 구워져 나와 육즙과 숯향이 가득한 화덕 만두(후추병)와 한방 갈비탕을 맛보세요." }
    ]
};

// === 四國語言資料庫二 (路線二：老城文化線) ===
const routeTwoDatabase = {
    zh: [
        { spotKey: "R2_LONG", station: "龍山寺", title: "萬華龍山寺 / 剝皮寮歷史街區", cost: "免費參觀", duration: 2.0, desc: "體驗百年老香火巡禮，欣賞精美無雙的銅鑄龍柱，隨後步行探索剝皮寮紅磚歷史老街。" },
        { spotKey: "R2_XIMEN", station: "西門", title: "西門町徒步區快閃", cost: "約 100 元", duration: 1.5, desc: "快閃年輕潮流聖地，拍拍紅樓古蹟，大口吃一碗道地的阿宗麵線。" },
        { spotKey: "R2_DIHUA", station: "北門", title: "迪化街 / 大稻埕老街", cost: "免費散步", duration: 2.0, desc: "從北門站出站步行進入迪化街，散步充滿歷史厚度的街屋，尋訪老屋天井內翻新的文創小店。" },
        { spotKey: "R2_PIER", station: "北門", title: "大稻埕碼頭貨櫃市集夕陽", cost: "約 150 元", duration: 1.5, desc: "坐在河岸第一排凝視絕美落日將河面染金，在貨櫃市集點杯飲料吹晚風。" },
        { spotKey: "R2_NING", station: "雙連", title: "寧夏夜市", cost: "約 200 元", duration: 1.5, desc: "老饕最愛的夜市。步行或搭乘捷運至雙連站，必吃圓環邊蚵仔煎與香酥芋丸。" }
    ],
    en: [
        { spotKey: "R2_LONG", station: "龍山寺", title: "Longshan Temple / Bopiliao Block", cost: "Free", duration: 2.0, desc: "Step into Taipei's oldest temple, then walk through the historic red-brick Bopiliao old street." },
        { spotKey: "R2_XIMEN", station: "西門", title: "Ximending Pedestrian Flash Mob", cost: "100 TWD", duration: 1.5, desc: "Explore youth pop culture, take photos of Ximen Red House, and grab a bowl of rice noodles." },
        { spotKey: "R2_DIHUA", station: "北門", title: "Dihua Street / Dadaocheng", cost: "Free", duration: 2.0, desc: "Walk from Beimen Station into Dihua Street to explore traditional buildings housing trendy craft shops." },
        { spotKey: "R2_PIER", station: "北門", title: "Dadaocheng Wharf Sunset Market", cost: "150 TWD", duration: 1.5, desc: "Sit right by the river to watch a breathtaking golden sunset and enjoy a refreshing drink." },
        { spotKey: "R2_NING", station: "雙連", title: "Ningxia Night Market", cost: "200 TWD", duration: 1.5, desc: "Walk or ride to Shuanglian Station to wrap up your day with authentic oyster omelets and taro balls." }
    ],
    ja: [
        { spotKey: "R2_LONG", station: "龍山寺", title: "龍山寺 / 剝皮寮歴史地区", cost: "参拝無料", duration: 2.0, desc: "歴史ある名刹で信仰の熱気を感じた後、ノスタルジックな赤レンガの剝皮寮老街を散策します。" },
        { spotKey: "R2_XIMEN", station: "西門", title: "西門町エリア快閃", cost: "約 100 元", duration: 1.5, desc: "若者カルチャーの発信地。レトロな西門紅樓をバックに、有名な阿宗麺線を立ち食い体験。" },
        { spotKey: "R2_DIHUA", station: "北門", title: "迪化街・大稲埕老街", cost: "散策無料", duration: 2.0, desc: "北門駅から徒歩で迪化街へ。リノベーションされたお洒落な雑貨店やカフェが点在します。" },
        { spotKey: "R2_PIER", station: "北門", title: "大稲埕埠頭コンテナ市集の夕日", cost: "約 150 元", duration: 1.5, desc: "リバーサイド的特等席で淡水河の夕日を鑑賞。川風を感じながらコンテナ屋台へ。" },
        { spotKey: "R2_NING", station: "雙連", title: "寧夏夜市", cost: "約 200 元", duration: 1.5, desc: "徒歩か地下鉄で雙連駅へ移動し、名物の特製牡蠣オムレツやサクサクのタロ芋団子を堪能。" }
    ],
    ko: [
        { spotKey: "R2_LONG", station: "龍山寺", title: "룽산사 / 보피랴오 역사거리", cost: "무료 참배", duration: 2.0, desc: "영험한 사찰을 체험한 후, 바로 옆에 위치한 붉은 벽돌 감성의 보피랴오 역사거리를 걸어보세요." },
        { spotKey: "R2_XIMEN", station: "西門", title: "시먼딩 보행자거리 스냅", cost: "약 100 TWD", duration: 1.5, desc: "타이베이 젊음의 성지 시먼딩을 둘러보고, 유명한 아종면선 곱창국수를 맛보세요." },
        { spotKey: "R2_DIHUA", station: "北門", title: "디화제 / 대도정 노포거리", cost: "무료 산책", duration: 2.0, desc: "베이먼역에서 하차해 디화제로 도보 이동, 오래된 건물 속 숨겨진 아기자기한 소품숍을 탐방합니다." },
        { spotKey: "R2_PIER", station: "北門", title: "대도정 부두 마켓 낙조", cost: "약 150 TWD", duration: 1.5, desc: "강변에 앉아 단수이강을 황금빛으로 물들이는 환상적인 일몰과 컨테이너 마켓을 즐겨보세요." },
        { spotKey: "R2_NING", station: "雙連", title: "닝샤 야시장", cost: "약 200 TWD", duration: 1.5, desc: "도보 또는 지하철로 솽롄역으로 이동해 현지인들이 가장 사랑하는 굴전과 타로볼을 맛보세요." }
    ]
};

// === 四國語言全 UI 字典 ===
const uiTranslations = {
    zh: {
        main_title: "日常漫遊", start_btn: "🚀 開始我的台北一日策展", start_desc: "探索無縫銜接的時空大數據行程",
        login_card_title: "🔐 解鎖會員專屬足跡功能", login_card_desc: "登入後可記錄踩點足跡，並享智慧過濾推薦",
        page_title: "旅行風格探索", back: "返回", step_1: "🛠️ 第一步：選擇規劃模式",
        mode_curated: "模式一：經典策展主題", mode_custom: "模式二：自選站點自由行",
        select_theme_label: "🎯 請選擇推薦主題路線（Demo 首選）", select_stations_label: "📍 請勾選您今天想去的捷運站點（自由行 DIY 模式）",
        select_time_label: "⏱️ 設定出發時間流（固定格式，免手動打字）", depart_time: "預計出發：",
        generate_btn: "一鍵生成智慧漫遊行程", modify_btn: "返回修改", result_title: "台北漫遊時空指南",
        transit_header: "實際交通耗時推算：", cost_prefix: "預估花費：", map_nav: "開啟地圖導航 →",
        auth_title: "旅人帳戶中心", username: "帳號 (Username)", password: "密碼 (Password)",
        login_btn: "登入", register_btn: "註冊新帳號", history_title: "我的台北足跡地圖", history_subtitle: "以下是您點擊標記「我去過了」的經典觀光景點：",
        visited_btn_text: "📍 我去過了",
        theme_1: "【經典必訪】時尚地標與必吃美食一日遊 (中正/東門/101/市政府/松山)",
        theme_2: "【老派懷舊】萬華老城風情與絕美落日漫遊 (龍山寺/西門/北門/雙連)",
        fake_1: "【文青散策】獨立選品與赤峰街巷弄咖啡時光 (當代美學線)",
        fake_2: "【自然秘境】北投溫泉與陽明山花卉療癒日常 (近郊慢活線)",
        fake_3: "【親子同樂】市立動物園與貓空茶香高空體驗 (家族漫遊線)",
        transit_r1_0: "搭乘 <strong>淡水信義線（紅線）</strong> 直達東門站，車程約 1 站，耗時約 6 分鐘。",
        transit_r1_1: "繼續搭乘 <strong>淡水信義線（紅線）</strong> 直達台北101/世擺站，車程約 3 站，耗時約 9 分鐘。",
        transit_r1_2: "順著信義徒步區空中連廊 <strong>直接步行</strong> 逛至市政府商圈，路程約 8 分鐘。",
        transit_r1_3: "由市政府站搭乘 <strong>板南線（藍線）</strong> 至西門站，轉乘 <strong>松山新店線（綠線）</strong> 直達終點松山站並步行抵達饒河夜市，總車程約 20 分鐘。",
        transit_r2_0: "從龍山寺 <strong>直接步行</strong> 前往剝皮寮歷史街區（約 3 分鐘），隨後由龍山寺站搭乘 <strong>板南線（藍線）</strong> 僅 1 站直達西門站，車程約 8 分鐘。",
        transit_r2_1: "從西門站轉乘 <strong>松山新店線（綠線）</strong> 北上直達 <strong>北門站</strong>，出站後 <strong>步行</strong> 進入迪化街，總耗時約 12 分鐘。",
        transit_r2_2: "從迪化街老街往西邊河岸方向 <strong>直接步行</strong> 即可無縫抵達大稻埕碼頭欣賞河岸夕陽，路程約 8 分鐘。",
        transit_r2_3: "黃昏落日後，從大稻埕碼頭沿民生西路往東邊方向 <strong>直接步行</strong> 即可抵達寧夏夜市，路程約 12 分鐘。"
    },
    en: {
        main_title: "Taipei Eco Roam", start_btn: "🚀 Start My Taipei Curation", start_desc: "Discover perfectly linked spatial-temporal itineraries.",
        login_card_title: "🔐 Unlock Traveler Footprint Features", login_card_desc: "Log in to record your travel footprint and gain history filtering.",
        page_title: "Explore Travel Style", back: "Back", step_1: "🛠️ Step 1: Select Planning Mode",
        mode_curated: "Mode 1: Curated Theme Packs", mode_custom: "Mode 2: Station Select DIY",
        select_theme_label: "🎯 Choose a Recommended Theme Route (Best for Demo)", select_stations_label: "📍 Check Metro Stations You Wish to Visit (DIY Mode)",
        select_time_label: "⏱️ Set Departure Time (Fixed Pickers, No Manual Typing)", depart_time: "Departure:",
        generate_btn: "Generate Time-Aware Guide", modify_btn: "Edit Setting", result_title: "Taipei Spatial-Temporal Guide",
        transit_header: "MRT Travel Duration Analysis:", cost_prefix: "Est. Cost: ", map_nav: "Open Map Navigation →",
        auth_title: "Traveler Account Center", username: "Account Username", password: "Password",
        login_btn: "Log In", register_btn: "Register Account", history_title: "My Taipei Footprint Map", history_subtitle: "The following are iconic attractions you have marked as 'Visited':",
        visited_btn_text: "📍 Mark Visited",
        theme_1: "[Must-Visit] Fashion Landmarks & Famous Foods (CKS / Dongmen / 101 / City Hall / Songshan)",
        theme_2: "[Retro Heritage] Old Town Culture & Riverside Sunset (Longshan / Ximen / Beimen / Shuanglian)",
        fake_1: "[Trendy Café] Indie Selection & Vintage Alleyways Walk (Modern Aesthetic Line)",
        fake_2: "[Nature Retreat] Beitou Hot Springs & Yangmingshan Flora Tour (Suburban Calm Line)",
        fake_3: "[Family Fun] Taipei Zoo & Maokong Gondola High-Tea Experience (Family Bonding Line)",
        transit_r1_0: "Take <strong>Tamsui-Xinyi Line (Red)</strong> straight to Dongmen. Travel time approx. 6 mins.",
        transit_r1_1: "Stay on <strong>Tamsui-Xinyi Line (Red)</strong> straight to Taipei 101/MRT Station. Approx. 9 mins.",
        transit_r1_2: "Walk through the interconnected Xinyi Skywalk straight to City Hall area. Walk time approx. 8 mins.",
        transit_r1_3: "From City Hall, take <strong>Bannan Line (Blue)</strong> to Ximen, transfer to <strong>Songshan-Xindien Line (Green)</strong> to Songshan. Approx. 20 mins.",
        transit_r2_0: "Walk to Bopiliao, then take <strong>Bannan Line (Blue)</strong> for 1 stop to Ximen. Approx. 8 mins.",
        transit_r2_1: "Take <strong>Songshan-Xindien Line (Green)</strong> north to <strong>Beimen Station</strong>, then walk to Dihua Street. Total approx. 12 mins.",
        transit_r2_2: "Walk west from Dihua Street toward the riverfront to arrive seamlessly at the pier sunset. Approx. 8 mins.",
        transit_r2_3: "After twilight, head east along Minsheng West Road straight to Ningxia Night Market. Approx. 12 mins."
    },
    ja: {
        main_title: "台北マイペース旅", start_btn: "🚀 台北のスマート旅程を作成", start_desc: "シームレスにリンクされた時空間データルートを探索する",
        login_card_title: "🔐 会員専用の足跡機能をアンロック", login_card_desc: "ログインすると訪問済みのスポットを記録でき、おすすめから自動除外されます。",
        page_title: "旅行スタイルの選択", back: "戻る", step_1: "🛠️ ステップ 1：プランニングモードの選択",
        mode_curated: "モード①：定番おすすめテーマ", mode_custom: "モード②：駅選択自由プラン",
        select_theme_label: "🎯 厳選おすすめルートを選択（Demo 推奨）", select_stations_label: "📍 本日訪問したい駅にチェックを入れてください（DIY モード）",
        select_time_label: "⏱️ 出発時間の設定（ダイヤル選択式、手入力不要）", depart_time: "出発予定：",
        generate_btn: "AI 旅程を自動生成する", modify_btn: "条件を変更", result_title: "台北タイムライン案内帳",
        transit_header: "Google マップ実測移動時間推計：", cost_prefix: "予想費用：", map_nav: "マップでナビを開く →",
        auth_title: "旅人アカウントセンター", username: "ユーザー名", password: "パスワード",
        login_btn: "ログイン", register_btn: "新規登録", history_title: "マイ台北足跡マップ", history_subtitle: "以下はあなたが「訪問済み」とマークした定番の観光スポットです：",
        visited_btn_text: "📍 訪問済み",
        theme_1: "【王道定番】最先端ランドマークと必食グルメ一日旅 (中正/101/饒河)",
        theme_2: "【レトロ巡り】萬華老街風情と絶品リバーサイドの夕日 (龍山寺/大稻埕/寧夏)",
        fake_1: "【文青散策】セレクトショップと赤峰街路地裏カフェ巡り (現代美学線)",
        fake_2: "【自然秘境】北投温泉と陽明山のんびりフラワーヒーリング (近郊癒やし線)",
        fake_3: "【親子同楽】台北市立動物園と猫空お茶香るロープウェイ体験 (家族のんびり線)",
        transit_r1_0: "<strong>淡水信義線（赤線）</strong>に乗り、東門駅へ直行。乗車時間約 6 分。",
        transit_r1_1: "引き続き<strong>淡水信義線（赤線）</strong>で台北101/世貿駅へ。乗車時間約 9 分。",
        transit_r1_2: "信義歩行者天国の空中回廊を通って市政府エリアへ直接徒歩で移動。徒歩約 8 分。",
        transit_r1_3: "市政府駅から<strong>板南線（青線）</strong>で西門駅へ行き、<strong>松山新店線（緑線）</strong>に乗り換えて松山駅へ。計約 20 分。",
        transit_r2_0: "剝皮寮歴史地区へ徒歩で移動したのち、龍山寺駅から<strong>板南線（青線）</strong>に乗り1駅で西門駅に到着。約 8 分。",
        transit_r2_1: "西門駅から<strong>松山新店線（緑線）</strong>で<strong>北門駅</strong>へ行き、下車後迪化街へ歩きます。計約 12 分。",
        transit_r2_2: "迪化街の老舗街から西側の岸辺へ向かって歩くと、すぐに埠頭へ到着します。徒歩約 8 分。",
        transit_r2_3: "夕暮れ後、民生西路を東へまっすぐ歩くと、寧夏夜市に到着します。徒歩約 12 分。"
    },
    ko: {
        main_title: "타이베이 시공간 가이드", start_btn: "🚀 타이베이 일일 큐레이션 시작", start_desc: "매끄럽게 연결되는 시공간 빅데이터 일정을 탐색하세요",
        login_card_title: "🔐 회원 전용 발자국 기능 활성화", login_card_desc: "로그인 후 방문한 명소를 기록하고 스마트 제외 추천을 받아보세요.",
        page_title: "여행 스타일 탐색", back: "조건 수정", step_1: "🛠️ 첫 번째 단계: 계획 모드 선택",
        mode_curated: "모드 1: 클래식 추천 테마", mode_custom: "모드 2: 지하철역 직접 선택",
        select_theme_label: "🎯 추천 테마 코스를 선택하세요 (Demo 강력 추천)", select_stations_label: "📍 오늘 방문하고 싶은 지하철역을 선택하세요 (DIY 자유 모드)",
        select_time_label: "⏱️ 출발 시간 설정 (키패드 입력 없이 간편한 선택식)", depart_time: "출발 예정:",
        generate_btn: "스마트 시간축 일정 생성", modify_btn: "조건 수정", result_title: "타이베이 시공간 여행 가이드",
        transit_header: "Google 지도 기반 실제 교통 소요 시간 계산:", cost_prefix: "예상 비용: ", map_nav: "구글 지도 내비게이션 켜기 →",
        auth_title: "여행자 계정 센터", username: "아이디", password: "비밀번호",
        login_btn: "로그인", register_btn: "회원가입", history_title: "나의 타이베이 발자국 지도", history_subtitle: "다음은 내가 '방문함'으로 체크한 로컬 명소 목록입니다:",
        visited_btn_text: "📍 방문했음",
        theme_1: "【필수 코스】 트렌디 랜드마크와 필수 미식 일일 투어 (중정/101/라오허제)",
        theme_2: "【레트로 감성】 만화 노포 감성과 환상적인 노을 유람 (룽산사/대도정/닝샤)",
        fake_1: "【문학 산책】 독립 소품숍과 스청제 골목 카페 투어 (현대 미학선)",
        fake_2: "【자연 비경】 베이터우 온천과 양명산 힐링 플라워 투어 (근교 힐링선)",
        fake_3: "【가족 함께】 시립동물원과 마오콩 차향 스카이웨이 투어 (가족 유람선)",
        transit_r1_0: "<strong>단수이신이선(빨간색)</strong>을 타고 둥먼역으로 직행. 이동 시간 약 6분 소요.",
        transit_r1_1: "이어서 <strong>단수이신이선(빨간색)</strong>을 타고 타이베이101/세무역으로 직행. 약 9분 소요.",
        transit_r1_2: "신이 쇼핑지구의 공중 화랑을 따라 시정부 상권으로 도보 이동. 도보 약 8분 소요.",
        transit_r1_3: "시정부역에서 <strong>반난선(파란색)</strong> 탑승 후 시먼역에서 <strong>송산신이선(초록색)</strong>으로 환승하여 송산역 도착. 약 20분 소요.",
        transit_r2_0: "보피랴오 골목을 걸은 뒤, 룽산사역에서 <strong>반난선(파란색)</strong>을 타고 1정거장 뒤 시먼역 하차. 약 8분 소요.",
        transit_r2_1: "시먼역에서 <strong>송산신이선(초록색)</strong> 탑승 후 <strong>베이먼역</strong> 하차, 디화제로 도보 이동. 총 약 12분 소요.",
        transit_r2_2: "디화제 노포 거리에서 서쪽 강변 방향으로 도보 이동 시 바로 대도정 부두에 도착. 도보 약 8분 소요.",
        transit_r2_3: "일몰 후, 민성서로를 따라 동쪽 방향으로 쭉 걸어가면 닝샤 야시장 도착. 도보 약 12분 소요."
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

// 會員機制
function handleRegister() {
    const u = document.getElementById('auth-username').value.trim();
    const p = document.getElementById('auth-password').value.trim();
    if(!u || !p) { alert("Please enter username and password!"); return; }
    localStorage.setItem(`user_${u}`, p);
    localStorage.setItem(`visited_${u}`, "[]");
    alert("Registration successful! Please click Log In.");
}

function handleLogin() {
    const u = document.getElementById('auth-username').value.trim();
    const p = document.getElementById('auth-password').value.trim();
    if(localStorage.getItem(`user_${u}`) === p) {
        loggedInUser = u;
        alert(`Welcome back, ${u}!`);
        renderAuthStatusBar();
        switchPage('page-home');
    } else {
        alert("Invalid username or password!");
    }
}

function handleLogout() {
    loggedInUser = null;
    alert("Logged out successfully.");
    renderAuthStatusBar();
    switchPage('page-home');
}

function renderAuthStatusBar() {
    const zone = document.getElementById('auth-status-zone');
    const homeCard = document.getElementById('home-auth-card');
    if (!loggedInUser) {
        zone.innerHTML = `<span onclick="switchPage('page-auth')" style="cursor:pointer; text-decoration:underline;">🔑 Sign In</span>`;
        if(homeCard) homeCard.style.display = "block";
    } else {
        zone.innerHTML = `
            <span>👤 ${loggedInUser}</span>
            <span onclick="switchPage('page-history'); renderFootprintList();" style="cursor:pointer; color:#617180; text-decoration:underline; margin-left:8px;">👣 我的足跡</span>
            <span onclick="handleLogout()" style="cursor:pointer; color:#666; text-decoration:underline; margin-left:8px;">🚪 登出</span>
        `;
        if(homeCard) homeCard.style.display = "none";
    }
}

function markAsVisited(spotKey) {
    if(!loggedInUser) { alert("Please login first!"); return; }
    let list = JSON.parse(localStorage.getItem(`visited_${loggedInUser}`) || "[]");
    if(!list.includes(spotKey)) {
        list.push(spotKey);
        localStorage.setItem(`visited_${loggedInUser}`, JSON.stringify(list));
        alert("Marked as Visited!");
        generateCuratedOrCustomRoute(true);
    }
}

function renderFootprintList() {
    const container = document.getElementById('history-list-container');
    if(!loggedInUser) { container.innerHTML = ""; return; }
    let list = JSON.parse(localStorage.getItem(`visited_${loggedInUser}`) || "[]");
    if(list.length === 0) {
        container.innerHTML = `<div style="text-align:center; color:#9c9386; font-size:13px; margin-top:40px;">尚無去過的足跡紀錄，快去行程內打卡吧！</div>`;
        return;
    }
    const fullPool = [...routeOneDatabase.zh, ...routeTwoDatabase.zh];
    let html = "";
    list.forEach(key => {
        const item = fullPool.find(p => p.spotKey === key);
        if(item) {
            html += `
                <div style="background:#faf9f5; border:1px solid #edebe4; padding:15px; border-radius:12px; margin-bottom: 8px;">
                    <strong style="color:#617180;">[捷運${item.station}站]</strong> 
                    <span style="font-weight:bold; color:#4a4d4a; margin-left:5px;">${item.title}</span>
                </div>
            `;
        }
    });
    container.innerHTML = html;
}

function changeLanguage(lang) {
    if (!uiTranslations[lang]) return;
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTranslations[lang][key]) el.innerHTML = uiTranslations[lang][key];
    });

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
    renderAuthStatusBar();
    changeLanguage('zh');
});

function formatNumberToTime(num) {
    if (num >= 24) num = num % 24;
    const hours = Math.floor(num);
    const minutes = Math.round((num - hours) * 60);
    return `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}`;
}

// 🧠 核心算法（相對時間獨立橋接，100% 破除多國語言切換死結）
function generateCuratedOrCustomRoute(isLanguageSwitching = false) {
    try {
        let selectedKeys = []; 
        const isCuratedMode = (currentActiveMode === "curated");

        const db1 = routeOneDatabase[currentLang] || routeOneDatabase.zh;
        const db2 = routeTwoDatabase[currentLang] || routeTwoDatabase.zh;

        let visitedList = [];
        if (loggedInUser) {
            visitedList = JSON.parse(localStorage.getItem(`visited_${loggedInUser}`) || "[]");
        }

        let isRouteOne = true;

        if (isCuratedMode) {
            const selectedTheme = document.getElementById('select-curated-theme').value;
            if (selectedTheme === "ROUTE_1") {
                selectedKeys = ["R1_CKS", "R1_YONG", "R1_101", "R1_XINYI", "R1_RAO"];
                isRouteOne = true;
            } else {
                selectedKeys = ["R2_LONG", "R2_XIMEN", "R2_DIHUA", "R2_PIER", "R2_NING"];
                isRouteOne = false;
            }
        } else {
            // === 模式二：自選自由行模式 (DIY) ===
            const checkedBoxes = document.querySelectorAll('input[name="stations"]:checked');
            const selectedUserStations = [];
            checkedBoxes.forEach(box => selectedUserStations.push(box.value));

            if (selectedUserStations.length === 0) {
                selectedKeys = ["R1_CKS", "R1_YONG", "R1_101"];
                isRouteOne = true;
            } else {
                // 強制使用靜態繁中大名單比對，徹底阻斷日韓文 Value 找不到對應的錯位問題
                const hasR1 = selectedUserStations.some(s => ["中正紀念堂", "東門", "台北101/世貿", "市政府", "松山", "象山"].includes(s));
                isRouteOne = hasR1;
                
                const targetZHDatabase = isRouteOne ? routeOneDatabase.zh : routeTwoDatabase.zh;
                
                selectedUserStations.forEach(stationName => {
                    targetZHDatabase.forEach(zhItem => {
                        if (zhItem.station === stationName && !selectedKeys.includes(zhItem.spotKey)) {
                            selectedKeys.push(zhItem.spotKey);
                        }
                    });
                });

                // 按黃金路線順序進行時間流排序
                const fullOrder = ["R1_CKS", "R1_YONG", "R1_101", "R1_XINYI", "R1_RAO", "R2_LONG", "R2_XIMEN", "R2_DIHUA", "R2_PIER", "R2_NING"];
                selectedKeys.sort((a, b) => fullOrder.indexOf(a) - fullOrder.indexOf(b));
            }
        }

        // 足跡踩點去重
        selectedKeys = selectedKeys.filter(key => !visitedList.includes(key));

        let finalRouteData = [];
        const currentDatabase = isRouteOne ? db1 : db2;
        
        selectedKeys.forEach(key => {
            const match = currentDatabase.find(item => item.spotKey === key);
            if (match) finalRouteData.push(match);
        });

        // 時間流累算
        const hr = parseInt(document.getElementById('time-select-hour').value) || 9;
        const min = parseInt(document.getElementById('time-select-minute').value) || 0;
        let timePointer = hr + (min / 60);

        const r1TransitTimes = [0.1, 0.15, 0.13, 0.33]; 
        const r2TransitTimes = [0.05, 0.13, 0.13, 0.2]; 

        for (let i = 0; i < finalRouteData.length; i++) {
            if (i > 0) {
                let transitGap = 0.2; 
                if (isRouteOne) {
                    if (r1TransitTimes[i-1]) transitGap = r1TransitTimes[i-1];
                } else {
                    if (r2TransitTimes[i-1]) transitGap = r2TransitTimes[i-1];
                }
                timePointer += transitGap;
            }
            
            let dur = finalRouteData[i].duration ? finalRouteData[i].duration : 1.5;
            finalRouteData[i].time = `${formatNumberToTime(timePointer)} - ${formatNumberToTime(timePointer + dur)}`;
            timePointer += dur;
        }

        renderFinalResults(finalRouteData, isRouteOne, isLanguageSwitching);

    } catch (err) {
        console.error("Critical Error: ", err);
        renderFinalResults([], true, isLanguageSwitching);
    }
}

// 🔒 結尾完整、絕對不腰斬截斷的渲染函數
function renderFinalResults(results, isRouteOne, isLanguageSwitching) {
    const container = document.getElementById('result-list-container');
    const dict = uiTranslations[currentLang] || uiTranslations.zh;
    
    if (results.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px; color:#9c9386; font-size:14px; background:#fff; border-radius:16px; border:1px solid #edebe4;">
                📭 目前選擇的站點組合在資料庫中尚無推薦景點行程，請嘗試勾選其他站點（如：中正紀念堂、東門、北門、龍山寺、西門、市政府shortcut）。
            </div>
        `;
        if (!isLanguageSwitching) switchPage('page-result');
        return;
    }

    let html = "";
    const r1TransitTexts = [dict.transit_r1_0, dict.transit_r1_1, dict.transit_r1_2, dict.transit_r1_3];
    const r2TransitTexts = [dict.transit_r2_0, dict.transit_r2_1, dict.transit_r2_2, dict.transit_r2_3];

    for (let i = 0; i < results.length; i++) {
        const match = results[i];
        const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(match.title + " Taipei");

        let authMarkButton = "";
        if (loggedInUser) {
            authMarkButton = `
                <button onclick="markAsVisited('${match.spotKey}')" style="
                    background: #8da290; color: white; border: none; padding: 5px 10px; 
                    border-radius: 6px; font-size: 11px; font-weight: bold; cursor: pointer; 
                    white-space: nowrap; display: inline-block; vertical-align: middle; margin-left: 6px;
                ">
                    ${dict.visited_btn_text}
                </button>
            `;
        }

        html += `
            <div class="result-card" style="padding: 20px; border-radius: 16px; position: relative; margin-bottom: 15px; background: #fff; border: 1px solid #edebe4;">
                <div class="time-flow-badge" style="margin-bottom: 8px; display: inline-block; background: #ebdacf; color: #5a4a42; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: bold;">⏱️ ${match.time}</div>
                <h3 class="result-name" style="font-size: 19px; font-weight: bold; margin-bottom: 6px; color: #4a4d4a;">${match.title} <span style="font-size:12px; color:#a8a297; font-weight:normal;">(${match.station}站)</span></h3>
                <p class="result-desc" style="font-size: 13px; color: #666; margin-bottom: 12px; line-height: 1.5;">${match.desc}</p>
                
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; border-top: 1px solid #f2f0ea; padding-top: 10px; gap: 8px;">
                    <div style="font-size: 12px; color: #a8a297; display: flex; align-items: center;">
                        <span>${dict.cost_prefix}${match.cost}</span>
                        ${authMarkButton}
                    </div>
                    <a href="${googleMapUrl}" target="_blank" style="font-size: 12px; color: #b89f93; font-weight: bold; text-decoration: none; white-space: nowrap;">${dict.map_nav}</a>
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
    if (!isLanguageSwitching) switchPage('page-result');
}