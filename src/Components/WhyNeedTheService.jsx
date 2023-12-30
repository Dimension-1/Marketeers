import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

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
            <div style={{
                height: '80vh',
                flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', paddingTop: '10em', paddingBottom: '10em', display: 'flex'
            }}
                className="blue-background-container d-flex justify-content-between">
                <div className="container-small">
                    <div className="single__wrapper d-flex">
                        <div className="column-50 flex-vertical">
                            <h1 style={{ fontSize: '60px', marginTop:'-30px' }} className="text-3 line-height-1 why-need-service">{pageTitle}</h1>
                        </div>
                        <div className="column-50 flex-vertical">
                            <div
                                data-w-id="76634ea2-c6be-5487-8cdb-888ce472167c"
                                style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
                                transformStyle: 'preserve-3d', opacity: '1', marginTop:'-50px', width:'600px'}}
                                className="text-3 p-body text-balance w-richtext"
                            >
                                <ul role="list" className="tick-list" style={{ listStyleType: 'none', marginBottom: '40px', marginTop: '-20px' }}>
                                    <li style={{ marginBottom: '20px' }}>
                                        <span style={{ color: '#27292B', marginRight: '8px', fontSize: '1.2em', fontWeight: 'bold' }}>&#x2713;</span>
                                        <span style={{ color: '#8AABC3'}}> See the full competitive landscape within your niche</span>
                                    </li>
                                    <li style={{ marginBottom: '20px' }}>
                                        <span style={{ color: '#27292B', marginRight: '8px', fontSize: '1.2em', fontWeight: 'bold' }}>&#x2713;</span>
                                        <span style={{ color: '#8AABC3' }}> Discover the leaders and the challengers</span>
                                    </li>
                                    <li style={{ marginBottom: '20px' }}>
                                        <span style={{ color: '#27292B', marginRight: '8px', fontSize: '1.2em', fontWeight: 'bold' }}>&#x2713;</span>
                                        <span style={{ color: '#8AABC3' }}> Identify your closest competitor</span>
                                    </li>
                                    <li style={{ marginBottom: '20px' }}>
                                        <span style={{ color: '#27292B', marginRight: '8px', fontSize: '1.2em', fontWeight: 'bold' }}>&#x2713;</span>
                                        <span style={{ color: '#8AABC3' }}> Learn from the winners and avoid the losers’ mistakes</span>
                                    </li>
                                    <li style={{ marginBottom: '20px' }}>
                                        <span style={{ color: '#27292B', marginRight: '8px', fontSize: '1.2em', fontWeight: 'bold' }}>&#x2713;</span>
                                        <span style={{ color: '#8AABC3' }}> Find the gaps in your competitors’ strategies</span>
                                    </li>
                                    <li>
                                        <span style={{ color: '#27292B', marginRight: '8px', fontSize: '1.2em', fontWeight: 'bold' }}>&#x2713;</span>
                                        <span style={{ color: '#8AABC3' }}> Benchmark your performance against your peer group</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyNeedTheService;
