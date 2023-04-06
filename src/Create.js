import React, { useState } from "react";
import firebase from "firebase/app";
import { db } from "./firebase";

const storage = firebase.storage();

export default function Create() {
  const [inputState, setInputState] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      // Firebase Storage에 이미지 파일 업로드
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);

      // Firestore collection에 document 추가
      const url = await fileRef.getDownloadURL();
      await db.collection("nature").add({
        inputState: inputState,
        image: url,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setInputState("");
      setFile(null);
      setImage("");
      console.log("Document added successfully!");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용을 입력하세요"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <button onClick={handleUpload}>Add Document</button>
    </div>
  );
}
