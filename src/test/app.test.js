import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Enzyme, { mount, shallow } from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act, renderHook } from "@testing-library/react-hooks";
// import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import store from '../store'
import Dashboard from '../Dashboard';

Enzyme.configure({ adapter: new Adapter() });

describe('myComp', () => {
    const fetchWeather = jest.fn();
    let wrapper;

    describe("AppComp", () => {
        // it("should render my component", () => {
        //   const wrapper = shallow(<App />);
        // });
         wrapper = mount(<Provider store = {store}> <App /> </Provider>);
        it('mount then render', () => {
            // console.log(container,"--")
          
           let he = wrapper.find(Dashboard)
           console.log(he,'jnjnj')
             expect(wrapper).not.toBeNull();
        })
        
      });
    it('mount then render', () => {
        // console.log(container,"--")
       let wrapper = mount(<Provider store = {store}> <App /> </Provider>);
       wrapper.find(Dashboard,'jnjnj')
       console.log(wrapper)
         expect(wrapper).not.toBeNull();
    })
})