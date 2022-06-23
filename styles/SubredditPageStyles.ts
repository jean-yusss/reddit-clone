import styled from 'styled-components';

export const SubredditPageContainer = styled.div`
	height: 6rem;
	background-color: #f87185;
	padding: 2rem;
`;

export const SubredditHeaderContainer = styled.div`
	margin: 0 -2rem;
	margin-top: 2.5rem;
	background-color: white;
`;

export const SubredditHeader = styled.div`
	margin: 0 auto;
	display: flex;
	max-width: 64rem;
	align-items: center;
	padding-bottom: 0.75rem;

	& > * {
		margin-left: 1rem;
	}
`;

export const AvatarContainer = styled.div`
	margin-top: -1.25rem;
`;

export const SubredditInfo = styled.div`
	padding: 0.5rem 0;
`;

export const SubredditTitle = styled.h1`
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 600;
`;

export const SubredditName = styled.p`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: #9ca3af;
`;

export const FeedContainer = styled.div`
	margin: 1.25rem auto 2.5rem auto;
	max-width: 64rem;
`;
