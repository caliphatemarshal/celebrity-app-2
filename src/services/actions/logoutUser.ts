import { authKey } from "@/constants/authKey";
import { deleteCookies } from "./deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { storage } from "@/helpers/storage";

export const logoutUser = async (router: AppRouterInstance) => {
  localStorage.removeItem("data");
  localStorage.removeItem(authKey);
  deleteCookies(["auth_token", "user_data", "permissions"]);
  await storage.remove("auth_token_local");
  await storage.remove("user_data_local");
  router.push("/auth/login");
  // router.refresh();
};
