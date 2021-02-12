import Statement from '../shared/statement';
import { createGuestbookEntry } from '../../graphql/api';

const Outro = ({onClick}) => {
  const handle = 'paal';
  const story = 'yoo whyyy is htis a this'
  const handleClick = () => {
    console.log('HERE');
    createGuestbookEntry(handle, story)
      .then((data) => {
        console.log(data.data.createGuestbookEntry);
      })
      .catch((error) => {
        console.log(`boo :( ${error}`)
        alert('🤷<200d>♀️')
      });
  };
  return (
    <>
      <Statement 
        onClick={handleClick}
        overline={`It's ok to be nervous. You got this.`}
        title={`We'll checkin with you after your interview.`}
        buttonText='Ok!'
        href=''
      />
    </>
  );
};

export default Outro;
