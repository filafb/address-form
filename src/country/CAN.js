import { POSTAL_CODE } from '../constants'

export default {
  country: 'CAN',
  abbr: 'CA',
  postalCodeFrom: POSTAL_CODE,
  postalCodeProtectedFields: ['state', 'city'],
  fields: [
    {
      name: 'postalCode',
      label: 'postalCode',
      required: true,
      mask: 'A9A 9A9',
      regex: '^[A-z][0-9][A-z]\\ ?[0-9][A-z][0-9]$',
      postalCodeAPI: true,
      forgottenURL:
        'https://www.canadapost.ca/cpo/mc/personal/postalcode/fpc.jsf',
      size: 'small',
    },
    {
      name: 'street',
      label: 'addressLine1',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'complement',
      label: 'addressLine2',
      size: 'xlarge',
    },
    {
      name: 'number',
      label: 'number',
      visible: false,
      defaultValue: 'N/A',
    },
    {
      name: 'city',
      label: 'city',
      required: true,
      size: 'large',
    },
    {
      name: 'state',
      label: 'province',
      required: true,
      size: 'large',
      optionsPairs: [
        { label: 'Alberta', value: 'AB' },
        { label: 'British Columbia', value: 'BC' },
        { label: 'Manitoba', value: 'MB' },
        { label: 'New Brunswick', value: 'NB' },
        { label: 'Newfoundland and Labrador', value: 'NL' },
        { label: 'Northwest Territories', value: 'NT' },
        { label: 'Nova Scotia', value: 'NS' },
        { label: 'Nunavut', value: 'NV' },
        { label: 'Ontario', value: 'ON' },
        { label: 'Prince Edward Island', value: 'PE' },
        { label: 'Quebec', value: 'QC' },
        { label: 'Saskatchewan', value: 'SK' },
        { label: 'Yukon', value: 'YK' },
      ],
    },
  ],
  geolocation: {
    postalCode: {
      valueIn: 'long_name',
      types: ['postal_code'],
      required: false,
    },
    number: { valueIn: 'long_name', types: ['street_number'], required: false },
    street: { valueIn: 'long_name', types: ['route'], required: false },
    neighborhood: {
      valueIn: 'long_name',
      types: [
        'neighborhood',
        'sublocality_level_1',
        'sublocality_level_2',
        'sublocality_level_3',
        'sublocality_level_4',
        'sublocality_level_5',
      ],
      required: false,
    },
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
      required: false,
    },
    city: {
      valueIn: 'long_name',
      types: ['administrative_area_level_2', 'locality'],
      required: false,
    },
  },
}
