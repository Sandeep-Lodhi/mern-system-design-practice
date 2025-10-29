import FAQ from "./components/FAQ";
import "./styles.css";
import data from "./data/faqData.json";

export default function App() {
  return <FAQ data={data} />;
}
