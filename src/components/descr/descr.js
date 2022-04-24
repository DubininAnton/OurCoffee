import './descr.scss';

const Descr =({title, text, link}) => {
    return (
        <div className="descr">
            <div className="row">
                <div className="col-md-5 offset-md-1 img" style={{background: `url(${link})`}}></div>
                <div className="col-md-5 offset-md-1 column02">
                    <h2 className="title">{title}</h2>
                    <div className='descr__line'></div>
                    <p>{text}</p>
                </div>
            </div>
            <div className="descr__bottonLine"></div>
        </div>
    )
}
export {Descr};