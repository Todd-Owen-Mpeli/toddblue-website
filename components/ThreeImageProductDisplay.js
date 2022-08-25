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

// {
// 	/* <motion.div
// 					initial={{
// 						y: 60,
// 						opacity: 0,
// 					}}
// 					animate={{
// 						y: 0,
// 						opacity: 1,
// 						transition: {
// 							duration: 0.5,
// 							ease: "easeOut",
// 						},
// 					}}
// 					className={styles.productItem}
// 				>
// 					<Link href="/store">
// 						<motion.a
// 							target="blank"
// 							whileHover={{scale: 1.0035}}
// 							whileTap={{scale: 1}}
// 						>
// 							<Image
// 								src={itemOne.image}
// 								alt="Product Image"
// 								width={400}
// 								height={400}
// 								layout="responsive"
// 								objectFit="cover"
// 							/>
// 						</motion.a>
// 					</Link>
// 					<div className={styles.description}>
// 						<div className={styles.topSection}>
// 							<Link href="/store">
// 								<a target="blank">{itemOne.productName}</a>
// 							</Link>

// 							<h2 className={styles.price}>£{itemOne.pricing}</h2>
// 						</div>
// 						<Link href="/store">
// 							<a className={styles.productCategory}>
// 								{itemOne.productCategory}
// 							</a>
// 						</Link>
// 					</div>
// 				</motion.div>
// 				<motion.div
// 					initial={{
// 						y: 60,
// 						opacity: 0,
// 					}}
// 					animate={{
// 						y: 0,
// 						opacity: 1,
// 						transition: {
// 							duration: 0.75,
// 							ease: "easeOut",
// 						},
// 					}}
// 					className={styles.productItem}
// 				>
// 					<Link href="/store">
// 						<motion.a
// 							target="blank"
// 							whileHover={{scale: 1.0035}}
// 							whileTap={{scale: 1}}
// 						>
// 							<Image
// 								src={itemTwo.image}
// 								alt="Product Image"
// 								width={200}
// 								height={200}
// 								layout="responsive"
// 								objectFit="cover"
// 							/>
// 						</motion.a>
// 					</Link>
// 					<div className={styles.description}>
// 						<div className={styles.topSection}>
// 							<Link href="/store">
// 								<a target="blank">{itemTwo.productName}</a>
// 							</Link>
// 							<h2 className={styles.price}>£{itemTwo.pricing}</h2>
// 						</div>
// 						<Link href="/" className={styles.productCategory}>
// 							<a target="blank">{itemTwo.productCategory}</a>
// 						</Link>
// 					</div>
// 				</motion.div>
// 				<motion.div
// 					initial={{
// 						y: 60,
// 						opacity: 0,
// 					}}
// 					animate={{
// 						y: 0,
// 						opacity: 1,
// 						transition: {
// 							duration: 1,
// 							ease: "easeOut",
// 						},
// 					}}
// 					className={styles.productItem}
// 				>
// 					<Link href="/store">
// 						<motion.a
// 							target="blank"
// 							whileHover={{scale: 1.0035}}
// 							whileTap={{scale: 1}}
// 						>
// 							<Image
// 								src={itemThree.image}
// 								alt="Product Image"
// 								width={200}
// 								height={200}
// 								layout="responsive"
// 								objectFit="cover"
// 							/>
// 						</motion.a>
// 					</Link>
// 					<div className={styles.description}>
// 						<div className={styles.topSection}>
// 							<Link href="/store">
// 								<a target="blank">{itemThree.productName}</a>
// 							</Link>
// 							<h2 className={styles.price}>£{itemThree.pricing}</h2>
// 						</div>
// 						<Link href="/" className={styles.productCategory}>
// 							<a target="blank">{itemThree.productCategory}</a>
// 						</Link>
// 					</div>
// 				</motion.div> */
// }
