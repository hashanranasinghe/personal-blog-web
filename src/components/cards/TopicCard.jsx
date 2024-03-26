import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

const TopicCard = () => {
  return (
    <div className="flex items-center bg-gray-300 rounded-lg py-3 w-64 h-12 flex-row justify-between cursor-pointer hover:shadow-lg hover:scale-105 duration-300 mt-5">
      <div className="flex flex-col items-center justify-center bg-gray-700 hover:bg-blue-700 h-12 rounded-s-lg w-1/4">
        <StorageRoundedIcon className="text-gray-300"/>
      </div>
      <div className="flex items-center justify-center w-3/4">
        <p className="text-gray-700 font-semibold">Database</p>
      </div>
    </div>
  );
};

export default TopicCard;
