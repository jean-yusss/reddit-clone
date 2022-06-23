import styled from 'styled-components';

export const HomePageContainer = styled.div`
	max-width: 64rem;
	margin: 1.75rem auto;
`;

export const HomePageContent = styled.div`
	display: flex;
`;

export const FeedContainer = styled.div`
	width: 100%;
`;

export const SubredditContainer = styled.div`
	display: none;
	margin: 0 1.25rem;
	height: fit-content;
	min-width: 300px;
	border-radius: 0.375rem;
	border-width: 1px;
	border-color: #d1d5db;
	background-color: white;

	@media (min-width: 1024px) {
		display: inline;
	}
`;

export const SubredditList = styled.p`
	margin-bottom: 0.25rem;
	padding: 1rem;
	padding-bottom: 0.75rem;
	font-weight: 700;
	text-align: center;
`;
