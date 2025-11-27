// import { stats } from "@/data/stats"

// const Stats: React.FC = () => {
//     return (
//         <section id="stats" className="py-10 lg:py-20">
//             <div className="grid sm:grid-cols-3 gap-8">
//                 {stats.map(stat => (
//                     <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
//                         <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
//                             {stat.icon}
//                             {stat.title}
//                         </h3>
//                         <p className="text-foreground-accent">{stat.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default Stats
"use client"
import { stats } from "@/data/stats";
import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedNumber: React.FC<{ target: number }> = ({ target }) => {
  const [number, setNumber] = useState(0);
  const animationDuration = 2000; // Adjust for desired speed (milliseconds)
  const frameDuration = 1000 / 60; // Approximate frame duration for 60 FPS
  const totalFrames = Math.round(animationDuration / frameDuration);

  useEffect(() => {
    if (target > 0) {
      let currentFrame = 0;
      const intervalId = setInterval(() => {
        currentFrame++;
        const progress = Math.min(currentFrame / totalFrames, 1);
        setNumber(Math.floor(progress * target));

        if (progress === 1) {
          clearInterval(intervalId);
        }
      }, frameDuration);

      return () => clearInterval(intervalId); // Clean up on unmount
    }
  }, [target, totalFrames]);

  return <span>{number}+</span>;
};

const Stats: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <section id="stats" className="py-10 lg:py-20" ref={ref}>
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center sm:text-left max-w-md sm:max-w-full mx-auto"
          >
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.icon}
              {inView ? (
                <AnimatedNumber target={parseInt(stat.title)} />
              ) : (
                <span>0+</span> // Display 0 until in view
              )}
            </h3>
            <p className="text-foreground-accent">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;