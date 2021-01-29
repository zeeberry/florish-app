import ShortText from '../shared/shortText';

const Name = ({onClick}) => {
  return (
    <>
      <ShortText
        onClick={onClick}
        overline={`Let's get started`}
        title={`What's your name?`}
        buttonText='Next'
      />
    </>
  );
};

export default Name;
