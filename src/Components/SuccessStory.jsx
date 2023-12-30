import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import "./SuccessStory.css";

gsap.registerPlugin(ScrollTrigger);

const WhyNeedTheService = ({ pageTitle }) => {
    useEffect(() => {
        const scrollBar = Scrollbar.init(document.querySelector(".scroll-target"), {
            damping: 0.01,
            delegateTo: document,
            alwaysShowTracks: true,
            speed: 0.2,
        });

        ScrollTrigger.defaults({
            scroller: ".scroll-target",
        });
        ScrollTrigger.scrollerProxy(".scroll-target", {
            scrollTop(value) {
                if (arguments.length) {
                    scrollBar.scrollTop = value;
                }
                return scrollBar.scrollTop;
            },
        });

        scrollBar.addListener(ScrollTrigger.update);

        const matches = document.querySelectorAll("p");

        matches.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: "0%",
                stagger: 1,
                scrollTrigger: {
                    markers: false,
                    trigger: target,
                    scrub: true,
                    start: "top 25%",
                    end: "bottom 5%",
                },
            });
        });

        return () => { };
    }, []);

    return (
        <div className=" container pt-5 position-relative " style={{ width: '100%', backgroundColor: '#D7E0EE', position: 'absolute', zIndex: '2', borderRadius: '24px' }}>
            <div className="img-overlay position-absolute" style={{ top: "-10%", right: "86%", transform: 'rotate(15deg)' }}>
            </div>

            <div style={{backgroundColor:'#D7E0EE'}}class="page-spacing__large bg--2 radius-36 logo-changer z-index-5 is-success">
                <div style={{backgroundColor:'#D7E0EE'}}class="container-small">
                    <div class="single__wrapper">
                        <div class="column-50 flex-vertical is-single-success">
                            <div data-w-id="4d016f08-20f0-2fb1-9562-59519628945c" class="success-block is--1" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1'}}>
                                <h2 class="h2 is-smaller is-success-story">Success <br></br>Story</h2>
                            </div>
                            <div data-w-id="09d4f82f-29a1-3d9b-2777-b9f51644597c" class="success-block is--2" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1'}}>
                                <h3 class="h4 line-height-1-1">The<br></br>Challenge</h3>
                                <div class="p-body-normal opacity-06">
                                    A subscription-based men’s skincare brand was struggling to gain market share against some of the industry’s established players. They were trying to find their competitive edge, position their products in the correct price segment, and discover the ideal ad channels.
                                </div>
                            </div>
                        </div>
                        <div class="column-50 flex-vertical is-single-success">
                            <div class="spacing-container-04 hide-on-mobile"></div>
                            <div data-w-id="edc211ce-cde1-7a4e-bf78-b9ac7eaaac3b" class="success-block is--3" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1'}}>
                                <h3 class="h4 line-height-1-1">The<br></br>Solution</h3>
                                <div class="p-body-normal opacity-06">
                                    Our expert team mapped the whole competitive landscape, pinpointed the direct competitors and conducted an in-depth analysis of the key players. We were able to identify product gaps in the market, a less competitive price segment, and high-RoI marketing channels that can be tapped into.
                                </div>
                            </div>
                            <div data-w-id="96b38126-1429-00fa-0d22-0c2e96550388" class="success-block is--4" style={{backgroundColor:'#8AABC3',transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1'}}>
                                <h3 style={{color:'#27292B'}}class="h4 line-height-1-1">
                                    The<br></br>
                                    Result</h3>
                                <div class="p-body-normal opacity-06 text-balance">
                                    The brand crafted their new messaging in a way that positioned their products in the identified gaps and launched marketing campaigns in the channels that were being underutilized by the competition.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyNeedTheService;
