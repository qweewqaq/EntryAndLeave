import React,{Component} from 'react';
import { DatePicker } from 'antd';

export default class Leave extends Component {
    render(){
        return(
            <div style={{ margin: 100 }}>
                <h1>AntDesign Demo</h1>
                <hr /><br />
                <DatePicker />
            </div>
        );
    }
}