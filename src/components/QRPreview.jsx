import { QRCodeCanvas } from "qrcode.react";

const QRPreview = ({ value }) => {
    if (!value) return null;

    return (
        <div className="bg-white p-4 rounded-lg">
            <QRCodeCanvas value={value} size={200} />
        </div>
    );
};

export default QRPreview;
    