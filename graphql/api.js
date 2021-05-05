import useFetch from '../hooks/useFetch'

function getData(data) {
  if (!data || data.errors) return null
  return data.data
}

function getErrorMessage(error, data) {
  if (error) return error.message
  if (data && data.errors) {
    return data.errors[0].message
  }
  return null
}

export const getProfileByEmail = async (email) => {
  const query = `query AccountByEmail($email: String!) {
    accountByEmail(email: $email) {
      data {
        _id
        _ts
        email
        role
        profile {
          name
          applications {
            data {
              company
              role
              interviews {
                data {
                  type
                }  
              }
            }
          }
        }
      }
      after
    }
  }`

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { email },
    }),
  });

  const data = await res.json();

  return data;
}

export const createAccount = async (email, name, company, role, date, type, notes) => {
  const query = `mutation CreateAccount($email: String!, $name: String!, $company: String!, $role: String!, $date: String!, $type: String!, $notes: String!) {
    createAccount(data: {
      email: $email
      profile: {
        create: { 
          name: $name
          applications: {
            create: {
              company: $company  
              role: $role
              initialExcitement: 1
              currentExcitment: 3 
              interviews: {
                create: {
                  date: $date 
                  type: $type
                  nerves: 4 
                  notes: $notes
                  excitement: 2
                }
              }
            }
          }
        }
      }
    }) {
      _id
      _ts
      email
    }
  }`

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { email, name, company, role, date, type, notes},
    }),
  });
  const data = await res.json();

  return data;
};

//Future TODO: make query more dynamic for pagination
export const allProfilesInfo = () => {
  const query = `query allProfilesInfo {
      allProfilesInfo(_size: 25){
        data {
          account {
            email
          }
          _id
          name
          applications {
            data {
              _id
              company
              role
              interviews {
                data {
                  _id
                  type
                  date
                }
              }
            }
          }
        }
    }
  }`;

  const { data, error } = useFetch(
    process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query
      }),
    }
  );

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  };
};
