import React from 'react'
import { 
    
    DropdownContainer, 
    Icon, 
    CloseIcon, 
    DropdownWrapper, 
    DropdownMenu, 
    DropdownLink, 
    DropdownRoute,
    DropBtnWrap 

} from './Dropdown.elements'

const Dropdown = () => {
    return (
        <DropdownContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    <DropdownLink to ='products'>Products </DropdownLink>
                    <DropdownLink to ='about'>About</DropdownLink>
                    <DropdownLink to ='contact'>Contact </DropdownLink>
                </DropdownMenu>
                <DropBtnWrap>
                    <DropdownRoute to='/shop'>Store</DropdownRoute>
                </DropBtnWrap>
                </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
