// 1. すべてのレースデータをここに集約
const allRaceData = [
    {
        id: "kyoto2026",
        name: "京都マラソン 2026",
        date: "2026.02.15",
        location: "京都",
        venue: "西京極〜平安神宮",
        weather: "晴れ / 18℃",
        time: "2:59:30",
        shoesName: "Nike Alphafly 3",
        shoesImg: "images/alphafly3.jpg",
        courseMap: "images/kyoto2026_map.jpg",        
        certificate: "images/kyoto2026_certificate.jpg", 
        comment: "気温が高く前半オーバーペースになってしまった",
        laps: ["0:00:00", "0:19:22", "0:38:40", "0:57:57", "1:17:20", "1:36:47", "1:56:38", "2:18:21", "2:48:13", "2:59:30"]
    },
    {
        id: "nara2025",
        name: "奈良マラソン 2025",
        date: "2025.12.16",
        location: "奈良",
        time: "2:46:30",
        comment: "記録は狙っていなかった大会．楽しんで走れた．"
    },
    {
        id: "toyama2025",
        name: "富山マラソン 2025",
        date: "2025.11.02",
        location: "富山",
        time: "2:47:30",
        comment: "足が持たず後半失速．距離走が必要．"
    },
    {
        id: "fukui2025",
        name: "福井桜マラソン 2025",
        date: "2025.03.30",
        location: "福井",
        time: "2:45:25",
        comment: "寒さのせいで前半に体がかたかった．"
    },
    {
        id: "biwako2025",
        name: "びわ湖マラソン 2025",
        date: "2025.03.09",
        location: "滋賀",
        time: "2:45:03",
        comment: "最後につったがコンディションがよくPB更新"
    },
    {
        id: "kobe2024",
        name: "神戸マラソン 2024",
        date: "2024.11.17",
        location: "神戸",
        time: "3:39:10",
        comment: "宮城マラソンの疲労が残っていて半分で失速"
    },
    {
        id: "miyagi2024",
        name: "東北宮城復興マラソン 2024",
        date: "2024.11.03",
        location: "宮城",
        time: "3:00:36",
        comment: "飛行機が欠航し当日ほぼ寝れずにスタート"
    },
    {
        id: "shizuoka2024",
        name: "静岡マラソン 2024",
        date: "2024.03.10",
        location: "静岡",
        time: "2:48:21",
        comment: "イーブンペースを守り切れてPB更新"
    },
    {
        id: "kyoto2024",
        name: "京都マラソン 2024",
        date: "2024.02.18",
        location: "京都",
        time: "2:55:47",
        comment: "気温が高く脱水になったが何とかゴール"
    },
    {
        id: "matsumoto2023",
        name: "松本マラソン 2023",
        date: "2023.11.12",
        location: "長野",
        time: "3:19:08",
        comment: "前半抑えれたおかげで後半に加速できた"
    },
    {
        id: "tokushima2023",
        name: "とくしまマラソン 2023",
        date: "2023.03.19",
        location: "徳島",
        time: "4:19:44",
        comment: "初マラソン！完走おめでとう"
    }
];

// HTMLが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    
    // A. 一覧ページの表示処理
    const raceListContainer = document.getElementById('race-list-container');
    
    if (raceListContainer) {
        raceListContainer.innerHTML = ''; // 一旦空にする

        allRaceData.forEach(race => {
            // 全てのレースを detail.html へのリンクにする
            // URLの末尾に ?id=大会ID を付けることで、どの大会か伝えます
            const html = `
                <a href="detail.html?id=${race.id}" class="race-link">
                    <div class="race-item">
                        <div class="race-date">${race.date}</div>
                        <div class="race-info">
                            <h3>${race.name}</h3>
                            <p class="venue">Location: ${race.location}</p>
                            <p class="comment">${race.comment}</p>
                        </div>
                        <div class="race-time">
                            <span class="time race-time-value">${race.time}</span>
                        </div>
                    </div>
                </a>
            `;
            raceListContainer.innerHTML += html;
        });
    }

    // B. PB計算と統計
    const times = allRaceData.map(race => {
        const parts = race.time.split(':').map(Number);
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    });

    if (times.length > 0) {
        const bestSeconds = Math.min(...times);
        const h = Math.floor(bestSeconds / 3600);
        const m = Math.floor((bestSeconds % 3600) / 60);
        const s = bestSeconds % 60;
        
        const pbTime = `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        const pbDisplay = document.getElementById('pbDisplay');
        const totalRunsDisplay = document.getElementById('totalRunsDisplay');

        if (pbDisplay) pbDisplay.textContent = pbTime;
        if (totalRunsDisplay) totalRunsDisplay.textContent = `${times.length} Races`;
    }
});