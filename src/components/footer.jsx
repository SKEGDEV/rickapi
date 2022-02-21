import '../styles/footer.css';

import {
	GrFacebook,
	GrInstagram
} from 'react-icons/gr';

import {RiWhatsappFill} from 'react-icons/ri';

import logoedu from '../logoedu.png';

export default function Footer(){
	return(
		<footer>
			<p className="follow">Follow me on:</p>
				<a href="https://www.facebook.com/mela.agarran.xD.xD/" target="_blank">
					<GrFacebook className="icon facebook"/>
				</a>
					<a href="https://www.instagram.com/skeg_developer/" target="_blank">
						<GrInstagram className="icon instagram"/>
					</a>
			<a href="https://wa.me/qr/KMDVZRO4NP2BC1" target="_blank">
				<RiWhatsappFill className="icon whatsapp"/>
				</a>
			<p className="powered-by">Powered by:</p>
			<a href="http://SKEGDEV.github.io/portfolio-work" target="_blank"><img className="footer-logo" src={logoedu} alt="caducated" /></a>
		</footer>
	) 
}
