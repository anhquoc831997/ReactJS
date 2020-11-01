import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'
class Logout extends Component {
  render() {
  	var loggedInUser =null;
  	console.log(loggedInUser);
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
    ];
    return (
	<div> 
	{
		 products.map((products,index)=>{
                // if(loggedInUser!=null)
                 {	
                 	window.localStorage.clear();
                 	//loggedInUser=null;
                 	return(<div key={products.id}><Redirect to=""/></div>)
                 }
              })

	}
  	</div>
    );
  }
}

export default Logout;
