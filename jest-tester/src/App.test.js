import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/** 
 * Factory function to create shallow wrapper for the App component
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
*/

const setup = (props={}, state=null) => {
  return shallow( <App {...props} /> )
}

/**
 * Return ShallowWrapper containing node(s) w/ the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without crashing', () => {
 const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
 expect(appComponent.length).toBe(1);
//  console.log(wrapper.debug())
// expect(wrapper).toBeTruthy()
})

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setup();
  initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
})

test('clicking button increments counter display', () => {

})
