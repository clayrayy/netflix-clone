import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    padding: 70px 56px;
    margin: auto;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;
`

export const Column = styled.div`
    display: flex; 
    flex-direction: column;
    text-align: left;
`

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`

export const Text = styled.p`
    color: #757575;
    font-size: 13px;
    margin-bottom: 40px;
`

export const Break = styled.div`

`



// import { Container, Row, Column, Link, Title, Break } from './styles/footer'
