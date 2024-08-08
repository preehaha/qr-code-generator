document.getElementById("generate-btn").addEventListener("click", function() {
    // Clear any existing QR code
    document.getElementById("qrcode").innerHTML = "";

    // Get the text or URL from the input
    const text = document.getElementById("text").value;

    // Generate the QR code
    if (text) {
        const qrCode = new QRCode(document.getElementById("qrcode"), {
            text: text,
            width: 128,
            height: 128
        });
    } else {
        alert("Please enter a text or URL.");
    }
});
