import { assets } from '../../assets/assets'
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perspiciatis accusamus aut nihil, incidunt labore eveniet fugit quae suscipit eaque, similique nam omnis eius obcaecati possimus nisi, minus adipisci voluptate.
                    Natus, aut corporis tempora quae est iusto, tenetur unde perspiciatis consequatur assumenda nam nostrum alias minima odit ipsam architecto quos culpa. Quidem, saepe repellendus. Reiciendis magnam ut ullam! Neque, optio?</p>
                    <div className="footer-socials-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />

                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-678</li>
                        <li>contact@tomato</li>
                    </ul>

                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved</p>

        </div>
    )
}