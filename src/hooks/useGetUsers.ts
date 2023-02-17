import { useQuery } from "react-query";
import { apiService } from "../service/apiService";

const getAllUsers = () => {
  return apiService.get("users");
};

export const useGetUsers = () => {
  return useQuery("all-users", getAllUsers);
};
