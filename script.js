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
        shoesName: "adios pro 4",
        shoesImg: "images/adios_pro4.jpg",
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
        shoesName: "adios pro 4",
        shoesImg: "images/adios_pro4.jpg",
        courseMap: "images/nara2025_map.jpg",
        certificate: "images/nara2025_certificate.jpg", 
        comment: "記録は狙っていなかった大会．楽しんで走れた．"
    },
    {
        id: "toyama2025",
        name: "富山マラソン 2025",
        date: "2025.11.02",
        location: "富山",
        time: "2:47:30",
        shoesName: "vaporfly 3",
        shoesImg: "images/vaporfly3.jpg",
        courseMap: "images/toyama2025_map.jpg",
        certificate: "images/toyama2025_certificate.jpg",
        comment: "足が持たず後半失速．距離走が必要．"
    },
    {
        id: "fukui2025",
        name: "福井桜マラソン 2025",
        date: "2025.03.30",
        location: "福井",
        time: "2:45:25",
        shoesName: "vaporfly 3",
        shoesImg: "images/vaporfly3.jpg",
        courseMap: "images/fukui2025_map.jpg",
        certificate: "images/fukui2025_certificate.jpg",
        comment: "寒さのせいで前半に体がかたかった．"
    },
    {
        id: "biwako2025",
        name: "びわ湖マラソン 2025",
        date: "2025.03.09",
        location: "滋賀",
        time: "2:45:03",
        shoesName: "vaporfly 3",
        shoesImg: "images/vaporfly3.jpg",
        courseMap: "images/biwako2025_map.jpg",
        certificate: "images/biwako2025_certificate.jpg",
        comment: "最後につったがコンディションがよくPB更新"
    },
    {
        id: "kobe2024",
        name: "神戸マラソン 2024",
        date: "2024.11.17",
        location: "兵庫",
        time: "3:39:10",
        shoesName: "zoomfly 5",
        shoesImg: "images/zoomfly5.jpg",
        courseMap: "images/kobe2024_map.jpg",
        certificate: "images/kobe2024_certificate.jpg",
        comment: "宮城マラソンの疲労が残っていて半分で失速"
    },
    {
        id: "miyagi2024",
        name: "東北宮城復興マラソン 2024",
        date: "2024.11.03",
        location: "宮城",
        time: "3:00:36",
        shoesName: "zoomfly 5",
        shoesImg: "images/zoomfly5.jpg",
        courseMap: "images/miyagi2024_map.jpg",
        certificate: "images/miyagi2024_certificate.jpg",
        comment: "飛行機が欠航し当日ほぼ寝れずにスタート"
    },
    {
        id: "shizuoka2024",
        name: "静岡マラソン 2024",
        date: "2024.03.10",
        location: "静岡",
        time: "2:48:21",
        shoesName: "zoomfly 5",
        shoesImg: "images/zoomfly5.jpg",
        courseMap: "images/shizuoka2024_map.jpg",
        certificate: "images/shizuoka2024_certificate.jpg",
        comment: "イーブンペースを守り切れてPB更新"
    },
    {
        id: "kyoto2024",
        name: "京都マラソン 2024",
        date: "2024.02.18",
        location: "京都",
        time: "2:55:47",
        shoesName: "freshform1080",
        shoesImg: "images/freshform1080.jpg",
        courseMap: "images/kyoto2024_map.jpg",
        certificate: "images/kyoto2024_certificate.jpg",
        comment: "気温が高く脱水になったが何とかゴール"
    },
    {
        id: "matsumoto2023",
        name: "松本マラソン 2023",
        date: "2023.11.12",
        location: "長野",
        time: "3:19:08",
        shoesName: "freshform1080",
        shoesImg: "images/freshform1080.jpg",
        courseMap: "images/matsumoto2023_map.jpg",
        certificate: "images/matsumoto2023_certificate.jpg",
        comment: "前半抑えれたおかげで後半に加速できた"
    },
    {
        id: "tokushima2023",
        name: "とくしまマラソン 2023",
        date: "2023.03.19",
        location: "徳島",
        time: "4:19:44",
        shoesName: "novablast",
        shoesImg: "images/novablast.jpg",
        courseMap: "images/tokushima2023_map.jpg",
        certificate: "images/tokushima2023_certificate.jpg",
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

// C. 走破都道府県の表示とマップ生成

document.addEventListener('DOMContentLoaded', function() {
    const visitedPrefs = [...new Set(allRaceData.map(race => race.location))];

    // バッジ生成と地図塗りつぶしを一気に行う
    const allPrefs = ["北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島", "茨城", "栃木", "群馬", "埼玉", "千葉", "東京", "神奈川", "新潟", "富山", "石川", "福井", "山梨", "長野", "岐阜", "静岡", "愛知", "三重", "滋賀", "京都", "大阪", "兵庫", "奈良", "和歌山", "鳥取", "島根", "岡山", "広島", "山口", "徳島", "香川", "愛媛", "高知", "福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "沖縄"];

    const mapContainer = document.getElementById('japan-map');

    allPrefs.forEach(pref => {
        // 1. バッジの作成
        const badge = document.createElement('div');
        badge.textContent = pref;
        const isVisited = visitedPrefs.includes(pref);
        
        if (isVisited) {
            badge.className = 'pref-badge visited';
            
            // 2. SVG地図の塗りつぶし (data-nameが一致するpathを探す)
            const prefPath = document.querySelector(`.pref-path[data-name="${pref}"]`);
            if (prefPath) {
                prefPath.classList.add('visited');
            }
        } else {
            badge.className = 'pref-badge';
        }
        mapContainer.appendChild(badge);
    });

    // カウント表示
    document.getElementById('prefCount').textContent = visitedPrefs.length;
});