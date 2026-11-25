
import footerLogo from "../../images/iteration-2-images/footer/logo-footer.svg";

import addressIcon from "../../images/iteration-2-images/footer/icons/icon-1.png";
import emailIcon from "../../images/iteration-2-images/footer/icons/icon-2.png";
import phoneIcon from "../../images/iteration-2-images/footer/icons/icon-3.png";
import twitterIcon from "../../images/iteration-2-images/footer/twitter.svg";

import insta0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-5.png";

export default function Footer() {

    return (

        <footer className="footer">
            <div className="footer-icerik">
                <div className="footer-iletisim">
                    <p><img src={footerLogo} alt="teknolojik yemekler logosu" className="footer-logo" /></p>
                    <p className="iletisim-satiri">
                        <img src={addressIcon} alt="açik adres ikonu" className="footer-ikon" />341 Londonderry Road, Istanbul Türkiye</p>
                    <p className="iletisim-satiri">
                        <img src={emailIcon} alt="e-posta ikonu" className="footer-ikon" />aciktim@teknolojikyemekler.com</p>
                    <p className="iletisim-satiri">
                        <img src={phoneIcon} alt="telefon ikonu" className="footer-ikon" />+90 216 123 45 67</p>
                </div>

                <div className="footer-menu">
                    <h3>Hot Menu</h3>
                    <ul>
                        <li>Terminal Pizza</li>
                        <li>5 Kişilik Hackathlon Pizza</li>
                        <li>useEffect Tavuklu Pizza</li>
                        <li>Beyaz Console Frosty</li>
                        <li>Testler Geçti Mutlu Burger</li>
                        <li>Position Absolute Acı Burger</li>
                    </ul>
                </div>
                <div className="footer-instagram">
                    <h3>Instagram</h3>
                    <div className="instagram-gorseller">
                        <img src={insta0} alt="pizza görseli" />
                        <img src={insta1} alt="mangal görseli" />
                        <img src={insta2} alt="dilim pizza" />
                        <img src={insta3} alt="hamburger görseli" />
                        <img src={insta4} alt="ikili burger görseli" />
                        <img src={insta5} alt="double cheeseburger görseli" />
                    </div>
                </div>
            </div>
            <div className="footer-alt">
                <p className="copyright">© 2023 Teknolojik Yemekler.</p>
                <img src={twitterIcon} alt="twitter" className="twitter-ikon" />
            </div>
        </footer>
    )
}