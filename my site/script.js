// Elements
const addPictureBtn = document.getElementById('add-picture-btn');
const modal = document.getElementById('add-picture-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const submitImageBtn = document.getElementById('submit-image');
const imageUpload = document.getElementById('image-upload');
const imageDescription = document.getElementById('image-description');
const imageDate = document.getElementById('image-date');
const imageGrid = document.getElementById('image-grid');

// Open the modal when "ADD PICTURE" button is clicked
addPictureBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when close button is clicked
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Submit image and description
submitImageBtn.addEventListener('click', () => {
    const file = imageUpload.files[0];
    const description = imageDescription.value;
    const date = imageDate.value;

    if (file && description && date) {
        // Create image element
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = description;
            img.title = description;

            // Create a div for the image and description
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-item');
            imgDiv.innerHTML = `
                <img src="${img.src}" alt="${description}">
                <p>${description}</p>
                <p>${date}</p>
            `;
            imageGrid.appendChild(imgDiv);
        };
        reader.readAsDataURL(file);

        // Close the modal and reset inputs
        modal.style.display = 'none';
        imageUpload.value = '';
        imageDescription.value = '';
        imageDate.value = '';
    }
});
