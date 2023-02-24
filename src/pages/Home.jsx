import { Banner, Card } from "../components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { BsChevronRight } from "react-icons/bs";

const Home = () => {
  const { accounts, podcast, artist } = useStateContext();
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/dashboard/profile/${item.handle}`, { state: item });
  };
  return (
    <section className="h-screen items-start">
      <div>
        <Banner />
      </div>
      <div className="mx-[40px] my-[40px] space-y-9">
        {/** artist */}
        <div className="flex flex-col">
          <div className="flex font-bold font-OpenSans-Bold items-center space-x-3">
            <span className="text-xl font-bold">All Creators</span>
            <BsChevronRight size={20} />
          </div>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 items-start  gap-5 grid">
            {accounts.map((item, i) => (
              <div key={i} className="flex flex-col items-start">
                  <Card
                    content={item}
                    handleClick={() => handleNavigate(item)}
                  />
              </div>
            ))}
          </div>
        </div>
        {/**podcast */}

        <div className="flex flex-col">
          <div className="flex font-bold font-OpenSans-Bold items-center space-x-3">
            <span className="text-xl font-bold">Podcast</span>
            <BsChevronRight size={20} />
          </div>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 items-start  gap-5 grid">
            {podcast.map((item, i) => (
              <div key={i} className="flex flex-col items-start">
                  <Card
                    content={item}
                    handleClick={() => handleNavigate(item)}
                  />
                  {item.titles !== "Content Creator" && (
                 <div className="hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/**recommendation */}
        <div className="flex flex-col">
          <div className="flex font-bold font-OpenSans-Bold items-center space-x-3">
            <span className="text-xl font-bold">Artist</span>
            <BsChevronRight size={20} />
          </div>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 items-center  gap-5 grid">
            {artist.map((item, i) => (
              <div key={i} id={i} className="flex flex-col items-center">
                  <Card
                    content={item}
                    handleClick={() => handleNavigate(item, i)}
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
