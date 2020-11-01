import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header'
class Contact extends Component {

  render() {
    return (
      <div>
      	   <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Thông tin liên hệ </h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3">
              <p><span>Địa chỉ:</span> 13 Sư Vạn Hạnh</p>
            </div>
            <div className="col-md-3">
              <p><span>Điện thoại:</span> <a href="tel://1234567920">+ 8478 090 929</a></p>
            </div>
            <div className="col-md-3">
              <p><span>Email:</span> <a href="mailto:info@yoursite.com">vuongquocanh1997@gmail.com</a></p>
            </div>
            <div className="col-md-3">
              <p><span>Website</span> <a href="#">cosodieukhacmynghetuongthu</a></p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <form action="#">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Tên" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Chủ đề" />
                </div>
                <div className="form-group">
                  <textarea cols={30} rows={7} className="form-control" placeholder="Lời nhắn" defaultValue={""} />
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Gửi" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>
            <div className="col-md-6" id="map" />
          </div>
        </div>
      </section>
      </div>

    );
  }
}

export default Contact;
