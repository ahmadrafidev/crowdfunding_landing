AOS.init();

const targetAmount = 100000;
const currentAmount = 55000;
const progress = (currentAmount / targetAmount) * 100;
document.getElementById("progress-bar").style.width = `${progress}%`;