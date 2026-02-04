import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-cyan-900 to-blue-900">
            <div className="flex flex-col items-center gap-6 animate-[fadeIn_1s_ease-out]">

                {/* Neon Ring */}
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-ping opacity-40"></div>
                    <div className="absolute inset-2 rounded-full border-2 border-yellow-500 animate-spin"></div>
                    <div className="absolute inset-7 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_20px_#facc15]"></div>
                </div>

                {/* Text */}
                <h1 className="text-2xl font-bold tracking-widest text-yellow-400 animate-[textGlow_1.5s_ease-in-out_infinite]">
                    QR CODE GENERATOR
                </h1>

                <p className="text-sm text-gray-400 animate-[fadeUp_1s_ease-out]">
                    Hazırlanır...
                </p>
            </div>
        </div>
    );
};

export default Welcome;
