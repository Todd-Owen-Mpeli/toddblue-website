import {motion} from "framer-motion";
import animation from "/animation/animation.js";
import styles from "/styles/Home.module.scss";
import ProductCard from "./ProductCard";

const ThreeImageProductDisplay = (props) => {
	const [itemOne, itemTwo, itemThree] = [...props.data];
	const TrendingNow = [itemOne, itemTwo, itemThree];

	return (
		<div>
			<motion.div variants={animation[0]} className={styles.productDisplay}>
				{TrendingNow.map((keys) => (
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
	);
};

export default ThreeImageProductDisplay;
