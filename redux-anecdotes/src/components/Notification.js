import React from 'react'
import { connect } from 'react-redux';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const message = props.notification.message
  return (
    <div style={style}>
        {message}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    notification: state.notification,
  }
}

export default connect(mapStateToProps)(Notification);
