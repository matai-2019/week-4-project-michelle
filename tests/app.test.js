import React from 'react'
import { mount } from 'enzyme'

import App from '../client/components/App'
import Home from '../client/components/Home'
import Question from '../client/components/Question'

test('<App />', () => {
  const expected = 'Anti-personality Test'
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})

test('<App /> contains <Home />', () => {
  const expected = true
  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(Home)

  expect(actual).toBe(expected)
})

test('<App /> contains <Question />', () => {
  const expected = true
  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(Question)

  expect(actual).toBe(expected)
})