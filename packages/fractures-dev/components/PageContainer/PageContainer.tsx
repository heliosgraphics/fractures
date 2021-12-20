import Container from "../Container";
import type { PageContainerProps } from "./PageContainer.types";

const PageContainer: React.FC<PageContainerProps> = (props) => (
	<Container className="py-24 flex flex-column flex-gap-32">
		{props.children}
	</Container>
);

export default PageContainer;
