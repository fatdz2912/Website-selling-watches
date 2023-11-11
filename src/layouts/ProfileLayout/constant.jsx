import {
  FaRegIdCard,
  FaShoppingBag,
  FaRegHeart,
  FaLock,
  FaAddressCard,
} from "react-icons/fa";
export const PROFILE_MENU = [
  {
    label: "Thông tin cá nhân",
    path: "/profile/user-info",
    icon: <FaRegIdCard />,
  },
  {
    label: "Lịch sử mua hàng",
    path: "/profile/order-history",
    icon: <FaShoppingBag />,
  },
  {
    label: "Sản phẩm yêu thích",
    path: "/profile/favorite-products",
    icon: <FaRegHeart />,
  },
  {
    label: "Địa chỉ",
    path: "/profile/address",
    icon: <FaAddressCard />,
  },
  {
    label: "Đổi mật khẩu",
    path: "/profile/change-password",
    icon: <FaLock />,
  },
];
