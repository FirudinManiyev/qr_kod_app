import { useEffect, useState } from "react";
import QRInput from "../components/QRInput";
import QRPreview from "../components/QRPreview";
import QRDownload from "../components/QRDownload";

const Home = () => {
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 100); // route açılan kimi başlasın

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-neutral-900 via-cyan-900 to-blue-900">

            {/* Main Card */}
            <div
                className={`
                w-full max-w-md
                bg-zinc-900
                p-6 sm:p-8
                rounded-xl
                shadow-lg
                space-y-6
                transition-all duration-700 ease-out
                ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-6"}
            `}
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-yellow-400">
                    QR Code Generator
                </h1>

                <QRInput value={value} setValue={setValue} />

                <div className="flex flex-col items-center gap-4">
                    <QRPreview value={value} />
                    <QRDownload value={value} />
                </div>
            </div>

            {/* Watermark */}
            <span
                className={`
                fixed bottom-4 right-4
                text-xs text-yellow-400/60
                font-mono select-none
                transition-opacity duration-1000
                ${show ? "opacity-100" : "opacity-0"}
            `}
            >
                Düzəltdi: Firudin Maniyev
            </span>
        </div>
    );
};

export default Home;


