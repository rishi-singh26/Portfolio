function generateQR() {
    const textInput = document.getElementById('text').value.trim();
    const errorDiv = document.getElementById('error');
    const img = document.getElementById('qrImage');

    // Validation
    if (!textInput) {
        errorDiv.textContent = '⚠️ Please enter content for the QR code';
        errorDiv.classList.add('show');
        img.classList.remove('show');
        return;
    }

    const sizeVal = parseInt(document.getElementById('size').value);
    if (sizeVal < 50 || sizeVal > 2000) {
        errorDiv.textContent = '⚠️ Size must be between 50 and 2000 pixels';
        errorDiv.classList.add('show');
        img.classList.remove('show');
        return;
    }

    errorDiv.classList.remove('show');

    const baseUrl = "https://quickchart.io/qr";
    const params = new URLSearchParams({
        text: textInput,
        size: sizeVal,
        format: document.getElementById('format').value,
        margin: document.getElementById('margin').value,
        ecLevel: document.getElementById('ecLevel').value,
        // Hex values must not include '#' for this API
        dark: document.getElementById('dark').value.replace('#', ''),
        light: document.getElementById('light').value.replace('#', ''),
        centerImageUrl: document.getElementById('centerImageUrl').value,
        caption: document.getElementById('caption').value
    });

    const finalUrl = `${baseUrl}?${params.toString()}`;

    img.onload = function () {
        img.classList.add('show');
        errorDiv.classList.remove('show');
    };

    img.onerror = function () {
        errorDiv.textContent = '❌ Failed to generate QR code. Please check your inputs.';
        errorDiv.classList.add('show');
        img.classList.remove('show');
    };

    img.src = finalUrl;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generateBtn').addEventListener('click', generateQR);
    document.getElementById('resetBtn').addEventListener('click', resetForm);
    document.getElementById('caption').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') generateQR();
    });

    // Check for hash fragment and auto-generate QR
    const hashText = window.location.hash.substring(1);
    if (hashText) {
        const decodedText = decodeURIComponent(hashText);
        const qrText = `https://rishisingh.in/text#${decodedText}`
        document.getElementById('text').value = qrText;
        generateQR();
    }
});

// Reset form function
function resetForm() {
    document.getElementById('text').value = 'https://google.com';
    document.getElementById('size').value = '200';
    document.getElementById('format').value = 'png';
    document.getElementById('margin').value = '4';
    document.getElementById('ecLevel').value = 'M';
    document.getElementById('dark').value = '#000000';
    document.getElementById('light').value = '#ffffff';
    document.getElementById('centerImageUrl').value = '';
    document.getElementById('caption').value = '';
    document.getElementById('qrImage').classList.remove('show');
    document.getElementById('error').classList.remove('show');
}