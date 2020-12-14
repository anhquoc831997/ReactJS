import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

import ShowThongTin from './../../components/ShowThongTin/ShowThongTin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class ThongTin extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        
    }

    render() {
        var { products } = this.props;
        var giohang =localStorage.getItem('giohang');
        console.log(giohang[1]);
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/thongtintaikhoan" className="btn btn-info mb-10">
                    Xem thông tin
                </Link>
                <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>img </th>
                                <th>Số Lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showProducts(products,giohang)}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }

    showProducts(products,giohang) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                if(giohang!=null){
                var pid="";
                var idx=0;
                if(product.id<10) pid="0"+product.id;
                else pid=product.id.toString();

                if(giohang.includes(pid)){
                    var count=0;
                    idx=idx+1;
                console.log(pid.length);
                for(var i=0;i<giohang.length-pid.length;i++)
                    {   var chuoi="";
                       
                        for(var j=0;j<pid.length;j++){
                            chuoi=chuoi+giohang.charAt(i+j);
                        }
                        if(chuoi==pid) count=count+1;
                        
                    }
                return (
                    <ShowThongTin key={index} index={idx} id={product.id} name={product.name} price={product.price} link={product.link} count={count} />
                         
                );
                }
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(ThongTin);
