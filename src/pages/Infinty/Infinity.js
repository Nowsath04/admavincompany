import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Infinity.css";

const Infinity = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasmore] = useState(true);

  const fetchdata = () => {
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({ length: 20 })));
    }, 1000);
  };

  return (
    <div className="App">
      <p>
        <b className="ptag">1. INFINITE SCROLL</b>
      </p>

      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchdata}
        hasMore={hasMore}
        loader={<p style={{ fontSize: "20px" }}>Loading...</p>}
      >
        {dataSource.map((item, index) => {
          return (
            <div className="heading">This is a infinitescroll #{index + 1}</div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Infinity;
