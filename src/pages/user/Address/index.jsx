import { Button } from "antd";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";

import {
  deleteAddressRequest,
  getAddressListRequest,
  updateAddressDefaultRequest,
} from "redux/slicers/address.slice";

import * as S from "./style";
function Address() {
  const [isShowCreateAddress, setIsShowCreateAddress] = useState(false);
  const [isShowUpdateAddress, setIsShowUpdateAddress] = useState(false);
  const [updateData, setUpdateData] = useState([]);

  const { addressList } = useSelector((state) => state.address);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Address page";
    dispatch(getAddressListRequest({ userId: userInfo?.data?.id }));
  }, []);
  const renderAddressList = useMemo(() => {
    return addressList.data.map((item, index) => {
      return (
        <S.AddressItem key={index} gutter={[16, 16]}>
          <S.Left xs={12} md={16} sm={14} lg={18}>
            <S.UserInfo>
              <S.Name>{item?.name}</S.Name>
              <S.PhoneNumber>{item?.phone}</S.PhoneNumber>
            </S.UserInfo>
            <S.InfoAddress>
              <p>{item?.specificAddress}</p>
              <p>
                {item?.wardName},{item?.districtName},{item.cityName}
              </p>
            </S.InfoAddress>
            {index == 0 && <S.AddressDefault>Mặc định</S.AddressDefault>}
          </S.Left>
          <S.Right xs={12} md={8} sm={10} lg={6}>
            <S.UpdateAndDeleteWrapper>
              <S.Update
                onClick={() => {
                  setUpdateData(addressList.data[index]);
                  setIsShowUpdateAddress(true);
                }}
              >
                Cập nhật
              </S.Update>
              {index !== 0 && (
                <S.Delete
                  onClick={() => {
                    dispatch(
                      deleteAddressRequest({
                        id: item.id,
                        userId: userInfo?.data?.id,
                      })
                    );
                  }}
                >
                  Xóa
                </S.Delete>
              )}
            </S.UpdateAndDeleteWrapper>
            <S.EstablishDefault
              onClick={() =>
                dispatch(
                  updateAddressDefaultRequest({
                    id: item.id,
                    userId: userInfo?.data?.id,
                    addressDataList: addressList.data,
                  })
                )
              }
              disabled={index === 0}
            >
              Thiết lập mặc định
            </S.EstablishDefault>
          </S.Right>
        </S.AddressItem>
      );
    });
  }, [addressList.data]);
  return (
    <S.AddressWrapper>
      <S.Heading>
        <S.SubHeading>Địa chỉ của tôi</S.SubHeading>
        <Button type="primary" onClick={() => setIsShowCreateAddress(true)}>
          + Thêm
        </Button>
      </S.Heading>
      <S.AddressList>{renderAddressList}</S.AddressList>
      <CreateModal
        isShowCreateAddress={isShowCreateAddress}
        setIsShowCreateAddress={setIsShowCreateAddress}
      />
      <UpdateModal
        isShowUpdateAddress={isShowUpdateAddress}
        setIsShowUpdateAddress={setIsShowUpdateAddress}
        updateData={updateData}
        addressListData={addressList?.data}
      />
    </S.AddressWrapper>
  );
}

export default Address;
