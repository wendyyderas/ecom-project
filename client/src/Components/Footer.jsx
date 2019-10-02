import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-content">
          <p class="footer-copyright">&copy; Cake&amp;Bake Last Updated August 2019</p>
          <a href="http://www.twitter.com" class="icon" title="twitter"><i class="fab fa-twitter"></i></a>
          <a href="http://www.facebook.com" class="icon" title="fb"><i class="fab fa-facebook-f"></i></a>
          <a href="http://www.instagram.com" class="icon" title="insta"><i class="fab fa-instagram"></i></a>
        </div>
      </footer>
    )
  }
}

export default Footer;