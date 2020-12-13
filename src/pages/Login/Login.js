import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest, actFetchUserRequest } from './../../actions/index';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: '',
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onLogin = (e) => {
        var { txtUserName, txtPassword } = this.state;
        var { products } = this.props;
        for (var i = 0; i < products.length; i++)
            if (txtUserName === products[i].username && txtPassword === products[i].password) {
                localStorage.setItem('user', products[i].name);
                localStorage.setItem('username', products[i].password);

                localStorage.setItem('pass', products[i].password);
                localStorage.setItem('status', products[i].status);

            }
    }
    componentDidMount() {
        this.props.fetchAllUser();
    }

    onDelete = (id) => {
        this.props.onDeleteUser(id);
    }

    render() {
        var { txtUserName, txtPassword } = "1";

        var { products } = this.props;
        var loggedInUser = localStorage.getItem('user');

        if (loggedInUser != null) {
            return <Redirect to="/app" />
        }
        console.log(products);
        return (
            <div >{/*
                <Header />
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{ marginLeft: '500px' }}>
                        <form onSubmit={this.onLogin}>
                            <legend>Dang nhap</legend>

                            <div className="form-group">
                                <label>UserName: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="txtUserName"
                                    value={txtUserName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password: </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="txtPassword"
                                    value={txtPassword}
                                    onChange={this.onChange}
                                />
                            </div>


                            <button type="submit" className="btn btn-primary">Dang nhap</button>
                            <Link to="/signup"><button className="btn btn-primary" style={{ height: '36px', width: '106px' }}>Dang ki</button></Link>

                        </form>
                    </div>
                </div>
            <Footer />*/}
                
                    <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body mx-3">
                                    <div className="md-form mb-5">
                                        <i className="fas fa-envelope prefix grey-text" />
                                        <input type="email" id="defaultForm-email" className="form-control validate" />
                                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                                    </div>
                                    <div className="md-form mb-4">
                                        <i className="fas fa-lock prefix grey-text" />
                                        <input type="password" id="defaultForm-pass" className="form-control validate" />
                                        <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button className="btn btn-default">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href className="bg-primary text-white py-3 px-4 rounded" data-toggle="modal" data-target="#modalLoginForm">Đăng nhập</a>
                    </div>
                </div>
            

        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
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
        fetchAllUser: () => {
            dispatch(actFetchUserRequest());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
