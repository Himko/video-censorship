import styled, {css} from 'styled-components';

interface IItem {
	isActive: boolean;
} 

export const Item = styled.div<IItem>`
	${({ isActive }) => isActive ? css`
	background-color: #4158D0;
	background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
	`: css`
	background-color: #8EC5FC;
	background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
	`};
	border-radius: 3px;
	cursor: pointer;
	margin:1px;


`