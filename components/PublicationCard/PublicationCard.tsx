import { motion, useAnimation } from "framer-motion";
import Icon from "@/components/atoms/Icon";
import { useCallback } from "react";

export interface PublicationCardProps {
  title: string;
  description: string;
  url: string;
}

export default function PublicationCard({
  title,
  description,
  url,
}: PublicationCardProps) {
  const bannerControl = useAnimation();

  const showBanner = useCallback(() => {
    bannerControl.start({
      opacity: 1,
    });
  }, [bannerControl]);
  const hideBanner = useCallback(() => {
    bannerControl.start({
      opacity: 0,
    });
  }, [bannerControl]);

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <motion.div
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.02 }}
        onTapStart={showBanner}
        onHoverStart={showBanner}
        onTap={hideBanner}
        onHoverEnd={hideBanner}
        className={`relative w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 cursor-pointer outline-none`}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mt-5 text-lg text-justify">
          {description
            ? description
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
        </p>

        <motion.div
          className="absolute top-0 bottom-0 left-0 right-0 bg-primary/[0.8] flex justify-center items-center"
          animate={bannerControl}
          initial={{
            opacity: 0,
          }}
        >
          <Icon name="external-link" color="white" />
        </motion.div>
      </motion.div>
    </a>
  );
}
