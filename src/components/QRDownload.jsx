const QRDownload = ({ value }) => {
    const downloadQR = () => {
        const canvas = document.querySelector("canvas");
        if (!canvas) return;

        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = "qr-code.png";
        a.click();
    };

    if (!value) return null;

    return (
        <button
            onClick={downloadQR}
            className="w-full mt-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
        >
            Download QR
        </button>
    );
};

export default QRDownload;
