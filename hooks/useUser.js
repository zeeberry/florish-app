import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from "swr";

function fetcher(route) {
  return fetch(route)
    .then((r) => r.json())
    .then(data => {
        return {user: data?.user || null};
    });
};

export default function useUser({ redirectTo, redirectIfFound } = {}) {
    const { data, error } = useSWR('/api/user', fetcher);
    const user = data?.user;
    const finished = !!data;
    const hasUser = !!user;

    useEffect(() => {
        if (!redirectTo || !finished) {
          return;
        }
        else if (!!redirectIfFound === !!hasUser) {
          Router.push(redirectTo);
        }
      }, [redirectTo, redirectIfFound, finished, hasUser]);

    return error ? null : user;
};