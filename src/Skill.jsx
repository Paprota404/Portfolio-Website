
import { motion } from 'framer-motion';
import { useOnScreen } from './useOnScreen'; // Adjust the import path as necessary

const Skill = ({ icon, name }) => {
 const [ref, isIntersecting] = useOnScreen({
    threshold: 0.5, // Adjust the threshold as needed
 });

 return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="skill"
    >
      <div className="skill-desc">
        <img className="skill-icon" src={icon} alt={name}></img>
        <h3 className="skill-name">{name}</h3>
      </div>
    </motion.div>
 );
};

export default Skill;