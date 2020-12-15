import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';

class ProductActionPage extends Component {

    /*       constructor(props) {
               super(props);
               this.state = {
                   id: '',
                   txtName: '',
                   txtPrice: '',
                   txtLink: '',
                   txtMota: '',
                   chkbStatus: '',
                   image: null
               };
               this.onImageChange = this.onImageChange.bind(this);
   
           }
        /*
       constructor(props) {
           super(props);
           this.state = {
               image: null
           };
   
           this.onImageChange = this.onImageChange.bind(this);
       }*/
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                txtLink: itemEditing.link,
                txtMota: itemEditing.mota,
                chkbStatus: itemEditing.status
            });
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
        var { id, txtName, txtPrice, chkbStatus, txtLink, txtMota } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            link: this.state.image,
            mota: txtMota,
            status: chkbStatus
        };
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }

    render() {
        var { txtName, txtPrice, chkbStatus, txtLink, txtMota } = this.state;
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên Sản Phẩm: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                value={txtName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá: </label>
                            <input
                                type="number"
                                className="form-control"
                                name="txtPrice"
                                value={txtPrice}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Link: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtLink"
                                value={txtLink}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Mô tả: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtMota"
                                value={txtMota}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                        </div>
                        <div>
                            <div>
                                <img src={this.state.image} style={{width: '600px', height: '600px'}} /><div>{console.log(this.state.image)}</div>
                                <label>Select Image</label>
                                <input type="file" name="myImage"  onChange={this.onImageChange} />
                            </div>
                        </div>
                        <label>Trạng Thái: </label>
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="chkbStatus"
                                    value={chkbStatus}
                                    onChange={this.onChange}
                                    checked={chkbStatus}
                                />
                            Còn Hàng
                        </label>
                        </div>
                        <Link to="/product-list" className="btn btn-danger mr-10">
                            Trở Lại
                    </Link>
                        <button type="submit" className="btn btn-primary">Lưu Lại</button>
                    </form>

                </div>
                <div>

                </div>
            </div>
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
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
