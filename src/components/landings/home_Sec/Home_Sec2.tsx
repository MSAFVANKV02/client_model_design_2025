import React from "react";
import { CardContainer } from "../Cards/CardContainer";

function HomeSec2() {
  const cardContentList = [
    {
      id: 1,
      title: "Women",
      image: "/src/assets/images/Hero Images/women.png",
      description: "Dresses, Tops, Bottoms,  Outerwear, Active wear, Footwear, Accessories, Beauty, etc.",
    },
    {
      id: 2,
      title: "Girl",
      image: "/src/assets/images/Hero Images/girl.png",
      description: "T-Shirts, Blouses, Sweaters, Jeans, Skirts, Leggings, Casual Dresses, Party Dresses, Formal Dresses, etc.",
    },
    {
      id: 3,
      title: "Boy",
      image: "/src/assets/images/Hero Images/boy.png",
      description: "T-Shirts, Polo Shirts, Hoodies & Sweatshirts, Jeans, Shorts, Trousers, Casual Shirts, Suits, etc.",
    },
    {
      id: 4,
      title: "Men",
      image: "/src/assets/images/Hero Images/men.png",
      description: "T-Shirts, Polo Shirts, Dress Shirts, Sweaters & Hoodies, Jeans, Chinos, Trousers, Shorts, etc.",
    },
    {
      id: 5,
      title: "Infant",
      image: "/src/assets/images/Hero Images/infant.png",
      description: "Bodysuits, T-Shirts, Onesies, Sweatshirts, Pants, Shorts, Leggings, Overalls, Booties, Casual Dresses, etc.",
    },
  ];
  return (
    <div className="section_container h py-32 space-y-5">
      <div className="flex justify-center items-center flex-col space-y-3">
        <span className="px-14 shadow-sm py-1 bg-combined-gradients text-textMain rounded-tl-3xl rounded-br-3xl">
          Categories
        </span>
        <h4 className="capitalize font-bold">
          Our large selection of products
        </h4>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {cardContentList.map((item, index) => (
          <CardContainer
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            isTrue={index > 2}
            index={index}
            className={index === 4 ? "col-span-1 md:col-span-2 " : ""} 
          />
        ))}
      </section>
    </div>
  );
}

export default HomeSec2;
