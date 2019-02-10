import React, {Component} from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Card from 'material-ui/Card';

import { withStyles } from 'material-ui/styles';

const styles = {
    root: {
        textAlign: 'center',
        paddingTop: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 500,
    },
    card: {
        paddingTop: 40,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
};

class AppRoot extends Component {

    render() {
        return (
            <div className={props.classes.root}>
                <Card className={props.classes.card}>
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                </Card>
            </div>
        )
    }

    /*
    render() {
        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top" style={{marginBottom: '0px'}}>
                    <div className="container">
                        <div className="navbar-inner">
                            <NavLink to="/" className="navbar-brand">RE03</NavLink>

                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/items">Items</NavLink></li>
                                    <li><NavLink to="/events">Events</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/items/" component={Items}/>
                    <Route exact path="/items/detail/:id" component={Items}/>
                    <Route exact path="/events" component={Events}/>
                    <Route exact path="/events/detail/:id?" component={Events}/>
                </div>
            </div>
        );
    }
    */
}

export default withStyles(styles)(AppRoot);
