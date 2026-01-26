const QRInput = ({ value, setValue }) => {
    return (
        <input
            type="text"
            placeholder="Mətn və ya link daxil et"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
        />
    );
};

export default QRInput;
