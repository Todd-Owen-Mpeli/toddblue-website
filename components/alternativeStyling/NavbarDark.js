import Link from "next/link";
import {motion} from "framer-motion";
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

const NavbarDark = () => {
	return (
		<>
			{/* <!--===== HEADER =====--> */}
			<header className={styles.headerDark}>
				<div className="container">
					<nav>
						<div className={styles.bottomSection}>
							<div className={styles.navTitle}>
								<Link href="/">
									<a>ToddBlue</a>
								</Link>
							</div>
							<ul className={styles.navLinks}>
								<Link href="/New">
									<motion.a variants={fadeIn}>New</motion.a>
								</Link>
								<Link href="/store">
									<motion.a variants={fadeIn}>Store</motion.a>
								</Link>
								<Link href="/Accessories">
									<motion.a variants={fadeIn}>Accessories</motion.a>
								</Link>
							</ul>
							<div className={styles.navCheckout}>
								<Link href="#searchProducts">
									<a>
										<i className="bi bi-search"></i>
									</a>
								</Link>
								<Link href="#searchProducts">
									<a>
										<i className="bi bi-heart"></i>
									</a>
								</Link>
								<Link href="#cart">
									<a>
										<i className="bi bi-bag-fill"></i>
									</a>
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default NavbarDark;
