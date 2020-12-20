import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowThongTin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giatien : this.props.price,
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        console.log(value);

        this.setState({
            giatien: value*this.props.price,
        });
        console.log(value);
        localStorage.setItem('giatien', value*this.props.price);

    }

    render() {
        return (
            // <tr>
            //     <td>{this.props.id}</td>
            //     <td>{this.props.name}</td>
            //     <td>{this.props.price}</td>

            //      <td><img src={this.props.link} style={{width: '200px', height: '200px'}}/></td>
        
            //     <td>{this.props.count }</td>
            // </tr>
            <tr>
            <td data-th="Product">
              <div className="row">
                <div className="col-sm-2 hidden-xs"><img src={this.props.link} alt="Sản phẩm 1" className="img-responsive" width={100} />
                </div>
                <div className="col-sm-10">
                  <h4 className="nomargin">{this.props.name}</h4>
                </div>
              </div>
            </td>
            <td data-th="Price">{this.props.price} $</td>
            <td data-th="Quantity"><input className="form-control text-center" defaultValue={1} type="number" onChange = {this.onChange} />
            </td>
            <td data-th="Subtotal" className="text-center">{this.state.giatien} $</td>
          </tr>
        );
    }
}

export default ShowThongTin;
