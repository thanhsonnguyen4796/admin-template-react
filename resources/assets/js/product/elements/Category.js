import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Category extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.data.name}
                </td>
                <td>
                    {this.props.data.description}
                </td>
                <td>
                    1000
                </td>
                <td className="text-right">
                    <div className="btn-group">
                        <button className="btn-white btn btn-xs">View</button>
                        <button className="btn-white btn btn-xs">Edit</button>
                    </div>
                </td>
            </tr>
        )
    }
}
