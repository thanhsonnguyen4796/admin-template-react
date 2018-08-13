import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Ibox extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12" >
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>{this.props.title}</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content">
                                {this.props.child}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
