/**
 * Created by wang on 2017/8/2.
 */
import React, { Component } from 'react'
import { Table, Icon } from 'antd'
export default class myTable extends Component {
  constructor () {
    super()
    this.state = {
      tData: [],
      selectedRowKeys: []
    }
  }

  componentDidMount () {
    const data = []
    for (let i = 0; i < 48; i++) {
      data.push({
        key: i,
        name: `义坤${i}`,   //带变量的字符串
        age: 18,
        address: `西湖区湖底公园${i}号`,
        operate: 'https://www.aliyun.com'
      })
      this.setState({
        tData: data
      })
    }
  }

  // checkbox状态
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({selectedRowKeys})
  }

  render () {
    const columns = [{
      title: '姓名',
      width: '20%',
      dataIndex: 'name'
    }, {
      title: '年龄',
      width: '20%',
      dataIndex: 'age',
    }, {
      title: '住址',
      width: '40%',
      dataIndex: 'address'
    }, {
      title: '操作',
      width: '20%',
      dataIndex: 'operate',
      render(text) {
        return <a href={text} target="_blank">查看</a>
      }
    }]

    const {selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange.bind(this)
    }
    const hasSelected = selectedRowKeys.length > 0
    //分页
    const pagination = {
      total: this.state.tData.length,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize)
      },
      onChange(current) {
        console.log('Current: ', current)
      }
    }
    return (
      <div>
        /*左上角的提示选择位置*/
        <span style={{marginLeft: 8}}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
        /*bordered表示自动计算信息数给页脚数，比如10条/页，共18条的话，就显示两页：第一页10条，第二页8条*/
        <Table rowSelection={rowSelection} dataSource={this.state.tData} columns={columns} bordered pagination={pagination}/>
      </div>
    )
  }
}