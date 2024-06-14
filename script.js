let isBlack = true;
const frequency = 20;  // Hz, 1秒間に20回の点滅
const interval = 1000 / frequency / 2;  // 各色の表示時間 (ミリ秒)

function toggleBackground() {
    document.body.style.backgroundColor = isBlack ? 'white' : 'black';
    isBlack = !isBlack;
}

setInterval(toggleBackground, interval);
