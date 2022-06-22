import styled from 'styled-components';

export const JellyContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	padding: 2.5rem;
	font-size: 1.25rem;
	line-height: 1.75rem;
`;

export const PostContainer = styled.div`
	display: flex;
	cursor: pointer;
	border-radius: 0.375rem;
	border-width: 1px;
	border-color: #d1d5db;
	background-color: white;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

	&:hover {
		border-color: #4b5563;
	}
`;

export const Post = styled.div`
	padding: 0.75rem;
	padding-bottom: 0.25rem;
`;

export const PostInfoContainer = styled.div`
	display: flex;
	align-items: center;

	& > * {
		margin-left: 0.5rem;
	}
`;

export const PostInfo = styled.p`
	font-size: 0.75rem;
	line-height: 1rem;
	color: #9ca3af;
`;

export const Subreddit = styled.span`
	font-weight: 700;
	color: black;

	&:hover {
		color: #60a5fa;
		text-decoration: underline;
	}
`;

export const PostContent = styled.div`
	padding: 1rem 0;
`;

export const PostTitle = styled.h2`
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 500;
`;

export const PostBody = styled.p`
	margin-top: 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 300;
`;

export const PostImage = styled.img.attrs({ alt: '' })`
	width: 100%;
`;
