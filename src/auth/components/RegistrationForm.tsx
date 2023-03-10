import { Field, Form } from 'react-final-form';
import { motion } from 'framer-motion';
import { useMutation } from '@blitzjs/rpc';
import signup from '../mutations/signup';
import { FORM_ERROR, FormApi } from 'final-form';

type SignupFormValues = {
  email: string;
  password: string;
};

const errorVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -10 },
};

export const RegistrationForm = () => {
  const [signUpMutation] = useMutation(signup);
  const validate = (values: SignupFormValues) => {
    const errors: Partial<SignupFormValues> = {};

    if (!values.email) {
      errors.email = 'Email is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const onSubmit = async (
    values: SignupFormValues,
    form: FormApi<SignupFormValues, Partial<SignupFormValues>>,
  ) => {
    try {
      await signUpMutation(values);
      form.reset();
    } catch (error) {
      console.log(error);
      form.reset();

      return { [FORM_ERROR]: error.message };
    }
  };

  return (
    <Form onSubmit={onSubmit} validate={validate}>
      {({ handleSubmit, submitting, pristine, invalid, errors, touched, submitError }) => (
        <form onSubmit={handleSubmit} className={'p-4 rounded-lg'}>
          <div className={'mb-4'}>
            <label htmlFor={'email'} className={'block mb-2 font-bold text-white'}>
              Email
            </label>
            <Field
              name={'email'}
              component={'input'}
              type={'email'}
              placeholder={'Enter your email'}
              className={`w-full px-3 py-2 bg-gray-900 border border-blue-900 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors?.email ? 'border-pink-500' : ''
              }`}
            />
            <motion.div
              variants={errorVariants}
              initial={'hidden'}
              animate={errors?.email && touched?.email ? 'visible' : 'hidden'}
              className={'text-pink-500 mt-1 text-sm'}
            >
              {errors?.email}
            </motion.div>
          </div>
          <div className={'mb-4'}>
            <label htmlFor={'password'} className={'block mb-2 font-bold text-white'}>
              Password
            </label>
            <Field
              name={'password'}
              component={'input'}
              type={'password'}
              placeholder={'Enter your password'}
              className={`w-full px-3 py-2 bg-gray-900 border border-blue-900 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors?.password && touched?.password ? 'border-pink-500' : ''
              }`}
            />
            <motion.div
              variants={errorVariants}
              initial={'hidden'}
              animate={errors?.password && touched?.password ? 'visible' : 'hidden'}
              className={`text-pink-500 mt-1 text-sm ${
                errors?.password ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {errors?.password}
            </motion.div>
          </div>
          <motion.button
            whileHover={submitting || pristine || invalid ? {} : { scale: 1.1 }}
            whileTap={submitting || pristine || invalid ? {} : { scale: 0.9 }}
            type={'submit'}
            className={`uppercase text-center w-full border border-blue-500  text-white font-bold px-8 py-3 rounded-md shadow-lg shadow-blue-500/50 transition-colors duration-200 ease-in-out z-10
              ${invalid ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-500'}`}
            disabled={invalid}
          >
            Register
          </motion.button>
          {submitError && <div className={'error'}>{submitError}</div>}
        </form>
      )}
    </Form>
  );
};
