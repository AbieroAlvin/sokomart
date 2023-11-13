import { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { BsSearch } from "react-icons/bs";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductLists from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [query, setQuery] = useState("");

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = setQuery(e.target.value);

    const searchedProducts = products.filter((item) => {
      return item.productName.toLowerCase().includes(searchTerm.toLowercase());
    });

    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section className="py-[30px] flex items-center justify-center w-full">
        <div className="row flex md:flex-row flex-col lg:gap-24 md:gap-12 gap-8">
          <div className="col">
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="filter__widget">
              <select>
                <option>Sort By </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="search__box">
              <input
                type="text"
                placeholder="Search....."
                value={query}
                onChange={handleSearch}
              />
              <span>
                <BsSearch onClick={handleSearch} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row flex items-center justify-center">
            {productsData.length === 0 ? (
              <h1 className="text-center text-xl">No Products are found !</h1>
            ) : (
              <ProductLists data={productsData} />
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
