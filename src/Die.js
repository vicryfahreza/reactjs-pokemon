import "./Die.css";

export default function Die() {
  const random = Math.floor(Math.random() * 6);
  return <p className="Die">Die Roll Number : {random}</p>;
}
