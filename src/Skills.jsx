import { motion } from "framer-motion";
import Skill from "./Skill";

export const Skills = () => {
  const skills = [
    { icon: "NET core.svg", name: ".NET" },
    { icon: "PostgresSQL.svg", name: "PostgreSQL" },
    { icon: "React.svg", name: "React" },
    { icon: "Next.js.svg", name: "Next.Js" },
    { icon: "Tailwind CSS.svg", name: "Tailwind CSS" },
    { icon: "Git.svg", name: "Git" },
    { icon: "Azure.svg", name: "Azure" },
    { icon: "CSharp.svg", name: "C#" },
  ];
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <motion.div
        className="skill-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Delay between each child's animation
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} name={skill.name} />
        ))}
      </motion.div>
    </div>
  );
};
