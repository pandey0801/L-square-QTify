// import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
// import styles from "./CarouselRightNavigation.module.css";
// import RightArrow from "../../../assets/RightArrow.svg";

// export default function CarouselRightNavigation() {
//     const swiper = useSwiper();
//     const [isEnd, setIsEnd] = useState(swiper.isEnd);
//     swiper.on("slideChange", function () {
//         setIsEnd(swiper.isEnd);
//     });

//     return (
//         <div className={styles.rightNavigation}>

//             {!isEnd && <img
//                 src={RightArrow}
//                 alt="Next"
//                 onClick={() => swiper.slideNext()}
//             />}
//         </div>
//     );
// } 


import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import RightArrow from "../../../assets/RightArrow.svg";
import styles from "./CarouselRightNavigation.module.css";

export default function CarouselRightNavigation() {
    const swiper = useSwiper();

    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsEnd(swiper.isEnd);
        };

        swiper.on("slideChange", handleSlideChange);

        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    const handleNext = () => {
        swiper.slideNext();
    };

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && (
                <img
                    src={RightArrow}
                    alt="Next"
                    onClick={handleNext}
                />
            )}
        </div>
    );
}