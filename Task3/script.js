// ✅ Greeting section
(function () {
  const title = document.getElementById('greet-title');
  const input = document.getElementById('name-input');
  const btn = document.getElementById('greet-btn');

  btn.addEventListener('click', () => {
    const name = input.value.trim();
    if (!name) {
      alert('Please enter your name 😊');
      return;
    }
    const hour = new Date().getHours();
    const timeOfDay = hour < 12 ? 'Good Morning'
                    : hour < 18 ? 'Good Afternoon'
                    : 'Good Evening';
    title.textContent = `${timeOfDay}, ${name}! 🎉`;
    input.disabled = btn.disabled = true;
  });
})();

// ✅ Quiz section — now works for answer 12
(function () {
  const btn = document.getElementById('quiz-btn');
  const feedback = document.getElementById('quiz-feedback');

  btn.addEventListener('click', () => {
    const choice = Array.from(document.getElementsByName('quiz'))
                       .find(r => r.checked);
    if (!choice) {
      alert('Choose an answer first!');
      return;
    }
    if (choice.value === '12') {
      feedback.textContent = '🎉 Correct! Well done!';
      feedback.style.color = 'green';
    } else {
      feedback.textContent = 'Oops! That’s not correct. Try again!';
      feedback.style.color = 'red';
    }
    btn.textContent = 'Try Again';
  });
})();

// ✅ Joke section
(function () {
  const jokes = [
    "I told my computer I needed a break—no response, just a reboot.",
    "Programmers don’t prefer nature—too many bugs.",
    "Why did the developer go broke? Because he used all his cache.",
    "The best way to comfort a JS bug? Console it."
  ];
  document.getElementById('joke-btn').addEventListener('click', () => {
    const idx = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke-text').innerText = jokes[idx];
  });
})();
