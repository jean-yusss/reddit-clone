import styled from 'styled-components';

export const PostPageContainer = styled.div`
	margin: 1.75rem auto;
	max-width: 64rem;
`;

export const CommentBoxContainer = styled.div`
	border-bottom-left-radius: 0.375rem;
	border-bottom-right-radius: 0.375rem;
	border-width: 1px;
	border-color: #d1d5db;
	border-top-width: 0px;
	background-color: white;
	padding: 1.25rem;
	padding-left: 4rem;
	margin-top: -0.25rem;
`;

export const CommentAs = styled.p`
	font-size: 0.875rem;
	line-height: 1.25rem;
	margin-bottom: 0.25rem;
`;

export const UserName = styled.span`
	color: #0fbdff;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

export const CommentBox = styled.form`
	display: flex;
	flex-direction: column;

	& > * {
		margin-top: 0.5rem;
	}
`;

export const CommentInput = styled.textarea`
	height: 8rem;
	border-radius: 0.375rem;
	border-width: 1px;
	padding: 0.5rem;
	padding-left: 1rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
	border-color: #e5e7eb;

	&:disabled {
		background-color: #f9fafb;
	}
`;

export const CommentButton = styled.button.attrs({ type: 'submit' })`
	border-radius: 9999px;
	background-color: #0fbdff;
	padding: 0.75rem;
	font-weight: 600;
	color: white;

	&:disabled {
		background-color: #e5e7eb;
	}
`;

export const Comments = styled.div`
	border-bottom-left-radius: 0.375rem;
	border-bottom-right-radius: 0.375rem;
	border-width: 1px;
	border-top-width: 0px;
	border-color: #d1d5db;
	background-color: white;
	padding: 1.25rem 2.5rem;
	margin: -1.25rem 0;
`;

export const LineBreak = styled.hr`
	padding: 0.5rem 0;
`;

export const CommentContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	& > * {
		margin-left: 0.25rem;
		margin-top: 1.25rem;
	}
`;

export const Line = styled.hr`
	position: absolute;
	top: 2.5rem;
	left: 1.75rem;
	z-index: 0;
	height: 4rem;
	border-width: 1px;
`;

export const AvatarContainer = styled.div`
	z-index: 50;
`;

export const PostedCommentContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PostedCommentInfo = styled.p`
	padding: 0.5rem 0;
	font-size: 0.75rem;
	line-height: 1rem;
	color: #9ca3af;
`;

export const CommentBy = styled.span`
	font-weight: 600;
	color: #4b5563;
`;

export const CommentText = styled.p`
	font-weight: 300;
`;
