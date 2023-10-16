import { Timeline } from "antd";
import React, { useState } from "react";
import { BsFill1CircleFill } from "react-icons/bs";

function LocationTimeLIne() {
  const [mode, setMode] = useState();

  const onChange = (e: any) => {
    setMode(e.target.value);
  };
  return (
    <div className="LocationTimeLIne-Box1">
      <div className="LocationTimeLIne-Box2">
        {/* <Timeline
          items={[
            {
              children: "Create a services site 2015-09-01",
            },
            {
              children: "Solve initial network problems 2015-09-01",
            },
            {
              dot: <BsFill1CircleFill color="#ffc400" size={30} />,
              children: "Technical testing 2015-09-01",
            },
            {
              children: "Network problems being solved 2015-09-01",
            },
          ]}
        /> */}
      </div>
    </div>
  );
}

export default LocationTimeLIne;
