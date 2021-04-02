import styled from 'styled-components';
import PropTypes from 'prop-types';
import ApplicationListItem from './applicationListItem';

const Section = styled.section`
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white };
  max-width: 18em;
  flex: 1;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`;

const Link = styled.a`
  color: white;
  letter-spacing: 0.05em;
  font-size: 0.9em;

  &:active {
    color: white;
  }
`;

const List = styled.ul`
  margin; 1em 0; 
`;

const UserProfile = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.lightPurple };
`;

const RightColumn = styled.div`
  margin-left: 1em;
`;

const Image = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: ${(props) => props.theme.white };
`;

const Name = styled.div`
`;

const Email = styled.div`
  font-size: 0.9em;
`;
export default function ApplicationList({applications}) {

  return (
    <Section>
      <UserProfile>
        <Image />
        <RightColumn>
          <Name>Shireen Miraji</Name>
          <Email>khobra.z@gmail.com</Email>
        </RightColumn>
      </UserProfile>
      <LinkWrapper>
        <Link href=''>+ Add Application</Link>
      </LinkWrapper>
      <List>
        {applications.map((application, index)=> 
          <ApplicationListItem 
            key={application} 
            label={application} 
            selected={index === 0} />
        )}
      </List>
    </Section>
  );
};

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.string).isRequired
};
