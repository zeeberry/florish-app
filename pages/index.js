import { useState } from 'react';
import Intro from '../components/intake/intro';
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

export default function Home() {
  const [step, setStep] = useState(0);
  const form = [
    Intro, 
    Name,
    InterviewDate,
    Company,
    Role,
    Excitement,
    InterviewType,
    Nerves,
    Contact,
    Outro
  ];
  const FormStep = form[step];
  
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
