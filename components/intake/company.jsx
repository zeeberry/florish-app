import { useContext } from 'react';
import Context from '../../store/context';
import DoubleInput from '../shared/doubleInput';

const Company = ({onClick}) => {
  const context = useContext(Context);
  const handleClick = (values) => {
    context.dispatch({
      type: 'application/setCompanyAndRole',
      payload: values
    });
    onClick();
  };
  const inputs = [{
    label: 'Company',
    name: 'company'
  },
  {
    label: 'Role',
    name: 'role'
  }];
  return (
    <>
      <DoubleInput
        onClick={handleClick}
        overline={['Sweet, your account has been created successfully.','Now, let’s get some information about your upcoming interview.']}
        title= 'What role and company are you applying for?'
        buttonText= 'Next'
        inputs={inputs}
      />
    </>
  );
};

export default Company;
