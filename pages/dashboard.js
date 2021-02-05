import styled from 'styled-components';
import { useContext } from 'react';
import Context from '../store/context';

export default function Dashboard() {
  const { state } = useContext(Context);
  return (
    <>
      {state.user.name}
    </>
  );
};
