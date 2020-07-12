import React, { Fragment, useEffect, useState } from 'react';
import Form from './components/Form'
import Header from './components/Header'
import ListNews from './components/ListNews';

const App = () => {
    const [category, saveCategory] = useState('');
    const [news, saveNews] = useState([]);

    useEffect(() => {
        const URL = `http://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=a4e6c41052754ecd901762dff39b595e`
        const consultAPI = async () => {
            const res = await fetch(URL);
            const news = await res.json();
            saveNews(news.articles);
        }

        consultAPI();

    },[category]);

    return (
        <Fragment>
            <Header 
                title="Searching news"
            />
            <div className="container white">
                <Form
                    saveCategory={saveCategory}
                />
                <ListNews 
                    news={news}
                />
            </div>
        </Fragment>
    );
}

export default App;
