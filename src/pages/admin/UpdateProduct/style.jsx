import { Button, Form } from "antd";
import styled from "styled-components";
import { color } from "themes/color";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export const UpdateForm = styled(Form)`
  max-width: 900px;
  margin: 0 auto;
`;
export const Heading = styled.h2`
  color: ${color.primary};
`;
export const BTSubmit = styled(Button)`
  background-color: ${color.primary};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
export const TopWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  z-index: 97;
  padding: 20px 100px;
  background-color: #f5f5f5;
`;
export const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
