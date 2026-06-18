// ==========================================
// 1. 全域狀態管理 (Exam State)
// ==========================================
const examState = {
    currentYear: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    hasAnswered: false,
    wrongQuestions: [] // 確保在最頂端就初始化，100%防止未定義錯誤
};

// ==========================================
// 2. 黃蓉老師的關鍵盲點大補帖資料庫 (BLINDSPOTS)
// ==========================================
const BLINDSPOTS = {
    "進貨費用": {
        title: "🔥 黃蓉老師盲點特訓：進貨費用歸屬",
        tag: "常考陷阱",
        content: "起運點交貨的『進貨運費』是屬於<b>進貨成本的加項</b>！很多同學會誤選為營業費用，記住：在商品達到可供銷售狀態前的一切必要支出，通通都要算進成本裡！"
    },
    "會計保存": {
        title: "🔥 黃蓉老師盲點特訓：會計憑證保存年限",
        tag: "法規必背",
        content: "根據商業會計法規定，會計帳簿及財務報表應於年度決算程序辦理終了後，至少保存<b>10年</b>；而各項會計憑證則至少保存<b>5年</b>。憑證5年、帳簿報表10年，千萬別記反了！"
    },
    "現金及約當現金": {
        title: "🔥 黃蓉老師盲點特訓：現金項目大過濾",
        tag: "計算核心",
        content: "員工借據（應收活期款/薪資預支）、郵票（用品盤存）、偽鈔（損失）、指定償債基金（非流動資產）、遠期支票（應收票據）<b>通通不能算作現金</b>！只有90天內到期的定存和銀行本票才可以算作約當現金！"
    },
    "機會成本": {
        title: "🔥 黃蓉老師盲點特訓：機會成本的精髓",
        tag: "經濟學核心",
        content: "機會成本等於『<b>放棄掉的最高價值</b>』加上『<b>實際支出的外顯成本</b>』。如果為了讀書放棄工作，工作收入就是隱含成本，學雜費是外顯成本，兩者相加才是正確答案！"
    }
};

// ==========================================
// 3. 內建 10 年份統測核心歷屆試題真題資料庫
// ==========================================
const globalPastExamsDatabase = {
    "106": [
        {
            question: "下列各項敘述，錯誤與正確者為：(1)會計帳簿及憑證應於年度決算程序辦理終了後，至少保存十年；(2)我國負責發佈與監督公開發行公司財務報告編製準則之單位為中華民國會計研究發展基金會；(3)賒購商品(起運點交貨)，另支付代理商之佣金應計入進貨成本；(4)會計循環即企業之營業循環。",
            options: ["134錯誤，其餘正確", "24錯誤，其餘正確", "123錯誤，其餘正確", "124錯誤，其餘正確"],
            answerIndex: 3,
            explanation: "敘述(1)會計憑證保存5年，帳簿報表才保存10年，故錯誤；(2)負責發布與監督公開發行公司財務報告編製準則之單位為『金融監督管理委員會(金管會)』而非會計研發基金會，故錯誤；(4)會計循環是指分錄、過帳、試算、調整、結帳、編表之程序，與企業的營業循環（買貨、賣貨、收現）不同，故錯誤。僅有(3)正確。",
            rongTreasure: "黃蓉老師叮嚀：這題是經典的法規與觀念大綜合！記住『憑證5年、帳簿10年』，主管機關永遠是金管會老大！"
        },
        {
            question: "下列各項敘述，正確與錯誤者為：(1)分類帳為以交易為主體之帳簿；(2)標準式分類帳又稱「T字帳」；(3)統制帳戶為實帳戶；(4)過帳時互記日記簿頁次與分類帳頁次，可避免漏記或重複過帳的錯誤。",
            options: ["23正確，其餘錯誤", "24正確，其餘錯誤", "123正確，其餘錯誤", "134正確，其餘錯誤"],
            answerIndex: 1,
            explanation: "(1)日記簿是以交易為主體的『序時帳簿』，分類帳則是以『會計項目』為主體的帳簿，故錯誤；(3)統制帳戶（如應收帳款統制帳戶）是屬於資產類，資產類為實帳戶，此敘述正確；(4)過帳互記頁次確實可防止漏記與重複，正確。因此(2)(4)正確。",
            rongTreasure: "黃蓉老師叮嚀：分類帳是管項目的！過帳的時候交叉填寫頁次，就是最基本的內部控制喔！"
        }
    ],
    "107": [
        {
            question: "勤信會計師事務所受託查核甲上市公司的財務報表，報表上的「現金及約當現金」項目為$1,188,336，經查核後有如下內容：庫存現金$48,056、90天到期之定期存款$400,000、員工借據$4,000、郵票$1,280、指定償債用途之存款$48,000、60天到期之銀行本票$180,000、偽鈔$3,000、支票存款餘額$260,000、即期支票$84,000、遠期支票（一個月後到期）$160,000。請問甲公司資產負債表上，「現金及約當現金」的正確金額是多少？",
            options: ["$972,056", "$1,020,056", "$1,132,056", "$1,188,336"],
            answerIndex: 0,
            explanation: "正確的現金及約當現金項目包含：庫存現金$48,056 + 90天到期定存$400,000 + 60天到期銀行本票$180,000 + 支票存款$260,000 + 即期支票$84,000 = $972,056。\n（不計入項目：員工借據、郵票、指定償債存款、偽鈔、遠期支票）。",
            rongTreasure: "黃蓉老師叮嚀：過濾法出動！遠期支票是應收票據，員工借據是其他應收款，千萬別算進現金裡！"
        }
    ],
    "108": [
        {
            question: "甲公司之產品附有一年售後服務保證，該公司於X7年初成立。依過去經驗估計保證成本為銷貨額的4%，X7年銷貨$1,200,000；X8年銷貨$1,800,000，X7年實際售後服務支出為$20,000。若X8年帳列與售後服務相關支出（包含產品保證費用與銷貨成本）之金額合計為$80,000，則X8年實際售後服務支出金額為何？",
            options: ["$72,000", "$80,000", "$108,000", "$120,000"],
            answerIndex: 1,
            explanation: "X8年估計的產品保證費用 = X8年銷貨 $1,800,000 * 4% = $72,000。題目提及X8年帳列與售後服務相關支出（即產品保證費用）與銷貨成本總計金額，依據IFRS，估計提列時借記產品保證費用（銷貨成本）。題目中的$80,000即為實際發生時的總調整參考值，經公式推導，實際支出金額為$80,000。",
            rongTreasure: "黃蓉老師叮嚀：負債準備的提列是權責發生制的展現，銷貨時就要同步估計保證費用喔！"
        }
    ],
    "109": [
        {
            question: "下列交易事項對當期財務報表要素影響的敘述，正確者共幾項？(1)賒購設備於超過現金折扣優惠期間後才付款，該筆付款交易分錄將導致資產減少、費損增加、負債減少；(2)在期末估計應收帳款預期信用減損金額小於調整前備抵損失餘額情況下，該筆調整分錄將導致資產增加、收益增加。",
            options: ["一項", "二項", "三項", "四項"],
            answerIndex: 1,
            explanation: "敘述(1)超過折扣期間付款，若採淨額法，未取得之折扣會列為『未享折扣損失』(費損增加)，借記應付設備款(負債減少)，貸記現金(資產減少)，此敘述正確。(2)預期損失小於調整前備抵損失餘額時，需做迴轉分錄：借記備抵損失(資產減項減少=資產增加)，貸記預期信用減損利益(收益增加)，此敘述亦正確。兩項皆正確。",
            rongTreasure: "黃蓉老師叮嚀：備抵損失的迴轉是近代大考的大熱門！資產減項的減少，在效果上就是資產增加！"
        }
    ],
    "110": [
        {
            question: "有關結帳會計程序之敘述，何者正確？",
            options: ["結帳分錄乃用以記錄企業之結束營運", "不需要作結帳分錄，即可編製財務報表", "將資產、負債及權益等虛帳戶的餘額結轉下期繼續記錄", "將收益及費損等實帳戶的餘額結清，轉入本期損益帳戶"],
            answerIndex: 1,
            explanation: "(A)結帳分錄是為了結清當期虛帳戶，而非結束營運；(C)資產、負債、權益是『實帳戶』而非虛帳戶；(D)收益及費損是『虛帳戶』而非實帳戶。編製財務報表可在結帳前利用調整後試算表直接編製，因此(B)敘述完全正確。",
            rongTreasure: "黃蓉老師叮嚀：實帳戶要結轉後期（不歸零），虛帳戶要結清歸零（轉入損益彙總），這個口訣要背得滾瓜爛熟！"
        }
    ],
    "111": [
        {
            question: "關於財務報表要素之敘述，下列何者不正確？",
            options: ["收益及費損類帳戶又稱為暫時性帳戶", "表達企業財務狀況相關之要素包含資產、負債及權益", "資產是指因過去之交易或其他事項所產生，可由企業控制之經濟資源", "收益是指報導期間之交易造成資產增加或負債減少，其中亦包含業主投資所增加的權益"],
            answerIndex: 3,
            explanation: "(D)錯誤。收益是指企業在營業活動中所賺得的經濟利益，但『絕對不包含』業主投入資本（如股東增資、業主投資）所帶來的權益增加。這是企業主體假設與權益核心定義的基本大考點。",
            rongTreasure: "黃蓉老師叮嚀：老闆自己掏錢給公司那叫『股本或資本』，不是公司賺的『收益』，兩者絕對是楚河漢界！"
        }
    ],
    "112": [
        {
            question: "經濟學核心：若某土地今年年租金為40萬，年利率為5%，則利用地價公式計算，其地價應為多少？",
            options: ["200萬元", "400萬元", "800萬元", "1000萬元"],
            answerIndex: 2,
            explanation: "依據地價公式：地價 = 年租金 / 年利率。因此 地價 = 400,000 / 0.05 = 8,000,000元（800萬元）。",
            rongTreasure: "黃蓉老師叮嚀：地價公式就是簡單的資本化公式，租金除以利率，送分題一定要拿到！"
        }
    ],
    "113": [
        {
            question: "甲公司為非公開發行公司，其會計事務處理之各項法令及準則的適用位階為何？",
            options: ["商業會計處理準則 > 商業會計法 > 金管會認可之 IFRSs", "商業會計處理準則 > 商業會計法 > 企業會計準則公報", "公司法 > 證券發行人財務報告編製準則 > 金管會認可之 IFRSs", "公司法 > 商業會計處理準則 > 企業會計準則公報"],
            answerIndex: 3,
            explanation: "法律效力與適用位階中，公司法或商業會計法等『法律』層級高於『商業會計處理準則』(法規命令)，而準則又高於『企業會計準則公報』(自律規範或一般公認會計原則)。因此正確順序為公司法 > 商業會計處理準則 > 企業會計準則公報。",
            rongTreasure: "黃蓉老師叮嚀：母法大於子法，法律大於公報！非公開發行公司老大就是看商會法與企業會計準則公報！"
        }
    ],
    "114": [
        {
            question: "下列何者不屬於費損類會計項目？①預付費用 ②備抵損失———應收票據 ③銷項稅額 ④進項稅額 ⑤投資損失",
            options: ["②、③、⑤", "①、②、③、④", "②、③、④", "①、③、④"],
            answerIndex: 1,
            explanation: "①預付費用是『資產』；②備抵損失是應收票據的『資產減項』；③銷項稅額是『流動負債』；④進項稅額是『流動資產』。只有⑤投資損失才是真正的費損。因此不屬於費損的有①②③④。",
            rongTreasure: "黃蓉老師叮嚀：加值型營業稅的進項與銷項，一個是資產、一個是負債，期末要相抵，它們才不是費用呢！"
        }
    ],
    "115": [
        {
            question: "甲公司為適用加值型營業稅廠商，外銷出口適用零稅率。假設全年外銷訂單獲利豐厚，若帳上無上期留抵稅額，在加值型營業稅法規定下，外銷廠商的進項稅額可以如何處理？",
            options: ["完全不能退稅", "只能留待下期扣抵", "可以申請退還營業稅", "直接轉為營業費用"],
            answerIndex: 2,
            explanation: "依據我國加值型及非加值型營業稅法規定，適用零稅率之貨物或勞務（如外銷出口），其進項稅額准予『退還』。這是政府為了鼓勵外銷所做的退稅優惠政策。",
            rongTreasure: "黃蓉老師叮嚀：外銷零稅率是最棒的！進口買東西付的進項稅額，通通都可以跟國稅局申請退現金回來！"
        }
    ]
};

// ==========================================
// 4. 關鍵字比對盲點函式
// ==========================================
function getBlindspotKey(questionText) {
    if (!questionText) return null;
    if (questionText.includes("保存") || questionText.includes("帳簿") || questionText.includes("憑證")) return "會計保存";
    if (questionText.includes("運費") || questionText.includes("進貨")) return "進貨費用";
    if (questionText.includes("現金") || questionText.includes("約當")) return "現金項目";
    if (questionText.includes("成本") || questionText.includes("機會")) return "機會成本";
    return null;
}

// ==========================================
// 5. 核心：切換並載入年份大考題
// ==========================================
function startExamYear(year) {
    const rawQuestions = globalPastExamsDatabase[year];
    if (!rawQuestions || rawQuestions.length === 0) {
        alert("抱歉，該年份題庫正在絕讚增補中！");
        return;
    }

    // 滿血初始化狀態
    examState.currentYear = year;
    examState.questions = JSON.parse(JSON.stringify(rawQuestions));
    examState.currentIndex = 0;
    examState.score = 0;
    examState.hasAnswered = false;
    examState.wrongQuestions = []; // 每次選年份時確實清空並初始化

    // 顯示測驗面板，隱藏主選單
    document.getElementById("exam-welcome-panel").classList.add("hidden");
    document.getElementById("exam-quiz-panel").classList.remove("hidden");

    // 填入大標題
    document.getElementById("exam-selected-title").innerText = `🎯 統測歷屆真題特訓 - ${year}學年度`;

    // 渲染第一題
    renderExamQuestion();
}

// ==========================================
// 6. 核心：渲染題目與選項到網頁上
// ==========================================
function renderExamQuestion() {
    examState.hasAnswered = false;

    // 隱藏上一次的解析區塊
    const feedbackBox = document.getElementById("exam-feedback-box");
    if (feedbackBox) feedbackBox.classList.add("hidden");

    const qData = examState.questions[examState.currentIndex];

    // 更新進度條與題號文字
    const progressText = document.getElementById("exam-progress-text");
    if (progressText) {
        progressText.innerText = `目前進度：第 ${examState.currentIndex + 1} 題 / 共 ${examState.questions.length} 題`;
    }

    const bar = document.getElementById("exam-progress-bar-inner");
    if (bar) {
        const pct = ((examState.currentIndex + 1) / examState.questions.length) * 100;
        bar.style.width = `${pct}%`;
    }

    // 填入題目文字
    const qTextEl = document.getElementById("exam-question-text");
    if (qTextEl) {
        qTextEl.innerHTML = `${examState.currentIndex + 1}. ${qData.question}`;
    }

    // 渲染選項按鈕
    const optionsList = document.getElementById("exam-options-list");
    if (optionsList) {
        optionsList.innerHTML = "";
        qData.options.forEach((optText, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const btn = document.createElement("button");
            btn.className = "exam-option-btn";
            btn.innerHTML = `<span class="option-letter">${letter}</span> ${optText}`;
            // 綁定點擊事件
            btn.onclick = function () { selectExamOption(idx, btn); };
            optionsList.appendChild(btn);
        });
    }
}

// ==========================================
// 7. 完美修正版：答題按鈕點擊判定邏輯 (完全防堵卡死)
// ==========================================
function selectExamOption(selectedIndex, btnElement) {
    if (examState.hasAnswered) return;
    examState.hasAnswered = true;

    const qData = examState.questions[examState.currentIndex];

    // 自動轉換相容英文字母或數字索引
    let correctIdx = qData.answerIndex;
    if (correctIdx === undefined && qData.answer) {
        correctIdx = qData.answer.charCodeAt(0) - 65;
    }
    if (isNaN(correctIdx) || correctIdx < 0 || correctIdx > 3) correctIdx = 0;

    // 讓所有按鈕變灰不能再點
    const buttons = document.querySelectorAll("#exam-options-list .exam-option-btn");
    buttons.forEach(btn => btn.disabled = true);

    const feedbackBox = document.getElementById("exam-feedback-box");
    const fbTitle = document.getElementById("exam-feedback-title");
    const fbText = document.getElementById("exam-feedback-text");
    const fbRong = document.getElementById("exam-rong-treasure");

    feedbackBox.className = "exam-feedback-box";
    const pointsPerQuestion = 100 / examState.questions.length;

    // 準備安全的解析文字 (防止缺少欄位時出錯)
    const safeExplanation = qData.explanation ? qData.explanation.replace(/\n/g, "<br>") : "本題為統測焦點核心觀念，請詳閱借貸方向與題目條件。";

    if (selectedIndex === correctIdx) {
        // 答對變綠色
        btnElement.classList.add("correct");
        feedbackBox.classList.add("correct-box");
        fbTitle.innerText = "🎉 答對了！非常優秀！";
        fbText.innerHTML = safeExplanation;
        examState.score += pointsPerQuestion;
    } else {
        // 答錯變紅色，並把正確答案框出綠色
        btnElement.classList.add("wrong");
        if (buttons[correctIdx]) buttons[correctIdx].classList.add("correct");
        feedbackBox.classList.add("wrong-box");
        fbTitle.innerText = "❌ 答錯了！沒關係，大腦正在升級！";

        // 終極安全防護：如果陣列不存在，立刻原地建立，絕對不崩潰
        if (!examState.wrongQuestions) {
            examState.wrongQuestions = [];
        }
        examState.wrongQuestions.push(qData);

        const letter = String.fromCharCode(65 + correctIdx);
        fbText.innerHTML = `正確答案為：【${letter}】 ${qData.options[correctIdx]}。<br><br>解析：${safeExplanation}`;

        // 觸發黃蓉老師的關鍵盲點大補帖卡片
        const bsKey = getBlindspotKey(qData.question);
        if (bsKey && BLINDSPOTS[bsKey]) {
            const bs = BLINDSPOTS[bsKey];
            fbText.innerHTML += `
                <div class="blindspot-cheatsheet-card" style="margin-top:16px;">
                    <div class="blindspot-header">
                        <span class="blindspot-title">${bs.title}</span>
                        <span class="blindspot-tag">${bs.tag}</span>
                    </div>
                    <div class="blindspot-content">${bs.content}</div>
                </div>
            `;
        }
    }

    // 載入大秘寶
    fbRong.innerText = qData.rongTreasure || "黃蓉老師叮嚀：做題時先看清交貨條件與平時記帳法！借貸一定要平衡！";
    feedbackBox.classList.remove("hidden");

    // 動態修改底部按鈕文字
    const nextBtn = document.getElementById("btn-next-exam-question");
    if (nextBtn) {
        nextBtn.innerText = (examState.currentIndex === examState.questions.length - 1) ? "查看總結成果 📊" : "下一題 →";
    }
}

// ==========================================
// 8. 下一題或查看總結按鈕
// ==========================================
function nextExamQuestion() {
    // 判斷是不是最後一題
    if (examState.currentIndex >= examState.questions.length - 1) {
        showExamSummary();
    } else {
        examState.currentIndex++;
        renderExamQuestion();
    }
}

// ==========================================
// 9. 顯示最終分數總結報告
// ==========================================
function showExamSummary() {
    document.getElementById("exam-quiz-panel").classList.add("hidden");
    const summaryPanel = document.getElementById("exam-summary-panel");
    summaryPanel.classList.remove("hidden");

    // 四捨五入分數
    const finalScore = Math.round(examState.score);
    document.getElementById("exam-final-score").innerText = `${finalScore} 分`;

    // 根據分數給予評價
    const feedbackEl = document.getElementById("exam-summary-feedback");
    if (finalScore === 100) {
        feedbackEl.innerText = "👑 太神了！完美全對！黃蓉老師封你為商管群統測狀元！";
    } else if (finalScore >= 80) {
        feedbackEl.innerText = "🚀 表現超卓越！頂標實力手到擒來，繼續保持絕對穩上國立科大！";
    } else if (finalScore >= 60) {
        feedbackEl.innerText = "💪 恭喜及格！基礎很扎實，只要把錯題的盲點卡片多看兩遍就無敵了！";
    } else {
        feedbackEl.innerText = "📚 沒關係！這代表你還有極大的進步空間，把下面的弱點掃描精讀，下次一定大爆發！";
    }

    // 渲染錯題掃描專區
    const reviewList = document.getElementById("exam-wrong-review-list");
    reviewList.innerHTML = "";

    if (!examState.wrongQuestions || examState.wrongQuestions.length === 0) {
        reviewList.innerHTML = `<div style="text-align:center; padding: 20px; color: #2e7d32;">✨ 零錯題！你已經完全征服了這個年份的所有考題！</div>`;
    } else {
        examState.wrongQuestions.forEach((q, i) => {
            const card = document.createElement("div");
            card.className = "wrong-review-card";
            card.style = "background: #fff; border-left: 5px solid #d32f2f; padding: 16px; margin-bottom: 12px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);";
            card.innerHTML = `
                <div style="font-weight: bold; color: #d32f2f; margin-bottom: 8px;">錯題流暢回顧 ${i + 1}</div>
                <div style="margin-bottom: 8px; color:#333;"><b>題目：</b>${q.question}</div>
                <div style="color: #666; font-size: 0.95rem;"><b>精準解析：</b>${q.explanation}</div>
            `;
            reviewList.appendChild(card);
        });
    }
}

// ==========================================
// 10. 返回首頁主選單
// ==========================================
function exitExamToMenu() {
    document.getElementById("exam-quiz-panel").classList.add("hidden");
    document.getElementById("exam-summary-panel").classList.add("hidden");
    document.getElementById("exam-welcome-panel").classList.remove("hidden");
}