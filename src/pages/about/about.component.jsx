import React from 'react';
import './about.styles.scss';

import rina from '../../assets/rina.jpg';

import ArticleToolBar from '../../components/article_toolbar/article_toolbar.component';
import ArticleImage from '../../components/article_image/article_image.component';
import aboutImage from '../../assets/about.jpeg';

const AboutPage = () => {
  const heading = 'about us';
  const image = {aboutImage}
    return(
      <article>
      <ArticleToolBar heading={heading}/>
      <ArticleImage image={image}/>
   <div className='articleWrapper'>
      <div className='articleContent'>
          <header className='articleHeader'>

            <h1 className='articleTitle heading'>{heading}</h1>
          </header>
          <div className='articleBody'>
           <p>Eká finds charm in the familiar - pastoral pleasures,
           a lilting breeze or the warmth of a lifelong friend.
           This spirit takes shape in soulful clothing that lives on through individual expression.
           We make our own textiles, favouring the mechanics and raw beauty of natural fibers.</p>
           <p>They become our canvas upon which every layer deliberately embraces the irregular
           and gives craft an abstract interpretation.</p>
           <p>Eká, in Sanskrit, means ‘one’ and echoes the sin- gular effort of many individuals.</p>
           <p>Building a commercial brand with a unique aesthetic that bridges the east and west sensi- bilities
           has been the guiding design outline and as such, garments are versatile: fluid in shape,
           evolved in textiles and texture, and seen as essential to timeless wardrobes. Worn as separates or layered,
           each involves craftsmanship along with extensive development with traditional textile techniques.</p>
           <h3 className='heading'>Product & Process:</h3>
           <p>We hope you wear our garments often and well.</p>
           <p>Functional and timeless, Eká is made in India and draws from indigenous skills whereby natural
           materials are developed from India’s regional craft belts.</p>
           <p>The resulting relationships form the base of our reliable supply chain across various parts of the country.
           Our cotton, linen, wool and special techniques of jamdani and tangail are from India’s eastern state of West Bengal.
           Gujarat offers us the techniques of block making, printing and indigo dyeing and we travel higher up to Amritsar for
           specialized jacquard looms. Our handwoven wool is produced in the Northern state of Himachal Pradesh while regional
           cottons are woven further south in Andhra Pradesh.</p>
           <p>A majority of our textiles are handloom and we develop the rest on small scale automated
           jacquard looms - this affords scale to techniques traditionally made by hand.</p>
           <h3 className='heading'>Team:</h3>
           <p>Our team is comprised of hundreds of weavers, spinners and dyers from craft clusters across India. Our Delhi studio
           is a vertically integrated unit made possible through the dedication of our pattern masters, block printers,
           quality control super- visors, merchandisers and factory managers. Many of our team members have been with us for years
           and are the backbone of our success. We are equally invested in theirs, addressing education, medical coverage
           and interest-free loans.</p>
           <p>Eká is reflective of designer Rina Singh’s personal ethos of simple living, connected to her upbringing in a family of
           agriculturalists. Visiting a mango orchard or sitting with weavers still rings poetic. Her sound understanding of textile
           design has developed through international exposure and extensive travel across rural India; over this time, her love of people,
           nature and craft has grown. These connections are central to her vision and shared by her husband Sandeep Dua,
           Eká’s Managing Director.</p>
           <p>Rina was awarded Chairman’s Scholarship from Wigan & Leigh College to study fashion in the UK in 1998.She received Elle India
           Graduates Award in 2015 and was Runners up at the Vogue India Fashion Fund 2016. She was also the finalist from India for the
           Prestigious Woolmark International 2016.</p>
           <br></br>
           <p className='profile'>
            <img src={rina} alt='Rina Singh' className='rina-profile'/>
            <span className='rina_text'>Rina Singh</span>
           </p>
          </div>
      </div>
   </div>
      </article>
    );
};


export default AboutPage;
