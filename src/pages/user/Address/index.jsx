import { Button, Popconfirm } from "antd";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CreateModal from "../components/CreateModal";
import UpdateModal from "../components/UpdateModal";

import {
  deleteAddressRequest,
  getAddressListRequest,
  updateAddressDefaultRequest,
} from "redux/slicers/address.slice";

import * as S from "./style";
import { FaPlusCircle } from "react-icons/fa";
function Address() {
  const [isShowCreateAddress, setIsShowCreateAddress] = useState(false);
  const [isShowUpdateAddress, setIsShowUpdateAddress] = useState(false);
  const [updateData, setUpdateData] = useState([]);

  const { addressList } = useSelector((state) => state.address);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Trang địa chỉ";
    dispatch(
      getAddressListRequest({
        userId: userInfo?.data?.id,
        addressDefaultId: userInfo.data?.addressDefaultId,
      })
    );
  }, []);

  const renderAddressList = useMemo(() => {
    if (addressList.data[0] != null) {
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
                  {item?.wardName},{item?.districtName},{item?.cityName}
                </p>
              </S.InfoAddress>
              {index == 0 && <S.AddressDefault>Mặc định</S.AddressDefault>}
            </S.Left>
            <S.Right xs={12} md={8} sm={10} lg={6}>
              <S.UpdateAndDeleteWrapper>
                <S.Update
                  onClick={() => {
                    setUpdateData(
                      addressList.data.find(
                        (addresItem) => addresItem.id === item.id
                      )
                    );
                    setIsShowUpdateAddress(true);
                  }}
                >
                  Cập nhật
                </S.Update>
                {index !== 0 && (
                  <Popconfirm
                    description="Bạn có chắc chắn muốn xóa địa chỉ?"
                    cancelText="trở lại"
                    okText="Xóa"
                    onConfirm={() => {
                      dispatch(
                        deleteAddressRequest({
                          id: item.id,
                          userId: userInfo?.data?.id,
                        })
                      );
                    }}
                  >
                    <S.Delete>Xóa</S.Delete>
                  </Popconfirm>
                )}
              </S.UpdateAndDeleteWrapper>
              <S.EstablishDefault
                onClick={() =>
                  dispatch(
                    updateAddressDefaultRequest({
                      addressId: item.id,
                      userId: userInfo?.data?.id,
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
    } else {
      return <div style={{ color: "red" }}>Bạn chưa cập nhật địa chỉ</div>;
    }
  }, [addressList.data]);
  return (
    <S.AddressWrapper>
      <S.Heading>
        <S.SubHeading>Địa chỉ của tôi</S.SubHeading>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
          type="primary"
          onClick={() => setIsShowCreateAddress(true)}
        >
          <FaPlusCircle /> Thêm
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
