/* ==========================================================================
   統測會計通 - Core Application Logic (900+行全功能教學 + 雙科全真題庫完全體)
   ========================================================================== */

// 1. Data Definitions

// 24-Week Curriculum Database
const curriculumData = [
    // Month 1
    {
        week: 1, month: 1, phase: 1,
        title: "會計之源與會計要素",
        difficulty: "🟢 易", examWeight: "⭐⭐",
        desc: "會計的意義與基本假設，認識財務報表的五大要素：資產、負債、權益、收益、費損。",
        objectives: ["理解會計資訊使用人與職業道德", "掌握會計期間、貨幣單位等基本假設", "學會分辨資產、負債與權益項目"],
        slides: [
            { title: "什麼是會計？", text: "會計被稱為『商業的語言』，它的核心功能是將企業繁雜的交易活動，透過記帳與編製報表，提供給投資人、債權人及政府等決策者參考。日常記帳的第一步就是辨認交易要素。", diagramHTML: "<div class='badge badge-primary'>交易發生</div> ➔ <div class='badge badge-purple'>日記分錄</div> ➔ <div class='badge badge-cyan'>過帳分類</div> ➔ <div class='badge badge-success'>財務報表</div>" },
            { title: "五大會計要素", text: "會計世界由五根支柱構成：\n1. <b>資產</b>：企業擁有的經濟資源（如現金、設備）。\n2. <b>負債</b>：企業承擔的義務（如應付帳款、借款）。\n3. <b>權益</b>：資產減負債的淨額，即業主權利。\n4. <b>收益</b>：營業賺取的收入。\n5. <b>費損</b>：營業消耗的成本費用。", diagramHTML: "<div style='display:flex; justify-content:space-around; font-weight:bold;'><span style='color:var(--color-debit)'>資產</span><span>=</span><span style='color:var(--color-credit)'>負債</span><span>+</span><span style='color:var(--color-success)'>權益</span></div>" }
        ],
        quizzes: [
            { question: "下列何者不屬於會計上的「資產」要素？", options: ["現金", "應付帳款", "應收票據", "辦公設備"], answerIndex: 1, explanation: "應付帳款屬於「負債」要素，是未來需要支付現金的義務；而現金、應收票據及辦公設備均為企業控制的經濟資源，屬於「資產」。" }
        ]
    },
    {
        week: 2, month: 1, phase: 1,
        title: "會計方程式與恆等式",
        difficulty: "🟢 易", examWeight: "⭐⭐⭐",
        desc: "深入學習會計恆等式（資產 = 負債 + 權益），並探討各種交易類型對方程式的增減影響。",
        objectives: ["掌握會計恆等式基本型與擴展型", "分析資產、負債及權益的雙向增減交易", "理解交易發生的平衡關係"],
        slides: [
            { title: "會計恆等式", text: "會計恆等式是會計學的基石：資產 (Assets) = 負債 (Liabilities) + 權益 (Equity)。不論發生任何商業交易，這個等式永遠保持平衡。這也是我們『借貸天平』的物理原理。", diagramHTML: "<div style='padding:10px; border:1px dashed var(--border-color); border-radius:8px;'>資產 $100 = 負債 $40 + 權益 $60</div>" }
        ],
        quizzes: [
            { question: "企業現購商品 $5,000，會計恆等式會發生什麼變化？", options: ["資產一增一減，總額不變", "資產增加，負債增加", "資產增加，權益增加", "資產減少，權益減少"], answerIndex: 0, explanation: "現購商品（存貨增加 $5,000）使資產增加，同時支付現金（現金減少 $5,000）使資產減少。此交易為資產內部的一增一減，資產總額維持不變，方程式依然平衡。" }
        ]
    },
    {
        week: 3, month: 1, phase: 1,
        title: "借貸法則黃金密碼",
        difficulty: "🟡 中", examWeight: "⭐⭐⭐⭐⭐",
        desc: "會計學的十字路口！學習「左借右貸」法則，掌握各要素增減記帳的方向，奠定記帳實作的靈魂。",
        objectives: ["明確認知『借方』代表左邊，『貸方』代表右邊", "掌握資產與費損類科目：借增貸減", "掌握負債、權益與收益類科目：貸增借減"],
        slides: [
            { title: "借貸法則口訣", text: "借方就是左邊，貸方就是右邊！\n• <b>借方增加</b>：資產、費損。\n• <b>貸方增加</b>：負債、權益、收益。\n每次交易的分錄，借方總金額必須等於貸方總金額，這就是雙式簿記的恆等規律。", diagramHTML: "<table style='width:100%; border:1px solid var(--border-color); font-size:12px;'><tr><th style='border-bottom:1px solid var(--border-color)'>借方 (Dr. 左) 增加</th><th style='border-left:1px solid var(--border-color); border-bottom:1px solid var(--border-color)'>貸方 (Cr. 右) 增加</th></tr><tr><td>資產 ↑ / 費損 ↑</td><td style='border-left:1px solid var(--border-color)'>負債 ↑ / 權益 ↑ / 收益 ↑</td></tr></table>" }
        ],
        quizzes: [
            { question: "下列何種類型的科目，其增加時應記入「借方」？", options: ["負債類與收益類", "資產類與費損類", "權益類與收益類", "負債類與權益類"], answerIndex: 1, explanation: "依據借貸法則，資產類與費損類科目在「借方」表示增加，在「貸方」表示減少；而負債、權益與收益類科目則是在「貸方」表示增加。" }
        ]
    },
    {
        week: 4, month: 1, phase: 1,
        title: "會計科目分類與編號",
        difficulty: "🟢 易", examWeight: "⭐⭐⭐",
        desc: "認識會計科目的四位數編號系統，熟悉統測常考的基礎科目（如現金、應收帳款、應付帳款等）。",
        objectives: ["了解會計科目的一級分類（1資產、2負債...）", "掌握常見科目的定義與代碼規律", "為編製分錄做好科目準備"],
        slides: [
            { title: "科目代碼的秘密", text: "會計科目通常使用四位數編碼：\n• 1開頭：資產（如 1101 現金）\n• 2開頭：負債（如 2101 應付帳款）\n• 3開頭：權益（如 3101 業主資本）\n• 4開頭：營業收入\n• 5、6、7開頭：各類成本與費用。", diagramHTML: "<span>1xxx (資產) ➔ 2xxx (負債) ➔ 3xxx (權益) ➔ 4xxx (收入) ➔ 5xxx (費用)</span>" }
        ],
        quizzes: [
            { question: "在會計科目編號中，以「2」開頭的科目通常屬於哪一類要素？", options: ["資產類", "負債類", "權益類", "費損類"], answerIndex: 1, explanation: "在標準會計科目編號系統中，首位數字代表要素分類：1為資產，2為負債，3為權益，4為營業收入，5/6為營業成本與費用。" }
        ]
    },
    // Month 2
    {
        week: 5, month: 2, phase: 1,
        title: "分錄日記簿實務",
        difficulty: "🟡 中", examWeight: "⭐⭐⭐⭐⭐",
        desc: "會計循環的第一步！學習如何將商業交易轉化為會計分錄，並登錄於日記簿中。",
        objectives: ["掌握分錄編製的三個步驟", "學會編製複合分錄（多借多貸）", "掌握買賣業進銷貨與折扣的分錄處理"],
        slides: [
            { title: "編製分錄三部曲", text: "1. <b>分析要素</b>：判定該交易影響哪些會計科目（如現金增加、設備增加）。\n2. <b>適用借貸</b>：依據科目類別，決定借貸方向（如資產增加記借方，資產減少記貸方）。\n3. <b>填寫金額</b>：借方在左且靠左，貸方在右且退格，確保借貸金額相等。", diagramHTML: "<div style='text-align:left; font-family:monospace; padding-left:20px;'>借：辦公設備  30,000<br>&nbsp;&nbsp;&nbsp;&nbsp;貸：現金      30,000</div>" }
        ],
        quizzes: [
            { question: "企業購買辦公設備 $10,000，付現 $4,000，餘款暫欠。此分錄之貸方科目應為：", options: ["辦公設備與應付帳款", "現金與應付帳款", "現金與應收帳款", "辦公設備與現金"], answerIndex: 1, explanation: "借方購入資產：借「辦公設備」$10,000。貸方付現及欠款：貸「現金」$4,000（資產減少記入貸方），及貸「應付帳款」$6,000（負債增加記入貸方）。" }
        ]
    },
    {
        week: 6, month: 2, phase: 1,
        title: "過帳與分類帳處理",
        difficulty: "🟢 易", examWeight: "⭐⭐⭐",
        desc: "學習如何將日記簿中的分錄過入分類帳（特別是T字帳），以統計各科目的個別餘額。",
        objectives: ["理解總分類帳與明細分類帳的區別", "熟練掌握T字帳的過帳步驟與餘額計算", "理解過帳在會計循環中的承上啟下作用"],
        slides: [
            { title: "過帳與T字帳", text: "過帳就是把日記簿分錄『搬』到各科目的總分類帳（T字帳）中。借方分錄過入T字帳的左邊，貸方分錄過入T字帳的右邊。最後將借貸兩邊相減，即可算出該科目的期末餘額。", diagramHTML: "<div style='width:120px; margin:0 auto; border:1px solid var(--border-color); text-align:center;'><div style='border-bottom:1px solid var(--border-color); padding:4px;'>現金</div><div style='display:flex; justify-content:space-between; height:40px; padding:4px;'><span>借 (Dr.)</span><span style='border-left:1px solid var(--border-color)'></span><span>貸 (Cr.)</span></div></div>" }
        ],
        quizzes: [
            { question: "關於「過帳」的敘述，下列何者正確？", options: ["是會計循環的第一步", "是將分類帳金額過入日記簿", "過帳後可以求得各會計科目的獨立餘額", "過帳時，借方分錄要過入T字帳的右邊"], answerIndex: 2, explanation: "過帳是將日記簿（分錄）登錄到分類帳（T字帳）的過程，目的在於彙整並求得各科目的獨立餘額。借方過入T字帳的左邊，貸方過入右邊。" }
        ]
    },
    {
        week: 7, month: 2, phase: 1,
        title: "試算與試算表編製",
        difficulty: "🟡 中", examWeight: "⭐⭐⭐⭐",
        desc: "檢驗記帳是否出錯的關鍵步驟！學習如何編製「總額試算表」與「餘額試算表」，並分析無法發現的錯誤類型。",
        objectives: ["學會編製餘額式試算表", "理解試算表借貸平衡的原理", "辨識試算表平衡但依然存在的記帳錯誤（如科目放錯、漏記）"],
        slides: [
            { title: "試算表的局限性", text: "如果試算表『借貸平衡』，只代表『借貸金額相等』，不代表完全沒錯！有些錯誤是試算表無法偵測的：\n1. <b>漏記或重記</b>整筆交易。\n2. <b>科目借貸方向對稱但科目放錯</b>（如借現金寫成借應收帳款）。\n3. 借貸雙方金額同等寫錯。", diagramHTML: "<div style='color:var(--color-warning)'>⚠️ 借貸平衡 ≠ 記帳完全正確</div>" }
        ],
        quizzes: [
            { question: "下列哪一種記帳錯誤，會導致試算表「借貸不平衡」？", options: ["漏記整筆交易", "將借方「現金」誤記為借方「應收帳款」", "重記整筆交易", "將一筆借方 $500 的分錄誤過入貸方 $50"], answerIndex: 3, explanation: "漏記、重記、或是用錯科目但借貸方向與金額正確，都不會影響借貸雙方總額的相等（仍平衡）。但如果將借方的 $500 寫成貸方的 $50，雙方金額不相等，試算表便會發生借貸不平衡。" }
        ]
    },
    {
        week: 8, month: 2, phase: 1,
        title: "商業會計法與帳簿通則",
        difficulty: "🟢 易", examWeight: "⭐⭐",
        desc: "配合台灣法規，學習《商業會計法》中關於會計憑證、會計帳簿以及記帳通則的法律規範。",
        objectives: ["分辨原始憑證與記帳憑證", "掌握法定帳簿種類（日記簿、總分類帳）", "了解憑證與帳簿的法定保存年限"],
        slides: [
            { title: "會計憑證法規", text: "依《商業會計法》規定：\n• <b>原始憑證</b>：證明交易發生（如發票、收據）。\n• <b>記帳憑證</b>：記帳人員編製的分錄單。\n會計憑證應保存 5 年，會計帳簿及財務報表應保存 10 年。", diagramHTML: "<div class='badge badge-cyan'>憑證保存 5 年</div> &nbsp; <div class='badge badge-primary'>帳表保存 10 年</div>" }
        ],
        quizzes: [
            { question: "依中華民國《商業會計法》規定，各項會計帳簿及財務報表，於會計年度決算程序辦理完竣後，至少應保存多久？", options: ["3 年", "5 年", "10 年", "20 年"], answerIndex: 2, explanation: "依據《商業會計法》第 38 條，商業之各項會計帳簿及財務報表，應於辦理完竣後，至少保存 10 年；而各項會計憑證則至少保存 5 年。" }
        ]
    }
];

// Fallback skeleton configuration for Weeks 9-24
for (let w = 9; w <= 24; w++) {
    let m = Math.ceil(w / 4);
    let phase = m <= 2 ? 1 : (m <= 4 ? 2 : 3);
    let titles = [
        "", "", "", "", "", "", "", "",
        "期末調整之意義與基礎", "應計項目與預計項目調整", "估計項目調整（折舊與呆帳）", "存貨調整與定期盤存制",
        "結帳程序與虛帳戶結轉", "財務報表編製（損益與資產負債）", "財務報表基礎比例分析", "加值型營業稅基本觀念",
        "營業稅會計處理與申報", "現金與內部控制（零用金）", "銀行存款調節表編製", "應收款項之認列與呆帳提列",
        "應收票據貼現會計處理", "存貨成本流轉假設（FIFO/平均法）", "存貨期末評價與損耗", "統測歷屆試題與衝刺模擬考"
    ];
    curriculumData.push({
        week: w, month: m, phase: phase,
        title: titles[w - 1] || `第 ${w} 週：進階專題學習`,
        difficulty: w <= 16 ? "🟡 中" : "🔴 難",
        examWeight: w % 2 === 0 ? "⭐⭐⭐⭐" : "⭐⭐⭐",
        desc: `本單元為統測會計學重要章節。涵蓋${titles[w - 1] || '進階會計觀念'}的深度解析與歷屆試題演練。`,
        objectives: ["掌握本單元核心會計準則EAS規範", "理解相關交易的分錄與過帳技巧", "熟練解答統測歷屆典型計算題"],
        slides: [
            { title: "核心觀念精要", text: `這是第 ${w} 週的重點學習內容。包含重要定義、會計處理程序及常考題型公式解析。建議搭配模擬沙盒進行借貸分錄練習以加深記憶。`, diagramHTML: "<div class='badge badge-primary'>精要圖卡</div> ➔ <div class='badge badge-cyan'>分錄實作</div>" }
        ],
        quizzes: [
            { question: `關於本週主題「${titles[w - 1] || '進階會計'}」的統測重點，下列敘述何者最適當？`, options: ["此項目只在期末影響損益", "此項目為統測高頻考點，著重借貸平衡與金額計算", "此項目不需要進行期末調整", "此項目不計入財務報表"], answerIndex: 1, explanation: "本主題是統測商業管理群會計學的必考核心單元，考生應熟練掌握其科目性質、借貸增減方向及相關會計分錄計算。" }
        ]
    });
}

// Sandbox Transactions Database
const sandboxTransactions = [
    { id: "tx-1", title: "1. 業主出資創立店鋪", desc: "業主（老闆）投入現金 $100,000 開設「統測會計通商店」。", correctDebit: "現金", correctCredit: "業主資本", amount: 100000 },
    { id: "tx-2", title: "2. 現金購入辦公設備", desc: "店鋪購買電腦與辦公桌椅一套，以現金支付 $30,000。", correctDebit: "辦公設備", correctCredit: "現金", amount: 30000 },
    { id: "tx-3", title: "3. 向供應商賒購商品", desc: "向大東公司購入商品（存貨）一批，金額 $20,000，貨款暫欠（賒購）。", correctDebit: "存貨", correctCredit: "應付帳款", amount: 20000 },
    { id: "tx-4", title: "4. 現金支付辦公室租金", desc: "以現金支付本月店鋪辦公室租金 $10,000。", correctDebit: "租金費用", correctCredit: "現金", amount: 10000 },
    { id: "tx-5", title: "5. 向銀行借入短期款項", desc: "因營業需要，向第一銀行借入短期款項 $50,000，資金已存入銀行戶頭（視為現金增加）。", correctDebit: "現金", correctCredit: "銀行借款", amount: 50000 }
];

// Accounting Subjects Database
const accountingSubjects = [
    { code: "1101", name: "現金", category: "assets", desc: "手存現金、銀行存款、零用金等可隨時支用的資金。", highlight: true },
    { code: "1113", name: "應收票據", category: "assets", desc: "因賒銷商品或提供勞務而取得之未到期商業匯票或本票。", highlight: false },
    { code: "1114", name: "應收帳款", category: "assets", desc: "因賒銷商品或提供勞務而對顧客擁有的債權。", highlight: true },
    { code: "1130", name: "存貨", category: "assets", desc: "企業準備用於日常銷售的商品、產成品或在製品。", highlight: true },
    { code: "1140", name: "預付費用", category: "assets", desc: "已支付但應歸屬於未來期間的費用（如預付租金、預付保險費）。", highlight: false },
    { code: "1401", name: "辦公設備", category: "assets", desc: "辦公用之電腦、桌椅、保險箱等耐用年限在一年以上之資產。", highlight: true },
    { code: "2102", name: "應付票據", category: "liabilities", desc: "因賒購商品或接受勞務而開出承兌之未到期本票或匯票。", highlight: false },
    { code: "2103", name: "應付帳款", category: "liabilities", desc: "因賒購商品或接受勞務而暫欠供應商的貨款。", highlight: true },
    { code: "2120", name: "銀行借款", category: "liabilities", desc: "向金融機構借入的款項（可分為短期借款或長期借款）。", highlight: true },
    { code: "2140", name: "預收收入", category: "liabilities", desc: "已收取但尚未提供商品 or 勞務的預收貨款，代表履行合約之義務。", highlight: false },
    { code: "3101", name: "業主資本", category: "equity", desc: "業主（老闆）投入企業的原始資本或增資總額。", highlight: true },
    { code: "3102", name: "業主往來", category: "equity", desc: "記錄業主與企業間的臨時資金往來或提支資金的往來科目。", highlight: false },
    { code: "4101", name: "銷貨收入", category: "revenue", desc: "銷售商品或提供勞務所得的營業收入總額。", highlight: true },
    { code: "4601", name: "利息收入", category: "revenue", desc: "因存放銀行或持有債券所賺取的利息收益。", highlight: false },
    { code: "5101", name: "銷貨成本", category: "expense", desc: "已銷售商品的購進成本，為營業收入之直接對應成本。", highlight: true },
    { code: "6101", name: "租金費用", category: "expense", desc: "承租辦公室、店面或倉庫所支付的租金負擔。", highlight: true },
    { code: "6102", name: "水電費", category: "expense", desc: "營業場所耗用之水費、電費及瓦斯費支出。", highlight: false },
    { code: "6103", name: "薪資費用", category: "expense", desc: "支付給員工及管理人員的薪資、津貼與獎金。", highlight: true },
    { code: "6104", name: "折舊", category: "expense", desc: "固定資產隨時間消耗轉化為費用的部分。", highlight: false }
];

// 2. Application State Variables
let currentTab = 'past-exams'; // 預設直接開考古題
let userProgress = { streak: 3, level: "LV.2 借貸練習生", completedWeeks: [1, 2, 3], currentWeek: 4, score: 150 };

let ledger = {
    "現金": { debits: [], credits: [], type: "assets" },
    "辦公設備": { debits: [], credits: [], type: "assets" },
    "存貨": { debits: [], credits: [], type: "assets" },
    "應付帳款": { debits: [], credits: [], type: "liabilities" },
    "銀行借款": { debits: [], credits: [], type: "liabilities" },
    "業主資本": { debits: [], credits: [], type: "equity" },
    "租金費用": { debits: [], credits: [], type: "expense" }
};

// 統測關鍵盲點大補帖資料庫
const BLINDSPOTS = {
    "Reconciliation": {
        title: "💡 銀行存款調節表 — 關鍵盲點大補帖", tag: "會計學",
        content: `<p><b>「保付支票」絕對不調整！</b></p><p>保付支票是銀行已經從發票人帳戶中扣除款項並保證兌付的支票。在編製調節表時<b>兩邊都完全不用調整</b>！</p><div class="blindspot-mnemonic">口訣：「保付支票，保證沒事，兩邊不調！」</div>`
    },
    "Depreciation": {
        title: "💡 長期資產折舊 — 關鍵盲點大補帖", tag: "會計學",
        content: `<p><b>「雙倍餘額遞減法」第一年絕不扣殘值！</b></p><p>公式：<code>折舊額 = 期初帳面價值 (BV) × (2 / 耐用年限)</code>。第一年計算時，<b>千萬不要扣除殘值</b>！最後一年用<b>倒擠法</b>。</p><div class="blindspot-mnemonic">口訣：「雙倍餘額不扣殘，最後一年用倒擠！」</div>`
    },
    "Shutdown": {
        title: "💡 市場結構與歇業點 — 關鍵盲點大補帖", tag: "經濟學",
        content: `<p><b>「歇業點」與「操場跑步理論」</b></p><p>廠商短期歇業關鍵在於<b>價格 (P) 與平均變動成本 (AVC) 的關係</b>。當 P < AVC，多生產一步都在流失固定能量，必須立刻關門歇業！</p><div class="blindspot-mnemonic">結論：關門點為 P = AVC。若 P &lt; AVC，立刻歇業！</div>`
    },
    "Monetary": {
        title: "💡 央行貨幣政策 — 關鍵盲點大補帖", tag: "經濟學",
        content: `<p><b>央行貨幣政策三大工具與「推繩理論」</b></p><p>緊縮政策（拉繩子）有效，寬鬆政策（推繩子）常失效（流動性陷阱）。若民間沒有信心不願貸，推繩子只會彎曲！</p><div class="blindspot-mnemonic">口訣：「買入放錢、賣出收錢；緊縮拉繩極有效，寬鬆推繩看信心！」</div>`
    }
};

function getBlindspotKey(questionText) {
    if (!questionText) return null;
    if (questionText.includes("調節表") || questionText.includes("銀行存款")) return "Reconciliation";
    if (questionText.includes("折舊")) return "Depreciation";
    if (questionText.includes("歇業") || questionText.includes("關門點") || questionText.includes("AVC")) return "Shutdown";
    if (questionText.includes("貨幣政策") || questionText.includes("央行") || questionText.includes("準備率")) {
        if (questionText.includes("票據貼現")) return null;
        return "Monetary";
    }
    return null;
}

let activeQuiz = { questions: [], currentIndex: 0, score: 0, hasAnswered: false, wrongQuestions: [] };
let activeLesson = { slides: [], currentIndex: 0 };

// 3. App Initialization
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initPastExams();
    initMap();
    initSandbox();
    initCheatSheet();
    updateHeaderProgress();
});

// 4. Navigation Control
function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });
}

function switchTab(tabId) {
    currentTab = tabId;
    document.querySelectorAll(".nav-btn").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) btn.classList.add("active");
        else btn.classList.remove("active");
    });

    document.querySelectorAll(".tab-content").forEach(content => {
        if (content.id === `tab-${tabId}`) content.classList.add("active");
        else content.classList.remove("active");
    });

    const pageTitle = document.getElementById("page-title");
    const pageSubtitle = document.getElementById("page-subtitle");

    switch (tabId) {
        case 'dashboard': pageTitle.innerText = "學習儀表板"; pageSubtitle.innerText = "歡迎回來！今天也是進步的一天。"; break;
        case 'map': pageTitle.innerText = "24週極速通關學習地圖"; pageSubtitle.innerText = "點擊各週節點解鎖考綱概要、微課程與快速挑戰！"; break;
        case 'sandbox': pageTitle.innerText = "互動借貸天平與T字帳沙盒"; pageSubtitle.innerText = "親自動手做分錄過帳，觀察資產、負債與權益的動態平衡。"; updateScaleVisuals(); renderTAccounts(); break;
        case 'quiz': pageTitle.innerText = "過關挑戰競技場"; pageSubtitle.innerText = "做題是最好的複習。挑戰真題，獲取經驗值解鎖下一單元！"; startQuizSection(); break;
        case 'cheat-sheet': pageTitle.innerText = "會計科目必背秘笈"; pageSubtitle.innerText = "考前必看！快速檢索與複習各科目名稱、編號及借貸方向。"; break;
        case 'review-notes': pageTitle.innerText = "黃金複習大綱與攻略"; pageSubtitle.innerText = "精準掌握統測命題重點與解題盲點。"; break;
        case 'past-exams': pageTitle.innerText = "歷屆考古題實戰特訓"; pageSubtitle.innerText = "練習近10年統測專業二經典真真題，秒速加載解析！"; initPastExams(); break;
    }
}

// 5. Dashboard Tab Controller
function initDashboard() {
    document.getElementById("streak-count").innerText = userProgress.streak;
}

function checkQuickAnswer(isCorrect, btnElement) {
    const feedbackBox = document.getElementById("quick-feedback");
    feedbackBox.className = "feedback-msg";
    btnElement.parentElement.querySelectorAll("button").forEach(btn => btn.disabled = true);

    if (isCorrect) {
        feedbackBox.innerText = "🎉 答對了！企業向銀行借款，資產增加、負債增加，方程式兩邊平衡！";
        feedbackBox.classList.add("correct");
        userProgress.score += 20;
        updateHeaderProgress();
    } else {
        feedbackBox.innerText = "❌ 答錯囉。借入款項會增加現金（資產），同時增加負債。";
        feedbackBox.classList.add("wrong");
    }
}

// 6. 24-Week Map Tab Controller
function initMap() {
    renderMapNodes(1);
    const phaseBtns = document.querySelectorAll(".phase-selector button");
    phaseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            phaseBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderMapNodes(parseInt(btn.getAttribute("data-phase")));
        });
    });
}

function renderMapNodes(phase) {
    const container = document.getElementById("map-nodes-container");
    if (!container) return;
    container.innerHTML = "";
    curriculumData.filter(item => item.phase === phase).forEach((weekData) => {
        const nodeWrapper = document.createElement("div");
        nodeWrapper.className = "map-node-wrapper";
        let statusClass = userProgress.completedWeeks.includes(weekData.week) ? "done" : (weekData.week === userProgress.currentWeek ? "active" : "locked");
        nodeWrapper.classList.add(statusClass);

        const nodeDot = document.createElement("div");
        nodeDot.className = "map-node-dot";
        nodeDot.innerText = weekData.week;

        const nodeCard = document.createElement("div");
        nodeCard.className = `card map-node-card ${statusClass}`;
        nodeCard.innerHTML = `<span class="badge badge-purple">M${weekData.month} W${weekData.week}</span><h4>${weekData.title}</h4><p>${weekData.desc.substring(0, 50)}...</p>`;
        nodeCard.addEventListener("click", () => openDrawer(weekData));

        nodeWrapper.appendChild(nodeDot);
        nodeWrapper.appendChild(nodeCard);
        container.appendChild(nodeWrapper);
    });
}

function openDrawer(weekData) {
    const drawer = document.getElementById("map-drawer");
    document.getElementById("drawer-title").innerText = `第 ${weekData.week} 週：${weekData.title}`;
    document.getElementById("drawer-difficulty").innerText = `難度: ${weekData.difficulty}`;
    document.getElementById("drawer-exam-weight").innerText = `考頻: ${weekData.examWeight}`;
    document.getElementById("drawer-desc").innerText = weekData.desc;

    const objList = document.getElementById("drawer-obj-list");
    objList.innerHTML = "";
    weekData.objectives.forEach(obj => { const li = document.createElement("li"); li.innerText = obj; objList.appendChild(li); });

    document.getElementById("drawer-start-btn").onclick = () => { closeDrawer(); openLesson(weekData); };
    drawer.classList.add("open");
}

function closeDrawer() { document.getElementById("map-drawer").classList.remove("open"); }

// 7. Interactive Micro-Lesson Controller
function openLesson(weekData) {
    activeLesson.slides = [...weekData.slides];
    activeLesson.currentIndex = 0;
    weekData.quizzes.forEach(quiz => { activeLesson.slides.push({ isQuiz: true, quizData: quiz, weekNum: weekData.week }); });
    renderSlide();
    document.getElementById("lesson-modal").classList.remove("hidden");
}

function closeLessonModal() { document.getElementById("lesson-modal").classList.add("hidden"); }

function renderSlide() {
    const container = document.getElementById("slides-container");
    container.innerHTML = "";
    const slideData = activeLesson.slides[activeLesson.currentIndex];
    const slideEl = document.createElement("div");
    slideEl.className = "slide";

    if (slideData.isQuiz) {
        slideEl.innerHTML = `<h4>📝 本週過關小挑戰</h4><p style='margin-bottom:20px; font-weight:600;'>${slideData.quizData.question}</p><div class="quiz-options-list">${slideData.quizData.options.map((opt, idx) => `<button class="quiz-option-btn" onclick="checkLessonQuizAnswer(${idx}, ${slideData.quizData.answerIndex}, '${slideData.quizData.explanation.replace(/'/g, "\\'")}', this, ${slideData.weekNum})"><span>${opt}</span></button>`).join('')}</div><div id="lesson-quiz-feedback" class="feedback-msg"></div>`;
    } else {
        slideEl.innerHTML = `<h4>${slideData.title}</h4><p style="white-space: pre-line;">${slideData.text}</p><div class="slide-diagram">${slideData.diagramHTML}</div>`;
    }
    container.appendChild(slideEl);

    const dotsContainer = document.getElementById("slide-dots");
    dotsContainer.innerHTML = "";
    activeLesson.slides.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `slide-dot ${idx === activeLesson.currentIndex ? 'active' : ''}`;
        dot.onclick = () => { activeLesson.currentIndex = idx; renderSlide(); };
        dotsContainer.appendChild(dot);
    });

    document.getElementById("btn-prev-slide").disabled = activeLesson.currentIndex === 0;
    const nextBtn = document.getElementById("btn-next-slide");
    if (activeLesson.currentIndex === activeLesson.slides.length - 1) {
        nextBtn.innerText = "完成單元 🎉";
        nextBtn.onclick = closeLessonModal;
    } else {
        nextBtn.innerText = "下一頁 ▶";
        nextBtn.onclick = () => { activeLesson.currentIndex++; renderSlide(); };
    }
}

const prevBtnSlide = document.getElementById("btn-prev-slide");
if (prevBtnSlide) {
    prevBtnSlide.addEventListener("click", () => { if (activeLesson.currentIndex > 0) { activeLesson.currentIndex--; renderSlide(); } });
}

function checkLessonQuizAnswer(selectedIndex, correctIndex, explanation, btnElement, weekNum) {
    const feedbackBox = document.getElementById("lesson-quiz-feedback");
    const buttons = btnElement.parentElement.querySelectorAll(".quiz-option-btn");
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        btnElement.classList.add("correct");
        feedbackBox.className = "feedback-msg correct";
        feedbackBox.innerText = `🎉 答對了！\n${explanation}`;
        if (!userProgress.completedWeeks.includes(weekNum)) {
            userProgress.completedWeeks.push(weekNum);
            userProgress.score += 50;
            if (userProgress.currentWeek === weekNum) userProgress.currentWeek++;
            updateHeaderProgress();
            initMap();
        }
    } else {
        btnElement.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
        feedbackBox.className = "feedback-msg wrong";
        feedbackBox.innerText = `❌ 答錯囉。\n${explanation}`;
    }
}

// 8. Interactive Accounting Sandbox Engine
function initSandbox() {
    const select = document.getElementById("tx-select");
    if (!select) return;
    select.innerHTML = "";
    sandboxTransactions.forEach(tx => { const opt = document.createElement("option"); opt.value = tx.id; opt.innerText = tx.title; select.appendChild(opt); });
    select.addEventListener("change", () => loadSandboxTransaction(select.value));

    const debitSelect = document.getElementById("debit-account");
    const creditSelect = document.getElementById("credit-account");
    debitSelect.innerHTML = "<option value=''>選擇會計科目...</option>";
    creditSelect.innerHTML = "<option value=''>選擇會計科目...</option>";

    accountingSubjects.forEach(sub => {
        const opt = `<option value="${sub.name}">${sub.code} ${sub.name} (${sub.category === 'assets' ? '資產' : sub.category === 'liabilities' ? '負債' : sub.category === 'equity' ? '權益' : sub.category === 'revenue' ? '收益' : '費損'})</option>`;
        debitSelect.innerHTML += opt;
        creditSelect.innerHTML += opt;
    });

    document.getElementById("btn-post-entry").addEventListener("click", postSandboxEntry);
    loadSandboxTransaction(sandboxTransactions[0].id);
}

function loadSandboxTransaction(txId) {
    const tx = sandboxTransactions.find(t => t.id === txId);
    if (tx) {
        document.getElementById("sandbox-tx-title").innerText = tx.title;
        document.getElementById("sandbox-tx-desc").innerText = tx.desc;
        document.getElementById("sandbox-message").classList.add("hidden");
        resetFormInputs();
    }
}

function resetFormInputs() {
    document.getElementById("debit-account").value = ""; document.getElementById("credit-account").value = "";
    document.getElementById("debit-amount").value = ""; document.getElementById("credit-amount").value = "";
    document.getElementById("debit-account").classList.remove("correct", "wrong");
    document.getElementById("credit-account").classList.remove("correct", "wrong");
}

function postSandboxEntry() {
    const txId = document.getElementById("tx-select").value;
    const tx = sandboxTransactions.find(t => t.id === txId);
    const drAcc = document.getElementById("debit-account").value;
    const crAcc = document.getElementById("credit-account").value;
    const drAmt = parseInt(document.getElementById("debit-amount").value);
    const crAmt = parseInt(document.getElementById("credit-amount").value);

    if (!drAcc || !crAcc || isNaN(drAmt) || isNaN(crAmt)) { alert("⚠️ 請填妥借貸雙方的科目與金額！"); return; }
    if (drAmt !== crAmt) { alert("⚠️ 借貸不平衡！金額必須相等！"); shakeScale(); return; }

    if (drAcc === tx.correctDebit && crAcc === tx.correctCredit && drAmt === tx.amount) {
        ledger[drAcc].debits.push(drAmt);
        ledger[crAcc].credits.push(crAmt);
        const msgBox = document.getElementById("sandbox-message");
        msgBox.innerHTML = `<h4>🎉 借貸平衡且正確！</h4><p>分錄編製正確！天平順利過帳平衡！</p>`;
        msgBox.classList.remove("hidden");
        updateScaleVisuals(); renderTAccounts(); highlightNewPost(drAcc, crAcc);
        userProgress.score += 30; updateHeaderProgress();
    } else {
        alert(`❌ 科目或金額不對哦！\n提示：\n- 借方應為：增加的資產或費損\n- 貸方應為：減少的資產或增加的負債與權益`);
    }
}

function highlightNewPost(drAcc, crAcc) {
    setTimeout(() => {
        document.querySelectorAll(".t-account").forEach(div => {
            const title = div.querySelector(".t-title").innerText;
            if (title === drAcc || title === crAcc) {
                div.style.boxShadow = "0 0 15px var(--color-primary)";
                setTimeout(() => { div.style.boxShadow = "none"; }, 1500);
            }
        });
    }, 100);
}

function shakeScale() {
    const beam = document.getElementById("scale-beam");
    if (beam) {
        beam.style.transform = "rotate(8deg)";
        setTimeout(() => { beam.style.transform = "rotate(-8deg)"; setTimeout(() => { beam.style.transform = "rotate(0deg)"; }, 300); }, 300);
    }
}

function updateScaleVisuals() {
    let assetsTotal = 0, liabTotal = 0, equityTotal = 0;
    for (let accName in ledger) {
        const data = ledger[accName];
        let debitsSum = data.debits.reduce((a, b) => a + b, 0);
        let creditsSum = data.credits.reduce((a, b) => a + b, 0);
        if (data.type === 'assets') assetsTotal += (debitsSum - creditsSum);
        else if (data.type === 'liabilities') liabTotal += (creditsSum - debitsSum);
        else if (data.type === 'equity') equityTotal += (creditsSum - debitsSum);
        else if (data.type === 'expense') equityTotal -= (debitsSum - creditsSum);
    }
    const displayAssets = assetsTotal;
    const displayLiabEquity = liabTotal + equityTotal;

    const astEl = document.getElementById("val-assets");
    if (astEl) astEl.innerText = `$${displayAssets.toLocaleString()}`;
    const leEl = document.getElementById("val-liab-equity");
    if (leEl) leEl.innerText = `$${displayLiabEquity.toLocaleString()}`;

    const beam = document.getElementById("scale-beam");
    const statusText = document.getElementById("scale-status");
    if (!beam || !statusText) return;

    if (displayAssets === displayLiabEquity) {
        beam.style.transform = "rotate(0deg)"; statusText.innerText = "⚖️ 目前方程式平衡 (資產 = 負債 + 權益)"; statusText.style.color = "var(--color-success)";
    } else if (displayAssets > displayLiabEquity) {
        beam.style.transform = "rotate(-10deg)"; statusText.innerText = "⚠️ 方程式失衡！左側資產過重！"; statusText.style.color = "var(--color-danger)";
    } else {
        beam.style.transform = "rotate(10deg)"; statusText.innerText = "⚠️ 方程式失衡！右側負債與權益過重！"; statusText.style.color = "var(--color-danger)";
    }
}

function renderTAccounts() {
    const grid = document.getElementById("t-accounts-grid");
    if (!grid) return;
    grid.innerHTML = "";
    for (let accName in ledger) {
        const data = ledger[accName];
        const debitsSum = data.debits.reduce((a, b) => a + b, 0);
        const creditsSum = data.credits.reduce((a, b) => a + b, 0);
        if (data.debits.length === 0 && data.credits.length === 0) continue;

        const tCard = document.createElement("div");
        tCard.className = `t-account ${data.type === "assets" ? "border-assets" : data.type === "liabilities" ? "border-liabilities" : "border-equity"}`;

        let debitsHTML = data.debits.map(val => `<div class="t-entry-val"><span></span><span>$${val.toLocaleString()}</span></div>`).join('');
        let creditsHTML = data.credits.map(val => `<div class="t-entry-val"><span>$${val.toLocaleString()}</span><span></span></div>`).join('');
        let net = (data.type === "assets" || data.type === "expense") ? debitsSum - creditsSum : creditsSum - debitsSum;

        tCard.innerHTML = `<div class="t-title">${accName}</div><div class="t-body"><div class="t-debits">${debitsHTML}</div><div class="t-separator"></div><div class="t-credits">${creditsHTML}</div></div><div class="t-balance-row"><span>餘額 (${(data.type === "assets" || data.type === "expense") ? "Dr." : "Cr."}):</span><span>$${net.toLocaleString()}</span></div>`;
        grid.appendChild(tCard);
    }
    if (grid.children.length === 0) grid.innerHTML = "<p class='text-secondary' style='grid-column: span 3; text-align:center; padding:32px;'>尚無過帳資料。</p>";
}

// 9. Tab: Quiz Center Controller
const generalQuizzes = [
    { question: "統測常考題：企業期末漏記「預收收入之調整分錄」，對當年度財務報表的影響為何？", options: ["負債高估，收益低估", "負債低估，收益高估", "資產高估，負債低估", "權益高估，收益低估"], answerIndex: 0, explanation: "預收收入屬於負債。期末調整分錄應為借：預收收入，貸：服務收入。漏做此調整，負債未減而高估，收益未增而低估。" }
];

function startQuizSection() { activeQuiz.questions = generalQuizzes; activeQuiz.currentIndex = 0; activeQuiz.score = 0; activeQuiz.hasAnswered = false; activeQuiz.wrongQuestions = []; renderQuizQuestion(); }
function renderQuizQuestion() {
    const qData = activeQuiz.questions[activeQuiz.currentIndex];
    document.getElementById("current-question-num").innerText = activeQuiz.currentIndex + 1;
    document.getElementById("total-questions-num").innerText = activeQuiz.questions.length;
    document.getElementById("quiz-score").innerText = activeQuiz.score;
    document.getElementById("quiz-question-text").innerText = qData.question;

    const optionsList = document.getElementById("quiz-options-list"); optionsList.innerHTML = "";
    qData.options.forEach((opt, idx) => {
        const btn = document.createElement("button"); btn.className = "quiz-option-btn"; btn.innerHTML = `<span>${opt}</span>`;
        btn.onclick = () => selectQuizOption(idx, btn); optionsList.appendChild(btn);
    });
    document.getElementById("quiz-feedback-box").classList.add("hidden"); activeQuiz.hasAnswered = false;
}

function selectQuizOption(selectedIndex, btnElement) {
    if (activeQuiz.hasAnswered) return; activeQuiz.hasAnswered = true;
    const qData = activeQuiz.questions[activeQuiz.currentIndex];
    const correctIdx = qData.answerIndex;
    const buttons = document.querySelectorAll("#quiz-options-list .quiz-option-btn");
    buttons.forEach(btn => btn.disabled = true);

    const feedbackBox = document.getElementById("quiz-feedback-box");
    const fbTitle = document.getElementById("quiz-feedback-title");
    const fbText = document.getElementById("quiz-feedback-text");

    if (selectedIndex === correctIdx) {
        btnElement.classList.add("correct"); feedbackBox.className = "quiz-feedback-box correct-box"; fbTitle.innerText = "🎉 答對了！";
        fbText.innerHTML = qData.explanation; activeQuiz.score += 100;
    } else {
        btnElement.classList.add("wrong"); buttons[correctIdx].classList.add("correct"); feedbackBox.className = "quiz-feedback-box wrong-box"; fbTitle.innerText = "❌ 答錯了！";
        fbText.innerHTML = `正確答案：【${qData.options[correctIdx]}】。<br><br>解析：${qData.explanation}`;
    }
    feedbackBox.classList.remove("hidden");
    const nextQBtn = document.getElementById("btn-next-question");
    if (nextQBtn) {
        nextQBtn.innerText = "查看總結成果 📊";
        nextQBtn.onclick = showQuizSummary;
    }
}

function showQuizSummary() {
    const tabQuiz = document.getElementById("tab-quiz");
    if (tabQuiz) tabQuiz.innerHTML = `<div class="quiz-container card text-center" style="padding: 48px; max-width: 500px; margin:0 auto;"><h2>挑戰完成！</h2><button class="btn btn-primary" onclick="switchTab('dashboard'); window.location.reload();">返回儀表板</button></div>`;
}

// 10. Cheat Sheet Search & List Controller
function initCheatSheet() { renderCheatSheetList(); const searchInput = document.getElementById("subject-search"); if (searchInput) { searchInput.addEventListener("input", () => renderCheatSheetList(searchInput.value.trim().toLowerCase())); } renderFlashcard(); }
function renderCheatSheetList(query = "") {
    ["assets", "liabilities", "equity", "revenue", "expense"].forEach(cat => {
        const listEl = document.getElementById(`list-${cat}`); if (!listEl) return; listEl.innerHTML = "";
        accountingSubjects.filter(sub => sub.category === cat && (sub.name.includes(query) || sub.code.includes(query))).forEach(sub => {
            const item = document.createElement("div"); item.className = `subject-item ${sub.highlight ? 'highlight' : ''}`;
            item.innerHTML = `<span>${sub.name}</span><span class="code">${sub.code}</span>`;
            item.addEventListener("click", () => showSubjectDetail(sub)); listEl.appendChild(item);
        });
    });
}

function showSubjectDetail(sub) {
    const overlay = document.createElement("div"); overlay.className = "modal-overlay"; overlay.id = "subject-modal";
    overlay.innerHTML = `<div class="modal-card" style="padding:20px; background:var(--bg-card); border-radius:12px; max-width:400px; margin:100px auto; border-top:6px solid var(--color-primary);"><h3>[${sub.code}] ${sub.name}</h3><p>${sub.desc}</p><button class="btn btn-sm" onclick="document.getElementById('subject-modal').remove()">關閉</button></div>`;
    document.body.appendChild(overlay);
}

let cheatsheetMode = 'list'; let flashcardIndex = 0;
function toggleCheatsheetMode(mode) {
    const listV = document.getElementById("cheatsheet-list-view"); if (listV) listV.className = mode === 'list' ? "" : "hidden";
    const flashV = document.getElementById("flashcard-view"); if (flashV) flashV.className = mode === 'flashcard' ? "" : "hidden";
    if (mode === 'flashcard') renderFlashcard();
}
function flipFlashcard() { const fCard = document.getElementById("flashcard-container"); if (fCard) fCard.classList.toggle("flipped"); }
function renderFlashcard() {
    const sub = accountingSubjects[flashcardIndex]; if (!sub) return;
    const fn = document.getElementById("flashcard-front-name"); if (fn) fn.innerText = sub.name;
    const fc = document.getElementById("flashcard-front-code"); if (fc) fc.innerText = sub.code;
    const bd = document.getElementById("flashcard-back-desc"); if (bd) bd.innerText = sub.desc;
    const fp = document.getElementById("flashcard-progress"); if (fp) fp.innerText = `${flashcardIndex + 1} / ${accountingSubjects.length}`;
}
function nextFlashcard() { flashcardIndex = (flashcardIndex + 1) % accountingSubjects.length; renderFlashcard(); }
function prevFlashcard() { flashcardIndex = (flashcardIndex - 1 + accountingSubjects.length) % accountingSubjects.length; renderFlashcard(); }

function updateHeaderProgress() {
    const progressPercent = Math.min(Math.round((userProgress.completedWeeks.length / 24) * 100), 100);
    const fill = document.querySelector(".progress-fill-sm"); if (fill) fill.style.width = `${progressPercent}%`;
    const txt = document.querySelector(".progress-text"); if (txt) txt.innerText = `${progressPercent}%`;
}
function toggleAccordion(id) { const el = document.getElementById(id); if (el) el.classList.toggle("open"); }
function jumpToTab(tabId) { switchTab(tabId); }

// ==========================================================================
// 12. 歷屆試題完全內嵌資料庫 — 113-115年 雙科核心60題 (高密度防截斷版)
// ==========================================================================
const internalFallbackDatabase = [
    // 115年 會計學 (10題)
    { "id": 1, "subject": "accounting", "year": "115", "question": "關於財務報表之敘述，何者正確？", "options": ["現金流量表為特定日期", "綜合損益表為特定日期", "資產負債表為特定日期", "權益變動表為特定日期"], "answerIndex": 2, "explanation": "資產負債表表達特定日期的財務狀況，其餘報表皆為特定期間。" },
    { "id": 2, "subject": "accounting", "year": "115", "question": "依商業會計法，會計帳簿應於決算後至少保存幾年？", "options": ["3年", "5年", "10年", "15年"], "answerIndex": 2, "explanation": "會計帳簿及財務報表保存10年，會計憑證保存5年。" },
    { "id": 3, "subject": "accounting", "year": "115", "question": "汽車經銷商購入汽車以供出售，應認列為？", "options": ["運輸設備", "存貨", "預付費用", "營業外支出"], "answerIndex": 1, "explanation": "供日常營業出售之商品應認列為存貨。" },
    { "id": 4, "subject": "accounting", "year": "115", "question": "過帳時，應將分類帳之頁次記入日記簿的何欄？", "options": ["摘要欄", "類頁欄", "日頁欄", "金額欄"], "answerIndex": 1, "explanation": "分類帳頁次記入日記簿的類頁欄，日記簿頁次記入分類帳的日頁欄。" },
    { "id": 5, "subject": "accounting", "year": "115", "question": "應計基礎下，期末漏作應收收益之調整分錄將導致？", "options": ["資產低估，淨利低估", "資產高估，淨利高估", "負債低估，淨利高估", "權益高估，淨利低估"], "answerIndex": 0, "explanation": "漏計應收收益(借：資產，貸：收益)，將使資產及淨利皆低估。" },
    { "id": 6, "subject": "accounting", "year": "115", "question": "折舊漏計對財務報表的影響為何？", "options": ["資產高估，淨利高估", "資產低估，淨利低估", "負債高估，淨利高估", "費用高估，權益低估"], "answerIndex": 0, "explanation": "漏計折舊(費用未增、累計折舊未增)，導致費用低估(淨利高估)與資產高估。" },
    { "id": 7, "subject": "accounting", "year": "115", "question": "買賣業進貨支付之運費，應計入？", "options": ["營業費用", "進貨成本", "銷貨成本", "管理費用"], "answerIndex": 1, "explanation": "進貨運費為取得商品之必要支出，列為進貨成本加項。" },
    { "id": 8, "subject": "accounting", "year": "115", "question": "下列何者為流動負債？", "options": ["預付費用", "應收帳款", "預收收入", "專利權"], "answerIndex": 2, "explanation": "預收收入為未來需提供商品或勞務之義務，屬流動負債。" },
    { "id": 9, "subject": "accounting", "year": "115", "question": "權責發生制下，未作應付費用調整分錄會導致？", "options": ["負債低估，淨利高估", "負債高估，淨利低估", "資產低估，淨利高估", "權益低估，淨利低估"], "answerIndex": 0, "explanation": "漏記借:費用、貸:應付費用，導致費用低估(淨利高估)及負債低估。" },
    { "id": 10, "subject": "accounting", "year": "115", "question": "結帳時，各項收益與費損科目應結轉至？", "options": ["保留盈餘", "本期損益", "資本公積", "業主資本"], "answerIndex": 1, "explanation": "期末虛帳戶須結轉至「本期損益」帳戶以結清餘額。" },
    // 115年 經濟學 (10題)
    { "id": 11, "subject": "economics", "year": "115", "question": "參加郵輪之旅，放棄飲料店打工與志工，偏好打工大於志工，機會成本為何？", "options": ["郵輪之旅", "飲料店打工", "志工", "無法計算"], "answerIndex": 1, "explanation": "機會成本為放棄選項中價值最高者(飲料店打工)。" },
    { "id": 12, "subject": "economics", "year": "115", "question": "Qs = -10 + 20P，市場有10家相同廠商，價格為5時市場供給量為何？", "options": ["90", "450", "900", "1000"], "answerIndex": 2, "explanation": "市場供給 = 10 * (-10+20P) = -100+200P，代入 P=5 得 900。" },
    { "id": 13, "subject": "economics", "year": "115", "question": "通過原點之直線型供給曲線，其線上各點的供給彈性？", "options": ["等於1", "大於1", "小於1", "不固定"], "answerIndex": 0, "explanation": "通過原點的直線供給曲線，價格彈性恆等於1。" },
    { "id": 14, "subject": "economics", "year": "115", "question": "實質GDP 1600億，物價上漲20%，名目GDP為何？", "options": ["1440億", "1600億", "1920億", "2120億"], "answerIndex": 2, "explanation": "名目GDP = 1600 * 1.2 = 1920億。" },
    { "id": 15, "subject": "economics", "year": "115", "question": "外資美元大量湧入台灣外匯市場，將導致？", "options": ["美元需求右移", "美元供給右移", "台幣貶值", "不利進口"], "answerIndex": 1, "explanation": "美元資金湧入代表美元供給增加(右移)，台幣升值。" },
    { "id": 16, "subject": "economics", "year": "115", "question": "市場產生超額需求時，價格將？", "options": ["下降", "上升", "不變", "無關"], "answerIndex": 1, "explanation": "超額需求(供不應求)將推升價格至均衡點。" },
    { "id": 17, "subject": "economics", "year": "115", "question": "生產要素市場的供給者為？", "options": ["政府", "企業", "家戶", "國外"], "answerIndex": 2, "explanation": "家戶(勞工家庭)提供勞動與土地，為要素市場供給者。" },
    { "id": 18, "subject": "economics", "year": "115", "question": "總效用(TU)達到最大時，邊際效用(MU)為何？", "options": ["最大", "大於零", "等於零", "小於零"], "answerIndex": 2, "explanation": "TU曲線頂點對應之MU為零。" },
    { "id": 19, "subject": "economics", "year": "115", "question": "完全競爭廠商面對的需求曲線形狀為？", "options": ["垂直線", "水平線", "正斜率", "負斜率"], "answerIndex": 1, "explanation": "完全競爭廠商為價格接受者，面對完全彈性的水平需求線。" },
    { "id": 20, "subject": "economics", "year": "115", "question": "獨占廠商的邊際收益(MR)與平均收益(AR)關係為何？", "options": ["MR > AR", "MR = AR", "MR < AR", "無關聯"], "answerIndex": 2, "explanation": "獨占廠商面對負斜率需求線，MR 位於 AR 下方。" },
    // 114年 會計學 (10題)
    { "id": 21, "subject": "accounting", "year": "114", "question": "下列何者不屬費損類？", "options": ["進項稅額", "薪資費用", "折舊", "投資損失"], "answerIndex": 0, "explanation": "進項稅額為流動資產。" },
    { "id": 22, "subject": "accounting", "year": "114", "question": "董事長提公司現金繳個人貸款，違反何種假設？", "options": ["繼續經營", "企業個體", "貨幣評價", "會計期間"], "answerIndex": 1, "explanation": "公私帳務未分違反企業個體假設。" },
    { "id": 23, "subject": "accounting", "year": "114", "question": "定期盤存制下，期初存貨58,000，期末盤點60,000，調整前「存貨」餘額為？", "options": ["0", "58,000", "60,000", "118,000"], "answerIndex": 1, "explanation": "定期盤存制平時不動存貨帳戶，調整前維持期初金額。" },
    { "id": 24, "subject": "accounting", "year": "114", "question": "權責基礎租金收入40萬，預收期初2.25萬、期末4.25萬。現金基礎收入為何？", "options": ["38萬", "40萬", "42萬", "44萬"], "answerIndex": 2, "explanation": "400,000 + (42,500 - 22,500) = 420,000。" },
    { "id": 25, "subject": "accounting", "year": "114", "question": "設備購買誤記修繕費用，影響為何？", "options": ["資產高估", "淨利低估", "負債高估", "費用低估"], "answerIndex": 1, "explanation": "資本支出誤記為收益支出，費用高估、淨利低估、資產低估。" },
    { "id": 26, "subject": "accounting", "year": "114", "question": "下列何者會導致試算表不平衡？", "options": ["漏記分錄", "重複過帳", "借方金額少計", "借方誤記他科"], "answerIndex": 2, "explanation": "單邊金額少計直接打破借貸恆等。" },
    { "id": 27, "subject": "accounting", "year": "114", "question": "轉帳傳票屬於？", "options": ["對外憑證", "原始憑證", "記帳憑證", "外來憑證"], "answerIndex": 2, "explanation": "傳票為會計人員編製之內部記帳憑證。" },
    { "id": 28, "subject": "accounting", "year": "114", "question": "借方在帳戶物理位置上代表？", "options": ["增加", "減少", "左邊", "右邊"], "answerIndex": 2, "explanation": "借方恆為左邊，貸方恆為右邊。" },
    { "id": 29, "subject": "accounting", "year": "114", "question": "銀行存款調節表中，「未兌現支票」應如何調整？", "options": ["公司帳加", "公司帳減", "銀行帳加", "銀行帳減"], "answerIndex": 3, "explanation": "公司已扣但銀行未扣，故應自銀行對帳單餘額中減除。" },
    { "id": 30, "subject": "accounting", "year": "114", "question": "雙倍餘額遞減法第一年折舊計算特色為何？", "options": ["需先扣殘值", "不扣殘值", "依產量計算", "金額最低"], "answerIndex": 1, "explanation": "該法期初不扣除預估殘值，直接以帳面價值乘以折舊率。" },
    // 114年 經濟學 (10題)
    { "id": 31, "subject": "economics", "year": "114", "question": "邊際生產收益(MRPL)100，工資120，廠商應？", "options": ["增加雇用", "減少雇用", "不變", "提高價格"], "answerIndex": 1, "explanation": "MRPL < 工資，增加雇用會減少利潤，應減僱。" },
    { "id": 32, "subject": "economics", "year": "114", "question": "租金200萬與120萬，利率4%，兩地總地價？", "options": ["5000萬", "6000萬", "8000萬", "9000萬"], "answerIndex": 2, "explanation": "(200+120)/4% = 8000萬。" },
    { "id": 33, "subject": "economics", "year": "114", "question": "Y=100+0.5(Y-50)+300+100，均衡所得Y？", "options": ["850", "900", "950", "1000"], "answerIndex": 2, "explanation": "Y = 475 + 0.5Y -> 0.5Y = 475 -> Y = 950。" },
    { "id": 34, "subject": "economics", "year": "114", "question": "央行採取緊縮貨幣政策，利率與供給變動？", "options": ["供給增，利率降", "供給減，利率升", "供給增，利率升", "供給減，利率降"], "answerIndex": 1, "explanation": "緊縮使貨幣供給減少，資金短缺推升利率。" },
    { "id": 35, "subject": "economics", "year": "114", "question": "具備非排他性與非對立性的財貨為？", "options": ["私人財", "公共財", "準公共財", "共有資源"], "answerIndex": 1, "explanation": "公共財具備無法排除及共享不減損價值的雙重特性。" },
    { "id": 36, "subject": "economics", "year": "114", "question": "需求彈性大於1，降價將使總收益？", "options": ["減少", "增加", "不變", "歸零"], "answerIndex": 1, "explanation": "富彈性商品降價幅度小於數量增加幅度，總收益上升。" },
    { "id": 37, "subject": "economics", "year": "114", "question": "引進先進生產技術會使生產可能曲線(PPC)？", "options": ["點在線上移動", "向內移", "向外移", "不變"], "answerIndex": 2, "explanation": "技術進步提升潛在產能，PPC整條向外移動。" },
    { "id": 38, "subject": "economics", "year": "114", "question": "流動性陷阱時，貨幣需求利率彈性為？", "options": ["零", "小於一", "等於一", "無限大"], "answerIndex": 3, "explanation": "流動性陷阱下，大眾預期利率跌無可跌，投機需求彈性無限大。" },
    { "id": 39, "subject": "economics", "year": "114", "question": "恩格爾係數越高的國家代表？", "options": ["生活水準高", "生活水準低", "貧富均等", "無關"], "answerIndex": 1, "explanation": "飲食支出佔比越高，代表生活水準較低。" },
    { "id": 40, "subject": "economics", "year": "114", "question": "停滯性通貨膨脹的特徵為？", "options": ["物價跌、失業降", "物價升、失業降", "物價升、失業升", "物價跌、失業升"], "answerIndex": 2, "explanation": "停滯性通膨(Stagflation)代表高通膨與高失業率同時並存。" },
    // 113年 會計學 (10題)
    { "id": 41, "subject": "accounting", "year": "113", "question": "會計法令位階最高與最低排序為何？", "options": ["商會法 > 準則公報", "公司法 > 準則公報", "準則公報 > 商會法", "處理準則 > 公司法"], "answerIndex": 1, "explanation": "法律(公司法)>法規命令(處理準則)>自律公報(企業會計準則)。" },
    { "id": 42, "subject": "accounting", "year": "113", "question": "下列何者符合資產認列條件？", "options": ["企業團隊精神", "專利權", "員工學歷", "研發支出(未確定)"], "answerIndex": 1, "explanation": "專利權具備排他控制權及未來經濟效益流入。" },
    { "id": 43, "subject": "accounting", "year": "113", "question": "賒購付商業本票餘款暫欠，適用何種傳票？", "options": ["現金收入", "現金支出", "分錄轉帳", "現金轉帳"], "answerIndex": 2, "explanation": "未涉及現金收付之交易，適用分錄轉帳傳票。" },
    { "id": 44, "subject": "accounting", "year": "113", "question": "備抵法沖銷無法收回之壞帳，對權益影響？", "options": ["增加", "減少", "不變", "不確定"], "answerIndex": 2, "explanation": "借:備抵損失、貸:應收帳款，資產內部抵銷，不影響損益與權益。" },
    { "id": 45, "subject": "accounting", "year": "113", "question": "銷項稅額大於進項稅額時，差額應認列？", "options": ["應納稅額", "留抵稅額", "營業費用", "預付稅款"], "answerIndex": 0, "explanation": "銷項大於進項，表示需向政府繳納，列為流動負債(應納稅額)。" },
    { "id": 46, "subject": "accounting", "year": "113", "question": "每年折舊費用皆固定相等的提列法為何？", "options": ["生產數量法", "年數合計法", "直線法", "雙倍餘額法"], "answerIndex": 2, "explanation": "直線法(平均法)將成本均攤於各年，每年折舊額相等。" },
    { "id": 47, "subject": "accounting", "year": "113", "question": "何者屬於實帳戶需結轉下期？", "options": ["銷貨收入", "租金支出", "應收帳款", "利息費用"], "answerIndex": 2, "explanation": "實帳戶為資產、負債、權益，應收帳款屬之。" },
    { "id": 48, "subject": "accounting", "year": "113", "question": "未作應收利息調整分錄會導致？", "options": ["資產低估，淨利低估", "負債低估", "收益高估", "權益高估"], "answerIndex": 0, "explanation": "漏計應收與利息收入，兩者皆低估。" },
    { "id": 49, "subject": "accounting", "year": "113", "question": "無形資產成本分攤的會計程序稱為？", "options": ["折耗", "折舊", "攤銷", "減損"], "answerIndex": 2, "explanation": "無形資產(如專利權)成本之系統性分攤稱為攤銷(Amortization)。" },
    { "id": 50, "subject": "accounting", "year": "113", "question": "會計上「左借右貸」的法則基礎來自於？", "options": ["商業習慣", "會計方程式", "政府規定", "稅法要求"], "answerIndex": 1, "explanation": "借貸法則源自於「資產 = 負債 + 權益」的雙式簿記恆等式。" },
    // 113年 經濟學 (10題)
    { "id": 51, "subject": "economics", "year": "113", "question": "關於凹向原點的PPC，何者錯誤？", "options": ["線上代表充分就業", "移動的機會成本為零", "線上達生產效率", "外移代表經濟成長"], "answerIndex": 1, "explanation": "線上移動必然增加一物而減少另一物，機會成本大於零。" },
    { "id": 52, "subject": "economics", "year": "113", "question": "P=10-2qA與P=10-2qB，市場需求為何？", "options": ["P=10-Q", "P=20-2Q", "P=10-2Q", "P=20-Q"], "answerIndex": 0, "explanation": "水平加總 qA=5-0.5P, qB=5-0.5P 得 Q=10-P，即 P=10-Q。" },
    { "id": 53, "subject": "economics", "year": "113", "question": "二氧化碳排放超標為市場失靈的哪種概念？", "options": ["公共財", "資訊不對稱", "負的外部性", "獨占"], "answerIndex": 2, "explanation": "造成他人損害而未付成本，為外部成本(負的外部性)。" },
    { "id": 54, "subject": "economics", "year": "113", "question": "所得彈性小於零的財貨稱為？", "options": ["正常財", "劣等財", "季芬財", "奢侈財"], "answerIndex": 1, "explanation": "所得增加反而減少購買量，為劣等財。" },
    { "id": 55, "subject": "economics", "year": "113", "question": "景氣低迷時政府應採取何種財政政策？", "options": ["增稅", "減少支出", "減稅並增加公建", "提高利率"], "answerIndex": 2, "explanation": "擴張性財政政策(減稅、增支出)能刺激總需求。" },
    { "id": 56, "subject": "economics", "year": "113", "question": "羅倫茲曲線偏離對角線越遠代表？", "options": ["所得越平均", "貧富差距大", "吉尼係數小", "經濟成長快"], "answerIndex": 1, "explanation": "下凹越深，代表財富分配越不均、貧富差距越大。" },
    { "id": 57, "subject": "economics", "year": "113", "question": "何者計入台灣當期GDP？", "options": ["二手車車價", "海外工廠收入", "買股票本金", "國內生產出口晶片"], "answerIndex": 3, "explanation": "GDP限於國內當期生產之最終財貨，出口晶片計入本國GDP。" },
    { "id": 58, "subject": "economics", "year": "113", "question": "防止獨占企業聯合壟斷的法規是？", "options": ["公司法", "公平交易法", "商標法", "勞基法"], "answerIndex": 1, "explanation": "公平交易法旨在維護交易秩序與公平競爭，防止壟斷。" },
    { "id": 59, "subject": "economics", "year": "113", "question": "廠商短期歇業點(Shutdown Point)的條件為？", "options": ["P < ATC", "P < AFC", "P < AVC", "P < MC"], "answerIndex": 2, "explanation": "當價格低於平均變動成本(AVC)時，繼續生產將損失更多，應歇業。" },
    { "id": 60, "subject": "economics", "year": "113", "question": "凱因斯學派認為解決經濟蕭條的最佳工具是？", "options": ["貨幣政策", "財政政策", "自由放任", "供給面政策"], "answerIndex": 1, "explanation": "凱因斯主張政府應積極介入，以擴張性財政政策填補有效需求不足。" }
];

let examState = { currentYear: null, questions: [], currentIndex: 0, score: 0, hasAnswered: false, wrongQuestions: [] };

function initPastExams() {
    try {
        const introCard = document.getElementById("past-exams-intro-card") || document.querySelector(".intro-card");
        if (introCard) introCard.classList.remove("hidden");
        const playerCard = document.getElementById("exam-player-card") || document.querySelector(".player-card");
        if (playerCard) playerCard.classList.add("hidden");
        const resultsCard = document.getElementById("exam-results-card") || document.querySelector(".results-card");
        if (resultsCard) resultsCard.classList.add("hidden");

        const grid = document.getElementById("year-selector-grid");
        if (!grid) return;
        grid.innerHTML = "";

        const years = ["115", "114", "113", "112", "111", "110", "109", "108", "107", "106"];

        years.forEach(yr => {
            let yearQuestions = internalFallbackDatabase.filter(q => {
                let qYear = q.year ? q.year.toString().replace(/[^\d]/g, "") : "";
                return qYear === yr;
            });

            const card = document.createElement("div");
            card.className = "year-card";
            card.innerHTML = `
                <div class="year-card-header">
                    <span class="year-card-title">${yr}年統測專業(二)</span>
                    <span class="year-card-status unstarted">全真模擬</span>
                </div>
                <p class="year-card-detail">精選商管群核心真題，內建 ${yearQuestions.length} 題雙科考點，支援盲點分析。</p>
                <div class="year-card-footer">
                    <span>共 ${yearQuestions.length} 題</span>
                    <span>開始刷題 ➔</span>
                </div>
            `;
            card.onclick = () => loadPastExam(yr);
            grid.appendChild(card);
        });
    } catch (e) { console.error(e); }
}

function loadPastExam(year) {
    try {
        let cleanYear = year.toString().replace(/[^\d]/g, "");
        let yearQuestions = internalFallbackDatabase.filter(q => q.year.toString().replace(/[^\d]/g, "") === cleanYear);

        examState.currentYear = cleanYear;
        examState.questions = yearQuestions;
        examState.currentIndex = 0;
        examState.score = 0;
        examState.hasAnswered = false;
        examState.wrongQuestions = [];

        const introCard = document.getElementById("past-exams-intro-card") || document.querySelector(".intro-card");
        if (introCard) introCard.classList.add("hidden");
        const playerCard = document.getElementById("exam-player-card") || document.querySelector(".player-card");
        if (playerCard) playerCard.classList.remove("hidden");
        const resultsCard = document.getElementById("exam-results-card") || document.querySelector(".results-card");
        if (resultsCard) resultsCard.classList.add("hidden");

        const nextBtn = document.getElementById("btn-next-exam-question");
        if (nextBtn) nextBtn.onclick = nextExamQuestion;
        renderExamQuestion();
    } catch (e) { alert("讀取題庫發生錯誤！"); }
}

function renderExamQuestion() {
    try {
        const qData = examState.questions[examState.currentIndex];
        if (!qData) return;
        const categoryPrefix = qData.subject === 'accounting' ? '【會計學】' : '【經濟學】';

        const badge = document.getElementById("exam-title-badge") || document.getElementById("exam-title");
        if (badge) badge.innerText = `${examState.currentYear}年統測專業二全真題`;

        const progress = document.getElementById("exam-progress-label") || document.getElementById("exam-progress");
        if (progress) progress.innerText = `第 ${examState.currentIndex + 1} 題 / 共 ${examState.questions.length} 題`;

        const qText = document.getElementById("exam-question-text") || document.getElementById("question-text");
        if (qText) qText.innerText = categoryPrefix + qData.question;

        const optionsList = document.getElementById("exam-options-list") || document.getElementById("options-list");
        if (optionsList) {
            optionsList.innerHTML = "";
            qData.options.forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.className = "exam-option-btn";
                btn.innerHTML = `<span>${opt}</span>`;
                btn.onclick = () => selectExamOption(idx, btn);
                optionsList.appendChild(btn);
            });
        }

        const feedbackBox = document.getElementById("exam-feedback-box");
        if (feedbackBox) feedbackBox.classList.add("hidden");
        examState.hasAnswered = false;
    } catch (e) { console.error(e); }
}

function selectExamOption(selectedIndex, btnElement) {
    try {
        if (examState.hasAnswered) return;
        examState.hasAnswered = true;

        const qData = examState.questions[examState.currentIndex];
        let correctIdx = qData.answerIndex;
        if (isNaN(correctIdx) || correctIdx < 0 || correctIdx > 3) correctIdx = 0;

        const optionsList = document.getElementById("exam-options-list") || document.getElementById("options-list");
        if (optionsList) {
            const buttons = optionsList.querySelectorAll("button");
            buttons.forEach(btn => btn.disabled = true);

            const pointsPerQuestion = 100 / examState.questions.length;
            const safeExplanation = qData.explanation;

            const feedbackBox = document.getElementById("exam-feedback-box");
            const fbTitle = document.getElementById("exam-feedback-title");
            const fbText = document.getElementById("exam-feedback-text");

            if (feedbackBox) {
                feedbackBox.className = "exam-feedback-box";
                if (selectedIndex === correctIdx) {
                    btnElement.classList.add("correct");
                    feedbackBox.classList.add("correct-box");
                    if (fbTitle) fbTitle.innerText = "🎉 答對了！";
                    if (fbText) fbText.innerHTML = safeExplanation;
                    examState.score += pointsPerQuestion;
                } else {
                    btnElement.classList.add("wrong");
                    if (buttons[correctIdx]) buttons[correctIdx].classList.add("correct");
                    feedbackBox.classList.add("wrong-box");
                    if (fbTitle) fbTitle.innerText = "❌ 答錯了！";

                    if (!examState.wrongQuestions) examState.wrongQuestions = [];
                    examState.wrongQuestions.push(qData);

                    if (fbText) fbText.innerHTML = `正確答案為：【${qData.options[correctIdx]}】。<br><br>解析：${safeExplanation}`;

                    // 動態盲點提示
                    const bsKey = getBlindspotKey(qData.question);
                    if (bsKey && BLINDSPOTS[bsKey]) {
                        const bs = BLINDSPOTS[bsKey];
                        fbText.innerHTML += `<div class="blindspot-cheatsheet-card" style="margin-top:16px; text-align:left;"><div class="blindspot-header"><span class="blindspot-title">${bs.title}</span><span class="blindspot-tag">${bs.tag}</span></div><div class="blindspot-content">${bs.content}</div></div>`;
                    }
                }
                feedbackBox.classList.remove("hidden");
            }
        }
        const nextBtn = document.getElementById("btn-next-exam-question");
        if (nextBtn) nextBtn.innerText = (examState.currentIndex === examState.questions.length - 1) ? "查看總結成果 📊" : "下一題 →";
    } catch (e) { console.error(e); }
}

function nextExamQuestion() {
    if (examState.currentIndex === examState.questions.length - 1) showExamSummary();
    else { examState.currentIndex++; renderExamQuestion(); }
}

function showExamSummary() {
    try {
        const playerCard = document.getElementById("exam-player-card") || document.querySelector(".player-card");
        if (playerCard) playerCard.classList.add("hidden");
        const resultsCard = document.getElementById("exam-results-card") || document.querySelector(".results-card");
        if (resultsCard) resultsCard.classList.remove("hidden");

        const finalScore = Math.min(Math.round(examState.score), 100);
        const scoreEl = document.getElementById("exam-results-score");
        if (scoreEl) scoreEl.innerText = finalScore;

        const descEl = document.getElementById("exam-results-desc");
        if (descEl) {
            if (finalScore === 100) descEl.innerText = "🏆 完美！徹底征服統測考點！";
            else if (finalScore >= 60) descEl.innerText = "👍 表現不錯！複習盲點拿滿分！";
            else descEl.innerText = "💪 沒關係！研讀解析再戰一次！";
        }

        const retryBtn = document.getElementById("btn-retry-exam");
        if (retryBtn) retryBtn.onclick = () => loadPastExam(examState.currentYear);

        userProgress.score += finalScore;
        updateHeaderProgress();
    } catch (e) { console.error(e); }
}