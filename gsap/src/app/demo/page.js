// import GsapBasicBox from "@/components/GsapBasicBox";

import GsapBasicBox from "@/component/GsapBasicBox";
import GsapStaggerEase from "@/component/GsapStaggerEase";
import GsapTimelineBox from "@/component/GsapTimelineBox";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        {/* 🟢 GSAP Basics: to(), from(), fromTo() */}
      </h1>
      {/* <GsapBasicBox /> */}
      <GsapTimelineBox />
      {/* <GsapStaggerEase /> */}
    </div>
  );
}
