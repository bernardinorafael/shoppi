import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	body {
		background: ${({ theme }) => theme.COLORS.primary[1000]};		
		color: ${({ theme }) => theme.COLORS.primary[100]};
		-webkit-font-smoothing: antialiased;
	}
	
	body, input, select, textarea, button {
		font-family: ${({ theme }) => theme.FONT_FAMILY.sans};
		font-weight: 400;
		font-size: .875rem;
	}
	
	a {
		text-decoration: none;
		color: inherit;
	}
	
	button {
		cursor: pointer;
	}
	
	::-webkit-scrollbar {
		width: .5rem;
		background: ${({ theme }) => theme.COLORS.primary[700]};
	}

	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.COLORS.primary[400]};
	}
	
	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
