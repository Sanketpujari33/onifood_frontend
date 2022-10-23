import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h3>Foolish Developer</h3>
                <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
                <ul className="socials">
                    <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-youtube"></i></Link></li>
                    <li><Link href="#"><i className="fa fa-linkedin-square"></i></Link></li>
                </ul>
                <div className="footer-bottom">
                    <p>Copyright &copy;2021 <Link href="#"> EVERYONE. All rights reserved.</Link></p>
                    <div className="footer-menu">
                        <ul className="f-menu">
                            <li classNameName="text-value">
                                <Link to="#">About us</Link>
                            </li>
                            <li classNameName="text-value">
                                <Link to="#">ios App</Link>
                            </li>
                            <li classNameName="text-value">
                                <Link to="#">Android App</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
