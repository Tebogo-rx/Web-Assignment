const phrases = [
    "Web Dev",
    "App Dev",
    "UI UX Dev",
    "Full Stack"
  ];
  
  let current = 0;
  let charIndex = 0;
  let isDeleting = false;
  const animatedText = document.getElementById('animatedText');
  
  function type() {
    const currentPhrase = phrases[current];
    const visibleText = isDeleting 
      ? currentPhrase.substring(0, charIndex--) 
      : currentPhrase.substring(0, charIndex++);
  
    animatedText.textContent = visibleText;
  
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      current = (current + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  
  type();
  