import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteItem, fetchItem, saveItem} from '../../actions/items';
import ItemFormComponent from '../../components/Items/ItemFormComponent';

class ItemFormContainer extends Component {
    render() {
        return (<div>
            <ItemFormComponent fetchHandler={fetchHandler}></ItemFormComponent>
        </div>)
    }
}

const mapStateToProps = state => ({
    initialValues: state.app.items.data,
    status: {
        isFetching: state.app.items.isFetching,
        ...state.app.appErrors,
    },
});

const mapDispatchToProps = dispatch => ({
    fetchHandler: (id) => {
        dispatch(fetchItem(id));
    },
    submitHandler: (values) => {
        const item = {
            ...values,
            name: values.name.trim(),
            value: values.value,
            description: values.description.trim()
        };
        dispatch(saveItem(item));
    },
    deleteHandler: (e, id) => {
        e.preventDefault();
        dispatch(deleteItem(id));
    },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
    Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ItemFormContainer);
