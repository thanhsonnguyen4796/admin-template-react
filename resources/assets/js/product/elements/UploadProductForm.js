import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UploadProductForm extends Component {
    render() {
        return (
            <div className="uploadProductForm">
                <form method="get" action="/" className="form-horizontal">
                    <div className="form-group"><label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10"><input type="text" className="form-control"/></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10"><textarea type="text" placeholder="Enter your product description here" className="form-control"></textarea><small className="help-block m-b-none">Maximum lengths is 300 characters.</small></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-lg-2 control-label">Handle</label>
                        <div className="col-lg-10"><input type="text" disabled="" placeholder="handle..." className="form-control"/></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-sm-2 control-label">Price</label>
                        <div className="col-sm-10"><div className="input-group m-b"><span className="input-group-addon">$</span> <input type="text" className="form-control"/> <span className="input-group-addon">.00</span></div></div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group"><label className="col-sm-2 control-label">Select</label>
                        <div className="col-sm-10">
                            <select className="form-control m-b" name="account">
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="hr-line-dashed"></div>
                    <div className="form-group">
                        <div className="col-sm-4 col-sm-offset-2">
                            <button className="btn btn-white" type="submit">Cancel</button>
                            <button className="btn btn-primary" type="submit">Save changes</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
