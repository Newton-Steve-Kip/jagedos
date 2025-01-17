import { CustomerSignUpFormSchema } from '@/utils/validators/custom-signup.schema';
import { FaDoorClosed } from 'react-icons/fa';

// here's where you specify the steps
// note: if the fields don't match the inputs that you have in the steps file,
// the output variable inside custom-multi-step-form/index.tsx will be false,
// and it won't take you to the next step

export const customerSteps = [
  {
    id: 'Step 1',
    name: 'Personal Information',
    fields: [
      'type',
      'organizationName',
      'firstName',
      'lastName',
      'phone',
      'email',
    ],
  },

  {
    id: 'Step 2',
    name: 'Address',
    fields: ['country', 'county', 'subCounty', 'estate'],
  },
  {
    id: 'Step 3',
    name: 'Password',
    fields: ['password', 'confirmPassword'],
  },
  {
    id: 'Step 4',
    name: 'Verification',
    fields: ['accountVerification'],
  },
];

// set initial values for the form fields here
export const customerInitialValues: CustomerSignUpFormSchema = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  type: '',
  organizationName: '',
  phone: '',
  country: '',
  county: '',
  subCounty: '',
  estate: '',
  accountVerification: '',
  termsAndConditions: false,
  privacyPolicy: false,
  refundPolicy: false,
};

// if there's any 'Select' inputs, specify the values here
export const type = [
  {
    label: 'Organization',
    value: 'organization',
  },
  {
    label: 'Individual',
    value: 'individual',
  },
];

// export const gender = [
//   {
//     label: 'Male',
//     value: 'male',
//   },
//   {
//     label: 'Female',
//     value: 'female',
//   },
// ];

export const country = [
  {
    label: 'Kenya',
    value: 'kenya',
  },
  {
    label: 'Uganda',
    value: 'uganda',
  },
];

export const county = [
  {
    label: 'Kisumu',
    value: 'kisumu',
  },
  {
    label: 'Nairobi',
    value: 'nairobi',
  },
];

export const subCounty = [
  {
    label: 'Kisumu Central',
    value: 'kisumu central',
  },
  {
    label: 'Kisumu East',
    value: 'kisumu east',
  },
];
