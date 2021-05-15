import { useContext } from 'react';
import Context from '../../store/context';
import ShortText from '../shared/shortText';

const Company = ({ onClick }) => {
  const context = useContext(Context);
  const handleClick = (company) => {
    context.dispatch({
      type: 'application/setCompany',
      payload: company,
    });
    onClick();
  };
  return (
    <>
      <ShortText
        onClick={handleClick}
        overline='Got it'
        title='What company are you interviewing with?'
        buttonText='Next'
        name='company'
      />
    </>
  );
};

export default Company;
