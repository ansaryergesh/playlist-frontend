import React, {Component} from 'react';
import {connect} from 'react-redux';

const  Toggle = ({messageVisibility, dispatch}) => (
    <div>
        {messageVisibility &&
            <p>If toggled then you will see that message</p>
        }
        <button onClick = {() => dispatch({
            type: 'TOGGLE_MESSAGE',
        }) }>Toggle me</button>
    </div>
 
)

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle);