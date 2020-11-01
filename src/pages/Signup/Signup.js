import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddUserRequest} from './../../actions/index';
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
        var { id, txtname, txtusername,txtpassword } = this.state;
        var { history } = this.props;
        var product = {
            id : id,
            name : txtname,
            username : txtusername,
            password : txtpassword,
            status : false
        };

        this.props.onAddUser(product);
        history.goBack();
    }

    render() {
        var { txtname, txtusername,txtpassword} = this.state;
        return (
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
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser : (product) => {
            dispatch(actAddUserRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
