import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return(
            <React.Fragment>
            <div className="contactlist">
          <form class="cmxform" id="commentForm" method="get" action="">
              <fieldset>
                <legend class="contact">Contact Us</legend>
                <p>
                  <label for="cname">First and Last Name (required)</label>
                  <input id="cname" name="name" minlength="2" type="text" required  />
                </p>
                <p >
                  <label for="cemail">E-Mail (required)</label><br/>
                  <input id="cemail" type="email" name="email" required />
                </p>
                <p>
                  <label for="curl">Contact Number</label><br/>
                  <input id="curl" type="url" name="url"/>
                </p>
                <p>
                <label for="comment">Your comment (required)</label><br/>
                  <textarea id="comment" name="comment" required></textarea>
                </p>
                <p>
                  <input class="submit" type="submit" value="Submit" />
                </p>
              </fieldset>
            </form>
            </div>
            </React.Fragment>
        )
    }
}
export default Contact;