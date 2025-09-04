import { IAddress } from "@/interfaces/address";

export class Address implements IAddress {
  _id: string;
  user: string;
  type: string; // CITIZEN, ORGANIZATION
  firstName : string;
  lastName : string;
  orgName : string;
  orgRegisterNo: string;
  phone : number;
  phoneSecond : number;
  province : string;
  provinceName : string;
  district : string;
  districtName : string;
  khoroo : string;
  khorooName : string;
  address : string;
  isMain: boolean;

  constructor({
    _id,
    user,
    type,
    firstName ,
    lastName ,
    orgName ,
    orgRegisterNo,
    phone ,
    phoneSecond ,
    province ,
    provinceName ,
    district ,
    districtName ,
    khoroo ,
    khorooName ,
    address ,
    isMain,
  }: IAddress) {
    this._id = _id;
    this.user = user;
    this.type = type;
    this.firstName = firstName;
    this.lastName = lastName;
    this.orgName = orgName;
    this.orgRegisterNo = orgRegisterNo;
    this.phone = phone;
    this.phoneSecond = phoneSecond;
    this.province = province;
    this.provinceName = provinceName;
    this.district = district;
    this.districtName = districtName;
    this.khoroo = khoroo;
    this.khorooName = khorooName;
    this.address = address;
    this.isMain = isMain;
  }

  static fromJson(json: any) {
    return new Address(json);
  }
}
