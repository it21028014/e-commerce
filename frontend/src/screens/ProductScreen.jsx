import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const params = useParams();
  const { slung } = params;
  return (
    <div>
      <h1>{slung}</h1>
    </div>
  );
};

export default ProductScreen;
