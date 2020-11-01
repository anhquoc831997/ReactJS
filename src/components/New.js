import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

import { Link } from "react-router-dom";

class New extends Component {
  
  render() {
    var products= [
    {
        id : 0,
        name1: "1. Những vị thần tại động Tàng Chơn",
        name2: "Động Tàng Chơn có hang thờ thần của người Chăm, nơi đây còn lưu trữ nhiều hiện vật bằng đá có liên quan đến đời sống tôn giáo tín ngưỡng của họ.",
        name3: "Theo thần thoại nguyên thủy, hình thức khởi đầu của thần Silva là hình Linga. Hình tượng thần Silva được tôn thờ với nhiều hình thức khác nhau: dưới dạng nhận hóa (hình người) và dưới dạng biểu tượng Linga. Người Chăm pa quan niệm thờ Linga (bộ phận sinh dục tượng trưng cho sức mạnh của phái nam, biểu tượng của khả năng tái tạo) tượng trưng cho thần Silva (nam tính) hiện thân qua nữ thần Uroja, còn được gọi là thần núi, biểu hiện đặc tính dương. Hình tượng Yoni (cơ quan sinh sản của phái nữ, biểu tượng của khả năng dưỡng dục) tượng trưng cho nữ thần Bhagavati (nữ tính) hiện thân qua nữ thần Visitrasaga là thần biển, biểu tượng đặc tính âm.",
		plink :"/images/hinh3_1.jpg",
    },
    {
        id : 1,
		name1: "1. Những vị thần tại động Tàng Chơn",
        name2: "Động Tàng Chơn có hang thờ thần của người Chăm, nơi đây còn lưu trữ nhiều hiện vật bằng đá có liên quan đến đời sống tôn giáo tín ngưỡng của họ.",
        name3: "Theo thần thoại nguyên thủy, hình thức khởi đầu của thần Silva là hình Linga. Hình tượng thần Silva được tôn thờ với nhiều hình thức khác nhau: dưới dạng nhận hóa (hình người) và dưới dạng biểu tượng Linga. Người Chăm pa quan niệm thờ Linga (bộ phận sinh dục tượng trưng cho sức mạnh của phái nam, biểu tượng của khả năng tái tạo) tượng trưng cho thần Silva (nam tính) hiện thân qua nữ thần Uroja, còn được gọi là thần núi, biểu hiện đặc tính dương. Hình tượng Yoni (cơ quan sinh sản của phái nữ, biểu tượng của khả năng dưỡng dục) tượng trưng cho nữ thần Bhagavati (nữ tính) hiện thân qua nữ thần Visitrasaga là thần biển, biểu tượng đặc tính âm.",
		        plink :"/images/hinh3_2.jpg",
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
                        <div key={products.id}>
                              <div>
									<section className="ftco-section ftco-degree-bg">
								        <div className="container">
								          <div className="row">
								            <div className="col-md-8 ">
								              <h2 className="mb-3">{products.name1}</h2>
								              <p>{products.name2}
								              </p>
								              <p style={{textAlign: 'center'}}> 
								                <img src={products.plink}  className="img-fluid"  />
								                <i style={{fontSize: '15px'}} /></p><h6 style={{textAlign: 'center'}}><i style={{fontSize: '15px'}}><strong>“Bệ đá điêu khắc của người Chăm Pa cổ ở chùa Linh Ứng – Ngũ Hành Sơn” </strong></i></h6>
								              <p>{products.name3}</p>
								              <p style={{textAlign: 'right'}}> Bài viết: <strong style={{color: 'blue'}}>Những dấu tích lịch sử Chăm Pa cổ Ngũ Hành Sơn</strong></p>
								              <p style={{textAlign: 'right'}}><i style={{fontSize: '15px'}}>Nguồn: Trang thông tin điện tử quận Ngũ Hành Sơn</i></p>
								              {/* END-list */}
								              <div className="sidebar-box ">
								                <h3 style={{color: '#FF0000'}}>Có thể bạn quan tâm</h3>
								                <div className="block-21 mb-4 d-flex">
								                  <a className="blog-img mr-4" style={{backgroundImage: 'url(/images/Hinh1.jpg)'}} />
								                  <div className="text">
								                    <h3 className="heading"><a href="#"><strong>Vài nét về hình tượng con người trong nghệ thuật điêu khắc</strong></a></h3>
								                    <div className="meta">
								                      <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
								                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
								                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
								                    </div>
								                  </div>
								                </div>
								                <div className="block-21 mb-4 d-flex">
								                  <a className="blog-img mr-4" style={{backgroundImage: 'url(/images/hinh2.jpg)'}} />
								                  <div className="text">
								                    <h3 className="heading"><a href="#"><strong>Phong thủy khi xây nhà</strong></a></h3>
								                    <div className="meta">
								                      <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
								                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
								                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
								                    </div>
								                  </div>
								                </div>
								                <div className="block-21 mb-4 d-flex">
								                  <a className="blog-img mr-4" style={{backgroundImage: 'url(/images/hinh4.jpg)'}} />
								                  <div className="text">
								                    <h3 className="heading"><a href="#"><strong>Sông Cổ Lò-Dải lụa bầu bạn của Ngũ Hành Sơn</strong></a></h3>
								                    <div className="meta">
								                      <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
								                      <div><a href="#"><span className="icon-person" /> Admin</a></div>
								                      <div><a href="#"><span className="icon-chat" /> 19</a></div>
								                    </div>
								                  </div>
								                </div>
								              </div>
								            </div>
								          </div>
								        </div></section>
								       	 <Footer/>
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

export default New;
