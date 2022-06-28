import { useEffect } from "react";
import { useState } from "react";
import GovernmentalFish from "../components/fishes/GovernmentalFish";
import PayaSatnaFish from "../components/fishes/PayaSatnaFish";
import PersonalFish from "../components/fishes/PersonalFish";

const PrintFish = () => {
  const [fishType, setFishType] = useState(0);
  const fishesh = [
    "واریز شخصی",
    "برداشت شخصی",
    "واریزی دولتی/عمومی",
     "پایا/ساتنا"
  ];

  useEffect(() => {
    console.log(fishType);
  }, [fishType]);

  return (
    <div className="row justify-content-center">
      <div className="row justify-content-center p-4">
        <div className="col-md-10 col-xl-8">
          <label htmlFor="gender">نوع فیش</label>
          <select className="form-control" id="gender" onChange={(e) => setFishType(e.target.selectedIndex)} >
            {fishesh.map((q, i) => <option key={i} value={i}> {fishesh[i]} </option>)}
          </select>
        </div>
      </div>

      <div className="row justify-content-center p-0">
        <div className="col-md-9 text-center h3 text-primary p-0">
          <span> چاپ فیش </span> {fishesh[fishType]}
        </div>
      </div>

      <div className="row justify-content-center  p-1">
          {(fishType === 0 || fishType === 1) && <PersonalFish type={fishType} />}
          {fishType === 2 && <GovernmentalFish type={fishType} />}
          {fishType === 3 && <PayaSatnaFish type={fishType} />}
      </div>
    </div>
  );
};

export default PrintFish;
