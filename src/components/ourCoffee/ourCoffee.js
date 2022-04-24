import { Component } from 'react';
import FooterLink from '../footer__link/footer-link';
import HeadersLink from '../headers__link/headers-link';
import { Descr } from '../descr/descr';
import { Card } from '../card/card';
import { SearchPanel } from '../searchPanel/searchPanel';
import  PageOne  from '../MainPage/pageOne';
import  MaskGroupOurCoffee from './img/MaskGroup.jpg';
import maskGroup from './img/MaskGroup.png';
import descrPleasureImg from './img/descrPleasureImg.png';
import './ourCoffee.scss';

class OurCoffee extends Component {
    
        state = {
            card: [
                {name:'AROMISICO Coffee 1 kg', country: 'Brazil', price:'6.99$', key:'1' },
                {name:'AROMISICO Coffee 1 kg', country: 'Kenya', price:'6.99$', key:'2' },
                {name:'AROMISICO Coffee 1 kg', country: 'Columbia', price:'6.99$', key:'3'},
                {name:'AROMISICO Coffee 1 kg', country: 'Brazil', price:'6.99$', key:'4' },
                {name:'AROMISICO Coffee 1 kg', country: 'Brazil', price:'6.99$', key:'5' },
                {name:'AROMISICO Coffee 1 kg', country: 'Kenya', price:'6.99$', key:'6' },
            ],
            term:'',
            filter:'',
            descrText:'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
            background: `url(${MaskGroupOurCoffee})`,
            descrTextPleasure:'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.  Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.',
            aboutItText:'Country: Brasil Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Price:  16.99'

        }
    
    changeCard =(filter) => {
        this.setState({filter});
    }

    onChange = (term) => {
        this.setState({term}); 
    }
 
    render() {
        const {card, term, filter, descrText, background, descrTextPleasure} = this.state;

        return (
            <div className='ourCoffee'>
                <PageOne/>

                <HeadersLink 
                    title={'Our coffee'} 
                    imgLink={background}
                    width = {'1440px'}
                    height={'260px'}/>
                
                <Descr 
                    title={'About our beans'}
                    text ={descrText}
                    link = {maskGroup}/>
                <SearchPanel term ={term} onChange={this.onChange} changeCard={this.changeCard}/>    
                 <div className="cards">
                   <Card card={card} term = {term} filter={filter}/>
                 </div>
                <FooterLink/>

                <div className="pleasure">
                    <HeadersLink 
                        title={'For your pleasure'} 
                        imgLink={background}
                        width = {'1440px'}
                        height={'260px'}/>
                    <Descr 
                    title={'About our goods'}
                    text ={descrTextPleasure}
                    link={descrPleasureImg}/>
                    <div className="cards">
                        <Card card={card} term = {term} filter={filter}/>
                    </div>
                    <FooterLink/>
                </div>

                <div className="about">
                    <HeadersLink 
                        title={'Our coffee'} 
                        imgLink={background}
                        width = {'1440px'}
                        height={'260px'}/>
                    </div>
                    <div className="about__descr">
                        <div className="about__descr_img"></div>
                        <div className="about__descr_text">
                            <h2 className="about__descr_title">About it</h2>
                            <div className="about__descr_line"></div>
                            <div className="about__descr_country"><span>Country:</span> Brasil</div>
                            <div className="about__descr_descr"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className="about__descr_price">Price:  <span>16.99$</span></div>
                        </div>
                    </div>
                    <FooterLink/>
            </div>
        );
    }
}

export default OurCoffee;

