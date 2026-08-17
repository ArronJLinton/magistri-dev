interface SubMenu {
  link: string;
  title: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: SubMenu[];
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    img_dropdown: false,
  },
  {
    id: 3,
    title: 'Services',
    link: '/services',
    has_dropdown: false,
  },
  {
    id: 4,
    title: 'Projects',
    link: '/projects',
    has_dropdown: false,
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact',
    has_dropdown: false,
  },
];
export default menu_data;
