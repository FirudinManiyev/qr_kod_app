import { useState } from "react";
import QRInput from "../components/QRInput";
import QRPreview from "../components/QRPreview";

const Home = () => {
    const [value, setValue] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-slate-900 p-6 rounded-xl shadow-lg space-y-6">
                <h1 className="text-2xl font-bold text-center text-cyan-400">
                    QR CODE Generator
                </h1>

                <QRInput value={value} setValue={setValue} />

                <div className="flex justify-center">
                    <QRPreview value={value} />
                </div>
            </div>
        </div>
    );
};

export default Home;
