import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				{/* <!-- Website Title --> */}
				<title>ToddBlue | United Kingdom</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/otherImages/ms-icon-310x310.jpg" />

				{/* <!-- AOS CDN.js Reveal Animation  --> */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
					integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
					crossOrigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
				{/* <!-- Icons for Mobile viewport --> */}
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
				/>
			</Head>

			<main className={styles.main}>
				{/* <!--===== HEADER =====--> */}
				<header>
					<nav>
						<div className={styles.topSection}>
							<div className={styles.leftSide}>
								<a href="#Brand" target="blank">
									Brand
								</a>
								<div className={styles.borderDiv}></div>
								<a href="#Support" target="blank">
									Support
								</a>
								<div className={styles.borderDiv}></div>
								<a href="#Community" target="blank">
									Community
								</a>
							</div>
							<div className={styles.rightSide}>
								<a href="#Help" target="blank">
									Help
								</a>
								<div className={styles.borderDiv}></div>
								<a href="#JoinUs" target="blank">
									Join Us
								</a>
								<div className={styles.borderDiv}></div>
								<a href="#SignIn" target="blank">
									Sign In
								</a>
							</div>
						</div>
						<div className={styles.borderLineMid}></div>
						<div className={styles.bottomSection}>
							<div className={styles.navTitle}>
								<h2>ToddBlue</h2>
							</div>
							<ul className={styles.navLinks}>
								<li>
									<a href="#New">New</a>
								</li>
								<li>
									<a href="#store">Store</a>
								</li>
							</ul>
							<div className={styles.navCheckout}>
								<a href="#searchProducts">
									<i className="bi bi-search"></i>
								</a>
								<a href="#cart">
									<i className="bi bi-bag-fill"></i>
								</a>
							</div>
						</div>
					</nav>
				</header>

				{/* <!--===== HERO =====--> */}
				<div className={styles.hero}>
					<Image
						src="/otherImages/nike-just-do-it.jpg"
						data-landscape-url="/otherImages/nike-just-do-it.jpg"
						data-portrait-url="/otherImages/nike-just-do-it MobileView.jpg"
						alt="Picture of the author"
						width="100%"
						height="45%"
						layout="responsive"
						objectFit="contain"
					/>

					<h2 className={styles.title}>WEAR YOUR PASSION</h2>
					<h5 className={styles.subtitle}>
						Define your style forward with Anime Anime Anime
					</h5>
				</div>

				{/* <!--===== POPULAR =====--> */}
				<div className={styles.popular}>
					<h2>New</h2>

					<div className={styles.productDisplay}>
						<div className={styles.productItem}>
							<a href="#" target="blank">
								{/* <img src="/productImages/_MG_2936.jpg" alt="Product Image" /> */}
								<Image
									src="/productImages/_MG_3295.jpg"
									alt="Product Image"
									width={400}
									height={400}
								/>
							</a>

							<div className={styles.description}>
								<div className={styles.topSection}>
									<a href="#" target="blank">
										Spider-Man: Miles Morales
									</a>
									<h2 className={styles.price}> £199.95</h2>
								</div>
								<a href="#" target="blank" className={styles.productCategory}>
									Men & Womens Shoe
								</a>
							</div>
						</div>
						<div className={styles.productItem}>
							<a href="#" target="blank">
								<Image
									src="/productImages/_MG_3551 - Copy.jpg"
									alt="Product Image"
									width={400}
									height={400}
								/>
							</a>

							<div className={styles.description}>
								<div className={styles.topSection}>
									<a href="#" target="blank">
										Demon Slayer - Mitsuri Kanroji
									</a>
									<h2 className={styles.price}> £119.95</h2>
								</div>
								<a href="#" target="blank" className={styles.productCategory}>
									Men & Womens Shoe
								</a>
							</div>
						</div>
						<div className={styles.productItem}>
							<a href="#" target="blank">
								<Image
									src="/productImages/_MG_3644.jpg"
									alt="Product Image"
									width={400}
									height={400}
								/>
							</a>

							<div className={styles.description}>
								<div className={styles.topSection}>
									<a href="#" target="blank">
										Haikyuu!! - Tetsuro Kuroo
									</a>
									<h2 className={styles.price}> £169.95</h2>
								</div>
								<a href="#" target="blank" className={styles.productCategory}>
									Men & Womens Shoe
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<footer className={styles.footer}>
				<div className={styles.content}>
					<div className={styles.topSection}>
						<div className={styles.leftSection}>
							<div className={styles.additionalInfomation}>
								<a href="#" target="blank">
									Gift Cards
								</a>
								<a href="#" target="blank">
									Sign Up For Email
								</a>
								<a href="#" target="blank">
									Become A Member
								</a>
								<a href="#" target="blank">
									Student Discount
								</a>
								<a href="#" target="blank">
									Feedback
								</a>
							</div>
							<div className={styles.getHelp}>
								<a href="#" target="blank" className={styles.titleSection}>
									GET HELP
								</a>
								<a href="#" target="blank">
									Order Status
								</a>
								<a href="#" target="blank">
									Shipping and Delivery
								</a>
								<a href="#" target="blank">
									Returns
								</a>
								<a href="#" target="blank">
									Payments Options
								</a>
								<a href="#" target="blank">
									Contact Us
								</a>
							</div>
							<div className={styles.aboutToddBlue}>
								<a href="#" target="blank" className={styles.titleSection}>
									ABOUT TODDBLUE
								</a>
								<a href="#" target="blank">
									News
								</a>
								<a href="#" target="blank">
									Careers
								</a>
								<a href="#" target="blank">
									Investors
								</a>
								<a href="#" target="blank">
									Sustainability
								</a>
							</div>
						</div>
						<div className={styles.rightSection}>
							<a href="#" target="blank">
								<i className="bi bi-instagram"></i>
							</a>
							<a href="#" target="blank">
								<i className="bi bi-twitter"></i>
							</a>
							<a href="#" target="blank">
								<i className="bi bi-youtube"></i>
							</a>
							<a href="#" target="blank">
								<i className="bi bi-facebook"></i>
							</a>
						</div>
					</div>
					<div className={styles.borderLineMid}></div>
					<div className={styles.bottomSection}>
						<div className={styles.topHalfSection}>
							<a href="#Guides" target="blank">
								Guides
							</a>
							<a href="#TermsOfUse" target="blank">
								Terms Of Use
							</a>
							<a href="#TermsOfSale" target="blank">
								Terms Of Sale
							</a>
							<a href="#CompanyDetails" target="blank">
								Company Details
							</a>
							<a href="#UKMordernSlaveryActDisclosure" target="blank">
								UK Mordern Slavery Act Disclosure
							</a>
						</div>
						<div className={styles.bottomHalfSection}>
							<div className={styles.leftSide}>
								<a href="#location" target="blank" className={styles.location}>
									<i className="bi bi-geo-alt-fill"></i>United Kingdom
								</a>
								<a href="#copyright" target="blank">
									&copy; 2021 ToddBlue. Inc All Rights Reserved
								</a>
							</div>
							<div className={styles.rightSide}>
								<a href="#Privacy&CookiePolicy" target="blank">
									Privacy & Cookie Policy
								</a>
								<a href="#CookieSettings" target="blank">
									Cookie Settings
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
