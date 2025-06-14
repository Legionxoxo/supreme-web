import { vehicleShowcaseText } from "../../data/data";
import { motion } from "framer-motion";

const HeroText = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:h-screen flex items-center justify-center py-10 max-md:pt-20 md:py-20"
        >
            <div className="text-center max-w-6xl px-4">
                <h1 className="text-3xl lg:text-5xl font-light leading-tight text-pretty">
                    {vehicleShowcaseText.heroHeadingLine1}{' '}
                    <span className="font-bold text-white">{vehicleShowcaseText.heroHighlight}</span>
                    <br />
                    {vehicleShowcaseText.heroHeadingLine2}
                </h1>
            </div>
        </motion.div>
    )
}

export default HeroText;