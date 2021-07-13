import React, { useState } from 'react'
import { OptForm, Feature } from '../components'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'

import { HeaderContainer } from '../containers/header'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  const [userEmail, setUserEmail] = useState('')

  const handleChange = (e) => {
    setUserEmail(e.target.value)
  }

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input
              value={userEmail}
              onChange={handleChange}
              placeholder='Email Address'
            />
            <OptForm.Button
              onClick={() => history.push({ pathname: './signup', userEmail })}
            >
              Get Started
            </OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
