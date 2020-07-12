import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const ListNews = ({news}) => {
    return ( 
        <div className="row">
            {news.map((n) => (
                <News 
                    key={n.url} 
                    news={n} 
                />
            ))}
        </div>
     );
}

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;