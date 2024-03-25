import DateCard from "./DateCard";

const BlogPostCard = ({ title, gitLink, short, image }) => {
  return (
    <div className="bg-white h-64 w-4/6 flex flex-row justify-around items-center px-5 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
      <div className="relative flex justify-center items-center rounded-lg h-[350px] w-[350px]">
        <img
          src={image}
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div
          className="
    mr-5 mt-3 
    bg-gray-100 hover:bg-gray-300
    hover:text-white text-gray-600 
    font-bold py-2 px-4 rounded-full"
        >
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
