const Section = ({ id, title, children, bgColor = 'bg-white' }) => {
  return (
    <section id={id} className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

