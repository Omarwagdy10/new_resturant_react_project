import '../../style/Sections/Section7/Section7.css'
import Btn from '../button/button'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
function Section7 (){
    return (
      <div className="Section7">
        <div className="container1">
          <div className="Contact_US">
            <h4 className="">Contact US</h4>
            <div className="Contact_icon_container">
              <div className="contact_icon">
                <MapPin />
                <p>Location</p>
              </div>

              <div className="contact_icon">
                <Phone />
                <p>call +01200000000</p>
              </div>

              <div className="contact_icon">
                <Mail />
                <p>demo@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="Feane">
            <h4>Feane</h4>
            <p>
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>

            <div className="Feane_icons">
              <div>
                <Facebook color="#222831" />
              </div>

              <div>
                <Instagram color="#222831" />
              </div>

              <div>
                <Twitter color="#222831" />
              </div>

              <div>
                <Linkedin color="#222831" />
              </div>
            </div>
          </div>
          <div className="Opining">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>

        <div className="container2">
          <p>© 2025 All Rights Reserved By Free Html Templates</p>
          <p>© Distributed By Omar Wagdy</p>
        </div>
      </div>
    );
}

export default Section7