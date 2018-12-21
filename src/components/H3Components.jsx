import React, { Component } from 'react'

export default class H3Components extends Component {
    render() {
        return (
            <h3 className={`text--${this.props.lang}`}>{this.props.text}</h3>
        )
    }
}
