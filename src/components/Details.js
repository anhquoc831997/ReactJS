import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

import { Link } from "react-router-dom";

class Details extends Component {
    onAdd = (id,gia,name) => {
       if(localStorage.getItem('giohang')==null)
        localStorage.setItem('giohang',id);
        else
            {  var pid="";
                if(id<10) pid="0"+id;
                else pid=id;
                var lc=localStorage.getItem('giohang');
                localStorage.setItem('giohang',pid+" "+lc);
            }
        alert("Thêm vào giỏ hàng thành công");
    }
  render() {
    var products= [
    {
        id : 0,
        gia : 1000,
        name : "Tượng Phật Quan Âm bằng đá không chỉ mang lại sự sang trọng cho biệt thư, tư gia mà còn có ý nghĩa về mặt phong thủy. Bên cạnh đó, các phật tử còn tin rằng thờ Phật Bà Quan Âmm sẽ được che chở khỏi mọi khó khăn, gặp nhiều vận may, gia đình hạnh phúc.",
        plink :"/images/tuongphatadida.jpg",
    },
    {
        id : 1,
        gia : 2000,
        name : "Trong tín ngưỡng phật giáo (tượng phật quan âm) bồ tát là hiện thân của đấng từ bi. Thông qua hình (tượng quan âm bồ tát) đạo phật muốn nói lên tình thương chân thành tha thiết nhất trong con người . Tay phải Ngài bắt ấn tâm tịnh từ bi,tay trái Ngài cầm bình nước cam lồ rưới nước từ bi cứu nạn chúng sanh, nước này rưới tới đâu là chan rải tình thương tới đó làm mát mẻ, êm dịu xóa tan đi mọi khổ đau của chúng sanh.",
        plink :"/images/tuongphatamthe.jpg",
    },
    {
        id : 2,
        name : "Trong thế giới tâm linh thì đạo Phật chi phối phần lớn tư tưởng tôn giáo các quốc gia Á Đông như : Việt Nam, Ấn Độ, Trung Quốc… Phật pháp vô biên tức là đạo pháp của Phật Giáo có công năng mạnh mẽ trên tất cả mọi thứ. (Tượng quan âm) bồ tát là biểu tượng của Phật giáo, thường được Thỉnh để thờ cúng trong chùa, chiền và nhà ở tại gia của phật tử. Những người phụ nữ gặp khó khăn về đường con cái thường hay cầu nguyện bồ tát để được nguyện như ý.",
        plink : "/images/tuongphatchuande.jpg",
        gia : 500,

    },
    {
        id : 3,
        name : "Tượng Phật Quan Âm bằng đá không chỉ mang lại sự sang trọng cho biệt thư, tư gia mà còn có ý nghĩa về mặt phong thủy. Bên cạnh đó, các phật tử còn tin rằng thờ Phật Bà Quan Âmm sẽ được che chở khỏi mọi khó khăn, gặp nhiều vận may, gia đình hạnh phúc.",
        plink :  "/images/tuongphatphucloctho.jpg",
        gia : 6000,
    },
    {
        id : 4,
        name : "Trong tín ngưỡng phật giáo (tượng phật quan âm) bồ tát là hiện thân của đấng từ bi. Thông qua hình (tượng quan âm bồ tát) đạo phật muốn nói lên tình thương chân thành tha thiết nhất trong con người . Tay phải Ngài bắt ấn tâm tịnh từ bi,tay trái Ngài cầm bình nước cam lồ rưới nước từ bi cứu nạn chúng sanh, nước này rưới tới đâu là chan rải tình thương tới đó làm mát mẻ, êm dịu xóa tan đi mọi khổ đau của chúng sanh.",
        plink :     "/images/tuongphatquanam.jpg",
        gia : 100,
    },
    {
        id : 5,
        name : "Trong thế giới tâm linh thì đạo Phật chi phối phần lớn tư tưởng tôn giáo các quốc gia Á Đông như : Việt Nam, Ấn Độ, Trung Quốc… Phật pháp vô biên tức là đạo pháp của Phật Giáo có công năng mạnh mẽ trên tất cả mọi thứ. (Tượng quan âm) bồ tát là biểu tượng của Phật giáo, thường được Thỉnh để thờ cúng trong chùa, chiền và nhà ở tại gia của phật tử. Những người phụ nữ gặp khó khăn về đường con cái thường hay cầu nguyện bồ tát để được nguyện như ý.",
        plink :       "/images/tuongphatquanamtutai.jpg",
        gia : 700,
    },
    {
        id : 6,
        name : "Tượng Phật Quan Âm bằng đá không chỉ mang lại sự sang trọng cho biệt thư, tư gia mà còn có ý nghĩa về mặt phong thủy. Bên cạnh đó, các phật tử còn tin rằng thờ Phật Bà Quan Âmm sẽ được che chở khỏi mọi khó khăn, gặp nhiều vận may, gia đình hạnh phúc.",
        plink :        "/images/tuongphatdiatang.jpg",
        gia : 100000,
    },
    {
        id : 7,
        name : "Trong tín ngưỡng phật giáo (tượng phật quan âm) bồ tát là hiện thân của đấng từ bi. Thông qua hình (tượng quan âm bồ tát) đạo phật muốn nói lên tình thương chân thành tha thiết nhất trong con người . Tay phải Ngài bắt ấn tâm tịnh từ bi,tay trái Ngài cầm bình nước cam lồ rưới nước từ bi cứu nạn chúng sanh, nước này rưới tới đâu là chan rải tình thương tới đó làm mát mẻ, êm dịu xóa tan đi mọi khổ đau của chúng sanh.",
        plink :       "/images/tuongphatthubotat.jpg",
        gia : 2000,
    },    
                
    {
        id : 8,
        name : "Trong một số giáo pháp Kitô giáo, thánh là những người nam hay nữ bằng nhiều cách thức khác nhau tuyên xưng niềm trung thành của họ với Thiên Chúa, sống chứng nhân cho Chúa và sau khi chết có những dấu chỉ đặc biệt được giáo hội công nhận là đó là những phép lạ.",
        plink : "/images/tuongducme01.jpg",
        gia : 500,

    },
    {
        id : 9,
        name : "Nói về dòng sản phẩm đài phun nước phong thủy này thì ngoài thị trường hiện nay có rất nhiều loại đài phun nước được làm từ rất nhiều loại khác nhau: thác nước mi ni để bàn được làm bằng composit, gốm sứ, thủy tinh. Cho đến các loại đài phun nước mang tính chất trang trí khuôn viên nhà hàng, khách sạn, vòng xoay giao thông và tại các công trình công cộng,…",
        plink :  "/images/tuongducme02.jpg",
        gia : 5000,

    },
    {
        id : 10,
        name : "Hình ảnh những cô bé cậu bé được hóa thân thành các thiên thần nhỏ có cánh. Những đứa con chính là món quà vô giá mà cuộc sống ban cho mỗi cặp vợ chồng. Vẫn còn những gia đình không có may mắn được thiên nhiên ban tặng món quà đó, chính vì vậy họ trang trí những bức tượng thiên thần đẹp như một sự an ủi đem lại niềm vui và hạnh phúc.",
        plink :  "/images/tuongducme03.jpg",
        gia : 600,

    },
    {
        id : 11,
        name : "Trong một số giáo pháp Kitô giáo, thánh là những người nam hay nữ bằng nhiều cách thức khác nhau tuyên xưng niềm trung thành của họ với Thiên Chúa, sống chứng nhân cho Chúa và sau khi chết có những dấu chỉ đặc biệt được giáo hội công nhận là đó là những phép lạ.",
        plink : "/images/tuongducme04.jpg",
        gia : 700,

    },
    {
        id : 12,
        name : "Hình ảnh những cô bé cậu bé được hóa thân thành các thiên thần nhỏ có cánh. Những đứa con chính là món quà vô giá mà cuộc sống ban cho mỗi cặp vợ chồng. Vẫn còn những gia đình không có may mắn được thiên nhiên ban tặng món quà đó, chính vì vậy họ trang trí những bức tượng thiên thần đẹp như một sự an ủi đem lại niềm vui và hạnh phúc.",
        plink :  "/images/tuongthanh01.jpg",
        gia : 8000,

    },
    {
        id : 13,
        name : "Nói về dòng sản phẩm đài phun nước phong thủy này thì ngoài thị trường hiện nay có rất nhiều loại đài phun nước được làm từ rất nhiều loại khác nhau: thác nước mi ni để bàn được làm bằng composit, gốm sứ, thủy tinh. Cho đến các loại đài phun nước mang tính chất trang trí khuôn viên nhà hàng, khách sạn, vòng xoay giao thông và tại các công trình công cộng,…",
        plink :  "/images/tuongthanh02.jpg",
        gia : 90000,

    },
    {
        id : 14,
        name : "Trong một số giáo pháp Kitô giáo, thánh là những người nam hay nữ bằng nhiều cách thức khác nhau tuyên xưng niềm trung thành của họ với Thiên Chúa, sống chứng nhân cho Chúa và sau khi chết có những dấu chỉ đặc biệt được giáo hội công nhận là đó là những phép lạ.",
        plink :   "/images/tuongthienthan01.jpg",
        gia : 1000000,

    },
    {
        id : 15,
        name : "Hình ảnh những cô bé cậu bé được hóa thân thành các thiên thần nhỏ có cánh. Những đứa con chính là món quà vô giá mà cuộc sống ban cho mỗi cặp vợ chồng. Vẫn còn những gia đình không có may mắn được thiên nhiên ban tặng món quà đó, chính vì vậy họ trang trí những bức tượng thiên thần đẹp như một sự an ủi đem lại niềm vui và hạnh phúc.",
        plink :  "/images/tuongthienthan02.jpg",
        gia : 20,

    },
    {
        id : 16,
        name : "Tượng em bé bằng đá là một trong các sản phẩm mang đầy tính nghệ thuật của làng nghề điêu khắc đá ngũ hành sơn. Nếu có dịp ghé thăm xưởng sản xuất, quý khách sẽ không khỏi ngạc nhiên bởi nhiều tác phẩm tinh xảo như: tượng chú tiểu, tượng em bé đứng tiểu….qua bàn tay đầy chất nghệ thuật của các nghệ nhân tại Công ty Cổ phần Đá mỹ nghệ Đà Nẵng. Tại đây, chúng tôi có rất nhiều mẫu mã, kích thước phù hợp với mọi không gian trưng bày, làm đẹp:",
        plink :  "/images/tuongnghethuat01.jpg",
        gia : 200,

    },
    {
        id : 17,
        name : "Những tác phẩm nghệ thuật đỉnh cao lấy cảm hứng từ các cô gái được các nghệ nhân của Công ty Cổ phần Đá mỹ nghệ Đà Nẵng chế tác với nhiều mẫu mã khác nhau, trên nền đá tự nhiên. Những tác phẩm về tượng cô gái rất có hồn, phù hợp với mọi không gian trang trí mà vẫn giữ được sự sang trọng và mang tính thẩm mỹ cao nhất",
        plink :  "/images/tuongnghethuat02.jpg",
        gia : 2000,

    },
    {
        id : 18,
        name : "Những tác phẩm nghệ thuật đỉnh cao lấy cảm hứng từ các cô gái được các nghệ nhân của Công ty Cổ phần Đá mỹ nghệ Đà Nẵng chế tác với nhiều mẫu mã khác nhau, trên nền đá tự nhiên. Những tác phẩm về tượng cô gái rất có hồn, phù hợp với mọi không gian trang trí mà vẫn giữ được sự sang trọng và mang tính thẩm mỹ cao nhất",
        plink :  "/images/tuongnghethuat03.jpg",
        gia : 5000,

    },
    {
        id : 19,
        name : "Tượng em bé bằng đá là một trong các sản phẩm mang đầy tính nghệ thuật của làng nghề điêu khắc đá ngũ hành sơn. Nếu có dịp ghé thăm xưởng sản xuất, quý khách sẽ không khỏi ngạc nhiên bởi nhiều tác phẩm tinh xảo như: tượng chú tiểu, tượng em bé đứng tiểu….qua bàn tay đầy chất nghệ thuật của các nghệ nhân tại Công ty Cổ phần Đá mỹ nghệ Đà Nẵng. Tại đây, chúng tôi có rất nhiều mẫu mã, kích thước phù hợp với mọi không gian trưng bày, làm đẹp:",
        plink :  "/images/tuongnghethuat04.jpg",
        gia : 600,

    },
        {
        id : 20,
        name : "Những tác phẩm nghệ thuật đỉnh cao lấy cảm hứng từ các cô gái được các nghệ nhân của Công ty Cổ phần Đá mỹ nghệ Đà Nẵng chế tác với nhiều mẫu mã khác nhau, trên nền đá tự nhiên. Những tác phẩm về tượng cô gái rất có hồn, phù hợp với mọi không gian trang trí mà vẫn giữ được sự sang trọng và mang tính thẩm mỹ cao nhất",
        plink :  "/images/tuongnghethuat05.jpg",
        gia : 200,

    },
    {
        id : 21,
        name : "Những tác phẩm nghệ thuật đỉnh cao lấy cảm hứng từ các cô gái được các nghệ nhân của Công ty Cổ phần Đá mỹ nghệ Đà Nẵng chế tác với nhiều mẫu mã khác nhau, trên nền đá tự nhiên. Những tác phẩm về tượng cô gái rất có hồn, phù hợp với mọi không gian trang trí mà vẫn giữ được sự sang trọng và mang tính thẩm mỹ cao nhất",
        plink :  "/images/tuongnghethuat06.jpg",
        gia : 3000,

    },
    {
        id : 22,
        name : "Tượng em bé bằng đá là một trong các sản phẩm mang đầy tính nghệ thuật của làng nghề điêu khắc đá ngũ hành sơn. Nếu có dịp ghé thăm xưởng sản xuất, quý khách sẽ không khỏi ngạc nhiên bởi nhiều tác phẩm tinh xảo như: tượng chú tiểu, tượng em bé đứng tiểu….qua bàn tay đầy chất nghệ thuật của các nghệ nhân tại Công ty Cổ phần Đá mỹ nghệ Đà Nẵng. Tại đây, chúng tôi có rất nhiều mẫu mã, kích thước phù hợp với mọi không gian trưng bày, làm đẹp:",
        plink :  "/images/tuongnghethuat07.jpg",
        gia : 1000,

    },
    {
        id : 23,
        name : "Những tác phẩm nghệ thuật đỉnh cao lấy cảm hứng từ các cô gái được các nghệ nhân của Công ty Cổ phần Đá mỹ nghệ Đà Nẵng chế tác với nhiều mẫu mã khác nhau, trên nền đá tự nhiên. Những tác phẩm về tượng cô gái rất có hồn, phù hợp với mọi không gian trang trí mà vẫn giữ được sự sang trọng và mang tính thẩm mỹ cao nhất",
        plink :  "/images/tuongnghethuat08.jpg",
        gia : 1,

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
                        <div key={products.id} >
                               <section className="ftco-section">
                                <div className="container">
                                  <div className="row d-md-flex" style={{height: '800px'}}>
                                    <div className="col-md-6  img about-image" style={{backgroundImage: 'url(\"'+products.plink+'\")'}}>
                                    </div>
                                    <div className="col-md-6  p-md-5">
                                      <div className="row">
                                        <div className="col-md-12 nav-link-wrap mb-5">
                                         
                                        <h1> Giá:<b>{products.gia}$ </b></h1>
                                        </div>
                                        <div className="col-md-12 d-flex align-items-center">
                                          <div className="tab-content " id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-whatwedo" role="tabpanel" aria-labelledby="v-pills-whatwedo-tab">
                                              <div>
                                                <p>{products.name}</p>
                                              </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary" style={{height: '36px', width: '206px'}} onClick={()=>this.onAdd(products.id+1,products.gia,products.name)}>Thêm vào giỏ hàng</button>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </section>
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

export default Details;
