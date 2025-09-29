import React, { createContext, useContext } from "react";

// Create Context (with an optional default value)
const UserContext = createContext("guest");

const Parent = () => <Child />;
const Child = () => <Grandchild />;

const Grandchild = () => {
	const userName = useContext(UserContext);
	return <p>this is {userName}</p>;
};

const Usecontextstudy = () => {
	return (
		<UserContext.Provider value="hello world">
			<Parent />
		</UserContext.Provider>
	);
};

export default Usecontextstudy;
