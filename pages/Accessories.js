import Head from "next/head";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import accessories from "/lib/accessories.js";
import bagProducts from "/lib/bagProducts";
import ProductDisplayFourGrid from "/components/productDisplayFourGrid";

const Accessories = () => {
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
				<title>Accessories | ToddBlue</title>
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

			<main className={styles.main}>
				<div className={styles.new}>
					<div className={styles.borderLineMid}></div>
					{/* <!--===== NEW PRODUCTS =====--> */}
					<ProductDisplayFourGrid data={bagProducts} />
					<ProductDisplayFourGrid data={accessories} />
				</div>
			</main>
		</motion.div>
	);
};

export default Accessories;
