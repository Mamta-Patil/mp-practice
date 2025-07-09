// // import Image from "next/image";

import Card from "@/component/Card";
import Footer from "@/component/Footer";
import Heading from "@/component/Heading";
import HomePage from "@/component/Homepage";
import ImageContent from "@/component/ImageContent";
import ImageContent1 from "@/component/ImageContent1";
import LastPara from "@/component/LastPara";
import LeftContent from "@/component/LeftContent";
import Text from "@/component/Text";
import Video from "@/component/Video";
import ScrollVideoSwitcher from "@/component/Video1";
import Video1 from "@/component/Video1";

// import Card from "@/component/Card";
// import HomePage from "@/component/Homepage";

// export default function Home() {
//   return (
//     <>
//       <HomePage />
//       <Card />
//     </>
//   );
// }
// import HomePage from "@/components/HomePage";
// import Card from "@/components/Card";


export default function Page() {
  return (
    <main>  
      <HomePage /> {/* Cursor appears only while in this section */}
      <Card />      {/* Cursor will hide when user leaves HomePage area */}
      <Text />
      <Video />
      <Heading />
      <ImageContent />
      <ImageContent1 />
      <LeftContent />
      {/* <Video1/> */}
      {/* <ScrollVideoSwitcher /> */}
      <LastPara />
      <Footer />
    </main>
  );
}
