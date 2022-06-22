import styled from 'styled-components';

const Input = styled.input.attrs({
	type: 'text'
})`
	margin: 0.5rem;
	flex: 1 1 0%;
	background-color: #eff6ff;
	padding: 0.5rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
`;

export const PostBody = styled(Input).attrs({ placeholder: 'Text (optional)' })``;

export const Subreddit = styled(Input).attrs({ placeholder: 'Choose a community' })``;

export const PostImage = styled(Input).attrs({
	placeholder: 'Provide the URL to the image'
})``;
