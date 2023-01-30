import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="ProductList">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product}></ProductItem>;
      })}
    </div>
  );
};

export default ProductList;
