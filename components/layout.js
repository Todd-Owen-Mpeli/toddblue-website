import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const layout = ({children}) => {
	return (
		<div className="content">
			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			{/* <!--===== ALL PAGES RENDERING =====--> */}
			{children}

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</div>
	);
};

export default layout;
