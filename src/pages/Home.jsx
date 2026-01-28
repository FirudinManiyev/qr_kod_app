import { useState } from "react";
import QRInput from "../components/QRInput";
import QRPreview from "../components/QRPreview";
import QRDownload from "../components/QRDownload";

const Home = () => {
    const [value, setValue] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="
        w-full max-w-md
        bg-zinc-900
        p-6 sm:p-8
        rounded-xl
        shadow-lg
        space-y-6
      ">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-yellow-400">
                    QR Code Generator
                </h1>

                <QRInput value={value} setValue={setValue} />

                <div className="flex flex-col items-center gap-4">
                    <QRPreview value={value} />
                    <QRDownload value={value} />
                </div>
            </div>
        </div>
    );
};

export default Home;
