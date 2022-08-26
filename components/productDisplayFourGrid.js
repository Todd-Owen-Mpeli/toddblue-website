/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import ProductCard from "./ProductCard";
import styles from "/styles/Home.module.scss";
import animation from "/animation/animation.js";

const productDisplayFourGrid = (props) => {
	const allProducts = [...props.data];
	return (
		<>
			{/* <!--===== FOUR PRODUCTS DISPLAY GRID =====--> */}
			<main className={styles.main}>
				{/* <!--===== POPULAR =====--> */}
				<div className={styles.store}>
					{/* PRODUCTS DISPLAY SECTION */}
					<motion.div variants={animation[0]} className={styles.productDisplay}>
						{allProducts.map((keys) => (
							<ProductCard
								key={keys.id}
								productName={keys.productName}
								productCategory={keys.productCategory}
								pricing={keys.pricing}
								image={keys.image}
							/>
						))}
					</motion.div>
				</div>
			</main>
		</>
	);
};

export default productDisplayFourGrid;
