import './headers-link.scss';

const HeadersLink = ({title, imgLink, width, height}) => {

    return (
    <div className='headers' style={{background: `${imgLink}`, width, height}}>
        <div className="header__headers">
            <ul>
                <li className='header__header_ul'>Coffee house</li>
                <li>Our coffee</li>
                <li>For you pleasure</li>
            </ul>
            <h1>{title}</h1> 

        </div>
    </div>
    )
}

export default HeadersLink;

