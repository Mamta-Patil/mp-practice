// import { GsapTo } from "@/component/GsapTo";
// import Image from "next/image";

import GsapFrom from "@/component/GsapFrom";
import GsapFromTo from "@/component/GsapFromTo";
import GsapStagger from "@/component/GsapStagger";
import GSAPText from "@/component/GsapText";
import GsapTimeline from "@/component/GsapTimeline";
import { GsapTo } from "@/component/GsapTo";
import ToggleActionsPlayPause from "@/component/ScrollTrigger";
import ToggleActionsEffect from "@/component/ScrollTrigger";
import ScrollScrub from "@/component/ScrollTrigger";
import ScrollReveal from "@/component/ScrollTrigger";
import ScrollTriggerExample from "@/component/ScrollTrigger";

export default function Home() {
  return (
    <div  className="overflow-hidden">
      {/* <GsapTo /> */}
      {/* <GsapFrom /> */}
      {/* <GsapFromTo /> */}
      {/* <GsapTimeline /> */}
      {/* <GsapStagger /> */}
      {/* <ScrollTriggerExample /> */}
      {/* <ScrollReveal /> */}
      {/* <ScrollScrub /> */}
      {/* <ToggleActionsPlayPause/> */}
      <ToggleActionsEffect />
      {/* <GSAPText /> */}
    </div>
  );
}
