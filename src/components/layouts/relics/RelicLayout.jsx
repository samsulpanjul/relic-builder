import { useState, useEffect } from "react";
import StatsLayout from "../stats/StatsLayout";

export default function RelicLayout({ selectedItem, dataSubStat }) {
  const [selectedRelic, setSelectedRelic] = useState(null);
  const [selectedMainStat, setSelectedMainStat] = useState(null);
  const [imgRelic, setImgRelic] = useState(null);

  const handleClickRelic = (item) => {
    setSelectedRelic(item);
    console.log(item);
  };

  const handleClickMainStat = (item) => {
    setSelectedMainStat(item);
    setImgRelic(selectedRelic);
  };

  return (
    <div className="ml-[400px] mt-5 w-[800px] flex flex-col gap-5">
      <StatsLayout selectedRelic={selectedRelic} selectedMainStat={selectedMainStat} imgRelic={imgRelic} selectedItem={selectedItem} dataSubStat={dataSubStat} handleClickRelic={handleClickRelic} handleClickMainStat={handleClickMainStat} />
    </div>
  );
}
