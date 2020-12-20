import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

import ShowThongTin from './../../components/ShowThongTin/ShowThongTin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FormText } from 'react-bootstrap';
class ThongTin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tongtien: 0,
    };
}
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onClick = () => {

  }
  onDelete = (id) => {

  }

  render() {
    var { products } = this.props;
    var giohang = localStorage.getItem('giohang');
    var tongtien = 0;
    localStorage.setItem('tongtien', 0);
    //console.log(giohang[1]);
    return (
      <div>
        {/*
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
                                    {this.showProducts(products, giohang)}
                                </tbody>
                            </table>
                        </div>
                    </div>
</div>*/}
        <div>
          <Header />
          <h2 className="text-center">Trang giỏ hàng</h2>
          <div className="container">
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th style={{ width: '50%' }}>Tên sản phẩm</th>
                  <th style={{ width: '10%' }}>Giá</th>
                  <th style={{ width: '8%' }}>Số lượng</th>
                  <th style={{ width: '22%' }} className="text-center">Thành tiền</th>
                  <th style={{ width: '10%' }}> </th>
                </tr>
              </thead>
              <tbody>
                {this.showProducts(products, giohang)}
                {/*
                <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/shopping_cart/images/090.jpg" alt="Sản phẩm 1" className="img-responsive" width={100} />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">Sản phẩm 1</h4>
                      <p>Mô tả của sản phẩm 1</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">200.000 đ</td>
                <td data-th="Quantity"><input className="form-control text-center" defaultValue={1} type="number" />
                </td>
                <td data-th="Subtotal" className="text-center">200.000 đ</td>
                <td className="actions" data-th>
                  <button className="btn btn-info btn-sm"><i className="fa fa-edit" />
                  </button>
                  <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o" />
                  </button>
                </td>
              </tr>
                <tr>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-sm-2 hidden-xs"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/shopping_cart/images/174.jpg" alt="Sản phẩm 1" className="img-responsive" width={100} />
                      </div>
                      <div className="col-sm-10">
                        <h4 className="nomargin">Sản phẩm 2</h4>
                        <p>Mô tả của sản phẩm 2</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">300.000 đ</td>
                  <td data-th="Quantity"><input className="form-control text-center" defaultValue={1} type="number" />
                  </td>
                  <td data-th="Subtotal" className="text-center">300.000 đ</td>
                  <td className="actions" data-th>
                    <button className="btn btn-info btn-sm"><i className="fa fa-edit" />
                    </button>
                    <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o" />
                    </button>
                  </td>
                </tr>
                */}

              </tbody><tfoot>
                <tr>
                  <td><Link to="/home" className="btn btn-warning"><i className="fa fa-angle-left" /> Tiếp tục mua hàng</Link>
                  </td>
                  <td colSpan={2} className="hidden-xs"> </td>
                  <td className="hidden-xs text-center"><strong>Tổng tiền {localStorage.getItem('giatien')} đ</strong>
                  </td>
                  
                  <td><a className="btn btn-success btn-block" onClick = {this.onClick}>Thanh toán <i className="fa fa-angle-right" /></a>
                  </td>
                </tr>
                
              </tfoot>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  showProducts(products, giohang) {
    var result = null;
    var tongTien = 0;
    if (products.length > 0) {
      result = products.map((product, index) => {
        if (giohang != null) {
          var pid = "";
          var idx = 0;
          if (product.id < 10) pid = "0" + product.id;
          else pid = product.id.toString();

          if (giohang.includes(pid)) {
            var count = 0;
            idx = idx + 1;
            console.log(pid.length);
            for (var i = 0; i < giohang.length - pid.length; i++) {
              var chuoi = "";

              for (var j = 0; j < pid.length; j++) {
                chuoi = chuoi + giohang.charAt(i + j);
              }
              if (chuoi == pid) count = count + 1;

            }

            console.log(tongTien);
            return (
              <ShowThongTin key={index} index={idx} id={product.id} name={product.name} price={product.price} link={product.link} count={count} />

            );
          }
        }
      });
      tongTien = Number.parseInt(localStorage.getItem('tongtien'), 10) + Number.parseInt(localStorage.getItem('giatien'), 10);
      localStorage.setItem('tongtien', tongTien);
      localStorage.setItem('giatien', 0);
      //this.setState({tongtien : tongTien});

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
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTin);
