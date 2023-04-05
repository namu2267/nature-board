import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PhotoList from "./components/PhotoList";
import TitleList from "./components/TitleList";
import { db } from "./firebase";
// const getNatureDatas = async () => {
//   const result = await db.collection("nature").get();

//   console.log(result.docs[1].data());

//   return result;
// };

export default function App() {
  // getNatureDatas();
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("nature")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <TitleList data={data} />
      <PhotoList />
    </div>
  );
}
