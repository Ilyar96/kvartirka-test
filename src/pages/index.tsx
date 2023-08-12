import { HomePage } from "../page-components/home/Home";
// import styles from "@/styles/Home.module.css";
import { withLayout } from "@/hok";

const Home = () => {
	return (
		<>
			<HomePage />
		</>
	);
};

export default withLayout(Home);
