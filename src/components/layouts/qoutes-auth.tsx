import { motion } from "framer-motion";

const QuoteRightSide = ({ quote, author }: { quote: any; author: any }) => {
  return (
    <div className="w-1/2 h-screen absolute z-[5] bg-black/40 flex justify-center items-center">
      <div className="w-2/3 h-1/2 bg-black/60 rounded-3xl p-8">
        <div className="w-full h-full flex flex-col justify-center items-center gap-12">
          <motion.h3
            key={quote}
            className="text-white text-center text-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >{`" ${quote} "`}</motion.h3>
          <motion.p
            className="text-white text-sm"
            key={author}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            by {author}
          </motion.p>
        </div>
      </div>
    </div>
  );
};


export default QuoteRightSide;