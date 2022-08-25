import Link from "next/link";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import animation from "../../animation/animation.js";

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
							<ul variants={animation[0]} className={styles.navLinks}>
								<Link href="/New">
									<motion.a variants={animation[1]}>New</motion.a>
								</Link>
								<Link href="/store">
									<motion.a variants={animation[1]}>Store</motion.a>
								</Link>
								<Link href="/Accessories">
									<motion.a variants={animation[1]}>Accessories</motion.a>
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
