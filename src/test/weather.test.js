import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Enzyme, { mount, shallow } from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act, renderHook } from "@testing-library/react-hooks";
// import Adapter from 'enzyme-adapter-react-16'
import Weather from '../Weather'

Enzyme.configure({ adapter: new Adapter() });

describe('myComp', () => {
    const fetchWeather = jest.fn();
    const weatherDetails = {
            name:'erode',
            weather:[
                {
                    icon:'02d'
                }
            ],
            main:{
                temp:296.15,
                temp_min:296.15
            },
            wind:{
                speed:3.14
            }
        }
    
    let wrapper;





    describe("MyComponent", () => {
        it("should render my component", () => {
          const wrapper = shallow(<Weather />);
        });
      });
    it('mount then render', () => {
        // console.log(container,"--")
        wrapper = mount(<Weather  weatherDetails = {weatherDetails} />);
       
      const  container  = wrapper.find('Your entered location is');
    //   expect(wrapper.render()).toMatchSnapshot();
      console.log(container,"---",wrapper)
         expect(wrapper).not.toBeNull();
    })

    // it("renders without crashing", () => {
    //     const { result } = renderHook(App);
    //     console.log(result.all)
    //     const div = document.createElement("div");
    //     ReactDOM.render(<App />, div);
    //     ReactDOM.unmountComponentAtNode(div);
    //   });
})