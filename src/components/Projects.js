import React from "react";
import { useState } from "react";

export const Projects = () => {

  const [minimize, setMinimize] = useState(false);

  return (
    <>
      <div id={minimize === true ? "minimize" : "window-container"}>
        <div className={minimize === true ? "title-bar-min" : "title-bar"}>
          <div className='title-text'>www.marcus.me {">"} projects</div>
          <div>
            <button onClick={() => setMinimize(!minimize)}>_</button>
            <button className='help-button'><strong>?</strong></button>
          </div>
        </div>

        {minimize === true ? null : 
        (
          <>
            <menu role="tablist">
            <li 
                role="tab" 
                selected={false}
                aria-selected="false" 
                label="Home">
                    <a href="/">Home</a>
            </li>
            <li 
                role="tab" 
                selected={false}
                aria-selected="false" 
                label="Blog">
                    <a href="/writings">Writings</a>
            </li>
            <li 
                role="tab" 
                selected={true}
                aria-selected="true" 
                label="Projects">
                    <a href="/projects">Projects</a>
            </li>
            <li 
                role="tab" 
                selected={false}
                aria-selected="false" 
                label="Projects">
                    <a href="/til">TIL</a>
            </li>
            </menu>

            <div className='main-content-container' role="tabpanel">
              <div className='main-content' >
                <h2>Personal and professional (tk) software development projects / applications 💾</h2>
                <ul className='home-tree'>
                  <p><i>Projects are listed in reverse chronological order, hopefully the best stuff is near the top.</i></p>
                  <li>
                  <details closed="true">
                      <summary>This website!</summary>
                      <ul>
                        <li><u>Title:</u> moritzportfolio.vercel.app</li>
                        <li><u>Link:</u> <a href="https://moritzportfolio.vercel.app/">moritzportfolio.vercel.app</a></li>
                        <li><u>Purpose:</u> Personal portfolio website.</li>
                        <li><u>Inspiration:</u> <a href="http://www.gurgen.info">gurgen.info</a>, and <a href="https://jdan.github.io/98.css/">98.css</a>. It's also a throwback to my memories as a kid watching my mom do bookeeping on our old Windows machine. Everything old is new again.</li>
                        <li><u>Built with:</u> React, Javascript, and a whole lot of hand-coded CSS to get this bad boy all squared up. I didn't  use 98.css, but I think I achieved something similar. Deployed with Vercel.</li>
                        <li><u>Learned:</u> A lot about CSS! Including <i>box-shadow</i>, <i>details</i> and <i>summary</i>, fonts, and those damn tabs at the top of the page. Finicky.</li>
                        <li><u>Concurrent users:</u> 1 (one)</li>
                      </ul>
                  </details>
                  </li>

                  <li>
                  <details closed="true">
                      <summary>Web Development Internship</summary>
                      <ul>
                        <li><u>Title:</u> Sportsmansguide.com</li>
                        <li><u>Link:</u> <a href="https://www.sportsmansguide.com/">Sportsmansguide.com</a></li>
                        <li><u>Purpose:</u> Web development internship.</li>
                        <li><u>Worked On:</u> Crecera Brands (parent company) has aspirations to buy some other small sportsmans-related websites. <br></br>The goal during my time was to help with building the Commercetools headless API that Sportsmansguide.com and these future websites could interact with. <br></br>I also maintained Section 508 accessibility, regularly pushed code to production, broke things once or twice, <br></br>and contributed in modernizing (with Angular) some of the web pages to facilitate multiple websites from one administrative tool.</li>
                        <li><u>Built with:</u> C#, Angular, CSS, Material UI, Oracle / MySQL, REST APIs, JSON, XML.</li>
                        <li><u>Learned:</u> Angular (Javascript framework), ASP.NET and Razor pages, Oracle and MySQL, gun shipping laws, teamwork, Azure DevOps, CloudFlare, Commercetools, Section 508.</li>
                        <li><u>Concurrent users:</u> Many thousands. ({'>'} $28M yearly in revenue through the website.)</li>
                      </ul>
                  </details>  
                  </li>
                  
                  <li>
                  <details closed="true">
                      <summary>Newsfeed Application</summary>
                      <ul>
                        <li><u>Title:</u> Streamer (needs a better name I know)</li>
                        <li><u>Link:</u> <a href="http://rss-feed-pwdx.onrender.com/">rss-feed-pwdx.onrender.com</a></li>
                        <li><u>GitHub Link:</u> <a href="https://github.com/cusmoritz/RSS-attempte-1">github.com/cusmoritz/RSS-attempte-1</a></li>
                        <li><u>Purpose:</u> Personalized news aggregation.</li>
                        <li><u>Inspiration:</u> Not content with the other <i>social media</i>-esque ways to gather news, I decided to build my own. RSS is a valuable technology, and still completely works! Everything old is new again etc etc.</li>
                        <li><u>Built with:</u> Javascript, React, Express.JS, PostgreSQL, CSS, XML. Deployed with Render.</li>
                        <li><u>Learned:</u> Not even sure where to start. As the first major personal project after finishing my certificate program, I learned a little about XML; a lot about seperation of concers with PostgreSQL databases; a lot about APIs and URLs; a ton about React state; a little about recommitting to Git after I broke it several times; at least enough to deploy it; and got better at local storage with registering and signing in a user.</li>
                        <li><u>Concurrent users:</u> 1 (one). Could be more; don't forget to smash that subscribe button!</li>
                        <li><u>Video example:</u> <a href="https://www.linkedin.com/posts/marcusmoritz_rss-javascript-softwaredevelopment-activity-7064006770536427520-JyKT?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noreferrer">Link</a>.</li>
                      </ul>
                    </details>
                  </li>

                  <li>
                  <details closed="true">
                      <summary>Weather Application</summary>
                      <ul>
                        <li><u>Title:</u> Chance of Rain</li>
                        <li><u>Link:</u> None.</li>
                        <li><u>GitHub Link:</u> <a href="https://github.com/cusmoritz/weather">github.com/cusmoritz/weather</a></li>
                        <li><u>Purpose:</u> They say every relationship has two types of people: one person constantly checks the weather — the other person has no idea. My wife is the weather person. This is for her.</li>
                        <li><u>Inspiration:</u> Literally my wife, who loves checking the weather.</li>
                        <li><u>Built with:</u> React, <a href="https://developers.google.com/maps/documentation/javascript/geocoding">Google Geocoding Service API</a>, <a href="https://developers.google.com/maps/documentation/places/web-service/autocomplete#maps_http_places_autocomplete_amoeba_strict-txt">Google Place Autocomplete API</a>, <a href="https://www.weather.gov/documentation/services-web-api#/default/point">Weather.gov API</a>, Javascript, Express.JS, CSS. (Was planning on deploying with Rendner.)</li>
                        <li><u>Learned:</u> Google's API service; more Express.JS functionality; Weather.gov functionality; auto-loading geolocation; pinging IP addresses for nearby latitude and longitude.</li>
                        <li><u>Concurrent users:</u> None, the Google API starts charging after 80 days, and we have windows in our house.</li>
                      </ul>
                  </details>
                  </li>

                  <li>
                  <details closed="true">
                      <summary>E-commerce Application</summary>
                      <ul>
                        <li><u>Title:</u> Pokemon Shopper</li>
                        <li><u>Link:</u> <a href="https://card-shopper.onrender.com/">card-shopper.onrender.com</a></li>
                        <li><u>GitHub Link:</u> <a href="https://github.com/CharizardsBlaze/Pokemon-Shopper">github.com/CharizardsBlaze/Pokemon-Shopper</a></li>
                        <li><u>Purpose:</u> E-commerce shopping website.</li>
                        <li><u>Inspiration:</u> Pokemon, and their collectability. Also we needed a capstone project for our certificate program.</li>
                        <li><u>Built with:</u> Javascript, React, Express.JS, PostgreSQL, CSS, Jest, Bcrypt, Stripe, JSON web tokens. Deployed with Render.</li>
                        <li><u>Learned:</u> Teamwork; GitHub forking and cloning; Stripe integration; some minor Jest testing; search functionality and integaration with React state; API user verification with JSON tokens; writing READMEs.</li>
                        <li><u>Concurrent visitors:</u> At least 3 (three).</li>
                        <li><u>Video example:</u> <a href="https://www.youtube.com/watch?v=kdUUQR4Yh88" target="_blank" rel="noreferrer">Link</a>.</li>
                      </ul>
                    </details>
                  </li>
                  <li>
                  <details closed="true">
                      <summary>Newspaper Blog</summary>
                      <ul>
                        <li><u>Title:</u> Timnath Ledger</li>
                        <li><u>Link:</u> <a href="http://timnathledger.com/">timnathledger.com</a> (no deploy as of August 2023)</li>
                        <li><u>GitHub Link:</u> <a href="https://github.com/cusmoritz/timnath-ledger">github.com/cusmoritz/timnath-ledger</a></li>
                        <li><u>Purpose:</u> A hypothetical newspaper website for the town of Timnath, CO; population 6,000 and growing.</li>
                        <li><u>Inspiration:</u> I have a history of working in the local news community and wanting to see it grow and thrive. The town of Timnath is growing at a rate that would benefit greatly from a local newspaper. Just looking for a grant to get it off the ground.</li>
                        <li><u>Built with:</u> WordPress, PHP, Javascript, CSS.</li>
                        <li><u>Learned:</u> A lot about PHP and WordPress themes. There is still so much to do and learn.</li>
                        <li><u>Concurrent users:</u> None! It's not deployed.</li>
                      </ul>
                    </details>
                  </li>
                  <li>
                  <details closed="true">
                      <summary>Stealth Startup Database</summary>
                      <ul>
                        <li><u>Title:</u> VetHX</li>
                        <li><u>Link:</u> None (stealth)</li>
                        <li><u>GitHub Link:</u> None (stealth)</li>
                        <li><u>Purpose:</u> Dispersing information between local veterinary doctors.</li>
                        <li><u>Inspiration:</u> A friend of mine (a vet tech) sees a gap in information between vets.</li>
                        <li><u>Built with:</u> PostgreSQL, Javacsript, Express.JS.</li>
                        <li><u>Learned:</u> Pitch decks; PostgreSQL integrations and API calls between different services.</li>
                        <li><u>Concurrent users:</u> None! It's in stealth mode.</li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>

            <div className="status-bar">
              <span className="status-text">7 object(s)</span>
              <span className="status-size">80.04MB</span>
            </div>
          </>
        )}
      </div>
    </>
  )
}