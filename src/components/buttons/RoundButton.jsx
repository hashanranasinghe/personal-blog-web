function RoundButton({ buttonText }) {
  return (
    <button
      className="
    mr-5 mt-3 
    bg-gray-100 hover:bg-blue-700 
    hover:text-white text-gray-600 
    border-2 font-bold py-2 px-4 rounded-full"
    >
      {buttonText}
    </button>
  );
}

export default RoundButton;
