document.addEventListener('DOMContentLoaded', function() {
    // 1. ページ内のすべてのタイム（race-time-valueクラス）を取得
    const timeElements = document.querySelectorAll('.race-time-value');
    let times = [];

    timeElements.forEach(el => {
        const timeStr = el.textContent.trim();
        // 2. タイム（H:MM:SS）を計算しやすいように「秒」に変換
        const parts = timeStr.split(':').map(Number);
        let seconds = 0;
        seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
        if (seconds > 0) times.push(seconds);
    });

    if (times.length > 0) {
        // 3. 一番小さい値（最速タイム）を見つける
        const bestSeconds = Math.min(...times);

        // 4. 秒を再び「H:MM:SS」の形式に戻す
        const h = Math.floor(bestSeconds / 3600);
        const m = Math.floor((bestSeconds % 3600) / 60);
        const s = bestSeconds % 60;
        
        const pbTime = `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        // 5. PBの表示場所に流し込む
        document.getElementById('pbDisplay').textContent = pbTime;
        // レース数も自動でカウントして表示
        document.getElementById('totalRunsDisplay').textContent = `${times.length} Races`;
    }  
});
