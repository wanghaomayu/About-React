/**
 * Created by wang on 2017/8/2.
 */
import React, { Component } from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd'

const FormItem = Form.Item
const {Option, OptGroup} = Select
const RadioGroup = Radio.Group

class myForm extends Component {

  constructor () {
    super()
    this.state = {
      visible: false
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
    this.props.form.resetFields()
  }

  handleSelectChange (value) {
    console.log(`selected ${value}`)
  }

  // 显示弹框
  showModal () {
    this.setState({visible: true})
  }

  hideModel () {
    this.setState({visible: false})
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {span: 3},
      wrapperCol: {span: 6}
    }
    const success = () => {
      message.success('操作成功！')
    }
    return (
      <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
        <FormItem
          label="输入框"
          id="control-input"
          {...formItemLayout}
          required
        >
          <Input id="control-input" placeholder="Please enter..."
                 {...getFieldDecorator('userName')} />
        </FormItem>

        <FormItem
          label="日期选择框"
          labelCol={{span: 3}}
          required
        >
          <Col span="2">
            <FormItem>
              <DatePicker {...getFieldDecorator('startDate')} />
            </FormItem>
          </Col>
          <Col span="1">
            <p className="ant-form-split">-</p>
          </Col>
          <Col span="2">
            <FormItem>
              <DatePicker {...getFieldDecorator('endDate')} />
            </FormItem>
          </Col>
        </FormItem>

        <FormItem
          id="control-textarea"
          label="文本域"
          {...formItemLayout}
        >
          <Input
            type="textarea"
            id="control-textarea"
            rows="3"
            {...getFieldDecorator('content')}
          />
        </FormItem>

        <FormItem
          id="select"
          {...formItemLayout}
          label='Selet 选择器'
        >
          <Select
            id="select"
            defaultValue="lucy"
            style={{width: 200}}
            onChange={this.handleSelectChange.bind(this)}
          >
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select>
        </FormItem>

        <FormItem
          label='Checkbox 多选器'
          {...formItemLayout}
        >
          <Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem1')}>选项一</Checkbox>
          <Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem2')}>选项二</Checkbox>
          <Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem3')}>选项三</Checkbox>
        </FormItem>

        <FormItem
          label='Radio 单选器'
          {...formItemLayout}>
          <RadioGroup defaultValue={2} {...getFieldDecorator('radioItem')}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem wrapperCol={{span: 6, offset: 3}} style={{marginTop: 24}}>
          <Button type="primary" htmlType="submit" onClick={success}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.showModal.bind(this)}>弹出modal框</Button>
        </FormItem>
        <FormItem>
          <Modal
            title="问题提示："
            visible={this.state.visible}
            onOk={this.hideModel.bind(this)}
            onCancel={this.hideModel.bind(this)}
          >
            您确定删除这条信息么？
          </Modal>
        </FormItem>
      </Form>
    )
  }
}

myForm = Form.create({})(myForm)
export default myForm