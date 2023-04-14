import React from 'react';
import styles from "@/styles/slideMolbert.module.css";
import {useKeenSlider} from "keen-slider/react";
import {slidesMolberts} from '@/data/slidesMolbert'
import SlideSingle from "@/components/slideMolbert/slideSingle";
import 'keen-slider/keen-slider.min.css'


const SlidesMolbert = () => {

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: {perView: "auto", spacing: 16},
            breakpoints: {
                "(max-width: 450px)": {
                    slides: { perView: 1.13, spacing: 10, origin: 'center' },
                }
            }
        },
    )

    return (
        <div className={styles.slidesMolbertContainer}>
            <div className={styles.slidesMolbertHeaderContainer}>
                <span className={styles.slidesMolbertHeader}>Title For Section</span>
            </div>

            <div ref={sliderRef} className="keen-slider">
                {
                    slidesMolberts.map(slidesMolbert => (
                            <div key={slidesMolbert.id} className={'keen-slider__slide sliderWidthPeople'}>
                                <SlideSingle {...slidesMolbert}/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default SlidesMolbert;