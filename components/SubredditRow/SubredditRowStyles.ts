import styled from 'styled-components';
import { ChevronUpIcon } from '@heroicons/react/solid';

export const SubredditRowContainer = styled.div`
	display: flex;
	align-items: center;
	border-top-width: 1px;
	background-color: white;
	padding: 0.5rem 1rem;
	font-size: 0.875rem;
	line-height: 1.25rem;

	& > * {
		margin-left: 0.5rem;
	}

	&:last-child {
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}
`;

export const RowCount = styled.p``;

export const UpArrowIcon = styled(ChevronUpIcon)`
	height: 1.25rem;
	width: 1.25rem;
	color: #46d160;
	flex-shrink: 0;
`;

export const Subreddit = styled.p`
	flex: 1 1 0%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const ViewButton = styled.div`
	cursor: pointer;
	border-radius: 9999px;
	background-color: #0079d3;
	color: white;
	padding: 0.25rem 0.75rem;
`;
