
const Card = ({ content, handleClick }) => {
  return (
    <div onClick={handleClick} className="bg-black mt-5 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 px-9 py-7 text-white  max-w-[260px] max-h-[360px] rounded-xl">
      <img
        src={content.avatar}
        alt=""
        className="w-48 h-48 mx-auto rounded-full object-cover"
      />
      <div className="flex-col flex items-start mt-8 justify-center">
        <h2 className="font-OpenSans-Bold text-lg font-bold items-start">{content.name}</h2>
        <h2 className="font-OpenSans-Bold text-xs font-bold items-start">{content.handle}</h2>
        <h2 className="font-OpenSans-Bold text-xs font-bold items-start text-[#808080]">{content.titles}</h2>
      </div>
    </div>
  );
};

export default Card;