import React, { useState } from "react";
import { WobbleCard } from "./Ui/wobble-card";
import { BackgroundGradientAnimation } from "./Ui/Gradiantbg";
import { InfiniteMovingCards } from "./Ui/infinite-moving-cards";
import { SparklesCore } from "./Ui/sparkles";
import { FlipWords } from "./Ui/flip-words";
import { MagicButton } from "./Ui/MagicButton";
import { saveAs } from 'file-saver';
import axios from 'axios';

export function WobbleCardDemo() {
  const [totalCards, setTotalCards] = useState(0);

  const handleAnimationSetupComplete = (totalItems) => {
    setTotalCards(totalItems);
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get('/data/Aishwarya_Resume.pdf', {
        responseType: 'blob', // Important to specify blob response type
      });
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'Aishwarya_Resume.pdf');
    } catch (error) {
      console.error('Error downloading the PDF', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      {/* First WobbleCard */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-cover bg-center relative bg-#0f0c29"
        className="flex py-20"
      >
        <SparklesCore
          id="tsparticles1"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full absolute top-0 left-0 z-0"
          particleColor="#FFFFFF"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl mx-auto font-bold text-white dark:text-purple text-center uppercase">
            Know more about my
            <FlipWords words={["Skills", "Education", "Experience"]} className="text-purple" />
          </h1>
          <div className="inline-block mt-4">
            <MagicButton 
              title="Download Resume PDF" 
              icons={<i className="fas fa-download"></i>} 
              handleClick={handleDownload}
              position="left"
            />
          </div>
        </div>
      </WobbleCard>

      {/* Second WobbleCard */}
      <WobbleCard containerClassName="relative col-span-1 min-h-[300px]">
        <BackgroundGradientAnimation className="absolute inset-0">
          <div className="relative z-10 p-4">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Crafting digital experiences with precision and passion.
            </h2>
          </div>
        </BackgroundGradientAnimation>
      </WobbleCard>

      {/* Third WobbleCard */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-black-100"
        className="flex flex-col justify-center items-center p-10"
      >
        <div className="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <h1 className="text-center text-balance heading text-white">
            TECH AND SKILLS
          </h1>
          <div className="w-full h-full">
            <InfiniteMovingCards
              items={[
                { name: "HTML", icon: "FaHtml5" },
                { name: "CSS", icon: "FaCss3Alt" },
                { name: "JavaScript", icon: "DiJavascript1" },
                { name: "MySQL", icon: "BsFiletypeSql" },
                { name: "MongoDB", icon: "FaDatabase" },
                { name: "Node.js", icon: "FaNodeJs" },
                { name: "React", icon: "FaReact" },
                { name: "Tailwind CSS", icon: "RiTailwindCssFill" },
                { name: "Next.js", icon: "SiNextdotjs" },
              ]}
              direction="left"
              speed="normal"
              pauseOnHover={true}
              className="h-full w-full"
            />
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}

export default WobbleCardDemo;
