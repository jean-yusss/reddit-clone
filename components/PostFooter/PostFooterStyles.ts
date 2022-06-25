import styled, { css } from 'styled-components';

import {
	BookmarkIcon,
	ChatAltIcon,
	DotsHorizontalIcon,
	GiftIcon,
	ShareIcon
} from '@heroicons/react/outline';

export const PostFooterContainer = styled.div`
	display: flex;
	color: #9ca3af;

	& > * {
		margin-left: 1rem;
	}
`;

export const PostButtonContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 600;
	padding: 0.5rem;
	cursor: pointer;
	border-radius: 0.125rem;

	&:hover {
		background-color: #f3f4f6;
	}

	& > * {
		margin-left: 0.25rem;
	}
`;

const iconStyles = css`
	height: 1rem;
	width: 1rem;

	@media (min-width: 380px) {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

export const Chat = styled(ChatAltIcon)`
	${iconStyles}
`;

export const Gift = styled(GiftIcon)`
	${iconStyles}
`;

export const Share = styled(ShareIcon)`
	${iconStyles}
`;

export const Bookmark = styled(BookmarkIcon)`
	${iconStyles}
`;

export const Dots = styled(DotsHorizontalIcon)`
	${iconStyles}
`;

export const FooterText = styled.p`
	display: none;
	font-size: 0.75rem;
	line-height: 1rem;

	@media (min-width: 580px) {
		display: inline;
	}
`;
