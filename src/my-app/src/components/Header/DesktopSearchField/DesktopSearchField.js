import React from 'react'
import './DesktopSearchField.css'
export default function DesktopSearchField() {
    return (
        <div className="search-form-container">
            <div className="container-wrap">
                <form className="form-search" action="" method="GET">
                    <input className="form-search__input search-field--js" type="text"
                        placeholder="Search for documentation, guides, and posts..." value="" />
                        <button className="form-search__submit search-button button" type="submit">
                            <i className="fas fa-search search-button__icon"></i>                        
                    </button>
                </form>
            </div>
        </div>
    )
}
