import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UploadCategoryForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/api/productcategory/upload', {
          method: 'POST',
          headers: {
              'X-CSRF-TOKEN': csrf_token
          },
          body: data
        })
        .then(response => {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
    }
    render() {
        return (
            <div className="uploadCategoryForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="ibox-content m-b-sm border-bottom">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="name">Category Name</label>
                                    <input type="text" id="category_name" name="name" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="control-label" htmlFor="description">Category Description</label>
                                <input id="category_description" name="description" className="category-description form-control"></input>
                                <small className="help-block m-b-none">Maximum lengths is 300 characters.</small>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-sm btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        )
    }
}
