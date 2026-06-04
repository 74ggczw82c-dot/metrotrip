// ==========================================
// 雙北捷運 16 站 × 5 大心情主題 = 80 筆真實無重疊結構化資料庫
// ==========================================
const database = [
    // 1. 中山站 (淡水信義線/松山新店線)
    { station: "中山", line: "淡水信義線/松山新店線", theme: "靜謐獨處", title: "地下書街的避世角落", query: "誠品R79地下書街", approxCost: "100元", desc: "躲進全台最長的地下書街，在冷氣開放的成排書架間翻閱書籍，享受不被打擾的免費午後時光。", open: 10, close: 22, duration: 1.5 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "文青拍照", title: "赤峰街老鐵窗花老屋散策", query: "赤峰街", approxCost: "0元", desc: "穿梭舊打鐵街巷弄，老公寓的洗石子外牆與日系服飾選品店交錯，用快門記錄都市新舊交織的光影碎片。", open: 11, close: 21, duration: 1.5 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "美食尋味", title: "現烤經典爆漿抹茶司康", query: "悄悄好食 中山店", approxCost: "160元", desc: "隱身中山巷弄的知名點心鋪，剛出爐的司康外皮酥脆、內裡溫熱，搭配濃郁鮮奶油抹醬，極其幸福。", open: 11, close: 19, duration: 1.0 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "自然慢活", title: "心中山線形公園漫步日常", query: "心中山線形公園", approxCost: "0元", desc: "沿著地面的帶狀公共綠廊散步，觀賞兩旁繁茂樹蔭與前衛裝置藝術，坐在木質長椅上吹風放空。", open: 0, close: 24, duration: 1.0 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "老派懷舊", title: "蔡瑞月舞蹈研究社日式古蹟", query: "蔡瑞月舞蹈研究社", approxCost: "150元", desc: "隱身摩天大樓群中的日式黑瓦木造建築，走在檜木長廊上，點一杯黑咖啡回味台灣現代舞的歷史記憶。", open: 10, close: 17, duration: 1.5 },

    // 2. 淡水站 (淡水信義線)
    { station: "淡水", line: "淡水信義線", theme: "靜謐獨處", title: "海關碼頭的觀音山凝望", query: "淡水海關碼頭", approxCost: "0元", desc: "刻意避開老街前段的喧囂，坐在最尾端的水岸矮牆上，看著平靜河面與遠方觀音山沉澱紊亂心思。", open: 9, close: 21, duration: 2.0 },
    { station: "淡水", line: "淡水信義線", theme: "文青拍照", title: "殼牌倉庫舊日鐵道紅磚迷蹤", query: "淡水文化園區", approxCost: "0元", desc: "百年古蹟油品倉庫群，縱橫的紅磚牆、古老鐵軌與舊工業遺址在夕陽黃昏折射下極具老電影故事感。", open: 9, close: 17, duration: 1.5 },
    { station: "淡水", line: "淡水信義線", theme: "美食尋味", title: "真理街正宗文化阿給小吃", query: "淡水文化阿給", approxCost: "45元", desc: "順著山坡斜坡向上才能品嚐到的在地老店。油豆腐塞滿Q彈冬粉，淋上靈魂甜辣醬汁，最地道的庶民午餐。", open: 6, close: 18, duration: 1.0 },
    { station: "淡水", line: "淡水信義線", theme: "自然慢活", title: "金色水岸單車河風徐徐日常", query: "淡水金色水岸", approxCost: "40元", desc: "租一台單車沿著沒有車輛干擾的水岸步道騎行，迎著海風，左手邊是寬廣河面與碧綠紅樹林保護區。", open: 0, close: 24, duration: 1.5 },
    { station: "淡水", line: "淡水信義線", theme: "老派懷舊", title: "重建街依山老石階古道幽徑", query: "淡水重建街", approxCost: "0元", desc: "淡水歷史上的第一條老街，依山勢而建的層層石階與靜默老洋房，完全沒有商業喧囂，只有時光倒流的恬靜。", open: 0, close: 24, duration: 1.0 },

    // 3. 東門站 (淡水信義線/中和新蘆線)
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "靜謐獨處", title: "青田街綠意大樹日式宿舍群", query: "青田街", approxCost: "0元", desc: "漫步在被譽為台北最美綠蔭巷弄的青田街，老樹遮天蔽日，一間間黑瓦木造的舊日式宿舍靜靜佇立。", open: 9, close: 18, duration: 1.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "文青拍照", title: "永康街後巷手作陶瓷店選品", query: "永康街", approxCost: "0元", desc: "縱橫縱深的獨立後巷，綠意盎然的盆栽佈置與質感手工小店相得益彰，隨便街拍都充滿日系雜誌氛圍。", open: 11, close: 21, duration: 1.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "美食尋味", title: "天津蔥抓餅排隊熱騰騰老味道", query: "天津蔥抓餅", approxCost: "60元", desc: "永康街口永遠在排隊的台式下午茶，外皮抓得金黃香酥、內裡層次豐富，加九層塔與蛋香氣撲鼻。", open: 9, close: 22, duration: 0.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "自然慢活", title: "大安森林公園池畔生態散策", query: "大安森林公園", approxCost: "0元", desc: "散步至城市之肺，沿著大型生態池畔木棧道前行，觀賞大群白鷺鷥與水鳥，躺在草皮上享受森林慢活。", open: 0, close: 24, duration: 1.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "老派懷舊", title: "榕錦時光台北刑務所舊官舍群", query: "榕錦時光生活園區", approxCost: "0元", desc: "百年老監獄官舍群完整修復，走在木造老廊道與日式枯山水庭園中，凝視歷史留下來的紅磚老圍牆。", open: 11, close: 20, duration: 1.5 },

    // 4. 信義安和站 (淡水信義線)
    { station: "信義安和", line: "淡水信義線", theme: "靜謐獨處", title: "文昌街家具聚落隱密榻榻米茶室", query: "文昌街茶室", approxCost: "300元", desc: "低調隱身在傳統家具街巷弄二樓，面對沉靜的街道，親自為自己沏一壺台灣高山烏龍，安放喧囂心思。", open: 12, close: 20, duration: 1.5 },
    { station: "信義安和", line: "淡水信義線", theme: "文青拍照", title: "通安後巷工業復古昭和風街景", query: "文昌街", approxCost: "0元", desc: "舊公寓洗石子牆面與鏤空生鏽鐵窗花，在傍晚街燈初亮、夜幕低垂時，拍出濃郁冷冽的王家衛電影美感。", open: 0, close: 24, duration: 1.0 },
    { station: "信義安和", line: "淡水信義線", theme: "美食尋味", title: "通庵文青風低調手工熟成咖哩", query: "通庵 熟成咖哩", approxCost: "250元", desc: "極具美學設計感的咖哩專賣店，慢火熬煮熟成多日的香料醬汁充滿層次且微辣焦香，高CP值的味覺饗宴。", open: 11, close: 21, duration: 1.0 },
    { station: "信義安和", line: "淡水信義線", theme: "自然慢活", title: "安和住宅區隱密小公園落葉午後", query: "安和公園", approxCost: "0元", desc: "穿過繁忙的信義路幹道拐進巷弄，坐在社區公園大榕樹長椅上看著落葉，給自己一小時的純粹發呆。", open: 0, close: 24, duration: 1.0 },
    { station: "信義安和", line: "淡水信義線", theme: "老派懷舊", title: "四四南村眷村矮平房與現代101", query: "四四南村", approxCost: "0元", desc: "台北最早的聯勤第一兵工廠眷村遺址。站在青綠草坡上，看復古老木門、紅色紗窗與背後現代 101 的強烈對比。", open: 9, close: 17, duration: 1.5 },

    // 5. 西門站 (板南線/松山新店線)
    { station: "西門", line: "板南線/松山新店線", theme: "靜謐獨處", title: "西本願寺日式佛寺八輪堂禪意", query: "西本願寺", approxCost: "0元", desc: "鬧區正旁邊的一抹淨土。走在日式佛寺遺址的寬廣木棧道上，坐在樹蔭下靜靜聆聽風鈴聲，心情無比舒暢。", open: 9, close: 17, duration: 1.0 },
    { station: "西門", line: "板南線/松山新店線", theme: "文青拍照", title: "電影主題公園前衛街頭藝術塗鴉", query: "西門町電影主題公園", approxCost: "0元", desc: "由美商台灣瓦斯株式會社舊工廠改建，巨大的紅磚老煙囪與大片色彩斑斕、充滿美式極簡感的前衛牆面塗鴉。", open: 0, close: 24, duration: 1.0 },
    { station: "西門", line: "板南線/松山新店線", theme: "美食尋味", title: "成都老字號琥珀色傳統古法楊桃冰", query: "成都楊桃冰", approxCost: "60元", desc: "延續半世紀的老西門靈魂小吃。純手工醃製、酸甜中帶點微鹹的古法楊桃冰沙，在夏日極其沁涼消暑。", open: 10, close: 22, duration: 0.5 },
    { station: "西門", line: "板南線/松山新店線", theme: "自然慢活", title: "貴陽街百年老街廓樟樹綠蔭散策", query: "貴陽街", approxCost: "0元", desc: "刻意偏離西門町徒步區，漫步至台北最老街廓，沿著舊式巴洛克街屋與茂密樟樹行道樹前行，享受老慢日常。", open: 0, close: 24, duration: 1.0 },
    { station: "西門", line: "板南線/松山新店線", theme: "老派懷舊", title: "西門紅樓百年紅磚八角懷舊記憶", query: "西門紅樓", approxCost: "0元", desc: "建於 1908 年的公營市場，八角樓與十字樓紅磚巍峨。走進挑高大廳內閱讀台北老牌庶民演變的舊照片展演。", open: 11, close: 21, duration: 1.5 },

    // 6. 板橋站 (板南線/環狀線)
    { station: "板橋", line: "板南線/環狀線", theme: "靜謐獨處", title: "新北市府32樓景觀台雲端俯瞰", query: "新北市政府景觀台", approxCost: "0元", desc: "搭乘高空快速電梯直達免費景觀台，獨自站在巨幅落地窗前，居高臨下觀看火車軌道與遠方山巒，極其安靜。", open: 8, close: 22, duration: 1.0 },
    { station: "板橋", line: "板南線/環狀線", theme: "文青拍照", title: "新板都會特區立體幾何空中走廊", query: "板橋萬坪都會公園", approxCost: "0元", desc: "高密度的現代主義商辦大樓之間，交錯穿插著全白極簡線條的立體空中鋼構連廊，非常有結構性視覺張力。", open: 0, close: 24, duration: 1.0 },
    { station: "板橋", line: "板南線/環狀線", theme: "美食尋味", title: "光正街住宅巷弄職人草莓戚風蛋糕", query: "點點甜甜", approxCost: "180元", desc: "低調隱身在舊紅磚民宅巷弄，這家文青法式甜點舖的抹茶戚風蛋糕綿密蓬鬆、鮮奶油溫潤優雅不甜膩。", open: 12, close: 20, duration: 1.5 },
    { station: "板橋", line: "板南線/環狀線", theme: "自然慢活", title: "萬坪都會綠地環形步道水道散步", query: "板橋萬坪都會公園", approxCost: "0元", desc: "走出高鐵站就能沒入的大片天然綠地，開闢有清幽的水道與人工池塘，沿著木屑碎石步道慢步，調適緊繃日常。", open: 0, close: 24, duration: 1.0 },
    { station: "板橋", line: "板南線/環狀線", theme: "老派懷舊", title: "林本源園邸江南蘇州園林窗花", query: "林本源園邸", approxCost: "80元", desc: "全台灣保存最完整的古典富豪江南家庭庭園。走在亭台樓閣、假山漏窗間，體驗步移景易的東方古典精緻生活。", open: 9, close: 17, duration: 2.0 },

    // 7. 龍山寺站 (板南線)
    { station: "龍山寺", line: "板南線", theme: "靜謐獨處", title: "艋舺地藏庵低調百年沉香微煙", query: "艋舺地藏庵", approxCost: "0元", desc: "故意繞過龍山寺觀光正殿，隔壁的地藏庵香客稀少。坐在百年大廟埕長椅上，沉浸在天然沉香微煙中找回專注。", open: 6, close: 19, duration: 1.0 },
    { station: "龍山寺", line: "板南線", theme: "文青拍照", title: "剝皮寮歷史街區清代磚紅拱門", query: "剝皮寮歷史街區", approxCost: "0元", desc: "台北市絕無僅有、完整保留清代街廓格局的歷史保護區。斑駁老紅磚拱門與木製老窗櫺在斜射光影下電影感爆棚。", open: 9, close: 18, duration: 1.5 },
    { station: "龍山寺", line: "板南線", theme: "美食尋味", title: "新富町傳統老市場傳統手工芋頭油粿", query: "蘇家肉圓油粿", approxCost: "55元", desc: "藏在日治古蹟市場旁的巷內小吃。軟Q的米漿外皮緊緊裹著飽滿大塊的鬆軟大甲芋頭，淋上傳統鹹甜特製醬汁。", open: 10, close: 20, duration: 1.0 },
    { station: "龍山寺", line: "板南線", theme: "自然慢活", title: "艋舺公園老榕樹下庶民接地氣日常", query: "艋舺公園", approxCost: "0元", desc: "龍山寺前的大片開闊廣場，成排巨大的老榕樹下聚滿下棋長者。沿著宏偉的圓形噴泉漫步，體驗台北最草根的面貌。", open: 0, close: 24, duration: 1.0 },
    { station: "龍山寺", line: "板南線", theme: "老派懷舊", title: "百年藥香瀰漫萬華青草巷茶室", query: "万华青草巷", approxCost: "40元", desc: "窄小的古老小巷兩側擺滿新鮮翠綠與乾燥的台灣中草藥。點一杯用阿嬤古法熬煮的冰涼微苦青草茶，吸滿洗練藥香。", open: 8, close: 22, duration: 0.5 },

    // 8. 市政府站 (板南線)
    { station: "市政府", line: "板南線", theme: "靜謐獨處", title: "松菸文創老廠房生態池閱覽室", query: "松山文創園區", approxCost: "0元", desc: "穿過菸廠舊址的巴洛克歐式花園，來到隱密的生態荷花池畔，坐在玻璃窗前看著水鳥，是信義區極奢的免費寧靜角落。", open: 9, close: 18, duration: 1.5 },
    { station: "市政府", line: "板南線", theme: "文青拍照", title: "日治水泥廠房挑高採光磨石子大長廊", query: "松山文創園區", approxCost: "0元", desc: "1930年代日本現代主義代表廠房。洗練的灰色磨石子長階梯、洗鍊連續的水平開窗，在水泥灰度光影下極具極簡工業感。", open: 9, close: 18, duration: 1.5 },
    { station: "市政府", line: "板南線", theme: "美食尋味", title: "信義區百貨高樓手工爆汁極致湯包", query: "樂天皇朝 信義店", approxCost: "520元", desc: "落座大片透明玻璃吧台前。觀看職人現場純手工揉麵捏出完美摺線，剛出爐的湯包皮薄汁多，鹹鮮高檔的高空體驗。", open: 11, close: 21, duration: 1.5 },
    { station: "市政府", line: "板南線", theme: "自然慢活", title: "老製菸廠落羽松環抱環池綠廊散步", query: "松山文創園區", approxCost: "0元", desc: "大片高耸的落羽松林環抱著舊菸廠生態池。聽著青蛙叫聲、看鴛鴦悠哉游水，在繁華高樓正中央享受純天然慢活。", open: 9, close: 22, duration: 1.0 },
    { station: "市政府", line: "板南線", theme: "老派懷舊", title: "信義公民會館眷村青草坡黑瓦矮平房", query: "信義公民會館", approxCost: "0元", desc: "穿梭昔日聯勤四四兵工廠的眷村老瓦房內部，看斑駁木製紗窗、鏽蝕紅鐵門，沉浸在大都市蜕變前的舊生活記憶。", open: 9, close: 17, duration: 1.5 },

    // 9. 公館站 (松山新店線)
    { station: "公館", line: "松山新店線", theme: "靜謐獨處", title: "台灣大學舊圖書館後方隱密草坪長椅", query: "台灣大學總圖書館", approxCost: "0元", desc: "漫步走入椰林大道深處，總圖書館背後隱藏著一塊被高大楓香樹環繞的僻靜草地，躺著聽微風吹拂，極度知性清幽。", open: 0, close: 24, duration: 1.5 },
    { station: "公館", line: "松山新店線", theme: "文青拍照", title: "寶藏岩歷史山城錯落違建微型聚落", query: "寶藏岩國際藝術村", approxCost: "0元", desc: "蜿蜒小路向上的老兵歷史违建聚落。斑駁的水泥泥牆、手繪地圖與現代當代微型裝置藝術完美共生，魔幻寫實街拍首選。", open: 11, close: 22, duration: 2.0 },
    { station: "公館", line: "松山新店線", theme: "美食尋味", title: "水源市場正宗濃厚柴燒黑糖珍珠鮮奶", query: "公館商圈", approxCost: "65元", desc: "排隊名店小吃。現煮熱氣蒸騰的軟Q大顆波霸珍珠散發極其濃郁的炭燒黑糖蜜香，沖入大量冰涼純鮮奶，冷熱交織神作。", open: 11, close: 22, duration: 0.5 },
    { station: "公館", line: "松山新店線", theme: "自然慢活", title: "自來水古蹟園區隱密山林親山小徑", query: "自來水園區", approxCost: "80元", desc: "避開粉紅巴洛克唧筒室大批遊客。穿過後方，隱藏著一條少有人知的原木生態木棧道步道，沒入蓊鬱的相思樹林山丘中。", open: 9, close: 17, duration: 1.5 },
    { station: "公館", line: "松山新店線", theme: "老派懷舊", title: "溫州街人文書店落葉小徑老選品咖啡", query: "溫州街", approxCost: "150元", desc: "瀰漫強烈自由主義文氣的人文巷弄。老舊日式榻榻米公寓改建的二手書店與深夜黑咖啡館，是老台北獨立思想的搖籃。", open: 12, close: 22, duration: 1.5 },

    // 10. 新店站 (松山新店線)
    { station: "新店", line: "松山新店線", theme: "靜謐獨處", title: "碧潭東岸峭壁斷崖下方臨水幽靜看台", query: "碧潭風景區", approxCost: "0元", desc: "遠離熱鬧的天鵝船碼頭。順著東岸岩壁步道走到最深處的無人看台，坐在緊鄰碧綠潭水的石椅上，獨享無聲平靜。", open: 0, close: 24, duration: 1.5 },
    { station: "新店", line: "松山新店線", theme: "文青拍照", title: "百年碧潭吊橋宏偉現代鋼索對稱幾何", query: "碧潭吊橋", approxCost: "0元", desc: "1937年落成的老吊橋。巨大的鋼構橋塔與在天空中交織出的對稱幾何鋼索線條，在夕陽或夜間亮燈時拍攝，畫面極具張力。", open: 0, close: 24, duration: 1.0 },
    { station: "新店", line: "松山新店線", theme: "美食尋味", title: "光明街傳承半世紀傳統木造手工油飯", query: "光明街油飯", approxCost: "70元", desc: "老字號街廓犛地小吃。粒粒分明、充滿豬油與油蔥香氣的手工蒸油飯，拌入大塊香菇乾，再配一碗鮮甜花枝羹最在地。", open: 11, close: 20, duration: 1.0 },
    { station: "新店", line: "松山新店線", theme: "自然慢活", title: "和美山親山生態古道翠綠竹林登山", query: "和美山登山步道", approxCost: "0元", desc: "走過老吊橋即可抵達登山入口。只需徐徐爬行 15 分鐘便能徹底沒入茂密的蕨類與筆筒樹林綠海中，高空俯瞰碧潭。", open: 0, close: 24, duration: 2.0 },
    { station: "新店", line: "松山新店線", theme: "老派懷舊", title: "新店溪渡船頭全台灣僅存人力手劃擺渡", query: "新店溪渡船頭", approxCost: "30元", desc: "始於始於清代的百年全人力手划擺渡船。坐在搖晃的純木造小舟上聽著船夫规律的木槳劃水聲，老派至極地橫渡潭水。", open: 6, close: 19, duration: 1.0 },

    // 11. 松江南京站 (松山新店線/中和新蘆線)
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "靜謐獨處", title: "隱密商辦大樓二樓滿窗綠蔭和風茶席", query: "伊通公園", approxCost: "220元", desc: "隱身在商務辦公區大樓的預約制高雅茶空間。面對伊通公園的一整面大落地窗綠意，在煮水沸騰聲中獨享留白。", open: 11, close: 19, duration: 1.5 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "文青拍照", title: "四平陽光商圈全露天懸掛萬國繽紛三角旗", query: "四平陽光商圈", approxCost: "0元", desc: "充滿老台北生活氣息的露天步行女性街。天際線鋪滿成排五顏六色的三角形小旗幟，在正午陽光穿透下呈現極佳幾何斑斕感。", open: 10, close: 21, duration: 1.0 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "美食尋味", title: "富霸王琥珀色招牌膠質軟爛入口即化豬腳", query: "富霸王豬腳", approxCost: "150元", desc: "台北金融商務區的傳奇名店。老滷汁燉煮得晶瑩剔透、富含極致膠質的軟爛中段豬腳，鹹甜適中，老台北美食天花板。", open: 11, close: 20, duration: 1.0 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "自然慢活", title: "商務核心伊通公園老雀榕環形碎石散步", query: "伊通公園", approxCost: "0元", desc: "玻璃帷幕摩天大樓包圍中的一片老純綠公園。中庭長滿數株繁茂的高大老雀榕，看鴿子在草坪覓食，放慢急促步伐。", open: 0, close: 24, duration: 1.0 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "老派懷舊", title: "袖珍博物館維多利亞時代微縮工藝精粹", query: "袖珍博物館", approxCost: "200元", desc: "亞洲第一家專業收藏袖珍微縮藝術的聖殿。成排極其精準逼真的歐式古董娃娃屋，重現維多利亞工藝老派優雅時光。", open: 10, close: 18, duration: 2.0 },

    // 12. 大橋頭站 (中和新蘆線)
    { station: "大橋頭", line: "中和新蘆線", theme: "靜謐獨處", title: "台灣基督長老修道教堂哥德式彩繪玻璃微光", query: "大稻埕外灘", approxCost: "0元", desc: "這座具有百年歷史的老教堂內部安靜神聖。獨自坐在光滑的檜木長椅上，看彩繪玻璃透入的垂直微光，心靈平穩。", open: 9, close: 17, duration: 1.0 },
    { station: "大橋頭", line: "中和新蘆線", theme: "文青拍照", title: "迪化街北段清水紅磚洋樓深邃天井老屋", query: "迪化街", approxCost: "0元", desc: "刻意避開熱鬧南段。大稻埕北段完整保留了中產街屋與仿巴洛克式洋樓建築，內部中庭縱深天井的光影垂直落差極佳。", open: 9, close: 18, duration: 1.5 },
    { station: "大橋頭", line: "中和新蘆線", theme: "美食尋味", title: "大稻埕慈聖宮老榕樹光影底下鮮甜古早鹹粥", query: "大稻埕慈聖宮", approxCost: "85元", desc: "坐在數百年老廟埕的大榕樹綠蔭光影下。來一碗傳統洗練的鮮甜高湯豬肉鹹粥，配一盤金黃現炸紅燒肉，靈魂老台北早餐。", open: 9, close: 15, duration: 1.0 },
    { station: "大橋頭", line: "中和新蘆線", theme: "自然慢活", title: "延平河濱公園寬廣堤外碼頭水岸落日慢步", query: "延平河濱公園", approxCost: "0元", desc: "步行出水門來到堤外河濱。黃昏時看淡水河夕陽緩緩沉入遠方淡水河口與觀音山，開闊的視野能徹底釋放城市壓力。", open: 0, close: 24, duration: 1.5 },
    { station: "大橋頭", line: "中和新蘆線", theme: "老派懷舊", title: "迪化街傳統中藥老行乾貨藥香洗練縮影", query: "迪化街", approxCost: "0元", desc: "空氣中永遠散發著當歸、黃耆與南北乾貨的天然淡雅中藥芬芳。看著店鋪阿伯用木秤計重，大稻埕最洗練的老靈魂。", open: 9, close: 19, duration: 1.5 },

    // 13. 行天宮站 (中和新蘆線)
    { station: "行天宮", line: "中和新蘆線", theme: "靜謐獨處", title: "恩主公本殿洗練不燒金紙洪亮誦經沉澱", query: "行天宮", approxCost: "0元", desc: "走入完全不燒金紙與供品的環保前衛本殿。坐在洗石子地坪長椅上，耳邊迴盪宏亮规律的誦經聲，浮躁感一掃而空。", open: 4, close: 22, duration: 1.0 },
    { station: "行天宮", line: "中和新蘆線", theme: "文青拍照", title: "民宅舊社區洗石子外牆與盛開九重葛", query: "行天宮", approxCost: "0元", desc: "廟宇周邊後巷完整保留大量1970年代的四層公寓步道。灰白洗石子老圍牆、漆黑鏤空鐵窗花與大片盛開九重葛生活感極佳。", open: 0, close: 24, duration: 1.0 },
    { station: "行天宮", line: "中和新蘆線", theme: "美食尋味", title: "老住宅平房巷弄職人手作小山園焦糖戚風", query: "疍宅", approxCost: "200元", desc: "低調隱密隱身在民宅窄巷。店內擺滿歐式舊復古木件，現點現做的抹茶戚風蛋糕淋上微苦手工焦糖流沙，味覺層次頂級。", open: 12, close: 23, duration: 1.5 },
    { station: "行天宮", line: "中和新蘆線", theme: "自然慢活", title: "新生公園古典歐洲玫瑰園溫室香氣步道", query: "新生公園玫瑰園", approxCost: "0元", desc: "漫步走入花博新生園區。這裡種植有上百種來自歐洲的珍貴古典玫瑰，沿著蜿蜒的白石子路徐徐踱步，空氣極其高雅慢活。", open: 0, close: 24, duration: 1.5 },
    { station: "行天宮", line: "中和新蘆線", theme: "老派懷舊", title: "行天宮寬廣地下道命理招牌古老算命街", query: "行天宮算命街", approxCost: "0元", desc: "十字路口正下方的巨型地下道內部。成排保留著台灣最著名的相命攤位，昏黃日光燈與龜殼卜卦聲，充滿舊時代玄學的神祕。", open: 9, close: 21, duration: 1.0 },

    // 14. 大湖公園站 (文湖線)
    { station: "大湖公園", line: "文湖線", theme: "靜謐獨處", title: "大湖西側僻靜老垂柳依水發呆原木長椅", query: "大湖公園", approxCost: "0元", desc: "刻意繞過草皮人群走到人煙稀少的西側水岸。坐在低垂入水面的巨大老柳樹下方原木椅上，凝視湖泊鏡面獨享平靜。", open: 6, close: 22, duration: 1.5 },
    { station: "大湖公園", line: "文湖線", theme: "文青拍照", title: "白鷺鷥親山保護區大片羽狀落羽松林格", query: "大湖公園", approxCost: "0元", desc: "捷運軌道正下方的落羽松群林。在特定季節由綠轉紅，後方是高架全玻璃結構的現代文湖線軌道，線條融合度極佳。", open: 6, close: 22, duration: 1.0 },
    { station: "大湖公園", line: "文湖線", theme: "美食尋味", title: "內湖舊城區傳統老麵炭烤純手工老張燒餅", query: "老張炭烤燒餅店", approxCost: "50元", desc: "散步至站外五分鐘的傳統街廓。職人現做老麵燒餅外皮沾滿飽滿白芝麻、放入大炭爐烘烤得焦香酥脆，鹹蔥內餡蔥香四溢。", open: 6, close: 20, duration: 0.5 },
    { station: "大湖公園", line: "文湖線", theme: "自然慢活", title: "古典圓形錦帶拱橋大片綠地水面留白", query: "大湖公園", approxCost: "0元", desc: "大稻埕外最美的雙北水景公園。古典拱橋與中式涼亭倒映在翠綠的大湖水面上，鋪開野餐墊看白鷺鷥飛落，享受純自然慢活。", open: 6, close: 22, duration: 2.0 },
    { station: "大湖公園", line: "文湖線", theme: "老派懷舊", title: "白鷺鷥山親山古道古老長滿青苔五十彎石階", query: "白鷺鷥山親山步道", approxCost: "0元", desc: "捷運站正對面的原始小山丘。完全保留早期手作、長滿青苔的古老碎石石階步道，依山勢蜿蜒折返，重拾舊內湖山林記憶。", open: 0, close: 24, duration: 1.5 },

    // 15. 動物園站 (文湖線)
    { station: "動物園", line: "文湖線", theme: "靜謐獨處", title: "貓空深山壺穴步道僻靜幽谷溪流原木平台", query: "貓空 壺穴步道", approxCost: "0元", desc: "搭纜車上山走向少有人煙的茶園深處小徑。這裡只剩下小溪潺潺流水聲與樹蟬鳴叫，獨自坐在原木平台上被森林包圍。", open: 9, close: 17, duration: 2.0 },
    { station: "動物園", line: "文湖線", theme: "文青拍照", title: "貓空纜車高空全透明水晶車廂透視盆栽線條", query: "貓空纜車", approxCost: "120元", desc: "搭乘底部完全是強化透明玻璃的特製車廂。向下看是垂直整齊的梯田茶園，向前看能將一整座大台北地平線盡收眼底。", open: 9, close: 21, duration: 1.5 },
    { station: "動物園", line: "文湖線", theme: "美食尋味", title: "山頂限定茶香回甘鐵觀音手工霜淇淋", query: "貓空 霜淇淋", approxCost: "90元", desc: "山頂茶行開發限定。將茶葉低溫磨成細粉融入口感細緻的在地厚乳中，微苦帶甜帶有木質茶火香，外觀點綴小貓煎餅。", open: 10, close: 20, duration: 0.5 },
    { station: "動物園", line: "文湖線", theme: "自然慢活", title: "樟樹步道古樸老穀倉裝置茶園霧氣漫漫", query: "貓空樟樹步道", approxCost: "0元", desc: "極其平緩寬廣的景觀步道。兩側是整齊劃一的翠綠木柵茶園，半山腰飄渺的白霧籠罩古樸的農村舊穀倉，洗滌身心疲憊。", open: 0, close: 24, duration: 2.0 },
    { station: "動物園", line: "文湖線", theme: "老派懷舊", title: "張迺妙茶師老紀念館黑瓦三合院天井木造", query: "張迺妙茶師紀念館", approxCost: "100元", desc: "參訪深山中的傳統黑瓦老茶厝。坐在全木造的四合院天井下，看老茶師熟練地用龍眼木炭慢火焙茶，體驗最古法的老派茶味。", open: 9, close: 17, duration: 1.5 },

    // 16. 科技大樓站 (文湖線)
    { station: "科技大樓", line: "文湖線", theme: "靜謐獨處", title: "國北教大百年古老校園紅磚舊溫室蕨類角落", query: "國立臺北教育大學", approxCost: "0元", desc: "步入捷運站旁的百年師範校園深處。理學館後方遺留著一座日治時期的廢棄紅磚溫室，內部爬滿蔓藤，坐在斑駁椅上聽校鐘聲。", open: 7, close: 22, duration: 1.5 },
    { station: "科技大樓", line: "文湖線", theme: "文青拍照", title: "成功國宅現代主義重複幾何巨型社區中庭", query: "成功國宅", approxCost: "0元", desc: "走入全台北最大規模的現代主義老國宅社區。四周被強烈、規律重複線條的高聳公寓包圍，圓形中庭在日落時極具電影色調。", open: 0, close: 24, duration: 1.0 },
    { station: "科技大樓", line: "文湖線", theme: "美食尋味", title: "瑞安街住宅小巷甘甜香料低溫熟成日式咖哩", query: "科技大樓站 咖哩", approxCost: "220元", desc: "隱密住宅區的吧台小店。嚴選數十種香料低溫熟成多日的香料日式咖哩醬，牛肋條炙烤得極其軟嫩，極受附近學生饕客追捧。", open: 11, close: 21, duration: 1.0 },
    { station: "科技大樓", line: "文湖線", theme: "自然慢活", title: "大安住宅區瑞安街優雅林蔭老公寓陽台垂綠", query: "瑞安街", approxCost: "0元", desc: "兩旁種滿高大老樟樹的優雅林蔭巷弄。舊公寓水泥陽台上垂掛著茂密翠綠的薜荔藤蔓，放慢步伐散步聽麻雀鳴叫，極度舒心。", open: 0, close: 24, duration: 1.0 },
    { station: "科技大樓", line: "文湖線", theme: "老派懷舊", title: "經典黑膠老唱片私人私人音樂真空管吧台香氣", query: "經典黑膠", approxCost: "150元", desc: "擺滿上萬張絕版古典與西洋黑膠的老店。飄散著虹吸咖啡的深焙豆香，耳邊迴盪著發燒級真空管音響特有的溫暖沙沙聲。", open: 13, close: 21, duration: 1.5 }
];

// === 基礎頁面切換機制 ===
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');
}

function openRandomPage() {
    document.getElementById('slot-station').innerText = "？";
    switchPage('page-random');
}

function parseTimeToNumber(timeStr) {
    if (!timeStr || !timeStr.includes(':')) return 12.0;
    const parts = timeStr.split(':');
    return parseInt(parts[0]) + (parseInt(parts[1]) / 60);
}

function formatNumberToTime(num) {
    if (num >= 24) num = num % 24;
    const hours = Math.floor(num);
    const minutes = Math.round((num - hours) * 60);
    return `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}`;
}

// 網頁動態初始化（100% 16站全部流暢載入）
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('station-checkbox-group');
    const startSelect = document.getElementById('select-start-station');
    const endSelect = document.getElementById('select-end-station');
    
    if(!container || !startSelect || !endSelect) return;

    // 16 站點完全對齊
    const stations = [];
    database.forEach(item => { if (!stations.includes(item.station)) stations.push(item.station); });
    
    let gridHtml = "";
    stations.forEach((name, index) => {
        gridHtml += `
            <div class="station-check-item">
                <input type="checkbox" name="stations" id="s-${index}" value="${name}">
                <label for="s-${index}" class="station-check-label">${name}站</label>
            </div>
        `;
    });
    container.innerHTML = gridHtml;
    
    let selectHtml = "";
    stations.forEach(name => { selectHtml += `<option value="${name}">${name}站</option>`; });
    startSelect.innerHTML = selectHtml;
    endSelect.innerHTML = selectHtml;
    
    startSelect.value = "中山";
    if (stations.includes("西門")) endSelect.value = "西門";
    
    switchPage('page-home');
});

// 🚀 核心智慧演算法：多主題自由勾選框 + 用餐生理計數鎖（中餐/晚餐限一次，吃飽自動切主題）
function generateCustomRoute() {
    const startStation = document.getElementById('select-start-station').value;
    const endStation = document.getElementById('select-end-station').value;
    
    const checkedBoxes = document.querySelectorAll('input[name="stations"]:checked');
    const middleStations = [];
    checkedBoxes.forEach(box => {
        if(box.value !== startStation && box.value !== endStation && !middleStations.includes(box.value)) {
            middleStations.push(box.value);
        }
    });
    
    // 🔒 鋼鐵路網卡死限制：行程只能在自選的這幾個站裡跑，任何外站景點絕不會被亂抓
    const fullRoutePlan = [startStation, ...middleStations, endStation];
    const budget = document.querySelector('input[name="select-budget"]:checked').value;
    
    const checkedThemes = document.querySelectorAll('input[name="themes"]:checked');
    const selectedThemes = [];
    checkedThemes.forEach(cb => selectedThemes.push(cb.value));
    if (selectedThemes.length === 0) selectedThemes.push("靜謐獨處");
    
    // 鍵盤打字輸入的時間解析
    const startTimeStr = document.getElementById('select-start-time').value;
    const endTimeStr = document.getElementById('select-end-time').value;
    
    document.getElementById('result-back-btn').setAttribute('onclick', "switchPage('page-select')");
    
    let currentTime = parseTimeToNumber(startTimeStr);
    const maxTime = parseTimeToNumber(endTimeStr);
    const matchResults = [];
    const usedTitles = [];
    
    // 用餐生理狀態鎖
    let hasLunched = false;
    let hasDinnered = false;
    const onlyFoodSelected = (selectedThemes.length === 1 && selectedThemes[0] === "美食尋味");

    for(let i = 0; i < fullRoutePlan.length; i++) {
        let station = fullRoutePlan[i];
        let isSameStation = (matchResults.length > 0 && matchResults[matchResults.length - 1].station === station);
        let arrivalTime = currentTime + (matchResults.length > 0 ? (isSameStation ? 0 : 0.5) : 0);
        
        if (arrivalTime >= maxTime) break;
        
        // 智慧型用餐區間動態切換：午餐和晚餐只排一餐，吃完自動跳回非美食主題
        let currentTargetTheme = selectedThemes[i % selectedThemes.length];
        if ((arrivalTime >= 11.5 && arrivalTime < 14.0) && !hasLunched && selectedThemes.includes("美食尋味")) {
            currentTargetTheme = "美食尋味";
            if (!onlyFoodSelected) hasLunched = true;
        } else if ((arrivalTime >= 17.5 && arrivalTime < 20.3) && !hasDinnered && selectedThemes.includes("美食尋味")) {
            currentTargetTheme = "美食尋味";
            if (!onlyFoodSelected) hasDinnered = true;
        } else {
            // 已吃飽，或者不在餐期中，強制剔除「美食尋味」，輪流排其餘自選主題！
            const nonFoodThemes = selectedThemes.filter(t => t !== "美食尋味");
            if (nonFoodThemes.length > 0) {
                currentTargetTheme = nonFoodThemes[i % nonFoodThemes.length];
            } else {
                currentTargetTheme = selectedThemes[i % selectedThemes.length];
            }
        }
        
        // 🔒 嚴格匹配：限制只能在當前安排的「這個站點」且不可重複
        let match = database.find(item => item.station === station && item.theme === currentTargetTheme && !usedTitles.includes(item.title));
        if (!match) match = database.find(item => item.station === station && item.theme !== "美食尋味" && !usedTitles.includes(item.title));
        if (!match) match = database.find(item => item.station === station && !usedTitles.includes(item.title));
        
        if (match) {
            if (arrivalTime >= match.open && arrivalTime + match.duration <= match.close && arrivalTime + match.duration <= maxTime) {
                let scheduledItem = Object.assign({}, match);
                if (match.theme === "美食尋味") {
                    scheduledItem.theme = (arrivalTime < 15) ? "午餐特選 · 美食尋味" : "晚餐特選 · 美食尋味";
                }
                
                scheduledItem.startTime = formatNumberToTime(arrivalTime);
                scheduledItem.endTime = formatNumberToTime(arrivalTime + match.duration);
                
                matchResults.push(scheduledItem);
                usedTitles.push(match.title);
                currentTime = arrivalTime + match.duration;
            }
        }
    }
    renderTimeAwareResults(matchResults);
}

// 🚀 方案 B：隨機盲盒（徹底大修正：不再受標籤標註干擾，池子不為空）
function startSlotMachine() {
    const count = parseInt(document.getElementById('random-count-select').value);
    const startTimeStr = document.getElementById('random-start-time').value;
    const endTimeStr = document.getElementById('random-end-time').value;
    
    document.getElementById('slot-station').innerText = "⚡ 盲盒時空疊加中...";
    document.getElementById('result-back-btn').setAttribute('onclick', "switchPage('page-random')");
    
    // 將 80 個完整景點打亂作為隨機池
    let pool = [...database];
    pool.sort(() => Math.random() - 0.5);
    
    setTimeout(function() {
        let currentTime = parseTimeToNumber(startTimeStr);
        const maxTime = parseTimeToNumber(endTimeStr);
        const matchResults = [];
        const usedTitles = [];
        const chosenStations = [];
        
        let hasLunched = false;
        let hasDinnered = false;
        
        for (let i = 0; i < pool.length; i++) {
            const item = pool[i];
            let isSameStation = (matchResults.length > 0 && matchResults[matchResults.length - 1].station === item.station);
            let arrivalTime = currentTime + (matchResults.length > 0 ? (isSameStation ? 0 : 0.5) : 0);
            
            if (arrivalTime + item.duration <= maxTime && !usedTitles.includes(item.title) && !chosenStations.includes(item.station)) {
                
                // 生理作息：隨機盲盒也杜絕連續狂吃餐廳
                if (item.theme === "美食尋味") {
                    if (arrivalTime >= 11.5 && arrivalTime < 14.0 && !hasLunched) {
                        hasLunched = true;
                    } else if (arrivalTime >= 17.5 && arrivalTime < 20.5 && !hasDinnered) {
                        hasDinnered = true;
                    } else {
                        continue; 
                    }
                }
                
                if (arrivalTime >= item.open && arrivalTime + item.duration <= item.close) {
                    let scheduledItem = Object.assign({}, item);
                    scheduledItem.startTime = formatNumberToTime(arrivalTime);
                    scheduledItem.endTime = formatNumberToTime(arrivalTime + item.duration);
                    
                    matchResults.push(scheduledItem);
                    usedTitles.push(item.title);
                    chosenStations.push(item.station);
                    currentTime = arrivalTime + item.duration;
                }
            }
            if (matchResults.length === count) break;
        }
        
        document.getElementById('slot-station').innerText = "🎉 成功開啟盲盒！";
        
        setTimeout(function() {
            renderTimeAwareResults(matchResults);
        }, 500);
    }, 800);
}

// 輸出精確時間與路徑卡片
function renderTimeAwareResults(results) {
    const container = document.getElementById('result-list-container');
    let html = "";
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="result-card">
                <h3 class="result-name">😭 找不到合適行程</h3>
                <p class="result-desc">在您選定的時間與路徑內，部分目標車站的店家未營業。請拉長漫遊時間段（例如：11:00 ~ 21:00）再試一次！</p>
            </div>`;
        switchPage('page-result');
        return;
    }
    
    for (let i = 0; i < results.length; i++) {
        const match = results[i];
        const searchQuery = match.query ? match.query + " 捷運" + match.station + "站" : match.station + "站";
        const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(searchQuery);
        
        html += `
            <div class="result-card">
                <div class="time-flow-badge">⏱️ ${match.startTime} - ${match.endTime}</div>
                <span class="result-tag">捷運${match.station}站 · ${match.theme}</span>
                <div class="result-budget-tag">💰 漫遊適用（真實花費：約 ${match.approxCost}）</div>
                <h3 class="result-name">《 ${match.title} 》</h3>
                <p class="result-desc">${match.desc}</p>
                <a href="${googleMapUrl}" target="_blank" class="btn-map">在 Google Maps 中導航</a>
            </div>
        `;
        
        // 🔒 只有當下一站名字真的不同時，才長出精密點對點線路引導
        if (i < results.length - 1 && match.station !== results[i+1].station) {
            const nextMatch = results[i + 1];
            const transitText = calculateTransit(match, nextMatch);
            
            html += `
                <div class="transit-connector" style="
                    margin: 10px 20px; padding: 12px; border-left: 2px dashed #b89f93;
                    font-size: 13px; color: #617180; background: #faf9f5; border-radius: 0 12px 12px 0;
                    line-height: 1.5;
                ">
                    <strong>🚇 捷運交通銜接（車程與轉乘預估 30 分鐘）：</strong><br>${transitText}
                </div>
            `;
        }
    }
    
    container.innerHTML = html;
    switchPage('page-result');
}

// 🔒 100% 精密大台北五大核心色線換乘比對指引（白紙黑字寫出搭哪條線、在哪轉乘）
function calculateTransit(from, to) {
    const fLines = from.line.split('/');
    const tLines = to.line.split('/');
    
    let sharedLine = "";
    for (let i = 0; i < fLines.length; i++) {
        if (tLines.includes(fLines[i])) {
            sharedLine = fLines[i];
            break;
        }
    }
    
    // 1. 直達車判定
    if (sharedLine) {
        let lineName = sharedLine.split('/')[0];
        return `從 <strong>${from.station}站</strong> 搭乘 <span style="color:#617180; font-weight:bold;">${lineName}</span>，<span style="color:#8da290; font-weight:bold;">無需任何換乘，即可直達</span> <strong>${to.station}站</strong>。`;
    }

    // 2. 跨色線精密轉乘邏輯
    const fLine = from.line;
    const tLine = to.line;

    // A. 從板南線（藍線）出發
    if (fLine.includes("板南線")) {
        if (tLine.includes("淡水信義線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>板南線（藍線）</strong> 至 <strong>台北車站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("中和新蘆線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>板南線（藍線）</strong> 至 <strong>忠孝新生站</strong>，轉乘 <strong>中和新蘆線（橘線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>板南線（藍線）</strong> 至 <strong>西門站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("文湖線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>板南線（藍線）</strong> 至 <strong>忠孝復興站</strong>，轉乘 <strong>文湖線（棕線）</strong> 直達 <strong>${to.station}站</strong>。`;
    }

    // B. 從淡水信義線（紅線）出發
    if (fLine.includes("淡水信義線")) {
        if (tLine.includes("板南線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>台北車站</strong>，轉乘 <strong>板南線（藍線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>中山站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("中和新蘆線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>東門站</strong>，轉乘 <strong>...中和新蘆線（橘線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("文湖線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>大安站</strong>，轉乘 <strong>文湖線（棕線）</strong> 直達 <strong>${to.station}站</strong>。`;
    }

    // C. 從松山新店線（綠線）出發
    if (fLine.includes("松山新店線")) {
        if (tLine.includes("板南線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>西門站</strong>，轉乘 <strong>板南線（藍線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("淡水信義線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>中山站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("中和新蘆線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>松江南京站</strong>，轉乘 <strong>中和新蘆線（橘線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("文湖線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>南京復興站</strong>，轉乘 <strong>文湖線（棕線）</strong> 直達 <strong>${to.station}站</strong>。`;
    }

    // D. 從中和新蘆線（橘線）出發
    if (fLine.includes("中和新蘆線")) {
        if (tLine.includes("板南線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>中和新蘆線（橘線）</strong> 至 <strong>忠孝新生站</strong>，轉乘 <strong>板南線（藍線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("淡水信義線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>中和新蘆線（橘線）</strong> 至 <strong>東門站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>中和新蘆線（橘線）</strong> 至 <strong>松江南京站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 直達 <strong>${to.station}站</strong>。`;
    }

    // E. 從文湖線（棕線）出發
    if (fLine.includes("文湖線")) {
        if (tLine.includes("板南線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>文湖線（棕線）</strong> 至 <strong>忠孝復興站</strong>，轉乘 <strong>板南線（藍線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("淡水信義線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>文湖線（棕線）</strong> 至 <strong>大安站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 直達 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `從 <strong>${from.station}站</strong> 搭乘 <strong>文湖線（棕線）</strong> 至 <strong>南京復興站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 直達 <strong>${to.station}站</strong>。`;
    }

    return `從 <strong>${from.station}站</strong> 搭乘捷運並依站內指標轉乘，前往 <strong>${to.station}站</strong>。`;
}