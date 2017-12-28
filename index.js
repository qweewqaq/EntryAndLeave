import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory,Route } from 'react-router';
import Leave from './Leave/leave';

export  class Routes extends Component{

    render(){
        console.log('Routes')
        return(
            <Router history={hashHistory}>
                <Route path="/leave" component={Leave}/>


            </Router>
        );
    }
}
ReactDOM.render(<Routes/>, document.getElementById('root'));