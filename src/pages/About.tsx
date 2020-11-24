import React, { useRef, useState } from "react";

export const About = () => {
  const [value, handleState] = useState<{ value: string | undefined }>({
    value: "",
  });

  const ref = useRef<HTMLSelectElement>(null);

  const handleChange = () => {
    handleState({
      value: ref.current?.value,
    });
    console.log(value);
  };
  return (
    <div>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
        voluptatem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
        voluptatem.
      </p>
      <img
        src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
        alt="a cat wearing a face mask"
        className="lovely__cat"
      ></img>

      <form>
        <label>
          Choose
          <select
            style={{ display: "block" }}
            ref={ref}
            onChange={handleChange}
          >
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
          </select>
        </label>
      </form>
    </div>
  );
};
