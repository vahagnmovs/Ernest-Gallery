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
                "(max-width: 768px)": {
                    slides: { perView: 1.2, spacing: 10, origin: 'center' },
                }
            }
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className={styles.slidesMolbertContainer}>
            <div className={styles.slidesMolbertWrapper}>
                <div className={styles.slidesMolbertHeaderContainer}>
                    <span className={styles.slidesMolbertHeader}>My Paintings</span>
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
        </div>
    );
};

export default SlidesMolbert;