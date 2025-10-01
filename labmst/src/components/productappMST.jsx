import React from "react";
import ProductCard from "./productCard";
import { useState } from "react";

function ProductappMST() {
	const [card, setCard] = useState([]);
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		description: "",
		instock: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewProduct((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const addProduct = (e) => {
		e.preventDefault();
		if (newProduct.name.trim() !== "" && newProduct.price.trim() !== "") {
			const product = {
				id: Date.now(),
				name: newProduct.name,
				price: newProduct.price,
				description: newProduct.description,
				instock: newProduct.instock,
			};
			setCard((prevData) => [product, ...prevData]);
			setNewProduct({
				name: "",
				price: "",
				description: "",
				instock: false,
			});
		}
	};

	return (
		<div>
			<h1>Product App MST Component</h1>

			<div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
				<h2>Add Product</h2>
				<form onSubmit={addProduct}>
					<div>
						<label>Product Name:</label>
						<input
							type="text"
							name="name"
							placeholder="Enter product name"
							value={newProduct.name}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Product Price:</label>
						<input
							type="text"
							name="price"
							placeholder="Enter product price"
							value={newProduct.price}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Product Description:</label>
						<textarea
							name="description"
							placeholder="Enter product description"
							value={newProduct.description}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>In Stock:</label>
						<input
							type="checkbox"
							name="instock"
							checked={newProduct.instock}
							onChange={(e) =>
								setNewProduct((prevData) => ({
									...prevData,
									instock: e.target.checked,
								}))
							}
						/>
					</div>
					<button type="submit">Add Product</button>
				</form>
			</div>

			<div>
				{card.map((product) => (
					<div
						key={product.id}
						className="flex flex-col border p-4 m-4 justify-center items-center"
					>
						<p>Product Name: {product.name}</p>
						<p>Price: {product.price}</p>
						<p>Description: {product.description}</p>
						<p>In Stock: {product.instock ? "Yes" : "No"}</p>
						<button
							disabled={!product.instock}
							style={{
								backgroundColor: product.instock
									? "green"
									: "gray",
								color: "white",
							}}
						>
							{product.instock ? "Buy Now" : "Out of Stock"}
						</button>
					</div>
				))}
			</div>

			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
}

export default ProductappMST;
