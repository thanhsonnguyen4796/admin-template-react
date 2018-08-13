import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ibox from '../components/Ibox';
import Breadcrumb from '../components/Breadcrumb';
import UploadProductForm from './elements/UploadProductForm';

const uploadProductForm = <UploadProductForm />;

ReactDOM.render(
    <div>
        <Breadcrumb
            pageTitle = {'Upload Product'}
            childPages={[
                {url:'/', name:'Homepage'},
                {url:'/product', name:'Product'},
                {url:'/product/upload', name:'Upload Product'},
            ]}
        />
        <Ibox
            title={'Upload product'}
            child={uploadProductForm}
        />
    </div>,
    document.getElementById('upload-product-wrap')
);
