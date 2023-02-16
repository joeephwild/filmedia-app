import { useNavigate } from "react-router-dom";
import {
  bell,
  drake,
  edsheran,
  image10,
  image12,
  image13,
  justin,
  selena,
  stromzy,
  upload,
} from "../assets";

const Albums = () => {
  const navigate = useNavigate()
  const artists = [
    {
      id: "1",
      name: "Selena Gomez",
      type: "Singer-Songwriter",
      imgSrc: selena,
    },
    {
      id: "2",
      name: "Justin Beiber",
      type: "Singer-Songwriter",
      imgSrc: justin,
    },
    {
      id: "3",
      name: "Drake",
      type: "Canadian Rapper",
      imgSrc: drake,
    },
    {
      id: "4",
      name: "Ed Sheeran",
      type: "Singer-Songwriter",
      imgSrc: edsheran,
    },
    {
      id: "5",
      name: "Stormzy",
      type: "UK Rapper",
      imgSrc: stromzy,
    },
  ];

  const handleNavigate = (item) => {
    navigate(`/Album/${item.name}`, { state: item })
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#fafafa">Albums</h2>
      <div className='grid grid-cols-3 items-center gap-5'>
         {artists.slice(0, 3).map((item, i) => (
          <div onClick={()=> handleNavigate(item)} key={i} className=' lg:w-[250px] w-[150px] h-[200px]  lg:h-[240px]'>
            <img src={item.imgSrc} alt="" className='min-w-[150px] h-[240px] object-cover' />
            <div className="bg-[#000000] px-4 py-2 max-h-[100px] w-full">
              <h3 className="font-bold text-lg text-[#fafafa]">{item.name}</h3>
              <p className="text-[#fafafa] text-sm">{item.type}</p>
            </div>
          </div>
         ))}
      </div>
    </div>
  )
}

export default Albums