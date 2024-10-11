import { motion } from "framer-motion";
import Image from 'next/image';

const ImageRightSide = ({ image }: { image: any }) => {
  return (
    <motion.div
      key={image}
      className="inset-0 w-full h-full transition-all"
      initial={{ opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <Image
        src={image}
        alt="alt"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ImageRightSide;