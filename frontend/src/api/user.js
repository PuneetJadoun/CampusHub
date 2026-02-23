import { apiFetch } from "./client";

export function getMe() {
  return apiFetch("/api/users/me", {
    method: "GET",
  });
}

export function updateProfile(name) {
  return apiFetch("/api/users/update", {
    method: "PUT",
    body: JSON.stringify({ name }),
  });
}