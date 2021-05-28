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

export const accountByEmail = async (email) => {
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
              _id
              company
              role
              interviews {
                data {
                  _id
                  date
                  type
                  nerves
                  excitement
                  notes
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

  return {
    data: getData(data),
    errorMessage: getErrorMessage(null, data)
  };
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
      variables: { email, name, company, role, date, type, notes },
    }),
  });

  const data = await res.json();

  return {
    data: getData(data),
    errorMessage: getErrorMessage(null, data)
  };
};

export const allProfilesInfo = async () => {
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

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query
    }),
  });

  const data = await res.json();

  return {
    data: getData(data),
    errorMessage: getErrorMessage(null, data)
  };
};

export const allApplicationsInfo = async () => {
  const query = `query allApplicationsInfo {
    allApplicationsInfo(_size: 8) {
      data {
        _id
        company
      }
    }
  }`;

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      query
    })
  });

  const data = await res.json();

  return {
    data: getData(data),
    errorMessage: getErrorMessage(null, data)
  };
};

export const findApplicationByID = async (id) => {
  const query = `query findApplicationByID($id: ID!){
    findApplicationByID(id: $id){
      company
      role
      profile {
        name
        account{
          email
        }
      }
    }
  }`;

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { id }
    }),
  });

  const data = await res.json();

  return {
    data: getData(data),
    errorMessage: getErrorMessage(null, data)
  };
};

export const updateApplication = async (id, company, role, currentExcitement) => {
  const query = `mutation updateApplication($id: ID!, $company: String!, $role: String!, $currentExcitement: Int!) {
    updateApplication(id: $id, data:{
      company: $company
      role: $role
      currentExcitment: $currentExcitement
      }){
          currentExcitment
        }
  }`;

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { id, company, role, currentExcitement },
    }),
  });

  const data = await res.json();

  return {
    data: getData(data),
    errorMessage: getErrorMessage(null, data)
  };
};

export const updateInterviewNotes = async (id, notes, date, type) => {
  const query = `mutation updateInterviewNotes($id: ID!, $notes: String!, $date: String!, $type: String!) {
    updateInterview(id: $id, data:{
      date: $date
      type: $type
      notes: $notes
      }){
    			notes
        }
  }`;

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { id, notes, date, type },
    }),
  });

  const data = await res.json();

  return {
    data: getData(data),
    errorMessage: getErrorMessage(null, data)
  };
};