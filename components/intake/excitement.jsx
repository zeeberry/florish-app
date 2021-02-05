import MultipleChoice from '../shared/multipleChoice';

const Excitement = ({onClick}) => {
  const options = ['Not at all', 'Not really', 'Meh', 'Somewhat', 'Very'];
  const company = 'Florish';
  return (
    <>
      <MultipleChoice
        onClick={onClick}
        overline='Got it.'
        title={`How excited are you about working for ${company}`}
        options={options}
        buttonText='Next'
        name='initialExcitement'
        collection='newApplication'
      />
    </>
  );
};

export default Excitement;
