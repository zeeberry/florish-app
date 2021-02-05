import Email from '../shared/email';

const Company = ({onClick}) => {
  return (
    <>
      <Email
        onClick={onClick}
        overline='Almost done.'
        title='What email shall we reach out to you?'
        buttonText='Next'
        name='email'
        collection='newUser'
      />
    </>
  );
};

export default Company;
