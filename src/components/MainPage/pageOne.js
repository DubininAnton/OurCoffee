
import FooterLink from '../footer__link/footer-link';
import ourBest01 from'./img/ourBest01.jpg'
import ourBest02 from'./img/ourBest01.jpg'
import ourBest03 from'./img/ourBest01.jpg'
import './pageOne.scss';

const PageOne = () => {
    return (
        <div className="main"> 
            <div className="main__top">

                <div className="main__ul">
                    <ul className='main__list'>
                        <li className='main__ul_one'>Coffee house</li>
                        <li>Our coffee</li>
                        <li>For you pleasure</li>
                    </ul>
                    <h1>Everything You Love About Coffee</h1>
                    <div className="main__logo"></div>
                    <div className="main__h2">We makes every day full of energy and taste <br />Want to try our beans?</div>
                    <button>More</button>
                </div> 
            </div>
            <div className="main__descr">
                <h2 className="main__descr_title">About Us</h2>
                <div className="main__descr_line"></div>
                <div className="main__descr_descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face. <br /><br />

                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </div>
            <div className="ourBest">
                <h3 className="ourBest__title">Our best</h3>
                <div className="ourBest__card">
                    <img src={ourBest01} alt="ourBest01" />
                    <img src={ourBest02} alt="ourBest01" />
                    <img src={ourBest03} alt="ourBest01" />
                </div>
            </div>
        <FooterLink/>
        </div>
    )
}

export default PageOne;