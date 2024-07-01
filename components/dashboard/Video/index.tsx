"use client";

import Image from "next/image";
import { useState } from "react";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section style={{background: 'linear-gradient(72deg,var(--token-13854da9-c43f-495c-8d2c-fd85e8e06c75, #000000) 0%,var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) 47.747747747747745%,rgb(0,0,0) 100%)'}} className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container" style={{textAlign: 'center'}}>
        
        <p style={{color: 'grey'}}> Para entender mejor Stockeado mira este video que hicimos de ayuda para ti:</p>
        

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

    </section>
  );
};

export default Video;
