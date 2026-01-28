const QRDownload = ({ value }) => {
    const downloadQR = () => {
        const canvas = document.querySelector("canvas");
        if (!canvas) return;

        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = "fiko-qrcode.png";
        a.click();
    };

    if (!value) return null;

    return (
        <button
            onClick={downloadQR}
            className="
                w-full py-2 rounded-lg
                bg-gradient-to-r from-yellow-400 to-yellow-600
                text-black font-bold
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]
                ">
            Download QR
        </button>
    );
};

export default QRDownload;
