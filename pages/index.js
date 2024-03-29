import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
// import content from "..newproductDB.js";
import shoeProducts from "/lib/shoeProducts";
import newProduct from "/lib/newProduct";
import animation from "/animation/animation.js";
import ThreeImageProductDisplay from "../components/ThreeImageProductDisplay";

export default function Home() {
	// console.log(shoeProducts);

	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<div className={styles.container}>
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

				<main className={styles.main}>
					{/* <!--===== HERO =====--> */}
					<div className={styles.hero}>
						<Image
							src="/otherImages/PowerpuffGirls.jpg"
							data-landscape-url="/otherImages/PowerpuffGirls.jpg"
							data-portrait-url="/otherImages/PowerpuffGirls.jpg"
							alt="Picture of the author"
							width="100%"
							height="60%"
							layout="responsive"
							objectFit="cover"
						/>
						<motion.div variants={animation[2]}>
							<h2 className={styles.title}>WEAR YOUR PASSION</h2>
						</motion.div>
						<motion.div
							initial={{
								y: 60,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									duration: 0.75,
									ease: "easeOut",
								},
							}}
						>
							<h5 className={styles.subtitle}>
								Define your style forward with Anime, Anime, and more Anime
							</h5>
						</motion.div>
					</div>

					{/* <!--===== POPULAR =====--> */}
					<motion.div variants={animation[0]} className={styles.popular}>
						<h2>New</h2>
						<ThreeImageProductDisplay data={newProduct} />
					</motion.div>

					{/* <!--===== COSY SETS =====--> */}
					{/* <div className={styles.cosySet}>
						<h2>Cosy Shoe Set</h2>

						<div className={styles.content}>
							<div className={styles.productDisplay}>
								<Link href="/store">
									<a target="blank">
										<Image
											src="/otherImages/ad5893bc646b1badc82e1f2a7a4689aa.jpg"
											alt="Product Image"
											width={600}
											height={600}
											layout="responsive"
											objectFit="cover"
										></Image>
									</a>
								</Link>
								<div className={styles.content}>
									<h2>Comfy Clothing for colder Days</h2>
									<newButton className={styles.shopButton}>
										<Link href="/store">
											<a target="blank">Shop</a>
										</Link>
									</newButton>
								</div>
							</div>
							<div className={styles.productDisplay}>
								<Link href="/store">
									<a target="blank">
										<Image
											src="/otherImages/c8c82b170fcf1c0bf3dc755c4f030326.jpg"
											alt="Product Image"
											width={600}
											height={600}
											layout="responsive"
											objectFit="cover"
										></Image>
									</a>
								</Link>
								<div className={styles.content}>
									<h2>Anime Clothing for Everyday Vibes</h2>
									<newButton className={styles.shopButton}>
										<Link href="/store">
											<a target="blank">Shop</a>
										</Link>
									</newButton>
								</div>
							</div>
						</div>
					</div> */}

					{/* <!--===== TRENDING NOW =====--> */}
					<div className={styles.trendingNow}>
						<h2>Trending Now</h2>

						<ThreeImageProductDisplay data={shoeProducts} />
					</div>

					{/* <!--===== MORE BLUE OPTIONS =====--> */}
					<div className={styles.moreProducts}>
						<h2>More ToddBlue</h2>
						<div className={styles.contentDisplay}>
							<motion.div
								variants={animation[2]}
								className={styles.productDisplay}
							>
								<Link href="/store">
									<a target="blank">
										<Image
											src="/otherImages/fa19f127a6439a7c48420f7aad6deec0.jpg"
											alt="Product Image"
											width={600}
											height={1000}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								{/* <div className={styles.content}>
									<newButton className={styles.shopButton}>
										<Link href="/store">
											<a target="blank">Mens</a>
										</Link>
									</newButton>
								</div> */}
							</motion.div>
							<motion.div
								variants={animation[2]}
								className={styles.productDisplay}
							>
								<Link href="/store">
									<a target="blank">
										<Image
											src="/otherImages/822c173436e062f02626fad9b0c220b9.jpg"
											alt="Product Image"
											width={600}
											height={1000}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								{/* <div className={styles.content}>
									<newButton className={styles.shopButton}>
										<Link href="/store">
											<a target="blank">Womens</a>
										</Link>
									</newButton>
								</div> */}
							</motion.div>
							<motion.div
								variants={animation[2]}
								className={styles.productDisplay}
							>
								<Link href="/store">
									<a target="blank">
										<Image
											src="/otherImages/acf6c5d018947d09d71abe077b9e354a.jpg"
											alt="Product Image"
											width={600}
											height={1000}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								{/* <div className={styles.content}>
									<newButton className={styles.shopButton}>
										<Link href="/store">
											<a target="blank">Kids</a>
										</Link>
									</newButton>
								</div> */}
							</motion.div>
						</div>
					</div>

					{/* <!--===== PRODUCT LINKS =====--> */}
					<motion.div variants={animation[0]} className={styles.productLinks}>
						<div className={styles.content}>
							<motion.div variants={animation[2]} className={styles.list}>
								<h2>Shoes</h2>
								<motion.ul variants={animation[0]} className={styles.links}>
									<motion.li variants={animation[2]}>
										<Link href="/store">
											<a target="blank">Sneakers and Shoes</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/store">
											<a target="blank">Nike Shoes</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/store">
											<a target="blank">Puma Shoes</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/store">
											<a target="blank">Pull&Bear Shoes</a>
										</Link>
									</motion.li>
								</motion.ul>
							</motion.div>
							<motion.div variants={animation[2]} className={styles.list}>
								<h2>Accessories</h2>
								<motion.ul variants={animation[0]} className={styles.links}>
									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Shoe Laces</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Small Accessories</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Medium Accessories</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Large Accessories</a>
										</Link>
									</motion.li>
								</motion.ul>
							</motion.div>
							<motion.div variants={animation[2]} className={styles.list}>
								<h2>Bags</h2>
								<motion.ul variants={animation[0]} className={styles.links}>
									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">All Bags</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Backpacks</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Duffle bags</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Cross-Body Bags</a>
										</Link>
									</motion.li>
								</motion.ul>
							</motion.div>
							<motion.div variants={animation[2]} className={styles.list}>
								<h2>Featured</h2>
								<motion.ul variants={animation[0]} className={styles.links}>
									<motion.li variants={animation[2]}>
										<Link href="/OneTime">
											<a target="blank">Limited Drops</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/OneTime">
											<a target="blank">One Time Customs</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/New">
											<a target="blank">New Releases</a>
										</Link>
									</motion.li>

									<motion.li variants={animation[2]}>
										<Link href="/Accessories">
											<a target="blank">Backpacks & Bags</a>
										</Link>
									</motion.li>
								</motion.ul>
							</motion.div>
						</div>
					</motion.div>
				</main>
			</div>
		</motion.div>
	);
}
