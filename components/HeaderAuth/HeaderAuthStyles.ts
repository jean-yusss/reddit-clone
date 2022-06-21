import styled from 'styled-components';
import { ChevronDownIcon } from '@heroicons/react/outline';

export const HeaderAuthContainer = styled.div`
	display: none;
	align-items: center;
	border-width: 1px;
	border-color: #f3f4f6;
	padding: 0.5rem;
	cursor: pointer;

	@media (min-width: 1024px) {
		display: flex;
	}

	& > * {
		margin-left: 0.5rem;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 1.5rem;
	width: 1.5rem;
	flex-shrink: 0;
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.75rem;
	line-height: 1rem;
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UserName = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Karma = styled.p`
	color: #9ca3af;
`;

export const ChevronDown = styled(ChevronDownIcon)`
	height: 1rem;
	flex-shrink: 0;
	color: #9ca3af;
	margin-left: 5rem;
`;

export const SignIn = styled.p`
	color: #9ca3af;
`;
