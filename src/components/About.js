import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';


class About extends Component {

  render() {
    return (
      <div>

      <section className="ftco-section">
          <div className="container">
            <div className="row d-md-flex">
              <div className="col-md-6  img about-image" style={{backgroundImage: 'url(images/trang_anh1.jpg)'}}>
              </div>
              <div className="col-md-6  p-md-5">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap mb-5">
                    <div className="nav  nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a className="nav-link active" id="v-pills-whatwedo-tab" data-toggle="pill" href="#v-pills-whatwedo" role="tab" aria-controls="v-pills-whatwedo" aria-selected="true">Lịch sử và phát triển</a>
                      <a className="nav-link" id="v-pills-goal-tab" data-toggle="pill" href="#v-pills-goal" role="tab" aria-controls="v-pills-goal" aria-selected="false">Công trình tiêu biểu</a>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-center">
                    <div className="tab-content " id="v-pills-tabContent">
                      <div className="tab-pane fade show active" id="v-pills-whatwedo" role="tabpanel" aria-labelledby="v-pills-whatwedo-tab">
                        <div>
                          <h2 className="mb-4">Đôi nét về cơ sở đá mỹ nghệ Tường Thu</h2>
                          <p>Cơ sở được thành lập và phát triển cùng làng nghề điêu khắc truyền thống lâu đời tại làng đá mỹ nghệ Non Nước thuộc khu danh lam Ngũ Hành Sơn nay thuộc quận Ngũ Hành Sơn thành phố Đà Nẵng.</p>
                          <p>Cơ sở với những nghệ nhân tâm huyết cùng tay nghề cao và người chủ ưu tú phát triển thành một trong 5 cơ sở sản xuất và kinh doanh tượng đá hàng đầu tại Đà Nẵng.</p>
                          <p>Các sản phẩm tại đây được khách hàng tin dùng bởi được điêu khắc 100% trên chất liệu đá tự nhiên nguyên khối.</p>
                          <p>Mỗi tác phẩm đều đảm bảo tính thẩm mỹ cao và cái hồn trong mỗi bức tượng.</p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="v-pills-goal" role="tabpanel" aria-labelledby="v-pills-goal-tab">
                        <div>
                          <h2 className="mb-4">Các công trình tiêu biểu</h2>
                          <p> <strong>1.Tượng trang trí nghệ thuật khu đô thị </strong> 5 bức tượng trang trí nghệ thuật tại dự án này đều được tạc theo phong cách nghệ thuật đương đại, tả các đôi tình nhân về chủ đề tình yêu, hạnh phúc trên chất liệu đá cẩm thạch trắng tự nhiên nguyên khối.</p>
                          <p> <strong> 2.Tượng đá cá chép hóa rồng </strong> tượng cá chép hóa rồng phun nước ở cầu Tình là công trình kiến trúc mang " nét Singapore " đậm chất dân tộ, thu hút khá nhiều bạn trẻ đến tham quan .</p>
                          <p> <strong> 3.Đá mỹ nghệ hành hương về miền đất phật </strong> với 4 bức tượng được đưa về chùa Bái Đính(Ninh Bình), và bức tượng Phật linh thiêng trên đất Cố đô Huế </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section ">
                <h2 className="mb-2">Nhóm thực hiện </h2>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-md-8">
                <div className="carousel-testimony  ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                      <div className="user-img mb-5" style={{backgroundImage: 'url(images/trang_anh2.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text text-center">
                        <p className="mb-5"> <i> Trần Viết Anh Quốc </i>  với thâm niên kinh nghiệm nhiều năm cùng bàn tay vàng thì ông đã cho ra đời nhiều kiệt tác như Chứng tích (Sài Gòn), một tác phẩm nổi loạn, mang từ chiến trường Quảng Trị đến Đất lành (Đá), Cầu Rồng (thép), Đà Nẵng - 2013</p>
                        <p className="name">Chức vụ </p>
                        <span className="position">Nhóm trưởng</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                      <div className="user-img mb-5" style={{backgroundImage: 'url(images/trang_anh3.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text text-center">
                        <p className="mb-5"><i> Nguyễn Thị Thùy Nhung </i>  với thâm niên kinh nghiệm nhiều năm cùng bàn tay vàng thì ông đã cho ra đời nhiều kiệt tác như Chứng tích (Sài Gòn, 1970), một tác phẩm nổi loạn, mang từ chiến trường Quảng Trị đến Đất lành (Đá), Cầu Rồng (thép), Đà Nẵng - 2013</p>
                        <p className="name">Chức vụ </p>
                        <span className="position">Thành viên</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                      <div className="user-img mb-5" style={{backgroundImage: 'url(images/trang_anh4.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text text-center">
                        <p className="mb-5"><i> Phan Thị Quỳnh Trang</i>  với thâm niên kinh nghiệm nhiều năm cùng bàn tay vàng thì ông đã cho ra đời nhiều kiệt tác như Chứng tích (Sài Gòn, 1970), một tác phẩm nổi loạn, mang từ chiến trường Quảng Trị đến Đất lành (Đá), Cầu Rồng (thép), Đà Nẵng - 2013</p>
                        <p className="name">Chức vụ </p>
                        <span className="position"> Thành viên</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>

    );
  }
}

export default About;
