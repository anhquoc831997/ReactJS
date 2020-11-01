import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

import { Link } from "react-router-dom";

class ListApp extends Component {
   constructor(props)
  {
    super(props);
    this.state={
      pid: 0,
    }
  }
  add(id)
  { console.log(this.props.match.params.id);
    if(id===1){
     return "Tượng phật giáo";
    }
    
    if(id===2){
    return "Tượng công giáo";
    }
    
    else {
      return "Tượng nghệ thuật";
    }
  }
  
  render() {
    var products= [
    {
        id : 1,
        name : "tuongphatgiao",
        plink :["/images/tuongphatadida.jpg",
        "/images/tuongphatamthe.jpg",
        "/images/tuongphatchuande.jpg",
        "/images/tuongphatphucloctho.jpg",
        "/images/tuongphatquanam.jpg",
        "/images/tuongphatquanamtutai.jpg",
        "/images/tuongphatdiatang.jpg",
        "/images/tuongphatthubotat.jpg"
        ]


    },
    {
        id : 2,
        name : "tuongconggiao",
        plink :["/images/tuongducme01.jpg",
                "/images/tuongducme02.jpg",
                "/images/tuongducme03.jpg",
                "/images/tuongducme04.jpg",
                "/images/tuongthanh01.jpg",
                "/images/tuongthanh02.jpg",
                 "/images/tuongthienthan01.jpg",
                 "/images/tuongthienthan02.jpg"

        ]

    },
        {
        id : 3,
        name : "tuongnghethuat",
        plink :["/images/tuongnghethuat01.jpg",
                "/images/tuongnghethuat02.jpg",
                "/images/tuongnghethuat03.jpg",
                "/images/tuongnghethuat04.jpg",
                "/images/tuongnghethuat05.jpg",
                "/images/tuongnghethuat06.jpg",
                "/images/tuongnghethuat07.jpg",
                "/images/tuongnghethuat08.jpg",
          ]

    },
    ];


    console.log(this.props.match.params.id);
    return (

          <div>
        <Header/>
              <div>
                  {   products.map((products,index)=>{
                    if(this.props.match.params.id==products.id)
                    return( 
							    <div>
							        <div className="center">
							        <div  >
							          <div className="container">
							            <div className="row">
							              <div className="col-md-6 mx-auto text-center mb-5 section-heading">
							                <h2 className="mb-5"> {this.add(products.id)} </h2>
							              </div>
							            </div>
							            <div className="row">
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={100}>
							                
							                <Link to ={"/details/"+(0+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[0]+'\")'}}>
							                                
							                </Link>


							              </div>
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={200}>
							                <Link to ={"/details/"+(1+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[1]+'\")'}}>

							                </Link>
							              </div>
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={300}>
							                <Link to ={"/details/"+(2+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[2]+'\")'}}>
							                </Link>
							              </div>
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={400}>
							                <Link to ={"/details/"+(3+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[3]+'\")'}}>
							                </Link>
							              </div>
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={500}>
							                <Link to ={"/details/"+(4+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[4]+'\")'}}>
							                </Link>
							              </div>
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={600}>
							                <Link to ={"/details/"+(5+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[5]+'\")'}}>
							                </Link>
							              </div>
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={700}>
							                <Link to ={"/details/"+(6+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[6]+'\")'}}>
							                </Link>
							              </div>
							              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay={800}>
							                <Link to ={"/details/"+(7+(products.id-1)*8)} className="block-20" style={{backgroundImage: 'url(\"'+products.plink[7]+'\")'}}>
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
         <Footer/>
         </div>
    
    
    );
  }
}

export default ListApp;
