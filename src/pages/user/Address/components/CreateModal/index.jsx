import { Button, Col, Form, Input, Modal, Radio, Row, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getCityListRequest,
  getDistrictListRequest,
  getWardListRequest,
} from "redux/slicers/location.slice";
import {
  createAddressRequest,
  updateAddressRequest,
  deleteAddressRequest,
} from "redux/slicers/address.slice";
function CreateModal({ isShowCreateAddress, setIsShowCreateAddress }) {
  const [addressDefault, setAddressDefault] = useState(true);
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const { userInfo } = useSelector((state) => state.auth);

  const [createForm] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityListRequest());
  }, []);
  useEffect(() => {
    if (isShowCreateAddress) {
      createForm.resetFields();
    }
  }, [isShowCreateAddress]);

  const handleCreateAddress = (values) => {
    const {
      cityCode,
      districtCode,
      wardCode,
      address,
      phone,
      name,
      specificAddress,
    } = values;
    const cityData = cityList.data.find((item) => item.code === cityCode);
    const districtData = districtList.data.find(
      (item) => item.code === districtCode
    );
    const wardData = wardList.data.find((item) => item.code === wardCode);
    dispatch(
      createAddressRequest({
        data: {
          name: name,
          cityName: cityData?.name,
          districtName: districtData?.name,
          wardName: wardData?.name,
          userId: userInfo.data.id,
          addressDefault: addressDefault,
          address: address,
          phone: phone,
          specificAddress: specificAddress,
        },
      })
    );
    setIsShowCreateAddress(false);
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
  }, [cityList.data]);

  // render Disctrict
  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data]);

  // render Ward
  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data]);
  return (
    <Modal
      title="Thêm địa chỉ"
      open={isShowCreateAddress}
      onCancel={() => setIsShowCreateAddress(false)}
      footer={null}
      width={700}
    >
      <Form
        form={createForm}
        name="createUser"
        layout="vertical"
        onFinish={(values) => handleCreateAddress(values)}
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
                  min: 3,
                  max: 16,
                  type: "string",
                  message: "Tên phải từ 3 đến 16 kí tự",
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
                  createForm.setFieldsValue({
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
                  createForm.setFieldsValue({
                    wardCode: undefined,
                  });
                }}
                disabled={!createForm.getFieldValue("cityCode")}
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
                disabled={!createForm.getFieldValue("districtCode")}
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
          <Col span={24}>
            <Form.Item label="Đặt làm địa chỉ mặc định:" name="addressDefault">
              <Radio.Group
                defaultValue={addressDefault}
                value={addressDefault}
                onChange={(e) => setAddressDefault(e.target.value)}
              >
                <Radio value={true}>Có</Radio>
                <Radio value={false}>Không</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button type="primary" block onClick={() => createForm.submit()}>
              Thêm
            </Button>
          </Col>
          <Col span={12}>
            <Button block onClick={() => setIsShowCreateAddress(false)}>
              Trở lại
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default CreateModal;
