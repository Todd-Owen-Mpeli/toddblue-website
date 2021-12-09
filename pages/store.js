/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.scss";
import ShoeproductsDB from "../lib/shoeproductsDB.json";
import CrossbagproductsDB from "../lib/crossbagproductsDB.json";

// Custom reusable Animation Properties/Objects
const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {duration: 0.5, ease: "easeOut"},
	},
};

const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 0.5, delay: 1, ease: "easeOut"},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const store = () => {
	return (
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
				<title>Store | ToddBlue</title>
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

			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			<main className={styles.main}>
				{/* <!--===== POPULAR =====--> */}
				<div className={styles.store}>
					<div className={styles.borderLineMid}></div>

					<motion.div variants={stagger} className={styles.productDisplay}>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3143-2.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[0].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[0].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[0].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3103.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[1].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[1].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[1].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_2330.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[2].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[2].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[2].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3070.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[3].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[3].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[3].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_2619.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[4].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[4].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[4].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3021.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[5].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[5].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[5].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_2778.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[6].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[6].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[6].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3090.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[7].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[7].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[7].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_1629-3.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[8].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[8].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[8].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3269.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[9].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[9].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[9].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3644.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[10].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[10].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[10].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3441.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[11].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[11].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[11].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3295.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[12].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[12].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[12].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3551 - Copy.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[13].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[13].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[13].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3482.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[14].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[14].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[14].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_2538.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[15].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[15].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[15].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_2687.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{ShoeproductsDB[16].productName}</a>
									</Link>
									<h2 className={styles.price}>{ShoeproductsDB[16].pricing}</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{ShoeproductsDB[16].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_3254.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{CrossbagproductsDB[0].productName}</a>
									</Link>
									<h2 className={styles.price}>
										{CrossbagproductsDB[0].pricing}
									</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{CrossbagproductsDB[0].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_1881.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{CrossbagproductsDB[1].productName}</a>
									</Link>
									<h2 className={styles.price}>
										{CrossbagproductsDB[1].pricing}
									</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{CrossbagproductsDB[1].productCategory}</a>
								</Link>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/_MG_1890.jpg"
										alt="Product Image"
										width={200}
										height={200}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<div className={styles.description}>
								<div className={styles.topSection}>
									<Link href="#" target="blank">
										<a>{CrossbagproductsDB[2].productName}</a>
									</Link>
									<h2 className={styles.price}>
										{CrossbagproductsDB[2].pricing}
									</h2>
								</div>
								<Link
									href="/"
									target="blank"
									className={styles.productCategory}
								>
									<a>{CrossbagproductsDB[2].productCategory}</a>
								</Link>
							</div>
						</motion.div>
					</motion.div>

					<div className={styles.borderLineMid}></div>

					{/* <!--===== RELATED CATEGORY =====--> */}
					<div className={styles.bottomContent}>
						<div className={styles.relatedCategories}>
							<h2>Related Categories</h2>

							<div className={styles.list}>
								<motion.ul variants={stagger} className={styles.links}>
									<Link href="#" target="blank">
										<motion.a variants={fadeInUp}>Mens Clothing</motion.a>
									</Link>
									<Link href="#" target="blank">
										<motion.a variants={fadeInUp}>Womens Clothing</motion.a>
									</Link>
									<Link href="#" target="blank">
										<motion.a variants={fadeInUp}>Backpacks & Bags</motion.a>
									</Link>
									<Link href="#" target="blank">
										<motion.a variants={fadeInUp}>Cross-Body Bags</motion.a>
									</Link>
								</motion.ul>
							</div>
						</div>
						<div className={styles.relatedStories}>
							<h2>Help Guide Stories</h2>

							<div className={styles.content}>
								<div className={styles.productGuide}>
									<motion.div variants={fadeIn}>
										<Link href="#" target="blank">
											<a>
												<Image
													src="/otherImages/a6da69b3cbefc0b7d1c3e9f67d011f8a.jpg"
													alt="Product Image"
													width={500}
													height={500}
													layout="responsive"
													objectFit="cover"
												/>
											</a>
										</Link>
									</motion.div>
									<motion.div variants={fadeIn}>
										<h5>Size Guide</h5>
										<h2>How to select the right shoe size.</h2>
									</motion.div>
								</div>
								<div className={styles.productGuide}>
									<motion.div variants={fadeIn}>
										<Link href="#" target="blank">
											<a>
												<Image
													src="/otherImages/dca9766ecf88354b6b32ea3c48b6e7cb.jpg"
													alt="Product Image"
													width={500}
													height={500}
													layout="responsive"
													objectFit="cover"
												/>
											</a>
										</Link>
									</motion.div>
									<motion.div variants={fadeIn}>
										<h5>Buying Guide</h5>
										<h2>How to select the right item.</h2>
									</motion.div>
								</div>
								<div className={styles.productGuide}>
									<motion.div variants={fadeIn}>
										<Link href="#" target="blank">
											<a>
												<Image
													src="/otherImages/c7e6d1df7824762ba1395ea8db3978d2.jpg"
													alt="Product Image"
													width={500}
													height={500}
													layout="responsive"
													objectFit="cover"
												/>
											</a>
										</Link>
									</motion.div>
									<motion.div variants={fadeIn}>
										<h5>Backpacks & Bags Guide</h5>
										<h2>Which is the right Backpacks or Bags for the event.</h2>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</motion.div>
	);
};

export default store;
