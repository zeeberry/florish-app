import Statement from '../shared/statement';

const Intro = ({onClick}) => {
  return (
    <>
      <Statement 
        onClick={onClick}
        overline='Welcome to Florish! We hear you have an interview scheduled'
        title='Are you ready to take control of your interviews?'
        buttonText={`Let's get started`}
      />
    </>
  );
};

export default Intro;
