import React from 'react';
import { NavItem } from 'reactstrap';

const SearchForm = () => {
  return (
    <NavItem>
      <form className="form-inline my-2 my-lg-0 mr-lg-2">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    </NavItem>
  )
}

export default SearchForm;