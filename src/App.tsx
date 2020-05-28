import React, { useEffect, useState, FormEvent } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import { sortData, getSimilarColors } from "./_helpers/sortData";
import { Color } from "./_helpers/types";

function App() {
  const [data, setData] = useState({ colors: [] });
  const [sortedColors, setSortedColors] = useState([]);
  const [hasData, setHasdata] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [failedFetch, setFailedFetch] = useState(false);
  const [color, setColor] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data && hasData) {
      const sortedColors = sortData(data);
      const index = sortedColors.findIndex(
        (c: Color) => c.hex === color.toLowerCase()
      );

      if (index === -1) {
        setNotFound(true);
      }

      const similar = getSimilarColors(sortedColors, index);
      setShowResults(true);
      setSortedColors(similar);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowResults(false);
    setNotFound(false);
    setColor(e.currentTarget.value);
  };

  useEffect(() => {
    if (!hasData) {
      const fetchData = async () => {
        await axios(
          "https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/xkcd.json"
        )
          .then((res) => {
            if (res) {
              setHasdata(true);
            }

            setData(res.data);
          })
          .catch((error) => {
            setFailedFetch(true);
          });
      };

      fetchData();
    }

    if (data && hasData) {
      const sortedColors = sortData(data);
      setSortedColors(sortedColors);
    }
  }, [data, hasData]);

  return (
    <div className="App">
      <Header />
      <div className="d-flex justify-content-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Color Input</label>
          <input
            type="text"
            className="form-control"
            id="colorInput"
            aria-describedby="colorInputField"
            placeholder="Enter Hex Color"
            value={color}
            onChange={(e) => handleChange(e)}
          />
          <small id="inputHelp" className="form-text text-muted">
            Enter a Hex colour using the # sign.
          </small>
        </form>
      </div>
      <div>
        {notFound && (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ margin: "2rem" }}
          >
            {`Sorry could not find ${color}, could try making it yourself?`}
          </div>
        )}
        {failedFetch && (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ margin: "2rem" }}
          >
            {`Failed to get data, please refresh the page and try again`}
          </div>
        )}
      </div>
      <div style={{ margin: "5%" }}>
        {!notFound && showResults && <Table data={sortedColors} />}
      </div>
    </div>
  );
}

export default App;
