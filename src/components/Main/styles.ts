import styled from 'styled-components';

interface IGreenBox {
	width?: number;
	height?: number;
	left?: number;
	top?: number
}

export const PlayerContainer = styled.div`
    display: flex;
    width: fit-content;
		position: relative;
`;

export const GreenBox = styled.div<IGreenBox>`
		background-color: green;
		position: absolute;
		width: ${({ width }) => width ? `${width}px` : '0px'};
		height: ${({ height }) => height ? `${height}px` : '0px'};
		left: ${({ left }) => left ? `${left}px` : '0px'};
		top: ${({ top }) => top ? `${top}px` : '0px'};
`;

export const View = styled.div`
		display: flex;
    flex-direction: row;
    align-items: center;
`