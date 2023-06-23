"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _productItem = _interopRequireDefault(require("./productItem"));

var _productsModule = _interopRequireDefault(require("./products.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DUMMY_PRODUCTS = [{
  id: "b1",
  title: "First book",
  description: "First book ever written by a novice",
  price: 9
}, {
  id: "b2",
  title: "Second book",
  description: "Second book ever written by a Pro",
  price: 11
}];

var Products = function Products(props) {
  // return (
  // 	<section className={classes.products}>
  // 		<h2>Buy your favorite products</h2>
  // 		<ul>
  // 			{DUMMY_PRODUCTS.map((item) => (
  // 				<ProductItem
  // 					title={item.title}
  // 					price={item.price}
  // 					description={item.description}
  // 					key={item.id}
  // 					id={item.id}
  // 				/>
  // 			))}
  // 		</ul>
  // 	</section>
  // );
  return;
};

var _default = Products;
exports["default"] = _default;