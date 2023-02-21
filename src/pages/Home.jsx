import { Card } from "../components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { BsChevronRight } from "react-icons/bs";

const Home = () => {
  const { accounts, unFollow } = useStateContext();
  const navigate = useNavigate();
  const handleNavigate = (item, i) => {
    navigate(`/dashboard/profile/${item.name}`, { state: item, i });
  };
  return (
    <section className="h-screen">
      <div className="mx-[40px] my-[40px] space-y-9">
        {/** artist */}
        <div className="flex flex-col">
          <div className="flex font-bold font-OpenSans-Bold items-center space-x-3">
            <span className="text-xl font-bold">Artist</span>
            <BsChevronRight size={20} />
          </div>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 items-center  gap-5 grid">
            {accounts.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
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
            {accounts.map((item, i) => (
              <div key={i} className="flex flex-col items-start">
                {item.category === "Podcast" && (
                  <Card
                    content={item}
                    handleClick={() => handleNavigate(item)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {/**recommendation */}
        <div className="flex flex-col">
          <div className="flex font-bold font-OpenSans-Bold items-center space-x-3">
            <span className="text-xl font-bold">Podcast</span>
            <BsChevronRight size={20} />
          </div>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 items-center  gap-5 grid">
            {accounts.map((item, i) => (
              <div key={i} id={i} className="flex flex-col items-center">
                {item.category === "Supporter" && (
                  <Card
                    content={item}
                    handleClick={() => handleNavigate(item, i)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
