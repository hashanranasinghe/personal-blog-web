const DateCard = () => {
  return (
    <div className="flex flex-row">
      <img
        className="w-10 h-10 rounded-full"
        src="/src/assets/my.jpg"
        alt="Rounded avatar"
      />
      <div className="pl-3">
        <p className="text-md text-gray-500 font-bold">Hashan Ranasinghe</p>
        <p className="text-xs text-gray-400 font-semibold">Jan 17, 2024</p>
      </div>
    </div>
  );
};

export default DateCard;
