document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const counterElement = document.getElementById('counter');
    let timer = setInterval(() => {
      counter++;
      counterElement.textContent = counter;
    }, 1000);
  
    const incrementButton = document.getElementById('plus');
    const decrementButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('list');
    let isPaused = false;
  
    incrementButton.addEventListener('click', () => {
      if (!isPaused) {
        counter++;
        counterElement.textContent = counter;
      }
    });
  
    decrementButton.addEventListener('click', () => {
      if (!isPaused) {
        counter--;
        counterElement.textContent = counter;
      }
    });
  
    likeButton.addEventListener('click', () => {
      if (!isPaused) {
        const existingLike = document.getElementById(`like-${counter}`);
        if (existingLike) {
          const likeCount = existingLike.querySelector('.like-count');
          likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
          const newLike = document.createElement('li');
          newLike.id = `like-${counter}`;
          newLike.innerHTML = `${counter} has been liked <span class="like-count">1</span> time`;
          likesList.appendChild(newLike);
        }
      }
    });
  
    pauseButton.addEventListener('click', () => {
      if (isPaused) {
        timer = setInterval(() => {
          counter++;
          counterElement.textContent = counter;
        }, 1000);
        pauseButton.textContent = "pause";
        incrementButton.disabled = false;
        decrementButton.disabled = false;
        likeButton.disabled = false;
      } else {
        clearInterval(timer);
        pauseButton.textContent = "resume";
        incrementButton.disabled = true;
        decrementButton.disabled = true;
        likeButton.disabled = true;
      }
      isPaused = !isPaused;
    });
  
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const newComment = document.createElement('p');
      newComment.textContent = commentInput.value;
      commentList.appendChild(newComment);
      commentInput.value = '';
    });
  });
  