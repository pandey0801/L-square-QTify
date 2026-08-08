import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import RightArrow from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    swiper.on("slideChange", function () {
        setIsEnd(swiper.isEnd);
    });

    return (
        <div className={styles.rightNavigation}>

            {!isEnd && <img
                src={RightArrow}
                alt="Next"
                onClick={() => swiper.slideNext()}
            />}
        </div>
    );
} 
