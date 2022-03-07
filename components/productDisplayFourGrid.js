/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import ShoeProductsDB from "/lib/ShoeProductsDB.json";
import animation from "../animation/animation.json";

const productDisplayFourGrid = () => {
	return (
		<>
			{/* <!--===== FOUR PRODUCTS DISPLAY GRID =====--> */}
			<main className={styles.main}>
				{/* <!--===== POPULAR =====--> */}
				<div className={styles.store}>
					{/* PRODUCTS DISPLAY SECTION */}
					<motion.div variants={animation[0]} className={styles.productDisplay}>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Pull&Bear - Contrast High-Top Black & White.jpg"
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
										<a>{ShoeProductsDB[0].productName}</a>
									</Link>
									<h2 className={styles.price}>£{ShoeProductsDB[0].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[0].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Pull&Bear - Contrast High-Top Brown.jpg"
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
										<a>{ShoeProductsDB[1].productName}</a>
									</Link>
									<h2 className={styles.price}>£{ShoeProductsDB[1].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[1].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Pull&Bear - Contrast High-Top Grey.jpg"
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
										<a>{ShoeProductsDB[2].productName}</a>
									</Link>
									<h2 className={styles.price}>£{ShoeProductsDB[2].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[2].productCategory}</a>
									</Link>
									<newButton>
										<i className="bi bi-heart"></i>
									</newButton>
								</div>
							</div>
						</motion.div>
						<motion.div variants={animation[2]} className={styles.productItem}>
							<Link href="#" target="blank">
								<a>
									<Image
										src="/productImages/Pull&Bear - Chunky Soles White.jpg"
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
										<a>{ShoeProductsDB[3].productName}</a>
									</Link>
									<h2 className={styles.price}>£{ShoeProductsDB[3].pricing}</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[3].productCategory}</a>
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
		</>
	);
};

export default productDisplayFourGrid;
