import styled from 'styled-components';
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline';

interface PhotoProps {
	$imageBoxOpen: boolean;
}

export const PostBoxContainer = styled.form`
	top: 4rem;
	z-index: 50;
	background-color: white;
	border-width: 1px;
	border-color: #d1d5db;
	border-radius: 0.375rem;
	padding: 0.5rem;
`;

export const PostBox = styled.div`
	display: flex;
	align-items: center;

	& > * {
		margin-left: 0.75rem;
	}
`;

export const PostTitle = styled.input.attrs({
	type: 'text'
})`
	padding: 0.5rem;
	padding-left: 1.25rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
	border-radius: 0.375rem;
	flex: 1 1 0%;
	background-color: #f9fafb;
`;

export const PhotoIcon = styled(PhotographIcon)<PhotoProps>`
	height: 1.5rem;
	color: #d1d5db;
	cursor: pointer;

	${({ $imageBoxOpen }) => $imageBoxOpen && 'color: #93c5fd'}
`;

export const Link = styled(LinkIcon)`
	height: 1.5rem;
	color: #d1d5db;
`;

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

export const PopupContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0;
`;

export const ErrorContainer = styled.div`
	padding: 0.5rem;
`;

export const Error = styled.p`
	color: #ff4444;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
	width: 100%;
	border-radius: 9999px;
	padding: 0.5rem;
	color: white;
	background-color: #60a5fa;
`;
