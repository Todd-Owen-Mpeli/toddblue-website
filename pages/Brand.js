import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Navbar from "../components/Navbar";
import FooterLight from "/components/alternativeStyling/FooterLight";
import styles from "/styles/Home.module.scss";
import animation from "/animation/animation.js";

const Brand = () => {
	return (
		<>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				{/* <!--===== HEAD =====--> */}
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

				<div className={styles.BrandMain}>
					{/* <!--===== HERO =====--> */}
					<div className={styles.backgroundImageTop}>
						<div className="container">
							<div className={styles.content}>
								<motion.div variants={animation[1]} className={styles.title}>
									<h2>Our Story</h2>
									<h5>One of a kind global street-wear shoes & merchandise</h5>
								</motion.div>
							</div>
						</div>
					</div>

					<div className={styles.whoWeAre}>
						<div className="container">
							<div className={styles.content}>
								<motion.div variants={animation[0]} className={styles.leftSide}>
									<motion.div variants={animation[2]} className={styles.title}>
										<h5>Street-wear shoes has never been more creative</h5>
									</motion.div>
									<motion.div
										variants={animation[2]}
										className={styles.description}
									>
										<p>
											In some ways, you know us. We work to make new street
											style classics. What you wear defines your personality,
											the streets, and the creative culture, and we’ve been
											redefining it with you all along.
											<br></br>
											<br></br>
											When you wear our products, you create a culture of
											authentic street style simply by being yourself. Whether
											they’re on the feet of a ‘70’s basketball star in a
											history book or on the street with you today.
											<br></br>
											<br></br>
											Anime Creatives have always signified cool...because you
											wear them. We don’t know where you’ll go, but we know
											you’ll take our custom shoes to the future with you.
										</p>
									</motion.div>
								</motion.div>
								<motion.div
									variants={animation[1]}
									className={styles.rightSide}
								>
									<Link href="#" target="blank">
										<a>
											<Image
												src="/otherImages/about_converse2.jpg"
												alt="Product Image"
												width={600}
												height={600}
												layout="responsive"
												objectFit="contain"
											></Image>
										</a>
									</Link>
								</motion.div>
							</div>
						</div>
					</div>

					<div className={styles.JoinUS}>
						<div className="container">
							<div className={styles.content}>
								<div className={styles.title}>
									<h5>Get exclusive access to the best of ToddBLue</h5>
								</div>
								<motion.div variants={animation[1]} className={styles.TopSide}>
									<Link href="#" target="blank">
										<a>
											<Image
												src="/otherImages/Zero.png"
												alt="Product Image"
												width={500}
												height={200}
												layout="responsive"
												objectFit="contain"
											></Image>
										</a>
									</Link>
								</motion.div>
								<motion.div
									variants={animation[2]}
									className={styles.BottomSide}
								>
									<motion.div variants={animation[2]} className={styles.title}>
										<h5>Where All Anime Enthusiast And Creatives Belong</h5>
									</motion.div>
									<motion.div
										variants={animation[2]}
										className={styles.description}
									>
										<p>
											When you are with us, you are part of something bigger: a
											global community dedicated to bringing out the best in one
											another, with access to the most effective tools for the
											job, including Member-exclusive products, ToddBLue By You
											customization and special offers. And its all
										</p>
									</motion.div>
									<motion.newButton variants={animation[1]}>
										<Link href="#">
											<a target="blank">Join Us</a>
										</Link>
									</motion.newButton>
								</motion.div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--===== FOOTER =====--> */}
				{/* <FooterLight /> */}
			</motion.div>
		</>
	);
};

export default Brand;

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
Brand.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
			{page}

			{/* <!--===== FOOTER =====--> */}
			<FooterLight />
		</>
	);
};
