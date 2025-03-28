"use client";
import { useTranslations } from "next-intl";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

export const AmbassadorVideo = () => {
  const t = useTranslations();

  return (
    <section className="mt-[60px] md:mt-[100px] pb-[80px] lg:pb-[120px] ">
      <h2 className="title-text pb-4 md:pb-6">{t("ambassador_video_message")}</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[49%] overflow-hidden">
          <Player
            fluid={false}
            className="!h-[350px] mb-[20px] lg:mb-0 lg:!h-[700px] !w-full"
            playsInline
            poster="https://ucarecdn.com/c5cc4d2f-b156-4107-b687-50320bfc61b0/-/preview/820x553/"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        <div className="w-full lg:w-[49%] overflow-hidden flex flex-col gap-[20px]">
          <Player
            fluid={false}
            className=" !h-[350px] lg:!h-[220px] !w-full"
            playsInline
            poster="https://ucarecdn.com/c5cc4d2f-b156-4107-b687-50320bfc61b0/-/preview/820x553/"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
          <Player
            fluid={false}
            className=" !h-[350px] lg:!h-[220px] !w-full"
            playsInline
            poster="https://ucarecdn.com/c5cc4d2f-b156-4107-b687-50320bfc61b0/-/preview/820x553/"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
          <Player
            fluid={false}
            className="!h-[350px] lg:!h-[220px] !w-full"
            playsInline
            poster="https://ucarecdn.com/c5cc4d2f-b156-4107-b687-50320bfc61b0/-/preview/820x553/"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
    </section>
  );
};
