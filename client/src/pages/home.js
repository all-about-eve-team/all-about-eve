import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';

import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'

class Home extends Component {


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            
            <div>
                <Parallax
                    blur={0}
                    bgImage={image1}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    {/* <div className="caption">
                        <div className="border">AllAboutEve</div>
                    </div> */}

                    <div style={{ height: '400px' }} />
                </Parallax>

                <div className="text">
                    <h3>All About Eve</h3>
                    <p>Designed to empower women to take charge of their own health, All About Eve offers comprehensive information covering all aspects of healthy living. The blog features a great mix of relevant posts for women at all stages of life — pregnancy and breast feeding, period and birth control, menopause and healthy aging, and more. Readers also have access to online articles, member networks, and education about women health.
                    </p>
                </div>
                <Parallax
                    blur={0}
                    bgImage={image2}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    {/* <div className="caption">
                        <div className="border">Period</div>
                    </div> */}

                    <div style={{ height: '400px' }} />
                </Parallax>

                <div className="text">
                    <h3>Period cycle: What's normal, what's not</h3>
                    <p>Your menstrual cycle can say a lot about your health. Understand how to start tracking your menstrual cycle and what to do about irregularities.
                    </p>
                </div>

                <Parallax
                    blur={0}
                    bgImage={image3}
                    bgImageAlt="the cat"
                    strength={200}
                >
                     <div style={{ height: '400px' }} />
                
                    <div className="text">
                        <h3>Birth control</h3>
                        <p>Choosing a method of birth control can be difficult. Know the options and how to pick the type of contraception that's right for you.
                </p>
                    </div>
                    
                </Parallax>

                <Parallax
                    blur={0}
                    bgImage={image4}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    <div className="text">
                        <h3>Pregnancy</h3>
                        <p>Knowing what to expect during the full pregnancy term is important for monitoring both your health and the health of the baby.On average, a full-term pregnancy lasts 40 weeks. There are many factors that can affect a pregnancy. Women who receive an early pregnancy diagnosis and prenatal care are more likely to experience a healthy pregnancy and give birth to a healthy baby.
                </p>
                    </div>
                    <div style={{ height: '400px' }} />
                </Parallax>
                <Parallax
                    blur={0}
                    bgImage={image5}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    <div className="text">
                    <h3>Breast-feeding</h3>
                    <p>The benefits of breast-feeding are well established. Consider ways to support breast-feeding — and how to handle feelings of guilt if you can't or decide not to breast-feed.</p>
                    </div>
                    <div style={{ height: '400px' }} />
                </Parallax>
                <h3>Menopause</h3>
                <p>Menopause is a natural biological process. But the physical symptoms, such as hot flashes, and emotional symptoms of menopause may disrupt your sleep, lower your energy or affect emotional health. There are many effective treatments available, from lifestyle adjustments to hormone therapy.</p>
                <Parallax
                    blur={0}
                    bgImage={image6}
                    bgImageAlt="the cat"
                    strength={200}
                >
                    <div className="text">
                    <h3>Your Community</h3>
                    <p>Community health are environmental, social, and economic resources to sustain emotional and physical well being among Women in ways that advance their aspirations and satisfy their needs in their unique environment.</p>
                    </div>
            <div style={{ height: '400px' }} />
                </Parallax>
                <h3>Health Articles</h3>
                <p>Learn about the latest health issues and medical breakthroughs, with expert news and features on everything from medical treatments to mental health.</p>
                <Parallax
                    blur={0}
                    bgImage={image6}
                    bgImageAlt="the cat"
                    strength={200}
                >

                    <div style={{ height: '400px' }} />
                </Parallax>

            </div>
        )

    }
}

export default Home
