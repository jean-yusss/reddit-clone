import styled, { css } from 'styled-components';
import { HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid';

import {
	BellIcon,
	ChatIcon,
	GlobeIcon,
	PlusIcon,
	SparklesIcon,
	SpeakerphoneIcon,
	VideoCameraIcon,
	ChevronDownIcon
} from '@heroicons/react/outline';

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	padding: 0 1rem;
	position: sticky;
	top: 0px;
	z-index: 50;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const LogoContainer = styled.div`
	position: relative;
	height: 2.5rem;
	width: 5rem;
	flex-shrink: 0;
	cursor: pointer;
`;

export const Explorer = styled.div`
	display: flex;
	align-items: center;
	margin: 0 1.75rem;

	@media (min-width: 1280px) {
		min-width: 250px;
	}
`;

export const Home = styled(HomeIcon)`
	height: 1.5rem;
	width: 1.5rem;
`;

export const HomeText = styled.p`
	flex: 1 1 0%;
	margin-left: 0.5rem;
	display: inline;
	font-size: 0.875rem;
	line-height: 1.25rem;
`;

export const DropdownIcon = styled(ChevronDownIcon)`
	height: 1rem;
	width: 1rem;
`;

export const SearchBar = styled.form`
	display: none;
	flex: 1 1 0%;
	align-items: center;
	border-width: 1px;
	border-color: #e5e7eb;
	border-radius: 0.125rem;
	padding: 0.25rem 0.75rem;
	background-color: #f3f4f6;

	@media (min-width: 525px) {
		display: flex;
	}

	& > * {
		margin-left: 0.5rem;
	}
`;

export const Search = styled(SearchIcon)`
	height: 1.5rem;
	width: 1.5rem;
	color: #9ca3af;
`;

export const SearchInput = styled.input.attrs({
	type: 'text',
	placeholder: 'Search Reddit'
})`
	flex: 1 1 0%;
	background-color: transparent;
	outline: 2px solid transparent;
	outline-offset: 2px;
`;

export const SearchButton = styled.button.attrs({ type: 'submit' })``;

export const IconContainer = styled.div`
	color: #1a1a1b;
	align-items: center;
	margin: 0 1.25rem;
	display: none;

	& > * {
		margin-left: 0.5rem;
	}

	@media (min-width: 1024px) {
		display: inline-flex;
	}
`;

const iconStyles = css`
	height: 2rem;
	width: 2rem;
	cursor: pointer;
	border-radius: 0.125rem;

	@media (min-width: 1024px) {
		padding: 0.25rem;
	}

	&:hover {
		background-color: #f3f4f6;
	}
`;

export const Sparkles = styled(SparklesIcon)`
	${iconStyles}
`;

export const Globe = styled(GlobeIcon)`
	${iconStyles}
`;

export const VideoCamera = styled(VideoCameraIcon)`
	${iconStyles}
`;

export const Chat = styled(ChatIcon)`
	${iconStyles}
`;

export const Bell = styled(BellIcon)`
	${iconStyles}
`;

export const Plus = styled(PlusIcon)`
	${iconStyles}
`;

export const Speakerphone = styled(SpeakerphoneIcon)`
	${iconStyles}
`;

export const Menu = styled(MenuIcon)`
	${iconStyles}
`;

export const Break = styled.hr`
	height: 2.5rem;
	border-width: 1px;
	border-color: #f3f4f6;
`;

export const MenuContainer = styled.div`
	margin-left: 1.25rem;
	display: flex;
	align-items: center;

	@media (min-width: 1024px) {
		display: none;
	}
`;
