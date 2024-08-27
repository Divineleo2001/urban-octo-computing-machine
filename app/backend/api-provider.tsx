import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

export const queryClient = new QueryClient();

export function APIProvider({ children }: { children: React.ReactNode }) {
  useReactQueryDevTools(queryClient);
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

const userAuthToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX01BTkFHRVIiXSwic3ViIjoiY29uYW4uZEBnbWFpbC5jb20iLCJpYXQiOjE3MjQ3MzUzNzUsImV4cCI6MTcyNDc1MzM3NX0.puf7mhLQCn2F96GOeXMvlrEO5zcxCChLppqnByM3_gcOD6ybJQCXE3c6FhvUzUHGo8j27wqJnu1NGyiNhEtdag";
export const bearerToken = `Bearer ${userAuthToken}`;
