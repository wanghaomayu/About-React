/**
 * Created by wang on 2017/8/2.
 */
import React,{Component} from 'react'

//introduce
export default class myIntroduce extends Component{
  constructor (props){
    super(props)
  }
  render(){
    return(
      <div className="ant-box">
        Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。
      </div>
    )
  }
}