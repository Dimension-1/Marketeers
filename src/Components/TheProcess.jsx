import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import './TheProcess.css';

gsap.registerPlugin(ScrollTrigger);

const TheProcess = ({ pageTitle }) => {
    
    return (
        <div class="container-small">
  <div class="single__wrapper">
    <div class="column-50 flex-vertical is-single-process">
      <div class="single_process-sticky-heading hide-on-mobile">
        <h2 style={{color:'white'}}class="line-height-1 h3 is-process">The Process</h2>
        <div class="p-body lighter opacity-05 w-dyn-bind-empty"></div>
      </div>
    </div>
    <div class="column-50 flex-vertical">
      <div class="spacing-container-04 hide-on-mobile"></div>
      <div class="spacing-container-04"></div>
      <div class="spacing-container-04 hide-on-mobile"></div>
      <div class="single-process-wrap">
        {/* <div class="single_process-sticky-heading hide-on-desktop"> */}
          {/* <h2 class="line-height-1 h3 is-process">The Process</h2>
          <div class="p-body lighter opacity-05 hide-on-mobile w-dyn-bind-empty"></div> */}
        {/* </div> */}

        <div data-w-id="6d58321c-4791-73a4-901a-c4abbbabd421" class="single-service" style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
        <div class="single-service ">
            <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">01</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Pay-Per-Click Advertising</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                Keyword Conquest: Selecting keywords that are not just popular but profitable.
                Ad Creatives That Captivate: Designing ads that don't just get seen, they get clicked.
                Landing Page Perfection: Creating landing experiences that seal the deal.
                Bid Brilliance: Optimizing bids for maximum visibility, minimal spend.
                ROI-Focused Analytics: Turning data into PPC dominance.
              </div>
            </div>
            <div class="card-hider" style={{ backgroundColor:'blue',artwillChange: 'opacity', opacity: '0' }}></div>
          </div>
        </div>
        </div>

        <div class="single-service">
          <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">02</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Email and SMS Marketing</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                Audience Profiling: Understanding your audience to hit the right note.
                Creative Campaigns: Designing emails and SMS that are a visual and verbal treat.
                Persuasive Copywriting: Crafting messages that move the needle.
                Strategic Send-Outs: Timing your messages for maximum impact.
                Performance Analytics: Refining strategies for relentless success.
              </div>
            </div>
            <div class="card-hider" style={{}}></div>
          </div>
        </div>

        <div class="single-service">
          <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">03</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Analytics and Data Analysis</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                Data Expedition: Venturing into the vast data landscape to gather valuable insights.
                Insight Mining: Extracting the gold nuggets of actionable intelligence.
                Narrative Reporting: Translating data into understandable, compelling stories.
                Strategic Recommendations: Crafting data-driven strategies for your unique needs.
                Continuous Data Exploration: Keeping a pulse on data for ongoing success.
              </div>
            </div>
            <div class="card-hider" style={{}}></div>
          </div>
        </div>

        <div class="single-service">
          <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">04</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Influencer Marketing</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                Influencer Alignment: Matching your brand with the perfect influencer voices.
                Collaborative Storytelling: Crafting campaigns that tell your story, their way.
                Content Co-Creation: Merging your brand's essence with influencer creativity.
                Campaign Launch and Management: Orchestrating campaigns that make waves.
                Impact and Engagement Analysis: Measuring the ripple effect of every collaboration.
              </div>
            </div>
            <div class="card-hider" style={{}}></div>
          </div>
        </div>

        <div class="single-service">
          <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">05</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Conversion Rate Optimization</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                User Experience Analysis: Understanding what your visitors want and how they interact with your site.
                Conversion Path Optimization: Streamlining the journey from visitor to customer.
                A/B Testing: Experimenting with elements to find the winning formula.
                Performance Analytics: Measuring the impact of changes and continuously improving.
                Feedback Loop Integration: Using customer feedback to refine the user experience.
              </div>
            </div>
            <div class="card-hider" style={{}}></div>
          </div>
        </div>

        <div class="single-service">
          <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">06</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Online Reputation Management</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                Reputation Analysis: Assessing your current online presence and areas for improvement.
                Strategic Content Creation: Developing content that reinforces a positive brand image.
                Feedback Management: Addressing customer concerns and feedback effectively.
                Proactive Reputation Building: Cultivating a strong, positive online presence.
                Continuous Monitoring: Keeping an eye on your brand's online reputation and responding swiftly.
              </div>
            </div>
            <div class="card-hider" style={{}}></div>
          </div>
        </div>

        <div class="single-service">
          <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">07</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Customer Experience (CX) Strategy</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                Customer Journey Mapping: Charting the path your customers take and optimizing each step.
                Experience Enhancement: Elevating every interaction to delight customers.
                Feedback Integration: Using customer insights to continuously improve.
                Personalization Tactics: Tailoring experiences to individual customer needs.
                Loyalty Program Development: Creating programs that reward and retain customers.
              </div>
            </div>
            <div class="card-hider" style={{}}></div>
          </div>
        </div>

        <div class="single-service ">
          <div data-scroll="" class="single__process-item-wrapper bg--3">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">08</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance">Marketing Consultation and Strategy</h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                Market Analysis: Understanding your industry, competitors, and opportunities.
                Strategic Planning: Developing a marketing plan that aligns with your business objectives.
                Tactical Implementation: Guiding the execution of your marketing strategies.
                Performance Monitoring: Tracking the effectiveness of your marketing efforts.
                Adaptive Strategy Refinement: Continuously refining your strategy for optimal results.
              </div>
            </div>
            <div class="card-hider" style={{}}></div>
          </div>
        </div>

        <div class="single-service w-condition-invisible">
          <div data-scroll="" class="single__process-item-wrapper bg--3 w-condition-invisible">
            <div class="single__process-number-wrap text-accent">
              <div class="h3">09</div>
            </div>
            <div class="single__proces-content-holder">
              <h3 class="p-leading is-bigger text-balance w-dyn-bind-empty"></h3>
              <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance w-dyn-bind-empty"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


    );
};

export default TheProcess;
