import styled from 'styled-components';
import PropTypes from 'prop-types';
import ApplicationListItem from './applicationListItem';

const Section = styled.section`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  background: black;
  color: white;
  padding: 1em;
  min-height: 21em;
  width: 18em;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 4em;
`;

const Link = styled.a`
  color: white;
  letter-spacing: 0.05em;
  font-size: 0.9em;

  &:active {
    color: white;
  }
`;

const Header = styled.h1`
  margin: 0;
  font-size: 0.9em;
  font-weight: normal;
  text-transform: uppercase;
`;

const List = styled.ul`
  margin-top: 4em;
`;

export default function ApplicationList({applications}) {

  return (
    <Section>
      <Header>Your Notes</Header>
      <List>
        {applications.map((application, index)=> 
          <ApplicationListItem 
            key={application} 
            label={application} 
            selected={index === 0} />
        )}
      </List>
      <LinkWrapper>
        <Link href=''>+ Add Application</Link>
      </LinkWrapper>
    </Section>
  );
};

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.string).isRequired
};
