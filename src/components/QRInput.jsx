const QRInput = ({ value, setValue }) => {
    return (
        <input
            type="text"
            placeholder="Mətn və ya link daxil et"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="
        w-full p-3 rounded-lg
        bg-zinc-900 text-yellow-200
        border border-yellow-500/30
        focus:outline-none focus:ring-2 focus:ring-yellow-400
        placeholder:text-yellow-500/50
      "
        />
    );
};

export default QRInput;
