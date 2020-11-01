import React, { Component } from 'react';
import Header from './Header'
import News from './News'
import Footer from './Footer'
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      pid: 1,
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

    return (
      <div>
      <Header/>
      <section className="ftco-section ftco-work">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>

       
  
      <Footer/>
      </div>
    );
  }
}

export default App;
