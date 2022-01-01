import Link from "next/link";
import styles from "/styles/Home.module.scss";

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
									<a>New</a>
								</Link>
								<Link href="/store">
									<a>Store</a>
								</Link>
								<Link href="/Accessories">
									<a>Accessories</a>
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
