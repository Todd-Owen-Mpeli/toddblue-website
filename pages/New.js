/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.scss";

const New = () => {
	return (
		<div>
			{/* <!--===== HEAD =====--> */}
			<Head>
				{/* <!-- Website Title --> */}
				<title>New Products | ToddBlue</title>
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
				{/* <!--===== NAVIGATION =====--> */}
				<Navbar />

				{/* <!--===== NEW PRODUCTS =====--> */}

				{/* <!--===== TRENDING BRANDS =====--> */}
				<div className={styles.trendingBrands}>
					<h2>Trending Brands</h2>

					<div className={styles.imageDisplay}>
						<Link href="#" target="blank">
							<a>
								<Image
									src="/otherImages/tommy-hilfiger-hp-logos-256x256.webp"
									alt="Brands Image"
									width={200}
									height={200}
								></Image>
							</a>
						</Link>
						<Link href="#" target="blank">
							<a>
								<Image
									src="/otherImages/north-face.webp"
									alt="Brands Image"
									width={200}
									height={200}
								></Image>
							</a>
						</Link>
						<Link href="#" target="blank">
							<a>
								<Image
									src="/otherImages/nike-hp-logos-256x256.webp"
									alt="Brands Image"
									width={200}
									height={200}
								></Image>
							</a>
						</Link>
						<Link href="#" target="blank">
							<a>
								<Image
									src="/otherImages/carhartt-hp-logos-256x256.webp"
									alt="Brands Image"
									width={200}
									height={200}
								></Image>
							</a>
						</Link>
						<Link href="#" target="blank">
							<a>
								<Image
									src="/otherImages/ellesse-hp-logos-256x256.webp"
									alt="Brands Image"
									width={200}
									height={200}
								></Image>
							</a>
						</Link>
						<Link href="#" target="blank">
							<a>
								<Image
									src="/otherImages/dr-martens-hp-logos-256x256.webp"
									alt="Brands Image"
									width={200}
									height={200}
								></Image>
							</a>
						</Link>
					</div>
				</div>

				{/* <!--===== JOIN COMMUNITY =====--> */}
				<div className={styles.joinCommunity}>
					<h2>Join Our Exclusive Community</h2>
					<newButton>
						<Link href="#" target="blank">
							<a>Join Now</a>
						</Link>
					</newButton>
				</div>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</div>
	);
};

export default New;
