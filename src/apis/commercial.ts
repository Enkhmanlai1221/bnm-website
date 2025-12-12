import { HttpRequest } from "@/utils/request";

const httpRequest = new HttpRequest(null, "/web");

export const list = async (data: any) => {
  const { count, rows } = await httpRequest.get("/commercials", data);

  return {
    count: count,
    rows: rows.map((item: any) => item),
  };
};

export const get = async (id: string) => {
  return httpRequest.get(`/commercials/${id}`);
};
