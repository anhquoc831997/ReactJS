import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddUserRequest } from './../../actions/index';
import { connect } from 'react-redux';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtname: '',
            txtusername: '',
            txtpassword: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtname, txtusername, txtpassword } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtname,
            username: txtusername,
            password: txtpassword,
            status: false
        };

        this.props.onAddUser(product);
        window.location.reload();

        //history.goBack();
    }

    render() {
        var { txtname, txtusername, txtpassword } = this.state;
        return (
            <span>
                {/*
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên : </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtname"
                            value={txtname}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtusername"
                            value={txtusername}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            name="txtpassword"
                            value={txtpassword}
                            onChange={this.onChange}
                        />
                    </div>    
                    <Link to="/login" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Đăng kí</button>
                </form>

            </div>
            */}
                <div className="container">
                    <a href="/signup" className="text-info" data-toggle="modal" data-target="#signupModal">
                        Sign up
                    </a>
                </div>
                <div className="modal fade" id="signupModal" data-backdrop="" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{ width: '402px', height: '502px' }}>
                            <div className="modal-header border-bottom-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-title text-center">
                                    <h4>Sign up</h4>
                                </div>
                                <div className="d-flex flex-column text-center">
                                    <form >
                                        <div className="form-group" >
                                            <input name="txtname" value={txtname} onChange={this.onChange} className="form-control" placeholder="Your name..." />
                                        </div>
                                        <div className="form-group" >
                                            <input name="txtusername" value={txtusername} onChange={this.onChange} className="form-control" placeholder="Your email address..." />
                                        </div>
                                        <div className="form-group">
                                            <input name="txtpassword" value={txtpassword} onChange={this.onChange} type="password" className="form-control" placeholder="Your password..." />
                                        </div>
                                        <button type="button" className="btn btn-info btn-block btn-round" onClick={this.onSave}>Sign up</button>
                                    </form>
                                    <div className="text-center text-muted delimiter">or use a social network</div>
                                    <div className="d-flex justify-content-center social-buttons">
                                        <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                                            <i className="fab fa-twitter" />
                                        </button>
                                        <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                                            <i className="fab fa-facebook" />
                                        </button>
                                        <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                            <i className="fab fa-linkedin" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </span>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (product) => {
            dispatch(actAddUserRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
