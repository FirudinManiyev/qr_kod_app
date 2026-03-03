import { useEffect } from "react";

const Toast = ({ message, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <div
            className={`
            fixed top-6 right-6 z-50
            px-6 py-3
            rounded-lg
            bg-green-500
            text-white
            shadow-lg
            transition-all duration-500
            ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        `}
        >
            {message}
        </div>
    );
};

export default Toast;