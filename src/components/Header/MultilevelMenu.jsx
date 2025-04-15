import "./MultilevelMenu.scss";

const MultilevelMenu = (props) => {
  const menuItemproduct = [
    {
      title: "Nữ",
      children: [
        {
          title: "Áo dài",
          link: "/women/long-shirt",
        },
        {
          title: "Quần dài",
          link: "/women/long-pants",
        },
        {
          title: "Áo cộc",
          link: "/women/short-shirt",
        },
        {
          title: "Quần cộc",
          link: "/women/short-pants",
        },
        {
          title: "Váy",
          link: "/women/dress",
        },
        {
          title: "Đồ lót",
          link: "/women/underwear",
        },
        {
          title: "Tất vớ",
          link: "/women/socks",
        },
      ],
    },
    {
      title: "Nam",
      children: [
        {
          title: "Áo dài",
          link: "/man/long-shirt",
        },
        {
          title: "Quần dài",
          link: "/man/long-pants",
        },
        {
          title: "Áo cộc",
          link: "/man/short-shirt",
        },
        {
          title: "Quần cộc",
          link: "/man/short-pants",
        },
        {
          title: "Đồ lót",
          link: "/man/underwear",
        },
        {
          title: "Tất vớ",
          link: "/man/socks",
        },
      ],
    },
    {
      title: "Bé gái",
      children: [
        {
          title: "Áo dài",
          link: "/girl/short-pant",
        },
        {
          title: "Quần dài",
          link: "/girl/long-pant",
        },
        {
          title: "Áo cộc",
          link: "/girl/short-shirt",
        },
        {
          title: "Quần cộc",
          link: "/girl/short-pants",
        },
        {
          title: "Váy",
          link: "/girl/dress",
        },
        {
          title: "Đồ lót",
          link: "/girl/underwear",
        },
        {
          title: "Tất vớ",
          link: "/girl/socks",
        },
      ],
    },
    {
      title: "Bé trai",
      children: [
        {
          title: "Áo dài",
          link: "/boy/long-shirt",
        },
        {
          title: "Quần dài",
          link: "/boy/long-pants",
        },
        {
          title: "Áo cộc",
          link: "/boy/short-shirt",
        },
        {
          title: "Quần cộc",
          link: "/boy/short-pants",
        },
        {
          title: "Đồ lót",
          link: "/boy/underwear",
        },
        {
          title: "Tất vớ",
          link: "/boy/socks",
        },
      ],
    },
  ];

  const menuItemAccessory = [
    {
      title: "Chăn",
      link: "/blanket",
    },
    {
      title: "Khăn tắm",
      link: "/towel",
    },
    {
      title: "Khăn quàng ",
      link: "/scraft",
    },
  ];

  return (
    <div className="multimenu-container">
      <div className="left-multimenu">
        <div className="label">Danh mục sản phẩm</div>
        <div className="content">
          {menuItemproduct[0].children.map((item, index) => {
            return (
              <div className="menu-item-content" key={index}>
                <a href={item.link}>{item.title}</a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-multimenu">
        <div className="label">Phụ kiện</div>
        <div className="content">
          {menuItemAccessory.map((item, index) => {
            return (
              <div className="menu-item-content" key={index}>
                <a href={item.link}>{item.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MultilevelMenu;
