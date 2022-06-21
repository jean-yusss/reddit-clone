import styled, { css } from 'styled-components';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';

interface Props {
	$vote?: boolean;
}

export const PostVoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-top-left-radius: 0.375rem;
	border-bottom-left-radius: 0.375rem;
	background-color: #f9fafb;
	padding: 1rem;
	color: #9ca3af;

	& > * {
		margin-top: 0.25rem;
	}
`;

const iconStyles = css`
	height: 1.5rem;
	width: 1.5rem;
	padding: 0.25rem;
	border-radius: 0.375rem;

	&:hover {
		background-color: #e5e7eb;
	}
`;

export const UpvoteIcon = styled(ArrowUpIcon)<Props>`
	${iconStyles}

	&:hover {
		color: #ff4500;
	}

	${({ $vote }) => $vote && `color: #ff4500`}
`;

export const VoteCount = styled.p`
	color: black;
	font-weight: 700;
	font-size: 0.75rem;
	line-height: 1rem;
`;

export const DownvoteIcon = styled(ArrowDownIcon)<Props>`
	${iconStyles}

	&:hover {
		color: #7193ff;
	}

	${({ $vote }) => $vote === false && `color: #7193ff`}
`;
