document.addEventListener('DOMContentLoaded', function() {
    // Apply scroll-snap-type
   document.body.style.scrollSnapType = 'y mandatory';
 });
 
 function openModal(sessionId) {
    const modal = document.getElementById('sessionModal');
     const modalContent = document.getElementById('modalContent');
  if (sessionId === 'session1') {
         modalContent.innerHTML = `
              <button class="close-btn" onclick="closeModal()">×</button>
            <h2>AI Revolution</h2>
             <p>Delve into the heart of the AI revolution, explore its transformative impact on various industries, and get a glimpse of its boundless potential.</p>
             <img src="session1.jpg" alt="Session 1">
         `
    } else if (sessionId === 'session2') {
          modalContent.innerHTML = `
            <button class="close-btn" onclick="closeModal()">×</button>
              <h2>Sustainable Tech</h2>
             <p>Discuss the future of sustainability, explore innovative solutions, and learn how technology can foster a greener planet.</p>
               <img src="session2.jpg" alt="Session 2">
         `
    } else if (sessionId === 'session3') {
             modalContent.innerHTML = `
           <button class="close-btn" onclick="closeModal()">×</button>
              <h2>Quantum Computing</h2>
            <p>Join our session to get a grasp on the transformative power of quantum computing and learn about its potential.</p>
             <img src="session3.jpg" alt="Session 3">
        `
     } else if (sessionId === 'session4') {
          modalContent.innerHTML = `
              <button class="close-btn" onclick="closeModal()">×</button>
          <h2>The Future of Web3</h2>
             <p>An immersive session into the world of Web3 and explore decentralized technologies.</p>
             <img src="session4.jpg" alt="Session 4">
        `
      }
    modal.classList.add('active');
 }
 
 function closeModal() {
     const modal = document.getElementById('sessionModal');
    modal.classList.remove('active');
 }
 function openImageModal(imageId) {
     const modal = document.getElementById('imageModal');
     const modalImage = document.getElementById('modalImage');
 
    if (imageId === 'image1') {
          modalImage.src = 'gallery1.jpg';
     } else if (imageId === 'image2') {
           modalImage.src = 'gallery2.jpg';
     } else if (imageId === 'image3') {
         modalImage.src = 'gallery3.jpg';
     } else if (imageId === 'image4') {
          modalImage.src = 'gallery4.jpg';
     } else if (imageId === 'image5') {
         modalImage.src = 'gallery5.jpg';
     } else if (imageId === 'image6') {
       modalImage.src = 'gallery6.jpg';
     }
     modal.classList.add('active');
 }
 function closeImageModal() {
    const modal = document.getElementById('imageModal');
     modal.classList.remove('active');
 }
 document.getElementById('registrationForm').addEventListener('submit', function(event) {
     event.preventDefault();
      alert('Thank you for registering!');
 });
 document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
     alert('Thank you for contacting us!');
 });