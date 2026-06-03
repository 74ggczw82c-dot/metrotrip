// === 雙北捷運 16 站 × 5 大心情主題 = 80 筆精密純文字資料庫 ===
const database = [
    // 1. 中山站
    { station: "中山", line: "淡水信義線/松山新店線", theme: "靜謐獨處", title: "地下書街的避世角落", query: "誠品R79地下書街", approxCost: "0元", desc: "躲進全台最長的地下書街，在柔和燈光與長排書架間挑一本散文，享受不被打擾的午後。", open: 10, close: 22, duration: 1.5 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "文青拍照", title: "赤峰街老鐵窗花光影", query: "赤峰街", approxCost: "0元", desc: "穿梭老巷弄，老公寓的洗石子牆與復古現代選品店交錯，用鏡頭捕捉新舊交織的日常碎片。", open: 11, close: 21, duration: 1.5 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "美食尋味", title: "現烤熱騰騰美式經典司康", query: "悄悄好食 中山店", approxCost: "150元", desc: "巷弄專賣司康的小店，剛出爐的外皮酥脆內裡溫熱，搭配濃郁抹醬與一杯熱茶，極其療癒。", open: 11, close: 19, duration: 1.0 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "自然慢活", title: "心中的山線形公園漫步", query: "心中山線形公園", approxCost: "0元", desc: "沿著地面的帶狀綠廊散步，兩旁有茂密樹蔭與公共藝術，坐在長椅上吹著微風發呆。", open: 0, close: 24, duration: 1.0 },
    { station: "中山", line: "淡水信義線/松山新店線", theme: "老派懷舊", title: "蔡瑞月舞蹈研究社的日式木造", query: "蔡瑞月舞蹈研究社", desc: "隱身大樓群中的日式古蹟，走在長廊上感受木地板的細微吱呀聲，點一杯咖啡回味舊時光。", open: 10, close: 17, duration: 1.5 },

    // 2. 淡水站
    { station: "淡水", line: "淡水信義線", theme: "靜謐獨處", title: "海關碼頭的觀音山凝望", query: "淡水海關碼頭", approxCost: "0元", desc: "避開喧囂的老街核心，坐在水岸盡頭的碼頭矮牆上，看著河面波光與觀音山沉澱心思。", open: 9, close: 21, duration: 2.0 },
    { station: "淡水", line: "淡水信義線", theme: "文青拍照", title: "殼牌倉庫的紅磚光影", query: "淡水文化園區", approxCost: "0元", desc: "百年古蹟倉庫群，大片的紅磚牆、舊鐵道與工業遺址在午後夕陽折射下極具故事感。", open: 9, close: 17, duration: 1.5 },
    { station: "淡水", line: "淡水信義線", theme: "美食尋味", title: "真理街正宗傳統古法阿給", query: "淡水文化阿給", approxCost: "45元", desc: "順著斜坡向上的在地老店，Q彈油豆腐塞滿冬粉，淋上靈魂甜辣醬汁，這才是最正宗的古早味。", open: 6, close: 18, duration: 1.0 },
    { station: "淡水", line: "淡水信義線", theme: "自然慢活", title: "金色水岸單車微風日常", query: "淡水金色水岸", approxCost: "40元", desc: "租一台 YouBike 沿著水岸步道徐徐騎行，右手邊是寬廣河面，左手邊是翠綠紅樹林。", open: 0, close: 24, duration: 1.5 },
    { station: "淡水", line: "淡水信義線", theme: "老派懷舊", title: "重建街依山老石階古道", query: "淡水重建街", approxCost: "0元", desc: "淡水第一條老街，依山而建的層層石階與靜默老洋房，完全沒有商業感，只有時光倒流的恬靜。", open: 0, close: 24, duration: 1.0 },

    // 3. 東門站
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "靜謐獨處", title: "青田街老日式住宅綠蔭", query: "青田七六", approxCost: "0元", desc: "漫步被譽為台北最美巷弄的青田街，老樹遮天蔽日，一間間黑瓦日式老宿舍靜靜佇立。", open: 9, close: 18, duration: 1.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "文青拍照", title: "永康後巷雜貨店老靈魂", query: "永康街", approxCost: "0元", desc: "縱橫的小巷藏著獨立陶器店與手作選品，綠意盎然的盆栽佈置充滿日系雜誌的街拍質感。", open: 11, close: 21, duration: 1.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "美食尋味", title: "天津蔥抓餅金黃排隊老味道", query: "天津蔥抓餅", approxCost: "60元", desc: "街口永遠在排隊的經典小吃，外皮抓得金黃酥脆，層次豐富，加蛋加九層塔熱氣騰騰。", open: 9, close: 22, duration: 0.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "自然慢活", title: "大安森林公園池畔生態散策", query: "大安森林公園", approxCost: "0元", desc: "散步至都市之肺，走在生態池畔木棧道上看水鳥棲息，坐在露天音樂台草地上曬太陽。", open: 0, close: 24, duration: 1.5 },
    { station: "東門", line: "淡水信義線/中和新蘆線", theme: "老派懷舊", title: "榕錦時光日式台北刑務所舊官舍", query: "榕錦時光生活園區", approxCost: "0元", desc: "百年木造官舍群完整保留，穿梭在紅磚圍牆與日式枯山水庭園中，讀著牆上的歷史故事。", open: 11, close: 20, duration: 1.5 },

    // 4. 信義安和站
    { station: "信義安和", line: "淡水信義線", theme: "靜謐獨處", title: "文昌街家具聚落隱密茶空間", query: "文昌街", approxCost: "300元", desc: "隱身家具街二樓的低調茶室，面對沉靜街道為自己沏一壺高山茶，在裊裊茶煙中安放心思。", open: 12, close: 20, duration: 1.5 },
    { station: "信義安和", line: "淡水信義線", theme: "文青拍照", title: "文昌街後巷復古昭和街景", query: "文昌街", approxCost: "0元", desc: "舊公寓的洗石子外牆與鏤空鐵窗花，在夜幕低垂、街燈初亮時充滿老電影的冷冽美感。", open: 0, close: 24, duration: 1.0 },
    { station: "信義安和", line: "淡水信義線", theme: "美食尋味", title: "通庵文青風手工濃郁熟成咖哩", query: "通庵 熟成咖哩", approxCost: "250元", desc: "極具設計感、宛如酒吧的咖哩店。慢火熟成多日的咖哩醬汁帶有微辣焦香，搭配半熟蛋極其精緻。", open: 11, close: 21, duration: 1.0 },
    { station: "信義安和", line: "淡水信義線", theme: "自然慢活", title: "臨江社區小公園留白午後", query: "臨江公園", approxCost: "0元", desc: "穿過傳統早市來到隱密老公園，坐在大榕樹下的長椅上看著落葉，享受大城市裡的空白日常。", open: 0, close: 24, duration: 1.0 },
    { station: "信義安和", line: "淡水信義線", theme: "老派懷舊", title: "四四南村 옛昔日眷村時光", query: "四四南村", approxCost: "0元", desc: "站在青綠色眷村矮平房的草坡上，現代 101 與舊紅磚牆溫柔對撞，感受大城市珍貴的歷史厚度。", open: 9, close: 17, duration: 1.5 },

    // 5. 西門站
    { station: "西門", line: "板南線/松山新店線", theme: "靜謐獨處", title: "西本願寺日式古建築八輪堂", query: "西本願寺", approxCost: "0元", desc: "鬧區旁的隱密淨土，漫步在日式佛寺遺址的木棧道上，坐在樹蔭下聽風鈴聲讓心情完全慢下來。", open: 9, close: 17, duration: 1.0 },
    { station: "西門", line: "板南線/松山新店線", theme: "文青拍照", title: "電影主題公園街頭藝術塗鴉", query: "西門町電影主題公園", approxCost: "0元", desc: "舊工廠遺址改建的寬廣空間，巨大的紅磚煙囪與充滿當代藝術感的街頭牆面塗鴉，極具張力。", open: 0, close: 24, duration: 1.0 },
    { station: "西門", line: "板南線/松山新店線", theme: "美食尋味", title: "成都老字號琥珀色傳統楊桃冰", query: "成都楊桃冰", approxCost: "60元", desc: "走進西門町幾十年的老靈魂。酸甜中帶點微鹹的醃製楊桃冰沙沁涼入心，是延续半世紀的滋味。", open: 10, close: 22, duration: 0.5 },
    { station: "西門", line: "板南線/松山新店線", theme: "自然慢活", title: "貴陽街老街廓樹蔭散策", query: "貴陽街", approxCost: "0元", desc: "避開西門徒步區喧囂，走向台北最古老街道，沿著舊式街屋與繁茂行道樹漫步，體會慢步調日常。", open: 0, close: 24, duration: 1.0 },
    { station: "西門", line: "板南線/松山新店線", theme: "老派懷舊", title: "西門紅樓百年紅磚八角記憶", query: "西門紅樓", approxCost: "0元", desc: "建於1908年的八角紅樓，是台北最早市場。走進挑高內部觀看珍貴的懷舊舊照片與古董文物。", open: 11, close: 21, duration: 1.5 },

    // 6. 板橋站
    { station: "板橋", line: "板南線/環狀線", theme: "靜謐獨處", title: "新北市府32樓景觀台雲端凝望", query: "新北市政府景觀台", approxCost: "0元", desc: "搭乘高空電梯直達免費景觀台，站在巨幅落地窗前俯瞰縱橫鐵道與遠方山巒，享受無人安靜空間。", open: 8, close: 22, duration: 1.0 },
    { station: "板橋", line: "板南線/環狀線", theme: "文青拍照", title: "萬坪都會公園幾何空中廊道", query: "板橋萬坪都會公園", approxCost: "0元", desc: "捷運站外大草皮，公園內設有縱橫交錯的現代鋼構空中廊道，與四周摩天大樓線條勾勒幾何現代感。", open: 0, close: 24, duration: 1.0 },
    { station: "板橋", line: "板南線/環狀線", theme: "美食尋味", title: "光正街巷弄手工草莓抹茶戚風", query: "點點甜甜", approxCost: "180元", desc: "鑽進復古的光正街住宅巷弄，這家極簡風格甜點店的戚風蛋糕蓬鬆滑順，奶油香濃不膩口。", open: 12, close: 20, duration: 1.5 },
    { station: "板橋", line: "板南線/環狀線", theme: "自然慢活", title: "都會綠地人工竹林生態池散步", query: "板橋萬坪都會公園", approxCost: "0元", desc: "萬坪公園內開闢了翠綠的竹林小徑與蜿蜒生態水道，走在石子路上，在都市核心享受芬多精。", open: 0, close: 24, duration: 1.0 },
    { station: "板橋", line: "板南線/環狀線", theme: "老派懷舊", title: "林本源園邸古典蘇州園林窗花", query: "林本源園邸", approxCost: "80元", desc: "台灣保存最完整的古典園林，在亭台樓閣、假山水榭間緩步前行，透過精緻雕花窗花往外看。", open: 9, close: 17, duration: 2.0 },

    // 7. 龍山寺站
    { station: "龍山寺", line: "板南線", theme: "靜謐獨處", title: "艋舺地藏庵隱密百年香火", query: "艋舺地藏庵", approxCost: "0元", desc: "避開龍山寺主殿大批遊客，隔壁地藏庵極其安靜，坐在廟埕老椅上沉浸在沉香微煙中找回平靜。", open: 6, close: 19, duration: 1.0 },
    { station: "龍山寺", line: "板南線", theme: "文青拍照", title: "剝皮寮歷史街區清代紅磚拱門", query: "剝皮寮歷史街區", approxCost: "0元", desc: "完整保留清代格局的歷史老街，紅磚牆與木質窗櫺在午後斜射光影中呈現極佳電影厚重色調。", open: 9, close: 18, duration: 1.5 },
    { station: "龍山寺", line: "板南線", theme: "美食尋味", title: "三水街傳統老市場手工芋頭油粿", query: "蘇家肉圓油粿", approxCost: "50元", desc: "走進傳統新富三水街市場，Q彈米漿外皮裹著大塊鬆軟芋頭，淋上傳統鹹甜醬汁，是最道地萬華美食。", open: 10, close: 20, duration: 1.0 },
    { station: "龍山寺", line: "板南線", theme: "自然慢活", title: "艋舺公園榕樹下傳統接地氣日常", query: "艋舺公園", approxCost: "0元", desc: "龍山寺前的大型廣場，成排高大榕樹下聚滿下棋的老街坊，沿著噴泉散步體驗台北草根慢活。", open: 0, close: 24, duration: 1.0 },
    { station: "龍山寺", line: "板南線", theme: "老派懷舊", title: "百年青草巷藥香濃郁青草茶", query: "萬華青草巷", approxCost: "40元", desc: "一踏入便能聞到濃郁藥材芬芳，點一杯最古法熬煮的冰涼青草茶，品嚐萬華最道地的草根歷史記憶。", open: 8, close: 22, duration: 0.5 },

    // 8. 市政府站
    { station: "市政府", line: "板南線", theme: "靜謐獨處", title: "松菸老菸廠生態池畔閱覽室", query: "松山文創園區", approxCost: "0元", desc: "穿過巴洛克花園來到池塘畔，坐在靠窗長椅看水鳥劃出水波，是信義區最奢侈的免費空白角落。", open: 9, close: 18, duration: 1.5 },
    { station: "市政府", line: "板南線", theme: "文青拍照", title: "現代主義廠房採光大走廊", query: "松山文創園區", approxCost: "0元", desc: "日治時期的現代主義建築，挑高走廊、磨石子階梯與成排水平窗格，隨手一拍都是極簡文青感。", open: 9, close: 18, duration: 1.5 },
    { station: "市政府", line: "板南線", theme: "美食尋味", title: "信義高樓層手工爆汁皮薄湯包", query: "樂天皇朝 信義店", approxCost: "500元", desc: "位於百貨內的功夫麵食，可以看到職人現場揉麵捏線，剛出爐的湯包咬下瞬間溫熱湯汁在口中爆發。", open: 11, close: 21, duration: 1.5 },
    { station: "市政府", line: "板南線", theme: "自然慢活", title: "落羽松圍繞生態池賞鳥散策", query: "松山文創園區", approxCost: "0元", desc: "大片落羽松環抱的池塘淨土，聽著青蛙鳴叫，看鴨子悠游，在喧囂信義區正中央享受純自然慢活。", open: 9, close: 22, duration: 1.0 },
    { station: "市政府", line: "板南線", theme: "老派懷舊", title: "信義公民會館瓦片舊眷村老屋", query: "信義公民會館", approxCost: "0元", desc: "穿過現代化巨型百貨群，這片瓦片平房是台北最早眷村遺址。木門窗框訴說著歷史舊故事。", open: 9, close: 17, duration: 1.5 },

    // 9. 公館站
    { station: "公館", line: "松山新店線", theme: "靜謐獨處", title: "台大圖書館背後隱密草坪發呆", query: "台灣大學總圖書館", approxCost: "0元", desc: "走入校園深處，總圖背後有一大片老樹環繞的隱密草皮，躺著聽樹葉沙沙聲，享受知性寧靜。", open: 0, close: 24, duration: 1.5 },
    { station: "公館", line: "松山新店線", theme: "文青拍照", title: "寶藏岩國際藝術村依山錯落聚落", query: "寶藏岩國際藝術村", approxCost: "0元", desc: "蜿蜒的山坡歷史聚落，斑駁圍牆與微型裝置藝術共生，捕捉魔幻寫實的老台北依山風景。", open: 11, close: 22, duration: 2.0 },
    { station: "公館", line: "松山新店線", theme: "美食尋味", title: "水源市場必吃老字號黑糖鮮奶", query: "公館商圈", approxCost: "65元", desc: "現煮熱氣騰騰的軟Q珍珠帶著濃郁黑糖炭燒香，沖入冰涼純鮮奶中，冷熱交織口感極佳。", open: 11, close: 22, duration: 0.5 },
    { station: "公館", line: "松山新店線", theme: "自然慢活", title: "自來水古蹟園區幽靜小山步道", query: "自來水園區", approxCost: "80元", desc: "巴洛克風格古老建築後方，隱藏著一條少有人知的翠綠親山小徑，可以一路慢步散步到新店溪畔。", open: 9, close: 17, duration: 1.5 },
    { station: "公館", line: "松山新店線", theme: "老派懷舊", title: "溫州街獨立人文書店老咖啡香", query: "溫州街", approxCost: "150元", desc: "充滿文人氣息的人文巷弄，落葉鋪成的小徑兩旁藏著許多有個性的老獨立咖啡館與二手書店。", open: 12, close: 22, duration: 1.5 },

    // 10. 新店站
    { station: "新店", line: "松山新店線", theme: "靜謐獨處", title: "碧潭東岸老岩壁下臨水長椅", query: "碧潭風景區", approxCost: "0元", desc: "越過商店街，走向更深處的東岸岩壁步道，坐在緊鄰碧綠潭水的長椅上，享受全然的孤獨平靜。", open: 0, close: 24, duration: 1.5 },
    { station: "新店", line: "松山新店線", theme: "文青拍照", title: "碧潭老吊橋幾何線條鋼索", query: "碧潭吊橋", approxCost: "0元", desc: "橫跨潭水的百年老吊橋，巨大的鋼索在空中拉出優雅弧線，黃昏亮燈時捕捉山水線條極具張力。", open: 0, close: 24, duration: 1.0 },
    { station: "新店", line: "松山新店線", theme: "美食尋味", title: "光明街傳統糯米油飯", query: "光明街油飯", approxCost: "70元", desc: "老字號街廓小吃，粒粒分明的糯米拌入香菇與蝦米，香氣鋪天蓋地，搭配一碗傳統花枝羹最在地。", open: 11, close: 20, duration: 1.0 },
    { station: "新店", line: "松山新店線", theme: "自然慢活", title: "和美山親山小徑翠綠健行", query: "和美山登山步道", approxCost: "0元", desc: "走過吊橋順指標步入山林步道，只需步行15分鐘就能沒入繁茂綠意中，向下俯瞰碧綠潭水。", open: 0, close: 24, duration: 2.0 },
    { station: "新店", line: "松山新店線", theme: "老派懷舊", title: "新店溪渡船頭手劃擺渡船體驗", query: "新店溪渡船頭", approxCost: "30元", desc: "台灣僅存的全人力擺渡，坐在搖晃小木舟上聽著擺渡人规律劃槳聲，用最老派方式橫渡新店溪。", open: 6, close: 19, duration: 1.0 },

    // 11. 松江南京站
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "靜謐獨處", title: "伊通公園綠蔭滿窗靜謐茶席", query: "伊通公園", approxCost: "200元", desc: "隱身在大樓二樓的清幽茶空間，面對滿窗綠蔭為自己沏一壺烏龍，在水沸聲中給自己一小時留白。", open: 11, close: 19, duration: 1.5 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "文青拍照", title: "四平陽光商圈懸掛繽紛三角旗", query: "四平陽光商圈", approxCost: "0元", desc: "充滿生活感的步行街，上方懸掛成排五顏六色的三角形小旗幟，陽光灑落街道極具斑斕幾何美感。", open: 10, close: 21, duration: 1.0 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "美食尋味", title: "富霸王琥珀色軟爛入口即化豬腳", query: "富霸王豬腳", approxCost: "150元", desc: "商務區傳奇名店。燉煮得極其軟爛、充滿濃郁膠質的豬腳搭配白飯，是殿堂級台式美味。", open: 11, close: 20, duration: 1.0 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "自然慢活", title: "商辦大樓核心伊通公園老樹散步", query: "伊通公園", approxCost: "0元", desc: "高樓圍繞中的大片草坪公園，設有完善的環形碎石步道，看白鴿駐足在長椅，放慢生活的步伐。", open: 0, close: 24, duration: 1.0 },
    { station: "松江南京", line: "松山新店線/中和新蘆線", theme: "老派懷舊", title: "袖珍博物館微縮西洋娃娃屋古董", query: "袖珍博物館", approxCost: "200元", desc: "展場內陳列成排精緻的歐式古董娃娃屋與微縮老街，透過工藝重現維多利亞時代老派優雅。", open: 10, close: 18, duration: 2.0 },

    // 12. 大橋頭站
    { station: "大橋頭", line: "中和新蘆線", theme: "靜謐獨處", title: "哥德式老教堂彩繪玻璃沉靜微光", query: "大稻埕外灘", approxCost: "0元", desc: "百年古老教堂內部安靜祥和，坐在木質長椅上凝視彩繪玻璃透入的微光，內心感到無比平穩。", open: 9, close: 17, duration: 1.0 },
    { station: "大橋頭", line: "中和新蘆線", theme: "文青拍照", title: "迪化街北段閩南街屋洋樓天井", query: "迪化街", approxCost: "0元", desc: "避開喧囂南段，北段保留了洗盡鉛華的紅磚洋樓，縱深極長的老屋藏著深邃天井，光影垂直灑落。", open: 9, close: 18, duration: 1.5 },
    { station: "大橋頭", line: "中和新蘆線", theme: "美食尋味", title: "大稻埕慈聖宮榕樹下傳統老鹹粥", query: "大稻埕慈聖宮", approxCost: "80元", desc: "坐在幾百年老榕樹的光影下，來一碗鮮甜豬肉鹹粥配上一盤現炸酥脆紅燒肉，這是台北最經典早餐。", open: 9, close: 15, duration: 1.0 },
    { station: "大橋頭", line: "中和新蘆線", theme: "自然慢活", title: "延平河濱公園寬廣水岸落日漫步", query: "延平河濱公園", approxCost: "0元", desc: "步行至河岸步道，黃昏看夕陽緩緩沒入遠方觀音山後方，將河面染成橘紅色，在風中釋放壓力。", open: 0, close: 24, duration: 1.5 },
    { station: "大橋頭", line: "中和新蘆線", theme: "老派懷舊", title: "迪化街傳統中藥行與乾貨老靈魂", query: "迪化街", approxCost: "0元", desc: "空氣中飄散中藥材天然淡雅芬芳，阿伯手工米苔目攤散發熱氣，是最洗練的老台北縮影。", open: 9, close: 19, duration: 1.5 },

    // 13. 行天宮站
    { station: "行天宮", line: "中和新蘆線", theme: "靜謐獨處", title: "本殿洗練不燒金紙誦經心靈沉澱", query: "行天宮", approxCost: "0元", desc: "走進洗練的開闊本殿，耳邊迴盪規律宏亮的誦經聲，閉上雙眼在莊嚴氛圍中感受徹底澄淨。", open: 4, close: 22, duration: 1.0 },
    { station: "行天宮", line: "中和新蘆線", theme: "文青拍照", title: "老住宅公寓洗石子牆面與九重葛", query: "行天宮", approxCost: "0元", desc: "周邊巷弄保留大量1970年代舊公寓，攀爬在洗石子老圍牆上的九重葛恣意盛開，生活感濃郁。", open: 0, close: 24, duration: 1.0 },
    { station: "行天宮", line: "中和新蘆線", theme: "美食尋味", title: "巷弄低調老屋手工焦糖流沙戚風", query: "疍宅", approxCost: "200元", desc: "低調藏在民宅巷弄，店內擺滿舊木件，現做的小山園抹茶戚風與流沙焦糖不膩口，極其療癒。", open: 12, close: 23, duration: 1.5 },
    { station: "行天宮", line: "中和新蘆線", theme: "自然慢活", title: "新生公園古典玫瑰園香氣步道", query: "新生公園玫瑰園", approxCost: "0元", desc: "散步至新生公園，古典玫瑰園種植數百種珍貴玫瑰，沿著蜿蜒石子路徐徐而行，空氣高雅慢活。", open: 0, close: 24, duration: 1.5 },
    { station: "行天宮", line: "中和新蘆線", theme: "老派懷舊", title: "行天宮地下道命理招牌算命街", query: "行天宮算命街", approxCost: "0元", desc: "十字路口地下道內保留台灣最著名算命街，昏黃燈光與龜殼卜卦聲，充滿舊時代玄學的神祕。", open: 9, close: 21, duration: 1.0 },

    // 14. 大湖公園站
    { station: "大湖公園", line: "文湖線", theme: "靜謐獨處", title: "湖畔僻靜老垂柳依水發呆長椅", query: "大湖公園", approxCost: "0元", desc: "繞大湖走向人煙稀少的西側，坐在垂入水面的柳樹長椅上，凝視平靜水面，獨享完全的平靜。", open: 6, close: 22, duration: 1.5 },
    { station: "大湖公園", line: "文湖線", theme: "文青拍照", title: "白鷺鷥親山保護區落羽松林網格", query: "大湖公園", approxCost: "0元", desc: "一整片整齊的落羽松林與後方高架現代化捷運玻璃軌道相互輝映，自然與洗練線條完美揉合。", open: 6, close: 22, duration: 1.0 },
    { station: "大湖公園", line: "文湖線", theme: "美食尋味", title: "內湖舊市區傳統老麵碳烤燒餅", query: "老張炭烤燒餅店", approxCost: "50元", desc: "散步至附近舊市區，現做的手工燒餅外皮沾滿白芝麻、碳烤焦香酥脆，老麵內餡蔥香滿溢。", open: 6, close: 20, duration: 0.5 },
    { station: "大湖公園", line: "文湖線", theme: "自然慢活", title: "古典錦帶拱橋水面倒影草地留白", query: "大湖公園", approxCost: "0元", desc: "欣賞古典拱橋完美倒映在鏡面湖泊上，大草皮鋪開，放鬆緊繃的肩膀，數著飛落的白鷺鷥。", open: 6, close: 22, duration: 2.0 },
    { station: "大湖公園", line: "文湖線", theme: "老派懷舊", title: "白鷺鷥山親山古道五十彎石階", query: "白鷺鷥山親山步道", approxCost: "0元", desc: "站外正對面的翠綠山丘，完整保留長滿青苔的古老碎石石階，循小徑拾級而上，尋回內湖昔日山林記憶。", open: 0, close: 24, duration: 1.5 },

    // 15. 動物園站
    { station: "動物園", line: "文湖線", theme: "靜謐獨處", title: "貓空壺穴隱密幽靜溪流聽水步道", query: "貓空 壺穴步道", approxCost: "0元", desc: "搭纜車上山走向深處的壺穴步道，這裡只聽見潺潺溪水與蟲鳴，坐在原木平台上被深山包圍。", open: 9, close: 17, duration: 2.0 },
    { station: "動物園", line: "文湖線", theme: "文青拍照", title: "纜車高空透明車廂驚豔透視線條", query: "貓空纜車", approxCost: "120元", desc: "搭乘特製水晶車廂，腳底是完全透明的鋼化玻璃，向下看是茶園，向前看是整座大台北盆地線條。", open: 9, close: 21, duration: 1.5 },
    { station: "動物園", line: "文湖線", theme: "美食尋味", title: "山城特產茶香濃郁鐵觀音霜淇淋", query: "貓空 霜淇淋", approxCost: "90元", desc: "職人將在地茶葉磨成細粉融入厚乳，茶香微苦回甘，上頭裝飾著一隻茶貓餅乾，山頂限定美食。", open: 10, close: 20, duration: 0.5 },
    { station: "動物園", line: "文湖線", theme: "自然慢活", title: "貓空樟樹步道古樸穀倉與茶園霧氣", query: "貓空樟樹步道", approxCost: "0元", desc: "平緩舒適的親山步道，兩旁是整齊翠綠的茶園與古樸穀倉農村裝置，在朦朧霧氣中找回心靈規律。", open: 0, close: 24, duration: 2.0 },
    { station: "動物園", line: "文湖線", theme: "老派懷舊", title: "百年黑瓦三合院老茶厝天井木造", query: "張迺妙茶師紀念館", approxCost: "100元", desc: "拜訪深山老茶厝，坐在木造天井下，看老茶師用龍眼木炭慢火烘焙茶葉，品嚐帶有火香的老派滋味。", open: 9, close: 17, duration: 1.5 },

    // 16. 科技大樓站
    { station: "科技大樓", line: "文湖線", theme: "靜謐獨處", title: "國北教大百年校園舊磚造溫室角落", query: "國立臺北教育大學", approxCost: "0元", desc: "走進站旁百年校園深處，理學館後方藏著一座廢棄溫室，長滿藤蔓蕨類，坐在木椅聽校園鐘聲。", open: 7, close: 22, duration: 1.5 },
    { station: "科技大樓", line: "文湖線", theme: "文青拍照", title: "成功國宅舊時代巨型幾何建築美學", query: "成功國宅", approxCost: "0元", desc: "走入巨型現代主義老社區，四周被強烈重複線條的幾何公寓包圍，中庭圓形遊樂場夕陽濾鏡感十足。", open: 0, close: 24, duration: 1.0 },
    { station: "科技大樓", line: "文湖線", theme: "美食尋味", title: "住宅區巷弄甘甜香料熟成日式咖哩", query: "科技大樓站 咖哩", approxCost: "220元", desc: "主打熟成多日的香料日式咖哩，醬汁濃郁辛香，牛肋條炙燒軟嫩，深受學生喜愛。", open: 11, close: 21, duration: 1.0 },
    { station: "科技大樓", line: "文湖線", theme: "自然慢活", title: "瑞安街優雅林蔭巷弄老公寓綠意", query: "瑞安街", approxCost: "0元", desc: "兩旁種滿高大樟樹的林蔭街道，老公寓陽台垂掛茂密綠色藤蔓，放慢腳步散步聽麻雀叫聲。", open: 0, close: 24, duration: 1.0 },
    { station: "科技大樓", line: "文湖線", theme: "老派懷舊", title: "瑞安街老派真空管黑膠唱片咖啡館", query: "經典黑膠", approxCost: "150元", desc: "擺滿絕版二手黑膠的老店，飄散虹吸咖啡深焙香氣，耳邊迴盪黑膠唱機特有的溫暖沙沙聲。", open: 13, close: 21, duration: 1.5 }
];

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
    if (!timeStr || !timeStr.includes(':')) return 12.0; // 預設防呆
    const parts = timeStr.split(':');
    return parseInt(parts[0]) + (parseInt(parts[1]) / 60);
}

function formatNumberToTime(num) {
    if (num >= 24) num = num % 24;
    const hours = Math.floor(num);
    const minutes = Math.round((num - hours) * 60);
    return `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}`;
}

// 網頁動態初始化（大復活：16個站點完整渲染）
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('station-checkbox-group');
    const startSelect = document.getElementById('select-start-station');
    const endSelect = document.getElementById('select-end-station');
    
    if(!container || !startSelect || !endSelect) return;

    // 16 個車站名單完全重建
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

// 定向智慧時間流排程
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
    
    const fullRoutePlan = [startStation, ...middleStations, endStation];
    const budget = document.querySelector('input[name="select-budget"]:checked').value;
    
    const checkedThemes = document.querySelectorAll('input[name="themes"]:checked');
    const selectedThemes = [];
    checkedThemes.forEach(cb => selectedThemes.push(cb.value));
    if (selectedThemes.length === 0) selectedThemes.push("靜謐獨處");
    
    // 直接抓取打字框輸入的時間字串
    const startTimeStr = document.getElementById('select-start-time').value;
    const endTimeStr = document.getElementById('select-end-time').value;
    
    document.getElementById('result-back-btn').setAttribute('onclick', "switchPage('page-select')");
    
    let currentTime = parseTimeToNumber(startTimeStr);
    const maxTime = parseTimeToNumber(endTimeStr);
    const matchResults = [];
    const usedTitles = [];
    
    let hasLunched = false;
    let hasDinnered = false;
    const onlyFoodSelected = (selectedThemes.length === 1 && selectedThemes[0] === "美食尋味");

    for(let i = 0; i < fullRoutePlan.length; i++) {
        let station = fullRoutePlan[i];
        let isSameStation = (matchResults.length > 0 && matchResults[matchResults.length - 1].station === station);
        let arrivalTime = currentTime + (matchResults.length > 0 ? (isSameStation ? 0 : 0.5) : 0);
        
        if (arrivalTime >= maxTime) break;
        
        // 智慧型一日生理作息過濾
        let currentTargetTheme = selectedThemes[i % selectedThemes.length];
        if ((arrivalTime >= 11.5 && arrivalTime < 14.0) && !hasLunched && selectedThemes.includes("美食尋味")) {
            currentTargetTheme = "美食尋味";
            if (!onlyFoodSelected) hasLunched = true;
        } else if ((arrivalTime >= 17.5 && arrivalTime < 20.3) && !hasDinnered && selectedThemes.includes("美食尋味")) {
            currentTargetTheme = "美食尋味";
            if (!onlyFoodSelected) hasDinnered = true;
        } else {
            const nonFoodThemes = selectedThemes.filter(t => t !== "美食尋味");
            if (nonFoodThemes.length > 0) {
                currentTargetTheme = nonFoodThemes[i % nonFoodThemes.length];
            } else {
                currentTargetTheme = selectedThemes[i % selectedThemes.length];
            }
        }
        
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

// 盲盒隨機排程
function startSlotMachine() {
    const count = parseInt(document.getElementById('random-count-select').value);
    const budget = document.querySelector('input[name="random-budget"]:checked').value;
    const startTimeStr = document.getElementById('random-start-time').value;
    const endTimeStr = document.getElementById('random-end-time').value;
    
    document.getElementById('slot-station').innerText = "⚡ 盲盒運算中...";
    document.getElementById('result-back-btn').setAttribute('onclick', "switchPage('page-random')");
    
    let pool = database.filter(item => item.budgetLevel === budget || item.budgetLevel === "低預算");
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

function renderTimeAwareResults(results) {
    const container = document.getElementById('result-list-container');
    let html = "";
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="result-card">
                <h3 class="result-name">😭 找不到合適行程</h3>
                <p class="result-desc">在您指定的起訖車站和時間段內，店家適逢打烊。請拉長漫遊時間段或多勾選幾個中間站再試一次！</p>
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
                <div class="result-budget-tag">💰 漫遊適用（真實${match.approxCost}）</div>
                <h3 class="result-name">《 ${match.title} 》</h3>
                <p class="result-desc">${match.desc}</p>
                <a href="${googleMapUrl}" target="_blank" class="btn-map">在 Google Maps 中導航</a>
            </div>
        `;
        
        if (i < results.length - 1 && match.station !== results[i+1].station) {
            const nextMatch = results[i + 1];
            const transitText = calculateTransit(match, nextMatch);
            
            html += `
                <div class="transit-connector" style="
                    margin: 10px 20px; padding: 12px; border-left: 2px dashed #b89f93;
                    font-size: 13px; color: #617180; background: #faf9f5; border-radius: 0 12px 12px 0;
                ">
                    <strong>🚇 捷運交通銜接：</strong> ${transitText}
                </div>
            `;
        }
    }
    
    container.innerHTML = html;
    switchPage('page-result');
}

// ✨ 鋼鐵重構：100% 精密大台北五大路線換乘與直達指引（徹底粉碎罐頭文字）
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
    
    // 1. 直達車判斷
    if (sharedLine) {
        let lineName = sharedLine.split('/')[0];
        return `從 <strong>${from.station}站</strong> 搭乘 <span style="color:#617180; font-weight:bold;">${lineName}</span>，<strong>不需換乘即可直達</strong> <strong>${to.station}站</strong>。`;
    }

    // 2. 精密交叉路線轉乘判斷（對齊5大色線）
    const fLine = from.line;
    const tLine = to.line;

    // A. 從板南線（藍線）出發的轉乘
    if (fLine.includes("板南線")) {
        if (tLine.includes("淡水信義線")) return `搭乘 <strong>板南線（藍線）</strong> 至 <strong>台北車站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("中和新蘆線")) return `搭乘 <strong>板南線（藍線）</strong> 至 <strong>忠孝新生站</strong>，轉乘 <strong>中和新蘆線（橘線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `搭乘 <strong>板南線（藍線）</strong> 至 <strong>西門站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("文湖線")) return `搭乘 <strong>板南線（藍線）</strong> 至 <strong>忠孝復興站</strong>，轉乘 <strong>文湖線（棕線）</strong> 前往 <strong>${to.station}站</strong>。`;
    }

    // B. 從淡水信義線（紅線）出發的轉乘
    if (fLine.includes("淡水信義線")) {
        if (tLine.includes("板南線")) return `搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>台北車站</strong>，轉乘 <strong>板南線（藍線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>中山站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("中和新蘆線")) return `搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>東門站</strong>，轉乘 <strong>中和新蘆線（橘線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("文湖線")) return `搭乘 <strong>淡水信義線（紅線）</strong> 至 <strong>大安站</strong>，轉乘 <strong>文湖線（棕線）</strong> 前往 <strong>${to.station}站</strong>。`;
    }

    // C. 從松山新店線（綠線）出發的轉乘
    if (fLine.includes("松山新店線")) {
        if (tLine.includes("板南線")) return `搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>西門站</strong>，轉乘 <strong>板南線（藍線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("淡水信義線")) return `搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>中山站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("中和新蘆線")) return `搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>松江南京站</strong>，轉乘 <strong>中和新蘆線（橘線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("文湖線")) return `搭乘 <strong>松山新店線（綠線）</strong> 至 <strong>南京復興站</strong>，轉乘 <strong>文湖線（棕線）</strong> 前往 <strong>${to.station}站</strong>。`;
    }

    // D. 從中和新蘆線（橘線）出發的轉乘
    if (fLine.includes("中和新蘆線")) {
        if (tLine.includes("板南線")) return `搭乘 <strong>中和新蘆線（橘線）</strong> 至 <strong>忠孝新生站</strong>，轉乘 <strong>板南線（藍線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("淡水信義線")) return `搭乘 <strong>中和新蘆線（橘線）</strong> 至 <strong>東門站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `搭乘 <strong>中和新蘆線（橘線）</strong> 至 <strong>松江南京站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 前往 <strong>${to.station}站</strong>。`;
    }

    // E. 從文湖線（棕線）出發的轉乘
    if (fLine.includes("文湖線")) {
        if (tLine.includes("板南線")) return `搭乘 <strong>文湖線（棕線）</strong> 至 <strong>忠孝復興站</strong>，轉乘 <strong>板南線（藍線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("淡水信義線")) return `搭乘 <strong>文湖線（棕線）</strong> 至 <strong>大安站</strong>，轉乘 <strong>淡水信義線（紅線）</strong> 前往 <strong>${to.station}站</strong>。`;
        if (tLine.includes("松山新店線")) return `搭乘 <strong>文湖線（棕線）</strong> 至 <strong>南京復興站</strong>，轉乘 <strong>松山新店線（綠線）</strong> 前往 <strong>${to.station}站</strong>。`;
    }

    // 萬一有更偏僻的跨線，給予萬用標準換乘口吻
    return `從 <strong>${from.station}站</strong> 搭乘捷運並依照站內指標，換線前往 <strong>${to.station}站</strong>。`;
}