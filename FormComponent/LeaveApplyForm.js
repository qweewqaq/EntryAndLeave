//员工主动辞职
import React,{Component} from 'react';
import {Card,DatePicker,Button,Input,Select,Row,Col,Tag} from 'antd';
const { TextArea } = Input;
import $ from 'jquery';
export default class LeaveApplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display:'none'
        }
    }
    render(){
        return(
            <Card title="员工辞职单" style={{ width: '80%' }}>
                <Row>
                    <Col span={6}>
                        <Input placeholder="请输入您的姓名"  style={{width:160}} id="name"/>
                    </Col>
                    <Col span={3} > <Tag color="#108ee9" style={{height:25}}>部门</Tag></Col>
                    <Col span={6} style={{marginLeft:-25}}>
                        <Select style={{ width: 160 }} id="applyclass" onChange={value => this.handleChange4(value)}>
                            <Option value="病假">病假</Option>
                            <Option value="产假">产假</Option>
                            <Option value="休假">休假</Option>
                            <Option value="事假">事假</Option>

                        </Select>
                    </Col>
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>职务</Tag></Col>
                    <Col span={6} style={{marginLeft:-25}}>
                        <Select style={{ width: 160 }} id="applyclass" onChange={value => this.handleChange4(value)}>
                            <Option value="病假">病假</Option>
                            <Option value="产假">产假</Option>
                            <Option value="休假">休假</Option>
                            <Option value="事假">事假</Option>

                        </Select>
                    </Col>
                </Row>
                <div style={{height:20}}></div>
                <Row >

                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>入职时间</Tag></Col>
                    <Col span={9} >

                        <DatePicker onChange={value => this.handleChange(value)} id="date"/>
                    </Col>
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>离职时间</Tag></Col>
                    <Col span={9}>
                        <DatePicker onChange={value => this.handleChange(value)} id="date"/>
                    </Col>
                </Row>
                <div style={{height:20}}></div>
                <Row >
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>辞职原因</Tag></Col>
                    <Col span={19} >
                        <TextArea rows={8} style={{width:700,height:150}} />
                    </Col>
                </Row>
                <div style={{height:20}}></div>
                <Row style={{display:this.state.display}}>
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>部门主管意见</Tag></Col>
                    <Col span={19} >
                        <TextArea rows={8} style={{width:700,height:150}} />
                    </Col>
                </Row>
                <div style={{height:20}}></div>
                <Row style={{display:this.state.display}}>
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>项目部负责人意见</Tag></Col>
                    <Col span={19} >
                        <TextArea rows={8} style={{width:700,height:150}} />
                    </Col>
                </Row>
                <div style={{height:20}}></div>
                <Row style={{display:this.state.display}}>
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>综合部意见</Tag></Col>
                    <Col span={19} >
                        <TextArea rows={8} style={{width:700,height:150}}  />
                    </Col>
                </Row>
                <div style={{height:20}}></div>
                <Row style={{display:this.state.display}}>
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>总经理意见</Tag></Col>
                    <Col span={19} >
                        <TextArea rows={8} style={{width:700,height:150}}  />
                    </Col>
                </Row>
                <div style={{height:20}}></div>
                <Row >
                    <Col span={3}> <Tag color="#108ee9" style={{height:25}}>备注</Tag></Col>
                    <Col span={19} >
                        <Input placeholder="还有什么想说的，走都走了" />
                    </Col>
                </Row>
            </Card>
        );
    }
}