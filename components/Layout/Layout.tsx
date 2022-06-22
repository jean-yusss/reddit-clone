import Header from '../Header/Header';

import { LayoutContainer } from './LayoutStyles';

interface Props {
	children: JSX.Element;
}

const Layout = ({ children }: Props) => (
	<LayoutContainer>
		<Header />
		{children}
	</LayoutContainer>
);

export default Layout;
