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
										<a>{ShoeProductsDB[19].productName}</a>
									</Link>
									<h2 className={styles.price}>
										£{ShoeProductsDB[19].pricing}
									</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[19].productCategory}</a>
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
										<a>{ShoeProductsDB[17].productName}</a>
									</Link>
									<h2 className={styles.price}>
										£{ShoeProductsDB[17].pricing}
									</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[17].productCategory}</a>
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
										<a>{ShoeProductsDB[18].productName}</a>
									</Link>
									<h2 className={styles.price}>
										£{ShoeProductsDB[18].pricing}
									</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[18].productCategory}</a>
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
										<a>{ShoeProductsDB[20].productName}</a>
									</Link>
									<h2 className={styles.price}>
										£{ShoeProductsDB[20].pricing}
									</h2>
								</div>
								<div className={styles.bottomSection}>
									<Link
										href="/"
										target="blank"
										className={styles.productCategory}
									>
										<a>{ShoeProductsDB[20].productCategory}</a>
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
