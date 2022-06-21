import styled, { css } from 'styled-components';

interface Props {
	$large?: boolean;
}

export const AvatarContainer = styled.div<Props>`
	position: relative;
	height: 2.5rem;
	width: 2.5rem;
	border-radius: 9999px;
	background-color: white;
	border-color: #d1d5db;
	overflow: hidden;

	${({ $large }) =>
		$large &&
		css`
			height: 5rem;
			width: 5rem;
		`}
`;
