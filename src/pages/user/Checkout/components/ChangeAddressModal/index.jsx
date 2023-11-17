import { Button, Col, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo } from "react";

import * as S from "./style";
import {
  deleteAddressRequest,
  getAddressListRequest,
  updateAddressDefaultRequest,
} from "redux/slicers/address.slice";

import UpdateModal from "pages/user/components/UpdateModal";
import CreateModal from "pages/user/components/CreateModal";
function ChangeAddressModal({ isShowChangeAddress, setIsShowChangeAddress }) {
  const [updateData, setUpdateData] = useState([]);
  const [isShowCreateAddress, setIsShowCreateAddress] = useState(false);
  const [isShowUpdateAddress, setIsShowUpdateAddress] = useState(false);

  const { addressList } = useSelector((state) => state.address);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
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
                Chọn
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
    <Modal
      title="Thêm địa chỉ"
      open={isShowChangeAddress}
      onCancel={() => setIsShowChangeAddress(false)}
      footer={null}
      width={700}
    >
      {renderAddressList}
      <Button onClick={() => setIsShowCreateAddress(true)}>
        Thêm địa chỉ mới
      </Button>
      <Row gutter={[16, 16]}>
        <Button
          onClick={() => {
            setIsShowChangeAddress(false);
            dispatch(getAddressListRequest({ userId: userInfo.data.id }));
          }}
        >
          Xác Nhận
        </Button>
        <Button>Hủy</Button>
      </Row>
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
    </Modal>
  );
}

export default ChangeAddressModal;
