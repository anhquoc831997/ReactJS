import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
	<div> 
  <section className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center">
                  <h2>Để lại gmail để chúng tôi liên hệ hoặc gọi trưc tiếp đến số +84782090929</h2>
                  <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-8">
                      <form action="#" className="subscribe-form">
                        <div className="form-group d-flex">
                          <input type="text" className="form-control" placeholder="Enter email address" />
                          <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
 		      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Cơ sở điêu khắc đá mỹ nghệ Tường Thu.</h2>
                <p>Địa chỉ:</p>
              </div>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft ">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Về chúng tôi</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="py-2 d-block">Trang chủ</a></li>
                  <li><a href="#" className="py-2 d-block">Giới thiệu</a></li>
                  <li><a href="#" className="py-2 d-block">Sản phẩm</a></li>
                  <li><a href="#" className="py-2 d-block">Tin tức</a></li>
                  <li><a href="#" className="py-2 d-block">Liên hệ</a></li>
                </ul>
              </div>
            </div>
         
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Liên hệ</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker" /><span className="text">13 Sư vạn hạnh</span></li>
                    <li><a href="#"><span className="icon icon-phone" /><span className="text">+84782090929</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope" /><span className="text">vuongquocanh1997@gmail.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Bản quyền thuộc về cosodieukhacmynghetuongthu.com<i className="icon-heart" aria-hidden="true" /> <a href="https://colorlib.com" target="_blank"></a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default Footer;
