import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Navbar = () => {
	return (
		<>
			{/* <!--===== HEADER =====--> */}
			<header className={styles.header}>
				<div className="container">
					<nav>
						<div className={styles.topSection}>
							<div className={styles.leftSide}>
								<Link href="/Brand">
									<a>Brand</a>
								</Link>

								<div className={styles.borderDiv}></div>
								<Link href="/Community">
									<a>Community</a>
								</Link>
							</div>
							<div className={styles.rightSide}>
								<Link href="/Help">
									<a>Help</a>
								</Link>

								<div className={styles.borderDiv}></div>
								<Link href="/FAQs">
									<a>FAQs</a>
								</Link>
							</div>
						</div>
					</nav>
				</div>
				<div className={styles.borderLineMid}></div>
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
									<a>New</a>
								</Link>
								<Link href="/store">
									<a>Store</a>
								</Link>
								<Link href="/Accessories">
									<a>Accessories</a>
								</Link>
								<Link href="/OneTime">
									<a className={styles.OneTime}>One Time Customs</a>
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

export default Navbar;
