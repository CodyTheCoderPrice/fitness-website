import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Train from head to toe with upper body, lower body, compound strength, and core training using various training equipment.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Blends yoga, tai chi, Pilates and stretching to reduce stress, increase flexibility, improve strength and increase mind-body awareness.",
    image: image2,
  },
  {
    name: "Core Classes",
    description:
      "Target your shoulders, torso, spine, and hips in a workout that integrates standing compound movement, rotational movement, abdominal work and back work.",
    image: image3,
  },
  {
    name: "Dance Classes",
    description:
      "Hear the latest music. Learn the freshest moves. Lose yourself and just dance.",
    image: image4,
  },
  {
    name: "HIIT Cardio Classes",
    description:
      "Chase your goals through intervals that include running, lateral movement, rotational movement, on/off the floor work, all in under 30 minutes.",
    image: image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              We offer unlimated access to over 100 group exercise classes
              included with every membership. Our custom designed classes were
              made to give members of any fitness level a challenge.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2350px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
