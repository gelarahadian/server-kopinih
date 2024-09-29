import Menu from "./models/menu.js";

export const seed = async (req, res) => {
  const dataMenus = [
    {
      name: "Espresso",
      description:
        "A strong, concentrated coffee brewed by forcing hot water under pressure through finely-ground coffee beans.",
      price: 20000,
      category: "Coffe",
    },
    {
      name: "Americano",
      description:
        "Espresso with added hot water, making it similar in strength to drip coffee but with a different flavor.",
      price: 22000,
      category: "Coffe",
    },
    {
      name: "Cappuccino",
      description:
        "A coffee drink made with espresso, steamed milk, and milk foam.",
      price: 25000,
      category: "Coffe",
    },
    {
      name: "Latte",
      description:
        "A creamy coffee drink made with espresso and steamed milk, topped with a small amount of milk foam.",
      price: 27000,
      category: "Coffe",
    },
    {
      name: "Mocha",
      description:
        "A rich and chocolatey coffee drink made with espresso, steamed milk, chocolate syrup, and whipped cream.",
      price: 30000,
      category: "Coffe",
    },
  ];

  const newMenus = await Menu.insertMany(dataMenus);
  res.json(newMenus);
};
