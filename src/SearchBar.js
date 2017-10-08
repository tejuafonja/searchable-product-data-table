import React, { Component } from 'react';

class SearchBar extends Component {
  handleFilterTextChange = (e) => {
      this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange = (e) => {
      this.props.onInStockChange(e.target.checked)
    }
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input type="text" 
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
          />
        <p>
          <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={this.handleInStockChange}
          />
          {' '}
          only show products in stock
        </p>
      </form>
    )
  }
}

export default SearchBar