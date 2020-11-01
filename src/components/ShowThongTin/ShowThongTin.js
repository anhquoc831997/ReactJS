import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowThongTin extends Component {



    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>

                 <td><img src={this.props.link} style={{width: '200px', height: '200px'}}/></td>
        
                <td>{this.props.count }</td>
            </tr>
        );
    }
}

export default ShowThongTin;
