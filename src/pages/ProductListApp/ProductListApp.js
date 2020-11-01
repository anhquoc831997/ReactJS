import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import ProductApp from './../../components/ProductApp/ProductApp';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class ProductListApp extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var { products } = this.props;
        return (
            <div>

                <div>
                <div>
              <section className="ftco-section ftco-work">
                <div className="container-fluid">
                  <div className="row justify-content-center mb-5 pb-5">
                    <div className="col-md-7 text-center heading-section ftco-animate">
                    </div>
                  </div>
                  <div>
                  <div>
                    {this.showProducts(products)}
                  </div>

                    </div>
                    </div>

              </section>

               
          
              </div>
            </div>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        var sanpham=[
        {
            
            id: null,
            name: "",
            plink: [],
            index: null,
            
        },
        {
            
            id: null,
            name: "",
            plink: [],
             index: null,

            
        },
        {
            
            id: null,
            name: "",
            plink: [],
            index: [],

            
        },
        ];
        if (products.length > 0) {
            result = products.map((product, index) => {
            if(index<8)
                {
                    sanpham[0].id=1;
                    sanpham[0].name="Tuong phat giao";
                    sanpham[0].plink.push(product.link);

                }
            else if(index<16)
                {
                    sanpham[1].id=2;
                    sanpham[1].name="Tuong cong giao";
                    sanpham[1].plink.push(product.link);
                }
                else {
                    sanpham[2].id=3;
                    sanpham[2].name="Tuong nghe thuat";
                    sanpham[2].plink.push(product.link);
                }
            if(index%8==0)
                return (

                             <ProductApp
                                    key={index}
                                    product={sanpham}
                                    index={index}
                                    onDelete={this.onDelete}
                            />

                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListApp);
