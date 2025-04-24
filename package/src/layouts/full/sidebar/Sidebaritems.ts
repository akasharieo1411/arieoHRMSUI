export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  isPro?: boolean;
  className?: string; // Added className prop
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  isPro?: boolean;
  className?: string; // Added className prop
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "HOME",
    className: "sidebar-heading", // Added class for heading
    children: [
      {
        name: "Dashboard",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "/",
        isPro: false,
        className: "sidebar-item" // Added class for item
      },
    ],
  },
  {
    heading: "Auth",
    className: "sidebar-heading",
    children: [
      {
        name: "Login",
        icon: "solar:login-2-linear",
        id: uniqueId(),
        url: "/auth/login",
        isPro: false,
        className: "sidebar-item"
      },
      {
        name: "Maintenance",
        icon: "solar:settings-outline",
        id: uniqueId(),
        url: "auth/maintenance",
        isPro: false,
        className: "sidebar-item"      
      },
    ],
  },
  {
    heading: "Members",
    className: "sidebar-heading",
    children: [
      {
        name: "Employees",
        icon: "solar:user-id-outline",
        id: uniqueId(),
        url: "/ui/table",
        isPro: false,
        className: "sidebar-item"
      },
      {
        name: "Add Employee",
        icon: "solar:user-plus-outline",
        id: uniqueId(),
        url: "/ui/form",
        isPro: false,
        className: "sidebar-item"
      },
      {
        name: "Swipe Details",
        icon: "solar:atom-line-duotone", // ✅ Make sure this icon is from your icon library
        id: uniqueId(),
        url: "/swipe-details",
        isPro: false,
        className: "sidebar-item"
      },
      {
        name: "Organisation Chart",
        icon: "solar:sort-from-top-to-bottom-bold", // ✅ Make sure this icon is from your icon library
        id: uniqueId(),
        url: "/OrgChart",
        isPro: false,
        className: "sidebar-item"
      }
    ],
  },
];

export default SidebarContent;