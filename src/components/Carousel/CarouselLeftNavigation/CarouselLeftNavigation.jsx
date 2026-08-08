import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import LeftArrow from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    swiper.on("slideChange", function () {
        setIsBeginning(swiper.isBeginning);
    });

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <img
                src={LeftArrow}
                alt="Previous"
                onClick={() => swiper.slidePrev()}
            />}
        </div>
    );
}
