import React, {Component} from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ReactDOM from 'react-dom';
import UploadCategoryForm from './elements/UploadCategoryForm';
import CategoryTable from './elements/CategoryTable';

export default class ManageCategoryPage extends Component {
    render() {
        return (
            <div>
                <Breadcrumb
                    pageTitle = {'Category Management'}
                    childPages={[
                        {url:'/', name:'Homepage'},
                        {url:'/product', name:'Product'},
                        {url:'/product/category', name:'Category Management'},
                    ]}
                />

                <div className="wrapper wrapper-content animated fadeInRight ecommerce">
                    <UploadCategoryForm/>
                    <CategoryTable/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<ManageCategoryPage />, document.getElementById('product-category-wrap'));
