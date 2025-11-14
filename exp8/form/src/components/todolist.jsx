import React from "react";
import { useState } from "react";

function Todolist() {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const addTask = () => {
		if (inputValue.trim() !== "") {
			const newTask = {
				id: Date.now(),
				title: inputValue,
				completed: false,
			};
			setTasks([...tasks, newTask]);
			setInputValue("");
		}
	};

	const toggleTask = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (id) => {
		setTasks(
			tasks
				.map((task) => (task.id === id ? null : task))
				.filter((task) => task !== null)
		);
	};

	return (
		<div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
			<h2>Todo List</h2>

			<div style={{ marginBottom: "20px" }}>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Enter a new task"
				/>
				<button onClick={addTask}>Add</button>
			</div>

			<div>
				{tasks.length === 0 ? (
					<p>No tasks yet. Add one above!</p>
				) : (
					tasks.map((task) => (
						<div
							key={task.id}
							style={{
								display: "flex",
								marginBottom: "10px",
							}}
						>
							<input
								type="checkbox"
								checked={task.completed}
								onChange={() => toggleTask(task.id)}
								style={{ marginRight: "10px" }}
							/>
							<span
								style={{
									flex: 1,
									color: task.completed ? "gray" : "black",
								}}
							>
								{task.title}
							</span>
							<button
								onClick={() => deleteTask(task.id)}
								style={{
									backgroundColor: "red",
									color: "white",
								}}
							>
								Delete
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default Todolist;
