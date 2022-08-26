import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";

const ProductCard = (props) => {
	// console.log(props.image);

	return (
		<motion.div
			initial={{
				y: 60,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.5,
					ease: "easeOut",
				},
			}}
			className={styles.productItem}
		>
			<Link href="/store">
				<motion.a
					target="blank"
					whileHover={{scale: 1.0035}}
					whileTap={{scale: 1}}
				>
					<Image
						src={props.image}
						alt={props.productName}
						width={400}
						height={400}
						layout="responsive"
						objectFit="cover"
					/>
				</motion.a>
			</Link>
			<div className={styles.description}>
				<div className={styles.topSection}>
					<Link href="/store">
						<a target="blank">{props.productName}</a>
					</Link>

					<h2 className={styles.price}>£{props.pricing}</h2>
				</div>
				<Link href="/store">
					<a className={styles.productCategory}>{props.productCategory}</a>
				</Link>
			</div>
		</motion.div>
	);
};

export default ProductCard;
