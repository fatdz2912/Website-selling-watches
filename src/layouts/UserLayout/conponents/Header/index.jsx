import React, { useEffect, useMemo, useRef } from "react";
import { Button, Dropdown, Badge, Skeleton, Space } from "antd";
import {
  FaUserAlt,
  FaSearchengin,
  FaCartPlus,
  FaBars,
  FaSignOutAlt,
  FaAngleUp,
  FaPhoneSquareAlt,
  FaCommentDots,
  FaHistory,
  FaUserEdit,
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
import {
  getSearchSuggestionRequest,
  createSearchHistoryRequest,
  getSearchHistoryRequest,
} from "redux/slicers/product.slice";
import {
  showSearchSuggestion,
  hiddenSearchSuggestion,
} from "redux/slicers/searchSuggestion.slice";
function Header({ isHiddenMenu, setIsHiddenMenu }) {
  const indexSearchSuggestion = useRef(-1);

  const [isHiddenAngleUp, setIsHiddenAngleUp] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const { categoryList } = useSelector((state) => state.category);
  const { userInfo } = useSelector((state) => state.auth);
  const { cartList } = useSelector((state) => state.cart);
  const { searchSuggestions, searchHistories } = useSelector(
    (state) => state.product
  );
  const { isSHowSearchSuggestions } = useSelector((state) => state.search);
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
    if (userInfo.data.id) {
      dispatch(getSearchHistoryRequest({ userId: userInfo.data.id, limit: 8 }));
    }
  }, [userInfo.data.id]);

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
        gender: searchParams.gender,
        searchKey: searchKey,
      };
      if (searchKey !== "" && userInfo.data.id) {
        const indexEmpty = searchHistories.data.findIndex(
          (item) => item.searchKey === searchKey
        );
        if (indexEmpty === -1) {
          dispatch(
            createSearchHistoryRequest({
              data: {
                userId: userInfo.data.id,
                searchKey: searchKey,
              },
            })
          );
        }
      }
      dispatch(hiddenSearchSuggestion());
      navigate({
        pathname: ROUTES.USER.PRODUCT_LIST,
        search: qs.stringify(newFilterParams),
      });
    }
  };
  const handleGetSearchSuggestions = (e) => {
    if (
      (e.which >= 65 && e.which <= 90) ||
      (e.which >= 97 && e.which <= 122) ||
      (e.which >= 48 && e.which <= 57) ||
      e.which === 8
    ) {
      indexSearchSuggestion.current = -1;
      const searchParams = qs.parse(search, {
        ignoreQueryPrefix: true,
      });
      dispatch(
        getSearchSuggestionRequest({
          page: 1,
          limit: 8,
          searchKey: e.target.value,
          gender: searchParams.gender,
          categoryId: searchParams.categoryId
            ? searchParams.categoryId.map((id) => parseInt(id))
            : [],
        })
      );
    }
    if (
      e.which === 40 &&
      (indexSearchSuggestion.current < searchSuggestions.data.length - 1 ||
        indexSearchSuggestion.current < searchHistories.data.length - 1)
    ) {
      indexSearchSuggestion.current = indexSearchSuggestion.current + 1;
      if (searchSuggestions.data[0]?.name) {
        setSearchKey(
          searchSuggestions.data[indexSearchSuggestion.current]?.name
        );
      } else {
        setSearchKey(
          searchHistories.data[indexSearchSuggestion.current]?.searchKey
        );
      }
    }
    if (e.which === 38 && indexSearchSuggestion.current > 0) {
      indexSearchSuggestion.current = indexSearchSuggestion.current - 1;
      if (searchSuggestions.data[0]?.name) {
        setSearchKey(
          searchSuggestions.data[indexSearchSuggestion.current].name
        );
      } else {
        setSearchKey(
          searchHistories.data[indexSearchSuggestion.current]?.searchKey
        );
      }
    }
  };

  const renderBrandsList = useMemo(() => {
    if (categoryList.loading) {
      return [...Array(6)].map((_, index) => {
        return (
          <S.MenuItem key={index}>
            <Skeleton.Button active />
          </S.MenuItem>
        );
      });
    }
    return categoryList.data.map((item, index) => (
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
        {item.name.toUpperCase()}
      </S.MenuItem>
    ));
  }, [categoryList.data, isHiddenMenu, categoryList.loading]);

  const renderSearchSuggestions = useMemo(() => {
    if (searchKey !== "") {
      return searchSuggestions?.data.map((item) => {
        return (
          <S.TextSuggestions
            key={item.id}
            onClick={() => {
              dispatch(hiddenSearchSuggestion());
              navigate({
                pathname: ROUTES.USER.PRODUCT_LIST,
                search: qs.stringify({
                  searchKey: item.name,
                }),
              });
            }}
          >
            {item.name}
          </S.TextSuggestions>
        );
      });
    } else {
      return searchHistories?.data.map((item) => {
        return (
          <S.TextSuggestions
            onClick={() => {
              dispatch(hiddenSearchSuggestion());
              navigate({
                pathname: ROUTES.USER.PRODUCT_LIST,
                search: qs.stringify({
                  searchKey: item.searchKey,
                }),
              });
            }}
            key={item.id}
          >
            <FaHistory size={10} /> {item.searchKey}
          </S.TextSuggestions>
        );
      });
    }
  }, [searchSuggestions?.data, searchHistories?.data]);
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
          <S.HeaderTopLeft sm={24} xs={24} md={18}>
            <S.HeaderDiscount>
              <p>FALL SALE | UP TO 75% OFF!</p>
              <Link to={ROUTES.USER.PRODUCT_LIST}>
                <S.LinkDiscount>SHOP NOW</S.LinkDiscount>
              </Link>
            </S.HeaderDiscount>
          </S.HeaderTopLeft>
          <S.HeaderTopRight sm={0} xs={0} md={6}>
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
        <S.HeaderLogo sm={11} xs={10} md={6} xl={4}>
          <a href={ROUTES.USER.HOME}>
            <S.ImageLogo src="https://www.jomashop.com/dist/file/jomashop_logo.7c0762d85d36b44f0c59.png"></S.ImageLogo>
          </a>
        </S.HeaderLogo>
        <S.SearchColumn
          onClick={(e) => {
            e.stopPropagation();
            dispatch(showSearchSuggestion());
          }}
          sm={0}
          xs={0}
          md={11}
          xl={14}
        >
          <S.InputSearch
            prefix={<FaSearchengin size={25} />}
            placeholder="Tìm kiếm sản phẩm hoặc thương hiệu "
            onChange={(e) => {
              setSearchKey(e.target.value);
              if (!isSHowSearchSuggestions) {
                dispatch(showSearchSuggestion());
              }
            }}
            onKeyDown={(e) => handleSearchKeyWord(e)}
            onKeyUp={(e) => handleGetSearchSuggestions(e)}
            value={searchKey}
          ></S.InputSearch>
          <S.SearchSuggestions
            isSHowSearchSuggestions={isSHowSearchSuggestions}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {searchKey !== "" && (
              <S.HeadingSearch>
                Tìm kiếm {searchKey} trong JOMASHOP
              </S.HeadingSearch>
            )}
            {searchKey === "" && (
              <S.HeadingSearch>Lịch sử tìm kiếm</S.HeadingSearch>
            )}
            {renderSearchSuggestions}
          </S.SearchSuggestions>
        </S.SearchColumn>
        <S.LoginAndCart sm={11} xs={12} md={7} xl={6}>
          <Link to={ROUTES.USER.CART}>
            <Badge count={cartList.length}>
              <FaCartPlus cursor={"pointer"} size={30} color={color.primary} />
            </Badge>
          </Link>
          {userInfo.data.fullName ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <Link to={ROUTES.USER.USERINFO}>Thông tin cá nhân</Link>
                    ),
                    icon: <FaUserAlt />,
                  },
                  {
                    key: "2",
                    label: "Đăng xuất",
                    onClick: () => {
                      dispatch(logoutRequest());
                      navigate(ROUTES.USER.HOME);
                    },
                    icon: <FaSignOutAlt />,
                  },
                ],
              }}
            >
              <S.Login>
                <FaUserEdit color={color.primary} size={30} />
                <S.HeadingLogin>{userInfo.data.fullName}</S.HeadingLogin>
              </S.Login>
            </Dropdown>
          ) : (
            <Button onClick={() => navigate(ROUTES.LOGIN)}>Đăng nhập</Button>
          )}
        </S.LoginAndCart>
        <S.SearchColumn
          onClick={(e) => {
            e.stopPropagation();
            dispatch(showSearchSuggestion());
          }}
          sm={24}
          xs={24}
          md={0}
          xl={0}
        >
          <S.InputSearch
            prefix={<FaSearchengin size={25} color={color.primary} />}
            placeholder="Tìm kiếm sản phẩm hoặc thương hiệu!"
            onChange={(e) => {
              setSearchKey(e.target.value);
              if (!isSHowSearchSuggestions) {
                dispatch(showSearchSuggestion());
              }
            }}
            onKeyDown={(e) => handleSearchKeyWord(e)}
            onKeyUp={(e) => handleGetSearchSuggestions(e)}
            value={searchKey}
          ></S.InputSearch>
          <S.SearchSuggestions
            isSHowSearchSuggestions={isSHowSearchSuggestions}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {searchKey !== "" && (
              <S.HeadingSearch>
                Tìm kiếm {searchKey} trong JOMASHOP
              </S.HeadingSearch>
            )}
            {searchKey === "" && (
              <S.HeadingSearch>Lịch sử tìm kiếm</S.HeadingSearch>
            )}
            {renderSearchSuggestions}
          </S.SearchSuggestions>
        </S.SearchColumn>
        <S.MenuDeskWrapper>{renderBrandsList}</S.MenuDeskWrapper>
        <S.MenuModal
          open={!isHiddenMenu}
          onCancel={() => setIsHiddenMenu(true)}
          footer={null}
          styles={{ content: { padding: 0 } }}
        >
          <S.CardMenuMobileAndTablet title="MenuBrands">
            {categoryList.loading ? (
              <Space>
                <Skeleton.Button active />
                <Skeleton.Button active />
                <Skeleton.Button active />
                <Skeleton.Button active />
              </Space>
            ) : (
              <S.MenuMobileAndTabletWrapper isHiddenMenu={isHiddenMenu}>
                {renderBrandsList}
              </S.MenuMobileAndTabletWrapper>
            )}
          </S.CardMenuMobileAndTablet>
        </S.MenuModal>
      </S.HeaderToolBar>
    </S.HeaderWrapper>
  );
}

export default Header;
