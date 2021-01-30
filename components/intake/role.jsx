import ShortText from '../shared/shortText';

const Role = ({onClick}) => {
  return (
    <>
      <ShortText
        onClick={onClick}
        overline='Oh Cool!'
        title='What role are you applying for?'
        buttonText='Next'
        name='role'
      />
    </>
  );
};

export default Role;
