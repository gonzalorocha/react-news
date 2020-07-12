import React from 'react';
import Proptypes from 'prop-types';
import styles from './Form.module.css';
import useSelect from './../hooks/useSelect'
import {CATEGORIES} from './../categories';

const Form = ({saveCategory}) => {

    const [category, SelectNews ] = useSelect('general', CATEGORIES);

    const searchNews = (e) => {
        e.preventDefault();
        saveCategory(category);
    }

    return (
        <div className={`row ${styles.search}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Search news by categories</h2>
                    <SelectNews/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large light-blue darken-3 ${styles['btn-block']}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    )

}

Form.propTypes = {
    saveCategory: Proptypes.func.isRequired
}

export default Form;