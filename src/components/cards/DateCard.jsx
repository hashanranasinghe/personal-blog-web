const DateCard = () => {
  return (
    <div className="flex flex-row">
      <img
        className="w-10 h-10 rounded-full"
        src="/src/assets/my.jpg"
        alt="Rounded avatar"
      />
      <div className="pl-3">
        <p className="text-sm text-gray-500 font-semibold">Hashan Ranasinghe</p>
        <p className="text-xs text-gray-400">Jan 17, 2024</p>
      </div>
    </div>
  );
};

export default DateCard;
