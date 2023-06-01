import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetListOrgs() {
  return useQuery(["listOrgs"], () =>
    axios
      .get(`https://fastapi1-1-s9258384.deta.app/unique-orgs`)
      .then((res) => res.data)
  );
}
export function useGetLastNews() {
  return useQuery(["lastNews"], () =>
    axios
      .get(`https://fastapi1-1-s9258384.deta.app/orgs`)
      .then((res) => res.data)
  );
}
