import React, { Component } from 'react';
import Footer from './Footer'
import { Link } from "react-router-dom";
import Login from '../pages/Login/Login';

import { Redirect } from 'react-router-dom'
class Header extends Component {
  render() {
    var loggedInUser = localStorage.getItem('user');
    var stt = localStorage.getItem('status');
    var plink = "/thongtin";
    if (stt == "true") plink = "/product-list";
    //console.log(stt);
    var list_menu = [
      {
        "id": 1,
        "name": "Trang Chủ",
        "sub_menu": [],
        "order": 1,
        "url": "/home"
      },
      {
        "id": 2,
        "order": 2,
        "name": "Sản Phẩm",
        "sub_menu": [
          {
            "name": "Tượng Phật Giáo",
            "url": "/listapp/1"
          },
          {
            "name": "Tượng Công Giáo",
            "url": "/listapp/2"
          },
          {
            "name": "Tượng Nghệ Thuật",
            "url": "/listapp/3"
          }
        ],
        "url": "/app"
      },
      {
        "id": 3,
        "order": 3,
        "name": "Giới Thiệu",
        "sub_menu": [],
        "url": "/about"
      },
      {
        "id": 4,
        "order": 4,
        "name": "Tin Tức",
        "sub_menu": [],
        "url": "/news"
      },
      {
        "id": 5,
        "order": 5,
        "name": "Liên Hệ",
        "sub_menu": [],
        "url": "/contact"
      }
    ];
    return (
      <div>
        <div className="site-navbar-wrap js-site-navbar bg-white">
          <div className="container">
            <div className="site-navbar bg-light">
              <div className="py-1">
                <div className="row align-items-center">
                  <div className="col-5">
                    <h2 className="mb-0 site-logo"><Link to="/home">Cơ Sở Đá mỹ nghệ Tường Thu </Link></h2>
                  </div>
                  <div className="col-10">
                    <nav className="site-navigation text-right" role="navigation">
                      <div className="container">
                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                          <a href="#" className="site-menu-toggle js-menu-toggle text-black">
                            <span className="icon-menu h3"></span>
                          </a>
                        </div>
                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                          {list_menu.map((menu, index) => {
                            if (menu.sub_menu.length == 0)
                              return (
                                <li><Link to={menu.url}>{menu.name}</Link></li>
                              )
                            else
                              return (
                                <li className="has-children">
                                  <a>{menu.name}</a>
                                  <ul className="dropdown arrow-top">
                                    {/*console.log(menu.sub_menu)*/}

                                    {menu.sub_menu.map((sub_menu1, index2) => {
                                      return (
                                        <li className="">
                                          <Link to={sub_menu1.url}>{sub_menu1.name}</Link>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </li>
                              )
                          })

                          }
                          {
                            function ABC() {
                              if (loggedInUser == null || loggedInUser == undefined)
                                return (
                                  <li><Login /></li>
                                )
                              else
                                return (

                                  <li className="has-children">
                                    <Link to={plink}><span className="bg-primary text-white py-3 px-4 rounded">{loggedInUser}</span></Link>
                                    <ul className="dropdown arrow-top">
                                      <li className="">
                                        <Link to="/logout">Đăng xuất</Link>
                                      </li>

                                    </ul>
                                  </li>

                                )
                            }
                              (() => {

                              })
                          }
                          <Link to="/thongtin"><img src="/images/giohang.png" alt="gio hang" style={{ width: '100px', height: '50px' }} /></Link>


                          {/*
                            function StatusLogin(){
                              
                              if (loggedInUser == null || loggedInUser == undefined)
                                return (
                                  <div><li>alo<Link to="/login"><span className="bg-primary text-white py-3 px-4 rounded">Đăng nhập</span></Link></li></div>
                                  
                                )
                              else
                                return (
                                  <div> ola
                                  <li className="has-children">
                                    <Link to={plink}><span className="bg-primary text-white py-3 px-4 rounded">{loggedInUser}</span></Link>
                                    <ul className="dropdown arrow-top">
                                      <li className="">
                                        <Link to="/logout">Đăng xuất</Link>
                                      </li>

                                    </ul>
                                  </li>
                                  </div>
                                )
                            } */
                          }
                          {/* <li><Link to="/login"><span className="bg-primary text-white py-3 px-4 rounded">Đăng nhập</span></Link></li> */}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ height: '113px' }} />
          <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("/images/bg_2.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12" data-aos="fade">
                  <h1>Tìm kiếm</h1>
                  <form action="#">
                    <div className="row mb-3">
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-12 mb-3 mb-md-0">
                            <input type="text" className="mr-3 form-control border-0 px-4" placeholder="tượng phật giáo, Việt Nam vô địch " />
                          </div>

                        </div>
                      </div>
                      <div className="col-md-2">
                        <input type="submit" className="btn btn-search btn-primary btn-block" defaultValue="Search" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          /* products.map((products, index) => {
             if (loggedInUser == null)
               return (
                 <div key={products.id}>
                  <div>
                     <div style={{ height: '113px' }} />
                     <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("/images/bg_2.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
                       <div className="container">
                         <div className="row align-items-center">
                           <div className="col-12" data-aos="fade">
                             <h1>Tìm kiếm</h1>
                             <form action="#">
                               <div className="row mb-3">
                                 <div className="col-md-9">
                                   <div className="row">
                                     <div className="col-md-12 mb-3 mb-md-0">
                                       <input type="text" className="mr-3 form-control border-0 px-4" placeholder="tượng phật giáo, Việt Nam vô địch " />
                                     </div>
     
                                   </div>
                                 </div>
                                 <div className="col-md-2">
                                   <input type="submit" className="btn btn-search btn-primary btn-block" defaultValue="Search" />
                                 </div>
                               </div>
                             </form>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>  
                 </div> 
               )
     
             else
               return (
                 <div key={products.id}>
                   <div>
                     <div className="site-navbar-wrap js-site-navbar bg-white">
     
                       <div className="container">
                         <div className="site-navbar bg-light">
                           <div className="py-1">
                             <div className="row align-items-center">
                               <div className="col-2">
                                 <h2 className="mb-0 site-logo"><Link to="/home">Đá mỹ nghệ Tường Thu </Link></h2>
                               </div>
                               <div className="col-10">
                                 <nav className="site-navigation text-right" role="navigation">
                                   <div className="container">
                                     <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
     
                                     <ul className="site-menu js-clone-nav d-none d-lg-block">
                                       <li><Link to="/home">Trang chủ</Link></li>
                                       <li className="has-children">
                                         <Link to="/app">Sản phẩm</Link>
                                         <ul className="dropdown arrow-top">
                                           <li className="">
                                             <Link to="/listapp/1">Tượng phật giáo</Link>
                                           </li>
                                           <li className="">
                                             <Link to="/listapp/2">Tượng công giáo</Link>
                                           </li>
                                           <li className="">
                                             <Link to="/listapp/3">Tượng nghệ thuật</Link>
                                           </li>
     
                                         </ul>
                                       </li>
                                       <li><Link to="/about">Giới thiệu</Link></li>
                                       <li><Link to="/news">Tin tức</Link></li>
                                       <li><Link to="/contact">Liên hệ</Link></li>
                                       <li className="has-children">
                                         <Link to={plink}><span className="bg-primary text-white py-3 px-4 rounded">{loggedInUser}</span></Link>
                                         <ul className="dropdown arrow-top">
                                           <li className="">
                                             <Link to="/logout">Đăng xuất</Link>
                                           </li>
     
                                         </ul>
                                       </li>
                                     </ul>
                                   </div>
                                 </nav>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div style={{ height: '113px' }} />
                     <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("/images/bg_2.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
                       <div className="container">
                         <div className="row align-items-center">
                           <div className="col-12" data-aos="fade">
                             <h1>Tìm kiếm</h1>
                             <form action="#">
                               <div className="row mb-3">
                                 <div className="col-md-9">
                                   <div className="row">
                                     <div className="col-md-12 mb-3 mb-md-0">
                                       <input type="text" className="mr-3 form-control border-0 px-4" placeholder="tượng phật giáo, Việt Nam vô địch " />
                                     </div>
     
                                   </div>
                                 </div>
                                 <div className="col-md-2">
                                   <input type="submit" className="btn btn-search btn-primary btn-block" defaultValue="Search" />
                                 </div>
                               </div>
                             </form>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               )
           })*/
        }
      </div >
    );
  }
}

export default Header;
