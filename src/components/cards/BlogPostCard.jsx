import DateCard from "./DateCard";

const BlogPostCard = ({ title, gitLink, short, image }) => {
  return (
    <div className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-3xl bg-gray-100 cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
      <img
        src={image}
        loading="lazy"
        decoding="async"
        data-nimg="1"
        className="object-cover w-full rounded-t-lg md:h-auto md:w-80  md:rounded-none md:rounded-s-lg"
        alt=""
      />
      <div className="flex flex-col justify-start items-start mx-3 my-3">
        <div className="mr-5 mt-3 bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-600 font-bold py-2 px-4 rounded-lg">
          <p className="text-sm">DATABASE</p>
        </div>
        <h1 className="text-lg font-bold py-2 text-center">{title}</h1>
        <p className="text-gray-400 text-base text-start pb-5">{short}</p>
        <DateCard />
      </div>
    </div>
  );
};

export default BlogPostCard;
