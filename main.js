// Contact form submit handler with simple validation and response message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formResponse = document.getElementById('formResponse');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Basic validation
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        formResponse.textContent = 'Please fill in all fields.';
        formResponse.style.color = 'red';
        formResponse.classList.remove('hidden');
        return;
    }

    // Email format check (simple)
    if (!validateEmail(emailInput.value)) {
        formResponse.textContent = 'Please enter a valid email address.';
        formResponse.style.color = 'red';
        formResponse.classList.remove('hidden');
        return;
    }

    // If valid, simulate sending message
    formResponse.textContent = 'Sending message...';
    formResponse.style.color = '#1abc9c';
    formResponse.classList.remove('hidden');

    setTimeout(() => {
        formResponse.textContent = `Thank you, ${nameInput.value}! Your message has been sent.`;
        // Reset form
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }, 1500);
});

// Email validation function (simple)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Interactive: Clicking job experience paragraph shows a modal popup with details
document.querySelectorAll('#experience p').forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        showModal('Job Experience Details', paragraph.textContent);
    });
});

// Modal creation and functionality
function showModal(title, content) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'modalOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.right = 0;
    overlay.style.bottom = 0;
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    // Create modal box
    const modalBox = document.createElement('div');
    modalBox.style.backgroundColor = '#fff';
    modalBox.style.padding = '20px';
    modalBox.style.borderRadius = '8px';
    modalBox.style.maxWidth = '400px';
    modalBox.style.textAlign = 'center';
    modalBox.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';

    // Title
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;

    // Content
    const modalContent = document.createElement('p');
    modalContent.textContent = content;

    // Close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '15px';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    modalBox.appendChild(modalTitle);
    modalBox.appendChild(modalContent);
    modalBox.appendChild(closeButton);
    overlay.appendChild(modalBox);

    document.body.appendChild(overlay);
}
