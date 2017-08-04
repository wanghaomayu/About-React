/**
 * Created by wang on 2017/8/2.
 */
import React,{Component} from 'react'
import {Carousel} from 'antd'
export default class myCarousel extends Component{
  render(){
    return (
      <div className="carousel-wrap">
        <Carousel autoplay >
          <div><img src="src/images/img01.jpg" /></div>
          <div><img src="src/images/img02.jpg" /></div>
          <div><img src="src/images/img03.jpg" /></div>
          <div><img src="src/images/img04.jpg" /></div>
        </Carousel>
      </div>
    )
  }
}