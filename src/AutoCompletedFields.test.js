import React from 'react'
import { shallow } from 'enzyme'
import AutoCompletedFields from './AutoCompletedFields'
import newAddress from './__mocks__/newAddress'
import usePostalCode from './country/__mocks__/usePostalCode'

describe('AutoCompletedFields', () => {
  it('renders without crashing', () => {
    shallow(
      <AutoCompletedFields
        rules={usePostalCode}
        address={newAddress}
        onChangeAddress={jest.fn()}
      />
    )
  })

  it("should render nothing if there's no autocompleted fields", () => {
    const wrapper = shallow(
      <AutoCompletedFields
        rules={usePostalCode}
        address={newAddress}
        onChangeAddress={jest.fn()}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })

  describe('', () => {
    const state = 'RJ'
    const city = 'Rio de Janeiro'
    const neighborhood = 'Botafogo'
    const onChangeAddress = jest.fn()
    const address = {
      ...newAddress,
      state: { value: state },
      city: { value: city, geolocationAutoCompleted: true },
      neighborhood: { value: neighborhood, postalCodeAutoCompleted: true },
    }

    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <AutoCompletedFields
          rules={usePostalCode}
          address={address}
          onChangeAddress={onChangeAddress}
        />
      )
    })

    it('AddressSummary component', () => {
      const AddressSummary = wrapper.find('AddressSummary')

      expect(AddressSummary).toHaveLength(1)
    })

    it('only the autocompleted fields', () => {
      const AddressSummary = wrapper.find('AddressSummary')

      expect(AddressSummary.prop('address').city).toBe(city)
      expect(AddressSummary.prop('address').neighborhood).toBe(neighborhood)
      expect(AddressSummary.prop('address').state).toBe(undefined)
    })

    it('should remove auto completed properties from fields when click change', () => {
      const linkChange = wrapper.find('.link-edit')
      onChangeAddress.mockClear()

      linkChange.simulate('click', { preventDefault() {} })

      expect(onChangeAddress).toHaveBeenCalled()

      const onChangeAddressArgument = onChangeAddress.mock.calls[0][0]

      expect(onChangeAddressArgument.state).toHaveProperty('value', state)
      expect(onChangeAddressArgument.state).toHaveProperty(
        'geolocationAutoCompleted',
        undefined
      )
      expect(onChangeAddressArgument.city).toHaveProperty('value', city)
      expect(onChangeAddressArgument.state).toHaveProperty(
        'postalCodeAutoCompleted',
        undefined
      )
    })
  })
})
