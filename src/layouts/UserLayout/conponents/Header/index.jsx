import React, { useEffect, useMemo } from "react";
import {
  FaUserLarge,
  FaRegMessage,
  FaSearchengin,
  FaCartShopping,
  FaBars,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import getItemBrand from "./components/getItemBrand";
import * as S from "./style";
import { color } from "../../../../themes/color";
import { getCategoryListRequest } from "../../../../redux/slicers/category.slice";

function Header({ isHiddenMenu, setIsHiddenMenu, setIsShowSignIn }) {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, []);
  const renderBrandsList = useMemo(() => {
    return categoryList.data.map((item, index) => {
      return <S.MenuItem key={index}>{item.name}</S.MenuItem>;
    });
  });
  const items = [
    getItemBrand(
      "Menu",
      "menu1",
      null,
      categoryList.data.map((item, index) => {
        return getItemBrand(item, index + 1);
      }),
      "group"
    ),
  ];
  return (
    <S.HeaderWrapper>
      <S.HeaderTopWrapper>
        <S.HeaderTopBlock
          gutter={[16, 16]}
          justify="space-between"
          align={"middle"}
        >
          <S.HeaderTopLeft sm={24} xs={24} md={12}>
            <S.HeaderDiscount>
              <p>FALL SALE | UP TO 75% OFF!</p>
              <S.LinkDiscount>SHOP NOW</S.LinkDiscount>
            </S.HeaderDiscount>
          </S.HeaderTopLeft>
          <S.HeaderTopRight sm={0} xs={0} md={12}>
            <S.ChatCall>
              <S.IconMessage>
                <FaRegMessage size={25} color={color.primaryText} />
              </S.IconMessage>
              Chat or Call (84+)377460815
            </S.ChatCall>
          </S.HeaderTopRight>
        </S.HeaderTopBlock>
      </S.HeaderTopWrapper>
      <S.HeaderToolBar
        gutter={[16, 16]}
        justify={"space-between"}
        align={"middle"}
      >
        <S.NavMenu
          sm={2}
          xs={2}
          md={1}
          xl={0}
          onClick={() => setIsHiddenMenu(false)}
        >
          <FaBars size={25} color={color.primary} />
        </S.NavMenu>
        <S.HeaderLogo sm={11} xs={10} md={11} xl={4}>
          <S.ImageLogo src="https://www.jomashop.com/dist/file/jomashop_logo.7c0762d85d36b44f0c59.png"></S.ImageLogo>
        </S.HeaderLogo>
        <S.SearchColumn sm={0} xs={0} md={0} xl={16}>
          <S.InputSearch
            prefix={<FaSearchengin size={25} />}
            placeholder="Search for product or brands"
          ></S.InputSearch>
        </S.SearchColumn>
        <S.LoginAndCart sm={11} xs={12} md={12} xl={4}>
          <FaCartShopping cursor={"pointer"} size={30} color={color.primary} />
          <S.Login onClick={() => setIsShowSignIn(true)}>
            <FaUserLarge color={color.primary} size={25} />
            <S.HeadingLogin>Sign in</S.HeadingLogin>
          </S.Login>
        </S.LoginAndCart>
        <S.SearchColumn sm={24} xs={24} md={24} xl={0}>
          <S.InputSearch
            prefix={<FaSearchengin size={25} color={color.primary} />}
            placeholder="Search for product or brands"
          ></S.InputSearch>
        </S.SearchColumn>
        <S.MenuDeskWrapper>{renderBrandsList}</S.MenuDeskWrapper>
        <S.MenuModal
          open={!isHiddenMenu}
          onCancel={() => setIsHiddenMenu(true)}
          footer={null}
        >
          <S.MenuMobileAndTabletWrapper
            // onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </S.MenuModal>
      </S.HeaderToolBar>
    </S.HeaderWrapper>
  );
}

export default Header;
