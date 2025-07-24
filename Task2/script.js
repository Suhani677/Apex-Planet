// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const formMessage = document.getElementById('formMessage');

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
      }


      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.style.color = 'green';
      form.reset();
    });
  }
});

// To-Do List Functionality
function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  const task = input.value.trim();

  if (!task) return;

  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '✖';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = '';
}
