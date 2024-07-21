import React from "react";

const Point = () => {
  const pointContent = [
    {
      style: { color: "bg-success", shadow: "shadow-success" },
      title: "Q1",
      year: "2021",
      points: ["Team set-up", "Launch of informational website"],
    },
    {
      style: { color: "bg-blue", shadow: "shadow-blue" },
      title: "Q2",
      year: "2021",
      points: [
        "Presale and exchange listings",
        "Blockchain development and launch",
        "Launch of our MVP",
        "Influencer agency partnerships",
        "Marketing and promotion",
      ],
    },
    {
      style: { color: "bg-warning", shadow: "shadow-warning" },
      title: "Q3",
      year: "2021",
      points: [
        "Celebrity, Creator and Influencer partnerships",
        "Expansion of creator communities on our platform",
        "More Marketing and promotion",
      ],
    },
    {
      style: { color: "bg-danger", shadow: "shadow-danger" },
      title: "Q4",
      year: "2021",
      points: [
        "Mainstream partnerships",
        "500 active creator communities",
        "2Million active community members",
        "More Marketing and promotion",
      ],
    },
  ];

  return (
    <main className="bg-dark rounded-tl-full rounded-bl-full py-[120px] px-[25px] grid grid-cols-12 gap-3">
      {pointContent?.map((element, index) => {
        return (
          <section className="col-span-3" key={index}>
            <div
              className={`w-[80px] h-[80px] grid place-items-center rounded-tl-full rounded-tr-full rounded-br-full !rounded-bl-[30px] ${element.style.color} ${element.style.shadow}`}
            >
              <h3 className="text-black text-lg font-semibold !leading-none">
                {element.title}
              </h3>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Point;
