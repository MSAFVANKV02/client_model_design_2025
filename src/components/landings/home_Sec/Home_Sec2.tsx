
import { CardContainer } from "../Cards/CardContainer";

function HomeSec2() {
  const cardContentList = [
    {
      id: 1,
      title: "Women",
      image: "img/Hero Images/women.png",
      slug:'/login',
      description: "Dresses, Tops, Bottoms,  Outerwear, Active wear, Footwear, Accessories, Beauty, etc.",
    },
    {
      id: 2,
      title: "Girl",
      image: "img/Hero Images/girl.png",
      slug:'/login',
      description: "T-Shirts, Blouses, Sweaters, Jeans, Skirts, Leggings, Casual Dresses, Party Dresses, Formal Dresses, etc.",
    },
    {
      id: 3,
      title: "Boy",
      image: "img/Hero Images/boy.png",
      slug:'/login',
      description: "T-Shirts, Polo Shirts, Hoodies & Sweatshirts, Jeans, Shorts, Trousers, Casual Shirts, Suits, etc.",
    },
    {
      id: 4,
      title: "Men",
      image: "img/Hero Images/men.png",
      slug:'/login',
      description: "T-Shirts, Polo Shirts, Dress Shirts, Sweaters & Hoodies, Jeans, Chinos, Trousers, Shorts, etc.",
    },
    {
      id: 5,
      title: "Infant",
      image: "img/Hero Images/infant.png",
      slug:'/login',
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
            slug={item.slug}
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
