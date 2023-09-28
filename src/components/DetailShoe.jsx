import React, { Component } from 'react'
import { connect } from 'react-redux'

class DetailShoe extends Component {
  render() {
    let {detail}=this.props
    return (
      <div className='text-center'>
        <img width={200} src={detail.image} alt="" />
      </div>
    )
  }
}

let mapStateToProps = (state)=>{
  return {
    detail:state.detail,
  }
}

export default connect(mapStateToProps)(DetailShoe)
