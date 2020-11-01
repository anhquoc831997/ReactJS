import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import {Redirect} from 'react-router-dom'

class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			txtUserName: '',
			txtPassword: '',
		};
	}
	onChange = (e) => {
		var target=e.target;
		var name= target.name;
		var value= target.type === 'checkbox'? target.checked :target.value;
		this.setState({
			[name] :value
		});
	}
	onLogin = (e) => {
		var {txtUserName,txtPassword}=this.state;
		if(txtUserName=="admin"&&txtPassword=="admin"){
			localStorage.setItem('user',JSON.stringify({
				userName: txtUserName,
				password: txtPassword
			}))
		}
	}
  render() {
  	var {txtUserName,txtPassword}=this.state;
  	var loggedInUser =localStorage.getItem('user');
  	if(loggedInUser!=null){
  		return <Redirect to="/app"/>
  	}
  	console.log(txtUserName);	
    return (
      <div >
      <Header/>
    	<div className="row">
    		<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{marginLeft: '500px'}}>
    			<form onSubmit={this.onLogin}>
    				<legend>Dang nhap</legend>
    			
    				<div className="form-group">
    					<label>UserName: </label>
    					<input 
    						type="text" 
    						className="form-control" 
    						name="txtUserName"
    						value={txtUserName}
    						onChange={this.onChange}
    						/>
    				</div>
     				<div className="form-group">
    					<label>Password: </label>
    					<input 
    					type="password" 
    					className="form-control" 
    					name="txtPassword"
    					value={txtPassword}
    					onChange={this.onChange}
    					/>
    				</div>   			
    				
    			
    				<button type="submit" className="btn btn-primary">Dang nhap</button>
    			</form>
    		</div>
    	</div>
      <Footer/>
     </div>

    );
  }
}

export default Login;
