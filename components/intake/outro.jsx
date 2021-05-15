import Statement from '../shared/statement';

const Outro = ({ onClick }) => {
  return (
    <>
      <Statement
        onClick={onClick}
        overline={`It's ok to be nervous. You got this.`}
        title={`We'll checkin with you after your interview.`}
        buttonText='Ok!'
        href='/dashboard'
      />
    </>
  );
};

export default Outro;
