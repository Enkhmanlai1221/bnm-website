import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { BeautifulPlace } from "@/models/beautiful-place";
import { Result } from "@/models/result";
import { HttpRequest } from "@/utils/request";

const httpRequest = new HttpRequest(null, "/aut/web/beautiful-places");

export const list = async (data: any) => {
  const res = await httpRequest.get("", data as any);

  return Result.fromJson<IBeautifulPlace>({
    rows: res?.rows?.map((row: IBeautifulPlace) =>
      BeautifulPlace.fromJson(row),
    ),
    count: res?.count,
  });
};

export const get = async (id: string) => {
  const res = await httpRequest.get(`/${id}`);
  return BeautifulPlace.fromJson(res);
};

export const destinationApi = {
  list,
  get,
};
