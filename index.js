import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory,Route } from 'react-router';
import Leave from './Leave/leave';
import Entry from './Entry/entry';

export  class Routes extends Component{

    render(){
        console.log('Routes')
        return(
            <Router history={hashHistory}>
                <Route path="/leave" component={Leave}/>
                <Route path="/entry" component={Entry}/>

            </Router>
        );
    }
}
ReactDOM.render(<Routes/>, document.getElementById('root'));