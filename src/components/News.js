import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import Header from './Header'
class News extends Component
{
	render(){
		return(
<div>
       <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div className="blog-entry">
                <Link to="/new/0" name="123" className="block-20" style={{backgroundImage: 'url("images/hinh3.jpg")'}}>
                </Link>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div><a href="#">August 12, 2018</a></div>
                    <div><a href="#">Nguyễn Thành Phong</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" />3</a></div>
                  </div>
                  <h3 className="heading"><a href="blog-single.html">Những dấu tích lịch sử Chăm Pa tại Ngũ Hành Sơn</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry" data-aos-delay={100}>
                <a href="/new/1" className="block-20" style={{backgroundImage: 'url("images/hinh2.jpg")'}}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div><a href="#">August 12, 2018</a></div>
                    <div><a href="#">Minh Phương</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                  <h3 className="heading"><a href="#">Phong thủy khi xây nhà</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry" data-aos-delay={200}>
                <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/hinh1.jpg")'}}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div><a href="#">August 12, 2018</a></div>
                    <div><a href="#">Phan Minh Châu</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                  <h3 className="heading"><a href="#">Vài nét về hình tượng con người trong nghệ thuật điêu khắc</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry">
                <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_4.jpg")'}}>
                </a>
                <div className="text p-4 d-block">
                  <div className="meta mb-3">
                    <div><a href="#">August 12, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry" data-aos-delay={100}>
                <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_5.jpg")'}}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div><a href="#">August 12, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry" data-aos-delay={200}>
                <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_6.jpg")'}}>
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div><a href="#">August 12, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
			);
	}
}
export default News;