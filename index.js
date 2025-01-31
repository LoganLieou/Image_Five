const dropZone = document.querySelector('.drop-zone');
const fileInput = document.querySelector('.file-input');
const uploadButton = document.querySelector('.upload-button');
const imagePreview = document.querySelector('.image-preview');

// Handle file selection
fileInput.addEventListener('change', (e) => {
	const files = e.target.files;
	handleFiles(files);
});

// Handle drag-and-drop
dropZone.addEventListener('dragover', (e) => {
	e.preventDefault();
	dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
	dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
	e.preventDefault();
	dropZone.classList.remove('dragover');
	const files = e.dataTransfer.files;
	handleFiles(files);
});

// Handle click to upload
uploadButton.addEventListener('click', () => {
	fileInput.click();
});

// Function to handle uploaded files
function handleFiles(files) {
	for (const file of files) {
		if (file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const img = document.createElement('img');
				img.src = e.target.result;
				imagePreview.appendChild(img);
			};
			reader.readAsDataURL(file);
		} else {
			alert('Please upload only image files.');
		}
	}
}
