import ScrollLink from "@/components/common/scroll-link";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";

export default function Logo() {
	return (
		<ScrollLink id="home">
			<Image src={logo} alt="Teezy Logo" className=" size-9" priority />
		</ScrollLink>
	);
}
