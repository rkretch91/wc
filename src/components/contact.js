import React from 'react'

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Contact extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      emailError: '',
      email: ''
    };
  }

  changeEmail = (evt) => {
    this.setState({
        email: evt.target.value
      });
  }

    render() {
    return (
      <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you" className='contact-form'>
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" name="name" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="email" placeholder="Email" value={this.state.email} onChange={this.changeEmail} name="email" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="select">
              <select name="type" >
                <option>I am a...</option>
                <option>Landlord/Developer</option>
                <option>Brand Partner</option>
                <option>Visitor</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Message" defaultValue={""} name="message" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input type="checkbox" />
            <label className="checkbox"><p><span> </span>Put me on the mailing list for occasional WeCare WC News</p></label>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" id="grey">Submit</button>
          </div>
        </div>
      </form>
      )
    }
  }

export default Contact
