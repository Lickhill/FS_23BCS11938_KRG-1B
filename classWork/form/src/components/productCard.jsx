import React from "react";
import { useState } from "react";

function ProductCard() {
	const [form, setForm] = useState({
		name: "",
		price: "",
		description: "",
		instock: false,
	});
	return (
		<div>
			<div className="flex flex-col border p-4 m-4 justify-center items-center">
				<p>Product Name: {form.name}</p>
				<p>Price: {form.price}</p>
				<p>Description: {form.description}</p>
				<p>In Stock: {form.instock ? "Yes" : "No"}</p>
				<button
					disabled={!form.instock}
					style={{
						backgroundColor: form.instock ? "green" : "gray",
						color: "white",
					}}
				>
					{form.instock ? "Buy Now" : "Out of Stock"}
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
