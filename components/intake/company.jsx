import ShortText from '../shared/shortText';

const Company = ({onClick}) => {
  return (
    <>
      <ShortText
        onClick={onClick}
        overline='Got it'
        title='What company are you interviewing with?'
        buttonText='Next'
        name='company'
      />
    </>
  );
};

export default Company;
