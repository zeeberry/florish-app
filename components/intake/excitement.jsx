import MultipleChoice from '../shared/multipleChoice';

const Excitement = ({onClick}) => {
  const options = ['Very','Somewhat', 'Meh', 'Not really', 'Not at all'];
  const company = 'Florish';
  return (
    <>
      <MultipleChoice
        onClick={onClick}
        overline='Got it.'
        title={`How excited are you about working for ${company}`}
        options={options}
        buttonText='Next'
        name='interviewType'
      />
    </>
  );
};

export default Excitement;
