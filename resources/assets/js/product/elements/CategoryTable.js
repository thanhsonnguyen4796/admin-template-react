import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CategoryTable extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('name'));
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox">
                        <div className="ibox-content">
                            <table className="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                                <thead>
                                <tr>
                                    <th data-toggle="true">Category Name</th>
                                    <th data-hide="all">Description</th>
                                    <th data-hide="phone,tablet" >Products Quantity</th>
                                    <th className="text-right" data-sort-ignore="true">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                           Example product 1
                                        </td>
                                        <td>
                                            It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                                            that it has a more-or-less normal distribution of letters, as opposed to using
                                            'Content here, content here', making it look like readable English.
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
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="6">
                                        <ul className="pagination pull-right"></ul>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
