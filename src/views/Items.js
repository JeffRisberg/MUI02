import React, {Component} from 'react';
import ItemListContainer from '../containers/Items/ItemListContainer';
import ItemFormContainer from '../containers/Items/ItemFormContainer';

class Items extends Component {

    render() {
        const id = this.props.match.params != undefined ? this.props.match.params.id : undefined;
        const content = (id != undefined) ?
            <ItemFormContainer {...this.props} /> : <ItemListContainer {...this.props} />;

        return (
            <div>
                <div style={{borderBottom: '5px solid red'}}>
                    {content}
                </div>
            </div>
        )
    }
}

export default Items;
