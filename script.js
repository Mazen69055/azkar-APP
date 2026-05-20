// لستة الأذكار المظبوطة بالظبط حسب أعدادك وأسماء ملفات الصوت عندك (Zikri)
const azkarList = [
    { 
        text: "بسم الله والحمد لله والصلاة والسلام علي رسول الله", 
        count: 1, 
        audioPath: "audio/Zikri1.mp3" 
    },
    { 
        text: "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته", 
        count: 3, 
        audioPath: "audio/Zikri2.mp3" 
    },
    { 
        text: "لا إله إلا وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو علي كل شيء قدير", 
        count: 1, 
        audioPath: "audio/Zikri3.mp3" 
    },
    { 
        text: "أمسينا وأمسي الملك لله رب العالمين، اللهم إنا نسألك خير هذه الليلة فتحها ونصرها ونورها بركتها وهداها، ونعوذ بك من شر ما فيها وشر ما بعدها", 
        count: 1, 
        audioPath: "audio/Zikri4.mp3" 
    },
    { 
        text: "أمسينا وأمسي الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له.، له الملك وله الحمد وهو علي كل شئ قدير، رب نسألك خير ما في هذه الليلة وخير ما بعدها، ونعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب نعوذ بك من الكسل وسوء الكبر، رب نعوذ بك من عذاب في النار وعذاب في القبر", 
        count: 1, 
        audioPath: "audio/Zikri5.mp3" 
    },
    { 
        text: "أمسينا علي فطرة الإسلام وعلي كلمة الإخلاص وعلي دين نبينا محمد صلي الله عليه وسلم، وعلي ملة أبينا إبراهيم حنيفا مسلما وما كان من المشركين", 
        count: 1, 
        audioPath: "audio/Zikri6.mp3" 
    },
    { 
        text: "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير", 
        count: 1, 
        audioPath: "audio/Zikri7.mp3" 
    },
    { 
        text: "اللهم إنا أمسينا نشهدك، ونشهد حملة عرشك.، وملائكتك وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدا عبدك ورسولك", 
        count: 4, 
        audioPath: "audio/Zikri8.mp3" 
    },
    { 
        text: "اللهم ما أمسي بي من نعمة أو بأحدٍ من خلقك فمنك وحدك لا شريك لك فلك الحمد ولك الشكر", 
        count: 1, 
        audioPath: "audio/Zikri9.mp3" 
    },
    { 
        text: "اللهم إنا نعوذ بكلماتك التامات من شر ما خلقت", 
        count: 3, 
        audioPath: "audio/Zikri10.mp3" 
    },
    { 
        text: "بسم الله الذي لا يضر ما إسمه شئ في الأرض ولا في السماء وهو السميع العليم", 
        count: 3, 
        audioPath: "audio/Zikri11.mp3" 
    },
    { 
        text: "رضينا بالله ربا، وبالإسلام دينا، وبمحمد صلي الله عليه وسلم نبيا", 
        count: 3, 
        audioPath: "audio/Zikri12.mp3" 
    },
    { 
        text: "حسبنا الله، لا إله إلا هو عليه توكلنا وهو رب العرش العظيم", 
        count: 7, 
        audioPath: "audio/Zikri13.mp3" 
    },
    { 
        text: "اللهم أجرنا من النار", 
        count: 7, 
        audioPath: "audio/Zikri14.mp3" 
    },
    { 
        text: "اللهم إنا نسألك العفو والعافية في الدنيا والآخرة، اللهم إنا نسألك العفو والعافية في ديننا ودنياناوأهلينا وأموالنا، اللهم استر عوراتنا، وآمن روعاتنا، اللهم احفظنا من بين أيدينا، ومن خلفنا، وعن أيماننا وعن شمائلنا، ومن فوقنا، ونعوذ بعظمتك أن نغتال من تحتنا. اللهم عافنا في أبداننا، اللهم عافنا في أسماعنا، اللهم عافنا في أبصارنا، لا إله إلا أنت، اللهم إنا نعوذ بك من الكفر والفقر، ونعوذ بك من عذاب القبر، لا إله إلا أنت", 
        count: 1, 
        audioPath: "audio/Zikri15.mp3" 
    },
    { 
        text: "اللهم عالم الغيب والشهادة فاطر السماوات والأرض رب كل شئ ومليكه نشهد ألا إله إلا أنت، نعوذ بك من شرور أنفسنا ومن شر الشيطان وشركه وأن نقترف علي أنفسنا سوءا أو نجره إلي مسلم", 
        count: 1, 
        audioPath: "audio/Zikri16.mp3" 
    },
    { 
        text: "اللهم إنا نسألك علما نافعا، ورزقا طيبا، وعملا متقبلا", 
        count: 1, 
        audioPath: "audio/Zikri17.mp3" 
    },
    { 
        text: "يا حي يا قيوم برحمتك نستغيث، أصلح لنا شأننا كله ولا تكلنا إلا أنفسنا طرفة عين", 
        count: 3, 
        audioPath: "audio/Zikri18.mp3" 
    },
    { 
        text: "اللهم أنت ربنا لا إله إلا أنت خلقتنا ونحن عبيدك ونحن علي عهدك ووعدك ما استطعنا نعوذ بك من شر ما صنعنا نبوء لك بنعمتك علينا ونبوء بذنوبنا فاغفر لنا فإنه لا يغفر الذنوب إلا أنت", 
        count: 1, 
        audioPath: "audio/Zikri19.mp3" 
    },
    { 
        text: "اللهم صلي علي محمد وعلي آل محمد كما صليت علي ابراهيم وعلي آل ابراهيم إنك حميد مجيد، وبارك على محمد وعلي آل محمد كما باركت على ابراهيم وعلي آل ابراهيم إنك حميد مجيد..", 
        count: 10, 
        audioPath: "audio/Zikri20.mp3" 
    }
];

let currentIndex = 0; 
let currentCounter = 0; 
let currentAudio = new Audio(); 
let hasInteracted = false; // متغير للتأكد إذا كان المستخدم ضغط في الصفحة أم لا

const textElement = document.getElementById("azkar-text");
const counterView = document.getElementById("counter-view");
const targetNumber = document.getElementById("target-number");
const countBtn = document.getElementById("count-btn");
const nextBtn = document.getElementById("next-btn");
const audioBtn = document.getElementById("audio-btn");

function updateScreen() {
    textElement.innerText = azkarList[currentIndex].text;
    targetNumber.innerText = azkarList[currentIndex].count;
    counterView.innerText = currentCounter;
    
    currentAudio.src = azkarList[currentIndex].audioPath; 
    
    // لو المستخدم تفاعل مع الصفحة قبل كده، شغل الصوت تلقائي فوراً
    if (hasInteracted) {
        playAudioWithStatus();
    } else {
        audioBtn.innerText = "اضغط في أي مكان لبدء التشغيل التلقائي 🔊";
    }
}

function playAudioWithStatus() {
    currentAudio.play().then(() => {
        audioBtn.innerText = "إيقاف مؤقت ⏸️";
    }).catch(error => {
        audioBtn.innerText = "اضغط لتشغيل الصوت 🔊";
    });
}

function nextZikr() {
    currentIndex++;
    if (currentIndex < azkarList.length) {
        currentCounter = 0;
        countBtn.style.backgroundColor = "#16a34a";
        countBtn.innerText = "اضغط للتسبيح";
        updateScreen();
        if (hasInteracted) playAudioWithStatus(); // يقلب ويشغل أوتوماتيك
    } else {
        currentAudio.pause();
        textElement.innerText = "تَمَّتْ أَذْكَارُ المَسَاءِ بِنَجَاحْ.. تَقَبَّلَ اللهُ مِنَّا وَمِنْكُمْ 🤲✨";
        audioBtn.style.display = "none";
        countBtn.style.display = "none";
        nextBtn.style.display = "none";
        document.querySelector(".counter-section").style.display = "none";
    }
}

// 💥 السحر: أول ما تفتح الصفحة وتضغط كليك واحدة في أي مكان فاضي، الكود هيلقط ويشغل كله لوحده
document.addEventListener("click", function() {
    if (!hasInteracted) {
        hasInteracted = true;
        playAudioWithStatus();
    }
}, { once: false }); // هيشتغل مع أول ضغطة في أي مكان

audioBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // يمنع تضارب الضغطات
    if (currentAudio.paused) {
        currentAudio.play();
        audioBtn.innerText = "إيقاف مؤقت ⏸️";
    } else {
        currentAudio.pause();
        audioBtn.innerText = "استمع للشيخ 🔊";
    }
});

currentAudio.addEventListener("ended", function() {
    let maxCount = azkarList[currentIndex].count;
    currentCounter++; 
    counterView.innerText = currentCounter;
    
    if (currentCounter < maxCount) {
        currentAudio.currentTime = 0;
        currentAudio.play();
    } else {
        audioBtn.innerText = "استمع للشيخ 🔊";
        countBtn.style.backgroundColor = "#757575";
        countBtn.innerText = "اكتمل العدد ✅";
        
        setTimeout(function() {
            nextZikr(); // يقلب تلقائي للذكر التالي
        }, 1200); 
    }
});

countBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    let maxCount = azkarList[currentIndex].count;
    if (currentCounter < maxCount) {
        currentCounter++;
        counterView.innerText = currentCounter;
    }
    if (currentCounter === maxCount) {
        currentAudio.pause(); 
        audioBtn.innerText = "استمع للشيخ 🔊";
        countBtn.style.backgroundColor = "#757575";
        countBtn.innerText = "اكتمل العدد ✅";
        setTimeout(function() {
            nextZikr();
        }, 1200);
    }
});

nextBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    currentAudio.pause(); 
    audioBtn.innerText = "استمع للشيخ 🔊";
    nextZikr();
});

updateScreen();