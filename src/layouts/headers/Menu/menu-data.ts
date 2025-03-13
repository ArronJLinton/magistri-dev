import home_demo_1 from "@/assets/img/menu/home-1.jpg";
import home_demo_2 from "@/assets/img/menu/home-2.jpg";
import home_demo_3 from "@/assets/img/menu/home-3.jpg";

// menu data
const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "#",
    img_dropdown: true,
    sub_menus: [
      { link: "/", title: "Home 01", demo_img: home_demo_1 },
      { link: "/home-2", title: "Home 02", demo_img: home_demo_2 },
      { link: "/home-3", title: "Home 03", demo_img: home_demo_3 },
    ],
  },
  //   {
  //     id: 2,
  //     title: "Pages",
  //     link: "#",
  //     has_dropdown: true,
  //     sub_menus: [
  //       { link: "/about-us", title: "about us" },
  //       { link: "/team", title: "team" },
  //       { link: "/team-details", title: "team details" },
  //       { link: "/shop", title: "shop" },
  //       { link: "/shop-details", title: "shop details" },
  //       { link: "/testimonial", title: "testimonial" },
  //       { link: "/faq", title: "faq" },
  //       { link: "/price", title: "price" },
  //       { link: "/cart", title: "cart" },
  //       { link: "/checkout", title: "checkout" },
  //       { link: "/404", title: "404" },
  //     ],
  //   },
  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/service", title: "service" },
      { link: "/service-details", title: "service details" },
    ],
  },
  {
    id: 4,
    title: "Projects",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project details" },
    ],
  },
  // {
  // 	id: 5,
  // 	title: "Blog",
  // 	link: "#",
  // 	has_dropdown: true,
  // 	sub_menus: [
  // 		{ link: "/blog", title: "blog Standard" },
  // 		{ link: "/blog-sidebar", title: "blog sidebar" },
  // 		{ link: "/blog-details", title: "blog details" },
  // 	],
  // },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
