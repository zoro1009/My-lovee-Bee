function goToPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');

  document.querySelectorAll('audio').forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}

/* FLIP */
function flip(card) {
  card.classList.toggle('flipped');
}

/* SONG 1 */
const song1 = document.getElementById('song1');
const photo1 = document.getElementById('photo1');
const bar = document.getElementById('progressBar');
const text = document.getElementById('songText');

function playSong1() { song1.play(); }

song1.addEventListener('timeupdate', () => {
  const t = song1.currentTime;
  const d = song1.duration;
  bar.style.width = (t / d) * 100 + "%";

  if (t < 8) {
    photo1.src = 'assets/images/p1.jpg';
    text.innerText = "You feel like home.";
  } else if (t < 16) {
    photo1.src = 'assets/images/p2.jpg';
    text.innerText = "Soft. Warm. Safe.";
  } else {
    photo1.src = 'assets/images/p3.jpg';
    text.innerText = "Christmas feels better with you.";
  }
  text.style.opacity = 1;
});

/* SONG 2 */
const song2 = document.getElementById('song2');
function playSong2() { song2.play(); }