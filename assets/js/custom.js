     // JavaScript code
     const texts = document.querySelectorAll('.txt');
     const paragraphs = document.querySelectorAll('.p');
     const images = document.querySelectorAll('.img');
     
     texts.forEach((text, index) => {
       text.addEventListener('mouseover', () => {
         alert('hello') ; 
         // add d-none to all paragraphs and images
         paragraphs.forEach(p => p.classList.add('d-none'));
         images.forEach(img => img.classList.add('d-none'));
         // remove d-none from current paragraph and image
         paragraphs[index].classList.remove('d-none');
         images[index].classList.remove('d-none');
       });
     });