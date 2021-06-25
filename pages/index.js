import { useState } from 'react';
import Name from '../components/intake/name';
import InterviewDate from '../components/intake/interviewDate';
import Company from '../components/intake/company';
import Role from '../components/intake/role';
import InterviewType from '../components/intake/interviewType';
import Excitement from '../components/intake/excitement';
import Nerves from '../components/intake/nerves';
import Contact from '../components/intake/contact';
import Outro from '../components/intake/outro';
import { Content } from '../components/shared/elements';
import { createAccount } from '../graphql/api';
import { useContext, useEffect } from 'react';
import Context from '../store/context';

export default function Home() {
  const [step, setStep] = useState(0);
  const context = useContext(Context);
  const form = [
    Name,
    Contact,
    InterviewDate,
    Company,
    Role,
    Excitement,
    InterviewType,
    Nerves,
    Outro
  ];
  const FormStep = form[step];

  useEffect(()=> {
    if (step + 1 === form.length) {
      const state = context.state;
      const {name, email} = state.user;
      const {company, role, currentExcitement} = state.application;
      const {date, type, notes, nerves} = state.interview;

      createAccount(email, name, company, role, date, type, notes, currentExcitement, nerves)
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.log(`boo :( ${error}`)
          alert('🤷<200d>♀️')
        });
    }
  }, [step]);
  
  const onClick = (data) => {
    const nextStep = step + 1;
    if (form[nextStep]) {
      setStep(step + 1);
    }
  };

  return (
    <Content>
      <FormStep onClick={onClick} />
    </Content>
  );
};
