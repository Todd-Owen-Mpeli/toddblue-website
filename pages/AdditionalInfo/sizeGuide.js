import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.scss";

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

const sizeGuide = () => {
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
				<title>ToddBlue | {NewproductDB[3].productName}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/otherImages/ms-icon-310x310.jpg" />
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
				<div className={styles.new}>
					<div className={styles.borderLineMid}></div>
					{/* <!--===== NEW PRODUCTS =====--> */}
					<motion.div variants={stagger} className={styles.productDisplay}>
						<motion.div variants={fadeInUp} className={styles.productItem}>
							<Link href="/products/shoes" target="blank">
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
									<Link href="/products/shoes" target="blank">
										<a>{NewproductDB[3].productName}</a>
									</Link>
									<h2 className={styles.price}>£{NewproductDB[3].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/products/shoes"
										target="blank"
										className={styles.productCategory}
									>
										<a>{NewproductDB[3].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</motion.div>
	);
};

export default sizeGuide;
