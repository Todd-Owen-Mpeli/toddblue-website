import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Footer = () => {
	return (
		<div>
			{/* <!--===== FOOTER =====--> */}
			<footer className={styles.footer}>
				<div className={styles.content}>
					<div className={styles.topSection}>
						<div className={styles.leftSection}>
							<div className={styles.additionalInformation}>
								<Link href="#" target="blank">
									<a>Gift Cards</a>
								</Link>
								<Link href="#" target="blank">
									<a>Sign Up For Email</a>
								</Link>
								<Link href="#" target="blank">
									<a>Become A Member</a>
								</Link>
								<Link href="#" target="blank">
									<a>Student Discount</a>
								</Link>
								<Link href="#" target="blank">
									<a>Feedback</a>
								</Link>
							</div>
							<div className={styles.getHelp}>
								<Link href="#" target="blank">
									<a className={styles.titleSection}>GET HELP</a>
								</Link>
								<Link href="#" target="blank">
									<a>Order Status</a>
								</Link>
								<Link href="#" target="blank">
									<a>Shipping and Delivery</a>
								</Link>
								<Link href="#" target="blank">
									<a>Returns</a>
								</Link>
								<Link href="#" target="blank">
									<a>Payments Options</a>
								</Link>
								<Link href="#" target="blank">
									<a>Contact Us</a>
								</Link>
							</div>
							<div className={styles.aboutToddBlue}>
								<Link href="#" target="blank">
									<a className={styles.titleSection}>ABOUT TODDBLUE</a>
								</Link>
								<Link href="#" target="blank">
									<a>News</a>
								</Link>
								<Link href="#" target="blank">
									<a>Careers</a>
								</Link>
								<Link href="#" target="blank">
									<a>Investors</a>
								</Link>
								<Link href="#" target="blank">
									<a>Sustainability</a>
								</Link>
							</div>
						</div>
						<div className={styles.rightSection}>
							<Link href="#" target="blank">
								<a>
									<i className="bi bi-instagram"></i>
								</a>
							</Link>
							<Link href="#" target="blank">
								<a>
									<i className="bi bi-twitter"></i>
								</a>
							</Link>
							<Link href="#" target="blank">
								<a>
									<i className="bi bi-youtube"></i>
								</a>
							</Link>
							<Link href="#" target="blank">
								<a>
									<i className="bi bi-facebook"></i>
								</a>
							</Link>
						</div>
					</div>
					<div className={styles.borderLineMid}></div>
					<div className={styles.bottomSection}>
						<div className={styles.topHalfSection}>
							<Link href="#Guides" target="blank">
								<a>Guides</a>
							</Link>
							<Link href="#TermsOfUse" target="blank">
								<a>Terms Of Use</a>
							</Link>
							<Link href="#TermsOfSale" target="blank">
								<a>Terms Of Sale</a>
							</Link>
							<Link href="#CompanyDetails" target="blank">
								<a>Company Details</a>
							</Link>
							<Link href="#UKModernSlaveryActDisclosure" target="blank">
								<a>UK Modern Slavery Act Disclosure</a>
							</Link>
						</div>
						<div className={styles.bottomHalfSection}>
							<div className={styles.leftSide}>
								<Link href="#location" target="blank">
									<a className={styles.location}>
										<i className="bi bi-geo-alt-fill"></i>United Kingdom
									</a>
								</Link>
								<Link href="#copyright" target="blank">
									<a>&copy; 2021 ToddBlue. Inc All Rights Reserved</a>
								</Link>
							</div>
							<div className={styles.rightSide}>
								<Link href="#Privacy&CookiePolicy" target="blank">
									<a>Privacy & Cookie Policy</a>
								</Link>
								<Link href="#CookieSettings" target="blank">
									<a>Cookie Settings</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
