import { IAddress } from "@/interfaces/address";
import { Address } from "@/models/address";
import { HttpRequest } from "@/utils/request";

const httpRequest = new HttpRequest(null, "/app");

export const list = async (data: any) => {
  return httpRequest.get("/address", data);
};

export const create = async (data: any) => {
  const res = await httpRequest.post("/address", data);

  return Address.fromJson(res);
};

export const update = async (id: string, data: any) => {
  const res = await httpRequest.put(`/address/${id}`, data);

  return Address.fromJson(res);
};

export const remove = async (id: string) => {
  const res = await httpRequest.del(`/address/${id}`);

  return res;
};
