import { useQuery, useMutation } from "@tanstack/react-query";
import { getSessions, createSession, deleteSession } from "../services/api/endpoints";

export function useGetSessions({ onSuccess = () => {}, onError = () => {} }) {
  return useQuery({
    queryKey: ["sessoes"],
    queryFn: getSessions,
    onSuccess,
    onError,
  });
}

export function useCreateSession({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({
    mutationFn: createSession,
    onSuccess,
    onError,
  });
}

export function useDeleteSession({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({
    mutationFn: deleteSession,
    onSuccess,
    onError,
  });
}
