import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product'
import Header from '../Header'
import News from '../News'
import Footer from '../Footer'

class ProductApp extends Component {
     constructor(props)
  {
    super(props);
    this.state={
      pid: 0,
    }
  }
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    on = () => {
        this.state.pid++;
    }
    render() {
        var products=[3];
        var { product } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <div>
                  <div>
                  {   products.map((products,index)=>{
                    if(true)
                    return(   
                                <div key={index}> 
                                    <div className="center">
                                    <div  >
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                                            <h2 className="mb-5"> {this.props.product[(this.props.index-this.props.index%8)/8].name} </h2>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={100}>
                                            
                                            <Link to ={"/details/"+(0+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[0]+'\")'}}>
                                                            
                                            </Link>


                                          </div>
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={200}>
                                            <Link to ={"/details/"+(1+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[1]+'\")'}}>

                                            </Link>
                                          </div>
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={300}>
                                            <Link to ={"/details/"+(2+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[2]+'\")'}}>
                                            </Link>
                                          </div>
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={400}>
                                            <Link to ={"/details/"+(3+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[3]+'\")'}}>
                                            </Link>
                                          </div>
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={500}>
                                            <Link to ={"/details/"+(4+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[4]+'\")'}}>
                                            </Link>
                                          </div>
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={600}>
                                            <Link to ={"/details/"+(5+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[5]+'\")'}}>
                                            </Link>
                                          </div>
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={700}>
                                            <Link to ={"/details/"+(6+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[6]+'\")'}}>
                                            </Link>
                                          </div>
                                          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={800}>
                                            <Link to ={"/details/"+(7+this.props.index)} className="block-20" style={{backgroundImage: 'url(\"'+this.props.product[(this.props.index-this.props.index%8)/8].plink[7]+'\")'}}>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                  </div>
                    )
                    })
                  }
              </div>
              </div>
        );
    }
}

export default ProductApp;
