let percent = document.querySelector('.percent');
let progress = document.querySelector('.progress');
let text = document.querySelector('.text');
let barWidth = 0;
let barProgressPercent = 0;
let loadingAnimation = setInterval(animate, 50);

function animate() {
  if(barProgressPercent === 100 && barWidth === 400) {
    percent.classList.add('text-blink');
    text.style.display = "block";
    clearInterval(loadingAnimation);
  } else {
    barWidth = barWidth + 4;
    barProgressPercent = barProgressPercent +1;
    progress.style.width = barWidth + 'px';
    percent.textContent = barProgressPercent + '%';
  }
}