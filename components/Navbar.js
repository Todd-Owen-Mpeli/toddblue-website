import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Navbar = () => {
	return (
		<div>
			{/* <!--===== HEADER =====--> */}
			<header>
				<nav>
					<div className={styles.topSection}>
						<div className={styles.leftSide}>
							<Link href="#Brand" target="blank">
								<a>Brand</a>
							</Link>

							<div className={styles.borderDiv}></div>
							<Link href="#Support" target="blank">
								<a>Support</a>
							</Link>

							<div className={styles.borderDiv}></div>
							<Link href="#Community" target="blank">
								<a>Community</a>
							</Link>
						</div>
						<div className={styles.rightSide}>
							<Link href="#Help" target="blank">
								<a>Help</a>
							</Link>

							<div className={styles.borderDiv}></div>
							<Link href="#JoinUs" target="blank">
								<a>Join Us</a>
							</Link>

							<div className={styles.borderDiv}></div>
							<Link href="#SignIn" target="blank">
								<a>Sign In</a>
							</Link>
						</div>
					</div>
					<div className={styles.borderLineMid}></div>
					<div className={styles.bottomSection}>
						<div className={styles.navTitle}>
							<Link href="/" target="blank">
								<a>ToddBlue</a>
							</Link>
						</div>
						<ul className={styles.navLinks}>
							<Link href="/New" target="blank">
								<a>New</a>
							</Link>

							<Link href="/store" target="blank">
								<a>Store</a>
							</Link>
						</ul>
						<div className={styles.navCheckout}>
							<Link href="#searchProducts" target="blank">
								<a>
									<i className="bi bi-search"></i>
								</a>
							</Link>
							<Link href="#searchProducts" target="blank">
								<a>
									<i className="bi bi-heart"></i>
								</a>
							</Link>
							<Link href="#cart" target="blank">
								<a>
									<i className="bi bi-bag-fill"></i>
								</a>
							</Link>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
