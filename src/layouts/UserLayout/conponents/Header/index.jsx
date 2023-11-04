import React, { useEffect, useMemo } from "react";
import { Button, Dropdown } from "antd";
import {
  FaUserAlt,
  FaFacebookMessenger,
  FaSearchengin,
  FaCartPlus,
  FaBars,
  FaSignOutAlt,
  FaAngleUp,
  FaPhoneSquareAlt,
  FaCommentDots,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import qs from "qs";

import * as S from "./style";
import { color } from "themes/color";
import { ROUTES } from "constants/routes";

import { getCategoryListRequest } from "redux/slicers/category.slice";
import { logoutRequest } from "redux/slicers/auth.slice";

function Header({ isHiddenMenu, setIsHiddenMenu }) {
  const [isHiddenAngleUp, setIsHiddenAngleUp] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const { categoryList } = useSelector((state) => state.category);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(getCategoryListRequest());
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const searchParams = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    setSearchKey(searchParams.searchKey || "");
  }, [search]);
  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= "300") {
      setIsHiddenAngleUp(true);
    } else {
      setIsHiddenAngleUp(false);
    }
  };

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
          <S.AngleUp
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            isHiddenAngleUp={isHiddenAngleUp}
          >
            <FaAngleUp size={60} color={color.primary} />
          </S.AngleUp>
          <S.HeaderTopLeft sm={24} xs={24} md={20}>
            <S.HeaderDiscount>
              <p>FALL SALE | UP TO 75% OFF!</p>
              <S.LinkDiscount>SHOP NOW</S.LinkDiscount>
            </S.HeaderDiscount>
          </S.HeaderTopLeft>
          <S.HeaderTopRight sm={0} xs={0} md={4}>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: "Gọi",
                    icon: <FaPhoneSquareAlt size={25} />,
                  },
                  {
                    key: "2",
                    label: " Nhắn tin",
                    icon: <FaCommentDots size={25} />,
                  },
                ],
              }}
            >
              <S.ChatCall>
                <S.IconMessage>
                  <FaCommentDots size={25} color={color.primaryText} />
                </S.IconMessage>
                Chat or Call (84+)377460815
              </S.ChatCall>
            </Dropdown>
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
          <FaCartPlus cursor={"pointer"} size={30} color={color.primary} />
          {userInfo.data.fullName ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: <Link to={ROUTES.ADMIN.DASHBOARD}>Dashboard</Link>,
                    icon: <FaUserAlt />,
                  },
                  {
                    key: "2",
                    label: (
                      <Link to={ROUTES.USER.ACCOUNT.PROFILE}>
                        Thông tin cá nhân
                      </Link>
                    ),
                    icon: <FaUserAlt />,
                  },
                  {
                    key: "3",
                    label: "Đăng xuất",
                    onClick: () => dispatch(logoutRequest()),
                    icon: <FaSignOutAlt />,
                  },
                ],
              }}
            >
              <S.Login>
                <FaUserAlt color={color.primary} size={25} />
                <S.HeadingLogin>{userInfo.data.fullName}</S.HeadingLogin>
              </S.Login>
            </Dropdown>
          ) : (
            <Button onClick={() => navigate(ROUTES.LOGIN)}>Đăng nhập</Button>
          )}
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
