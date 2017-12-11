import React, { Component } from 'react';
import './contact.css';
import axios from 'axios';


class Contact extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      company: '',
      email: '',
      phone: '',
      messege: ''
    }
  }

  send(){
    let name = this.state.name, company = this.state.company;
    let email = this.state.email;
    let phone = this.state.phone;
    let messege = this.state.messege;

    axios.post('/send', 
      { 
      'name': name,
      'company': company,
      'email': email,
      'phone': phone,
      'message': messege
      }
    ).then(res => console.log(res))
  }

  handleChange(val, type){
    if(type==='name'){
      this.setState({name:val})
    }else if( type==='company'){
      this.setState({company:val})
    }else if( type==='email' ){
      this.setState({email:val})
    }else if( type==='phone'){
      this.setState({phone:val})
    }else if( type==='messege'){
      this.setState({messege:val})
    }
  }

  render() {

    console.log(this.state)

    return (
      
      <div className='contact_grid'>

        <form>
          <div>name: <input onChange={ (e) => this.handleChange(e.target.value, 'name') }/> </div>
          <div>company: <input onChange={ (e) => this.handleChange(e.target.value, 'company') }/> </div>
          <div>email: <input onChange={ (e) => this.handleChange(e.target.value, 'email') }/> </div>
          <div>phone: <input onChange={ (e) => this.handleChange(e.target.value, 'phone') }/> </div>
          <div>messege: <input onChange={ (e) => this.handleChange(e.target.value, 'messege') }/> </div>
        </form>

        <button onClick={ () => this.send()} type='submit'>submit</button>

      </div>
     
    );
  }
}

export default Contact;