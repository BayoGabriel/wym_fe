import React from "react";
interface Three_Card_Props {
  title: string;
  data: {
    title: string;
    details: string;
  }[];
  subText: string;
  styles: {
    bg: string;
    card: string;
  };
}

const Three_Cards_Section = ({
  title,
  data,
  subText,
  styles,
}: Three_Card_Props) => {
  return (
    <section className={styles.bg}>
      <div className="max-w-screen-2lg 3xl:max-w-xlg w-[95%] mx-auto py-20 flex flex-col gap-16">
        <div className="xmd:text-center">
          <h4 className="text-2xl xmd:text-5xl font-aeonik font-[500] xmd:w-[70%] mx-auto leading-normal">
            {title}
          </h4>
          <p className="text-lg leading-normal pt-6 xmd:w-[70%] mx-auto">
            {subText}
          </p>
        </div>
        <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div className={`${styles.card} p-6 rounded-xl`}>
              <h4 className="font-[500] font-aeonik text-lg pb-4">{item.title}</h4>
              <p className="text-lg leading-snug">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Three_Cards_Section;
