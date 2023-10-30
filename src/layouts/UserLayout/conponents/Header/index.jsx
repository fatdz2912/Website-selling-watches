import React, { useEffect, useMemo } from "react";
import {
  FaUserLarge,
  FaRegMessage,
  FaSearchengin,
  FaCartShopping,
  FaBars,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import qs from "qs";

import * as S from "./style";
import { color } from "../../../../themes/color";
import { getCategoryListRequest } from "../../../../redux/slicers/category.slice";
import { ROUTES } from "constants/routes";

function Header({ isHiddenMenu, setIsHiddenMenu, setIsShowSignIn }) {
  const [searchKey, setSearchKey] = useState("");
  const { categoryList } = useSelector((state) => state.category);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, []);
  useEffect(() => {
    const searchParams = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    setSearchKey(searchParams.searchKey || "");
  }, [search]);
  const handleSearchKeyWord = (e) => {
    if (e.key === "Enter") {
      const searchParams = qs.parse(search, {
        ignoreQueryPrefix: true,
      });
      const newFilterParams = {
        categoryId: searchParams.categoryId
          ? searchParams.categoryId.map((id) => parseInt(id))
          : [],
        sortOrder: searchParams.sortOrder,
        searchKey: searchKey,
      };
      navigate({
        pathname: ROUTES.USER.PRODUCT_LIST,
        search: qs.stringify(newFilterParams),
      });
    }
  };
  const renderBrandsList = useMemo(() => {
    return categoryList.data.map((item, index) => {
      return (
        <S.MenuItem
          isHiddenMenu={isHiddenMenu}
          key={index}
          onClick={() => {
            navigate({
              pathname: ROUTES.USER.PRODUCT_LIST,
              search: qs.stringify({
                categoryId: [item.id],
              }),
            });
            setIsHiddenMenu(true);
          }}
        >
          {item.name}
        </S.MenuItem>
      );
    });
  }, [categoryList.data, isHiddenMenu]);
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
          md={0}
          xl={0}
          onClick={() => setIsHiddenMenu(false)}
        >
          <FaBars size={25} color={color.primary} />
        </S.NavMenu>
        <S.HeaderLogo sm={11} xs={10} md={12} xl={4}>
          <a href={ROUTES.USER.HOME}>
            <S.ImageLogo src="https://www.jomashop.com/dist/file/jomashop_logo.7c0762d85d36b44f0c59.png"></S.ImageLogo>
          </a>
        </S.HeaderLogo>
        <S.SearchColumn sm={0} xs={0} md={0} xl={16}>
          <S.InputSearch
            prefix={<FaSearchengin size={25} />}
            placeholder="Search for product or brands"
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyDown={(e) => handleSearchKeyWord(e)}
            value={searchKey}
          ></S.InputSearch>
        </S.SearchColumn>
        <S.LoginAndCart sm={11} xs={12} md={12} xl={4}>
          <FaCartShopping cursor={"pointer"} size={30} color={color.primary} />
          <Link to={ROUTES.LOGIN}>
            <S.Login>
              <FaUserLarge color={color.primary} size={25} />
              <S.HeadingLogin>
                {userInfo
                  ? userInfo.data.fullName
                    ? userInfo.data.fullName
                    : "login"
                  : "Login"}
              </S.HeadingLogin>
            </S.Login>
          </Link>
        </S.LoginAndCart>
        <S.SearchColumn sm={24} xs={24} md={24} xl={0}>
          <S.InputSearch
            prefix={<FaSearchengin size={25} color={color.primary} />}
            placeholder="Search for product or brands"
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyDown={(e) => handleSearchKeyWord(e)}
            value={searchKey}
          ></S.InputSearch>
        </S.SearchColumn>
        <S.MenuDeskWrapper>{renderBrandsList}</S.MenuDeskWrapper>
        <S.MenuModal
          open={!isHiddenMenu}
          onCancel={() => setIsHiddenMenu(true)}
          footer={null}
          styles={{ content: { padding: 0 } }}
        >
          <S.CardMenuMobileAndTablet title="MenuBrands">
            <S.MenuMobileAndTabletWrapper isHiddenMenu={isHiddenMenu}>
              {renderBrandsList}
            </S.MenuMobileAndTabletWrapper>
          </S.CardMenuMobileAndTablet>
        </S.MenuModal>
      </S.HeaderToolBar>
    </S.HeaderWrapper>
  );
}

export default Header;
