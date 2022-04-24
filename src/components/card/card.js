import './card.scss';

const Card =({card, term, filter}) => {
    

   function filterPost (card, filter)  {
        switch(filter) {
             case 'Brazil':
                 return card.filter(item => item.country === 'Brazil');
             case 'Kenya':
                 return card.filter(item => item.country === 'Kenya');
             case 'Columbia':
                 return card.filter(item => item.country === 'Columbia');
             case 'none':
                 return card;
             default:
                 return card;
         }    
     }

    function searchEmp (card, term) {
        if (term.length === 0) {
            return card
        } 
        return card.filter(item => {
            return item.country.indexOf(term) > -1
        })
        

    }

    const createCard = filterPost(searchEmp(card, term), filter).map(({name, country, price, key}) => {
        return (
            <div className={'card'} key={key}>
                <div className="img"></div>
                <div className='card__name'>{name}</div>
                <div className='card__country'>{country}</div>
                <div className='card__price'>{price}</div>
            </div>
        )

    }) 
    return createCard;
    
};

export {Card};