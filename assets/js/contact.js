/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_xqx159a', 'template_yhpn6jm', '#contact-form', 'BCaF3Uj7fYfisZr2M').then(() => {
    contactMessage.textContent = 'Message sent successfully ✅';

    setTimeout(() => {
      contactMessage.textContent = '';
    }, 5000);

    contactForm.reset();
  }, () => {
    contactForm.textContent = 'Message not sent (service error) ❌'
  });
}

contactForm.addEventListener('submit', sendEmail);  
