import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCityListRequest,
  getDistrictListRequest,
  getWardListRequest,
} from "redux/slicers/location.slice";
import { updateAddressRequest } from "redux/slicers/address.slice";
import { FaEdit } from "react-icons/fa";
function UpdateModal({
  isShowUpdateAddress,
  setIsShowUpdateAddress,
  updateData,
  addressListData,
}) {
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );

  const [updateForm] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityListRequest());
  }, []);
  useEffect(() => {
    const { cityName, districtName, wardName } = updateData;
    const cityData = cityList.data.find((item) => item.name === cityName);
    const districtData = districtList.data.find(
      (item) => item.name === districtName
    );
    const wardData = wardList.data.find((item) => item.name === wardName);
    dispatch(getDistrictListRequest({ cityCode: districtData?.code }));
    dispatch(getWardListRequest({ districtCode: wardData?.code }));

    if (isShowUpdateAddress) {
      updateForm.setFieldsValue({
        name: updateData.name,
        phone: updateData.phone,
        specificAddress: updateData.specificAddress,
        cityCode: cityData?.code,
        districtCode: districtData?.code,
        wardCode: wardData?.code,
      });
    }
  }, [isShowUpdateAddress]);

  const handleUpdateAddress = (values) => {
    const address = addressListData.find((item) => item === updateData);
    const { cityCode, districtCode, wardCode, ...rest } = values;
    const cityData = cityList.data.find((item) => item.code === cityCode);
    const districtData = districtList.data.find(
      (item) => item.code === districtCode
    );
    const wardData = wardList.data.find((item) => item.code === wardCode);

    dispatch(
      updateAddressRequest({
        data: {
          cityName: cityData?.name || updateData.cityName,
          districtName: districtData?.name || updateData.districtName,
          wardName: wardData?.name || updateData.wardName,
          ...rest,
          id: address.id,
        },
      })
    );
    setIsShowUpdateAddress(false);
  };
  // render city
  const renderCityOptions = useMemo(() => {
    return cityList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [cityList.data, updateData]);

  // render Disctrict
  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data, updateData]);

  // render Ward
  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data, updateData]);
  return (
    <Modal
      title="Cập nhật địa chỉ"
      open={isShowUpdateAddress}
      onCancel={() => setIsShowUpdateAddress(false)}
      footer={null}
      width={700}
    >
      <Form
        form={updateForm}
        name="UpdateAddress"
        layout="vertical"
        onFinish={(values) => handleUpdateAddress(values)}
      >
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Tên là bắt buộc!",
                },
                {
                  max: 40,
                  min: 6,
                  message: "Điền từ 6 -> 40 kí tự",
                },
              ]}
            >
              <Input placeholder="Họ và tên" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Số điện thoại là bắt buộc!",
                },
                {
                  pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                  message: "Vui lòng nhập đúng định dạng",
                },
              ]}
            >
              <Input placeholder="Số điện thoại" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Tỉnh/Thành"
              name="cityCode"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Select
                placeholder="Chọn Tỉnh/Thành"
                onChange={(value) => {
                  dispatch(getDistrictListRequest({ cityCode: value }));
                  updateForm.setFieldsValue({
                    districtCode: undefined,
                    wardCode: undefined,
                  });
                }}
              >
                {renderCityOptions}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Quận/Huyện"
              name="districtCode"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Select
                placeholder="Chọn Quận/Huyện"
                onChange={(value) => {
                  dispatch(getWardListRequest({ districtCode: value }));
                  updateForm.setFieldsValue({
                    wardCode: undefined,
                  });
                }}
                disabled={!updateForm.getFieldValue("cityCode")}
              >
                {renderDistrictOptions}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Phường/Xã"
              name="wardCode"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Select
                placeholder="Chọn Phường/Xã"
                disabled={!updateForm.getFieldValue("districtCode")}
              >
                {renderWardListOptions}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="specificAddress"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Vui lòng nhập địa chỉ cụ thể!",
                },
              ]}
            >
              <Input placeholder="Địa chỉ cụ thể" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              type="primary"
              block
              onClick={() => updateForm.submit()}
            >
              Cập Nhật <FaEdit />
            </Button>
          </Col>
          <Col span={12}>
            <Button block onClick={() => setIsShowUpdateAddress(false)}>
              Trở lại
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default UpdateModal;
