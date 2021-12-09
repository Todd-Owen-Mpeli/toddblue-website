import Link from "next/link";
import styles from "/styles/Home.module.scss";

const NavbarDark = () => {
	return (
		<>
			{/* <!--===== HEADER =====--> */}
			<header className={styles.headerDark}>
				<div className="container">
					<nav>
						<div className={styles.navTitle}>
							<Link href="/" target="blank">
								<a>ToddBlue</a>
							</Link>
						</div>
						<div className={styles.NavMenu}></div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default NavbarDark;
