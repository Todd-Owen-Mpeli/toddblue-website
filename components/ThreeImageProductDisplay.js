import React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import animation from "/animation/animation.json";
import styles from "/styles/Home.module.scss";

const ThreeImageProductDisplay = (props) => {
	// console.log(props.data);

	const trendingNow = [...props.data];

	return (
		<div>
			<motion.div variants={animation[0]} className={styles.productDisplay}>
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
								src="/productImages/_MG_3090.jpg"
								alt="Product Image"
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
								<a target="blank">{trendingNow[7].productName}</a>
							</Link>

							<h2 className={styles.price}>£{trendingNow[7].pricing}</h2>
						</div>
						<Link href="/store">
							<a className={styles.productCategory}>
								{trendingNow[7].productCategory}
							</a>
						</Link>
					</div>
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
					className={styles.productItem}
				>
					<Link href="/store">
						<motion.a
							target="blank"
							whileHover={{scale: 1.0035}}
							whileTap={{scale: 1}}
						>
							<Image
								src="/productImages/_MG_3441.jpg"
								alt="Product Image"
								width={200}
								height={200}
								layout="responsive"
								objectFit="cover"
							/>
						</motion.a>
					</Link>
					<div className={styles.description}>
						<div className={styles.topSection}>
							<Link href="/store">
								<a target="blank">{trendingNow[3].productName}</a>
							</Link>
							<h2 className={styles.price}>£{trendingNow[3].pricing}</h2>
						</div>
						<Link href="/" className={styles.productCategory}>
							<a target="blank">{trendingNow[3].productCategory}</a>
						</Link>
					</div>
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
							duration: 1,
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
								src="/productImages/_MG_1629-3.jpg"
								alt="Product Image"
								width={200}
								height={200}
								layout="responsive"
								objectFit="cover"
							/>
						</motion.a>
					</Link>
					<div className={styles.description}>
						<div className={styles.topSection}>
							<Link href="/store">
								<a target="blank">{props.data[1].productName}</a>
							</Link>
							<h2 className={styles.price}>£{props.data[1].pricing}</h2>
						</div>
						<Link href="/" className={styles.productCategory}>
							<a target="blank">{props.data[1].productCategory}</a>
						</Link>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default ThreeImageProductDisplay;
