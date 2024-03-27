function PortfolioCard() {
  return (
    <a href="https://hashanranasinghe.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col items-center gap-4">
        <div className="relative my-4">
          <div className="absolute -inset-2">
            <div className="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
          </div>
          <img
            src="/src/assets/my.jpg"
            className="relative object-cover shrink-0 h-32 w-28 z-10 rounded-xl"
          />
        </div>
      </div>
    </a>
  );
}

export default PortfolioCard;
