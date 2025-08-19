import data from "../assets/data.json";

const Section = () => {
  return (
    <main>
      <div className="section">
        {data.map((element, index) => {
          return (
            <div key={index}>
              <h2>{element.category}</h2>
              <div className="carrousel">
                {element.images.map(img => {
                  return <img src={img} alt="img-movie" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Section;
