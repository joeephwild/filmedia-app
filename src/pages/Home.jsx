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
    <section className="h-screen overflo-hidden items-start">
      <div>
        <Banner />
      </div>
      <div className=" my-[40px]">
        {/** artist */}
        <div>
          <h1 className="m-3 text-xl font-bold">
            All Creators
          </h1>
          <div className="relative flex items-center group">
            <div className="relative flex w-full h-full overflow-y-hidden scrollbar-none scroll-smooth whitespace-nowrap">
              {accounts.slice(0, 5).map((item, id) => (
                <Card
                  content={item}
                  key={id}
                  handleClick={() => handleNavigate(item)}
                />
              ))}
            </div>
          </div>
        </div>
        {/**podcast */}

        <div>
          <h1 className="m-3 text-xl font-bold">
            Podcast
          </h1>
          <div className="relative flex items-center group">
            <div className="relative flex w-full h-full overflow-y-hidden scrollbar-none scroll-smooth whitespace-nowrap">
              {podcast.slice(0, 5).map((item, id) => (
                <Card
                  content={item}
                  key={id}
                  handleClick={() => handleNavigate(item)}
                />
              ))}
            </div>
          </div>
        </div>
        {/**recommendation */}
        <div>
          <h1 className="m-3 text-xl font-bold">
            Artist
          </h1>
          <div className="relative flex items-center group">
            <div className="relative flex w-full h-full overflow-y-hidden scrollbar-none scroll-smooth whitespace-nowrap">
              {artist.slice(0, 5).map((item, id) => (
                <Card
                  content={item}
                  key={id}
                  handleClick={() => handleNavigate(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
