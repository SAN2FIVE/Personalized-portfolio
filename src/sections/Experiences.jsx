import { motion } from "framer-motion";
import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full"
      id="work"
    >
      <Timeline data={experiences} />
    </motion.div>
  );
};

export default Experiences;
