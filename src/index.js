const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}



const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.switcherBg = setInterval(() => {
            const min = 0;
            const max = colors.length - 1;
            let randomColor = randomIntegerFromInterval(min, max);
            refs.body.style.background = colors[randomColor];
        }, 1000)
    },
    stop() {
        clearInterval(this.switcherBg);
        this.isActive = false;
    },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

