import "./Book.css";

const Book = (props) => {
  console.log(props.cover);
  if (props.cover == undefined) {
    console.log("no cover");
  }

  return (
    <section className="bookContainer flex flex-row">
      <section className="imgContainer ">
        <img src={props.cover} alt="" className=" w-32 h-40 sm:w-60 sm:h-60" />
      </section>
      <section className="infoContainer flex flex-col">
        <h2 className="text-2xl">{props.title}</h2>
        <p>{props.author}</p>
        {/* <p className="text-xm"> {props.summary}</p> */}

        {/* Book Rating Component */}
        {/* Add/Remove Component */}
      </section>
    </section>
  );
};

export default Book;
