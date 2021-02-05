import DropDown from '../shared/dropDown';

const InterviewType = ({onClick}) => {
  const options = [
    'Phone Screen',
    'Conversation with Manager',
    'Technical Whiteboarding',
    'Technical Pairing',
    'Technical System Design',
    'Behavioral/Cultural'
  ];
  return (
    <>
      <DropDown
        onClick={onClick}
        overline='Solid.'
        title='What kind of interview is it?'
        options={options}
        buttonText='Next'
        name='type'
        collection='newInterview'
      />
    </>
  );
};

export default InterviewType;
