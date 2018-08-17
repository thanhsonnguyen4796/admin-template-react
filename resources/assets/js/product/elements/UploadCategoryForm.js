import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UploadCategoryForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('name'));
    }
    render() {
        return (
            <div className="uploadCategoryForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="ibox-content m-b-sm border-bottom">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="category_name">Category Name</label>
                                    <input type="text" id="category_name" name="category_name" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="control-label" htmlFor="category_description">Category Name</label>
                                <textarea id="category_description" name="category_description" className="category-description form-control" placeholder="Category Description"></textarea>
                                <small className="help-block m-b-none">Maximum lengths is 300 characters.</small>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
