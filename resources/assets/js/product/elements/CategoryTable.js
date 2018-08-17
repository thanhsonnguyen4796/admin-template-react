import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';

export default class CategoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = { categories : [] };
        this.renderCategories = this.renderCategories.bind(this);
    }
    componentDidMount() {
        jQuery(ReactDOM.findDOMNode(this.refs.sampletable)).footable();
        fetch('/api/productcategory/list')
        .then(response => {
            return response.json();
        })
        .then(
            (data) => {
                this.setState({
                    categories: data.categories
                });
            }
        );
    }
    renderCategories() {
        let rows = [];
        for(let category of this.state.categories) {
            rows.push(
                <Category key={category.id} data={category}/>
            )
        }
        return rows;
    }
    componentDidUpdate(prevProps, prevState) {
        jQuery(ReactDOM.findDOMNode(this.refs.sampletable)).footable();
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox">
                        <div className="ibox-content">
                            <table ref="sampletable" className="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                                <thead>
                                <tr>
                                    <th data-toggle="true">Category Name</th>
                                    <th data-hide="all">Description</th>
                                    <th data-hide="phone,tablet" >Products Quantity</th>
                                    <th className="text-right" data-sort-ignore="true">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.renderCategories()}
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
