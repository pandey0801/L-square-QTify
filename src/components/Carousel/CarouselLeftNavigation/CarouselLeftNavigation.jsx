// import React, { useEffect, useState } from "react";
// import { useSwiper, useSwiperSlide } from "swiper/react";
// import styles from "./CarouselLeftNavigation.module.css";
// import LeftArrow from "../../../assets/LeftArrow.svg";

// export default function CarouselLeftNavigation() {
//     const swiper = useSwiper();
//     const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

//     swiper.on("slideChange", function () {
//         setIsBeginning(swiper.isBeginning);
//     });

//     return (
//         <div className={styles.leftNavigation}>
//             {!isBeginning && <img
//                 src={LeftArrow}
//                 alt="Previous"
//                 onClick={() => swiper.slidePrev()}
//             />}
//         </div>
//     );
// }


import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import LeftArrow from "../../../assets/LeftArrow.svg";
import styles from "./CarouselLeftNavigation.module.css";

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();

    const [isBeginning, setIsBeginning] = useState(
        swiper.isBeginning
    );

    useEffect(() => {
        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
        };

        swiper.on("slideChange", handleSlideChange);

        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    const handlePrevious = () => {
        swiper.slidePrev();
    };

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && (
                <img
                    src={LeftArrow}
                    alt="Previous"
                    onClick={handlePrevious}
                />
            )}
        </div>
    );
}