import MultipleChoice from '../shared/multipleChoice';

const Nerves = ({onClick}) => {
  const options = ['Very','Somewhat', 'Meh', 'Not really', 'Not at all'];
  return (
    <>
      <MultipleChoice
        onClick={onClick}
        overline='Got it.'
        title={`How nervous are you about this interview?`}
        options={options}
        buttonText='Next'
        name='interviewType'
      />
    </>
  );
};

export default Nerves;
