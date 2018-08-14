import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UploadProductForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('name'));
    }
    render() {
        return (
            <div className="uploadProductForm">
                <form onSubmit={this.handleSubmit} className="form-horizontal">
                    <div className="form-group"><label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10"><input type="text" className="form-control" name="name"/></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10"><textarea name="description" type="text" placeholder="Enter your product description here" className="form-control"></textarea><small className="help-block m-b-none">Maximum lengths is 300 characters.</small></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-lg-2 control-label">Handle</label>
                        <div className="col-lg-10"><input name="handle" type="text" disabled="" placeholder="handle..." className="form-control"/></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-sm-2 control-label">Price</label>
                        <div className="col-sm-10"><div className="input-group m-b"><span className="input-group-addon">$</span>
                        <input name="price" type="text" className="form-control"/> <span className="input-group-addon">.00</span></div></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-sm-2 control-label">Select</label>
                        <div className="col-sm-10">
                            <select className="form-control m-b" name="product-category">
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <div className="col-sm-4 col-sm-offset-2">
                            <button className="btn btn-white" type="button">Cancel</button>
                            <button className="btn btn-primary" type="submit">Save changes</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
