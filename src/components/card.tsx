import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface CardItemProps {
  children: React.ReactNode;
  translateZ: number;
  rotateX: number;
  rotateZ: number;
  className?: string;
  style?: React.CSSProperties;
}

const CardContainer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const CardBody = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const CardItem = ({
  className,
  children,
  rotateX,
  rotateZ,
  translateZ,
  style,
}: CardItemProps) => (
  <motion.div
    className={className}
    style={{
      perspective: 600,
      ...style,
    }}
    initial={{
      rotateX: 0,
      rotateZ: 0,
      translateZ: 0,
    }}
    whileHover={{
      rotateX: rotateX,
      rotateZ: rotateZ,
      translateZ: translateZ,
    }}
    transition={{
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
);

export default function Example({ images }) {
  const mainImageRef = useRef(null);
  return (
    <CardContainer className="inter-var z-200">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ={100}
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4 group-hover:z-[210]"
          style={{
            zIndex: 200,
          }}
        >
          <Image
            ref={mainImageRef}
            className="object-contain w-screen"
            style={{
              width: "100%",
              height: "auto", // Maintain aspect ratio
            }}
            src={images[0].src}
            alt={images[0].alt}
            width={1000}
            height={1000}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
