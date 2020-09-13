// Rate Stress Level
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');

function rateStress(stressRate) {
	if (stressRate <= 1) {
		return '😇';
	} else if (stressRate > 1 && stressRate <= 2) {
		return '🙂';
	} else if (stressRate > 2 && stressRate <= 3) {
		return '😞';
	} else if (stressRate > 3 && stressRate <= 4) {
		return '😫';
	} else {
		return '🤯';
	}
}

speed.addEventListener('mousemove', function (e) {
	const x = e.pageX - this.offsetLeft;
	const percent = x / this.offsetWidth;
	const min = 0;
	const max = 5;
	const width = Math.round(percent * 100) + '%';
	const stressRate = percent * (max - min) + min;
	bar.style.width = width;
	bar.textContent = rateStress(stressRate);
});
