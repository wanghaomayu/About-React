/**
 * Created by wang on 2017/8/2.
 */
import React, { Component } from 'react'
import { Progress, Button } from 'antd'
const ButtonGroup = Button.Group

export default class myProgress extends Component {
  constructor () {
    super()
    this.state = {
      percent: 0
    }
  }

  increase = () => {
    let percent = this.state.percent + 10
    if (percent > 100) {
      percent = 100
    }
    this.setState({percent})
  }
  decline = () => {
    let percent = this.state.percent - 10
    if (percent < 0) {
      percent = 0
    }
    this.setState({percent})
  }

  render () {
    return (
      <div className="progress-wrap">
        <Progress percent={this.state.percent} />
        <Progress type="circle" percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline.bind(this)} icon="minus" />
          <Button onClick={this.increase.bind(this)} icon="plus" />
        </ButtonGroup>
        <span>点击观察进度</span>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
        <Progress type="circle" percent={30} width={80} />
        <Progress type="circle" percent={70} width={80} status="exception" />
        <Progress type="circle" percent={100} width={80} />
      </div>
    )
  }
}