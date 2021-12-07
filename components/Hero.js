import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const Hero = () => {
	return (
		<div>
			{/* <!--===== HERO =====--> */}
			<div className={styles.hero}>
				<div
					className={styles.heroBackground}
					data-aos="fade-in"
					data-aos-delay="100"
					data-aos-duration="500"
				>
					<div className={styles.heroOuterBackground}>
						<div className={styles.heroInnerBackground}>
							<div className={styles.heroLeftSide}>
								<h2
									data-aos="fade-in"
									data-aos-delay="100"
									data-aos-duration="500"
								>
									<strong>HI, IM TODD OWEN</strong>
								</h2>
								<h2
									className={styles.subtitle}
									data-aos="fade-in"
									data-aos-delay="100"
									data-aos-duration="500"
								>
									<strong>Junior Web Developer</strong>
								</h2>
								<p
									data-aos="fade-in"
									data-aos-delay="100"
									data-aos-duration="500"
								>
									I build projects from web development to all different types
									of niches and industries wide applicable projects.
									<br />
									<br />
								</p>
							</div>
							<div className={styles.heroRightSide}>
								<h2
									data-aos="fade-in"
									data-aos-delay="100"
									data-aos-duration="500"
								>
									<strong>How can I help you?</strong>
								</h2>
								<p
									data-aos="fade-in"
									data-aos-delay="100"
									data-aos-duration="500"
								>
									Lets get in touch today.
									<br />
									<br />
								</p>
								<div
									className={styles.contactMeBtn}
									data-aos="fade-up"
									data-aos-delay="100"
									data-aos-duration="500"
								>
									<Link
										href="https://www.linkedin.com/in/todd-mpeli-831b18121/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<a>Contact Me</a>
									</Link>
								</div>
								<ul
									className={styles.socialMediaLinks}
									data-aos="fade-in"
									data-aos-delay="100"
									data-aos-duration="500"
								>
									<Link
										href="https://www.linkedin.com/in/todd-mpeli-831b18121/"
										target="_blank"
										data-aos="fade-in"
										data-aos-delay="100"
										data-aos-duration="500"
									>
										<a>
											<i className="uil uil-linkedin"></i>
										</a>
									</Link>
									<Link
										href="https://github.com/Todd-Owen-Mpeli"
										target="_blank"
										data-aos="fade-in"
										data-aos-delay="100"
										data-aos-duration="500"
									>
										<a>
											<i className="uil uil-github"></i>
										</a>
									</Link>
									<Link
										href="https://twitter.com/ToddOwenMpeli"
										target="_blank"
										data-aos="fade-in"
										data-aos-delay="100"
										data-aos-duration="500"
									>
										<a>
											<i className="uil uil-twitter"></i>
										</a>
									</Link>
								</ul>
							</div>
						</div>
						<div className={styles.profileImageBackground}>
							<Image
								src="/otherImages/HeroBackground3.png"
								alt="Profile Picture"
								data-aos="fade-in"
								data-aos-delay="100"
								data-aos-duration="500"
							></Image>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
