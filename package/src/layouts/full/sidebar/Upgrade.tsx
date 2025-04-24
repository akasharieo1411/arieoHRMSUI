import { Button } from "flowbite-react";
import UpgradePlan from "/src/assets/images/logos/ArioHrms_Logo.png";
import { Link } from "react-router";
const Upgrade = () => {
  return (
    <>
      <div className="px-5 mt-2 relative">
        <div >
          <div className="col-span-5 flex items-center justify-center">
  <img
    src={UpgradePlan}
    alt="upgrade"
    className="h-28 w-28 object-contain"
  />
</div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
