import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Breadcrumb extends Component {
    constructor(props) {
        super(props);
    }
    createBreadcrumb() {
        let childPages = this.props.childPages;
        let breadcrumb = [];
        if (childPages) {
            for(let i = 0; i < childPages.length; i++) {
                breadcrumb.push(
                        <li key={childPages[i].name} className={i == childPages.length ? 'active' : ''}>
                        <a href={childPages[i].url}>{childPages[i].name}</a>
                    </li>
                )
            }
        }
        return breadcrumb;
    }
    render() {
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>{this.props.pageTitle}</h2>
                    <ol className="breadcrumb">
                        {this.createBreadcrumb()}
                    </ol>
                </div>
                <div className="col-lg-2"></div>
            </div>
        )
    }
}
