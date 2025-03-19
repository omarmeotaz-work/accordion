import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
function Item({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`question${isOpen ? "Open" : ""} `} onClick={handleToggle}>
      <div className="head">
        <h2 className="number">0{num}</h2>
        <h3 className="title">{title}</h3>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="text">{text}</div>}
    </div>
  );
}
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <Item key={index} num={index + 1} title={el.title} text={el.text} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
