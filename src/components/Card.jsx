const Card = ({ content, handleClick }) => {
  return (
    <div className="mr-12 ml-3 w-[250px]">
        <div onClick={handleClick} className="bg-black py-[35px] cursor-pointer hover:scale-95 transition-all min-w-[270px] h-[360px] block px-[35px]" >
        <img
          className='!rounded-full  min-w-[200px] min-h-[200px]  object-cover'
          src={content.avatar}
          alt={content.handle}
        />
        <div className="min-h-[125px]">
          <h2 className="text-[24px] mt-9 font-bold font-OpenSans-Bold">{content.name}</h2>
          <h4 className="text-[16px] font-semibold font-OpenSans-Bold">{content.titles}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
