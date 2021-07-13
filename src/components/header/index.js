import React, { useState } from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Group,
  Link,
  Text,
  Feature,
  FeatureCallOut,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Picture,
  Dropdown,
  Profile,
  SignOutButton,
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}
Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return( 
        <ReachRouterLink to={to} >
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.SignOutButton = function HeaderSignOutButton({ children, ...restProps }) {
    return <SignOutButton {...restProps}>{children}</SignOutButton>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)
    return (
    <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive(!searchActive)}>
            <img src='/images/icons/search.png' alt='search'/>
        </SearchIcon>
        <SearchInput
            value={searchTerm}
            onChange={({target}) => setSearchTerm(target.value)}
            placeholder='Search Movies and Shows'
            active={searchActive} />
    </Search>)
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture src={`./images/users/${src}.png`} {...restProps} />
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
}
