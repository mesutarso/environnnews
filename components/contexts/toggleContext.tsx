//toogle menu context
import { createContext } from 'react';

type toggleMenuState = {
	toggleMenu: boolean;
	setToggleMenu: (dispatch: any) => void;
};

export const toggleMenuDefaultValue: toggleMenuState = {
	toggleMenu: false,
	setToggleMenu: () => {},
};

export const toggleMenuContext = createContext<toggleMenuState>(
	toggleMenuDefaultValue
);

//toggle search context
type toggleSearchState = {
	toggleSearch: boolean;
	setToggleSearch: (dispatch: any) => void;
};

export const toggleSearchDefaultValue: toggleSearchState = {
	toggleSearch: false,
	setToggleSearch: () => {},
};

export const toggleSearchContext = createContext<toggleSearchState>(
	toggleSearchDefaultValue
);
