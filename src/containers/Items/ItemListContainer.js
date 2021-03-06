import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryItems, toggleItem } from '../../actions/items';
import { AddItemComponent, ItemListComponent } from '../../components/Items';

class ItemListContainer extends Component {

  componentDidMount() {
    console.log('Fetching Items');
    this.props.queryItems();
  }

  render() {
    if (this.props.items != undefined) {
      return (
        <div className="itemPage">
          <AddItemComponent />
          <ItemListComponent
            records={this.props.items}
            status={this.props.status}
            toggleItem={this.props.toggleItem}/>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  items: state.app.items.data,
  status: {
    isFetching: state.app.items.isFetching,
    ...state.app.appErrors,
  },
});

export default connect(
  mapStateToProps,
  { queryItems, toggleItem }
)(ItemListContainer);


