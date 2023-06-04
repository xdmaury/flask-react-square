import React, { useState } from 'react';
import { calculateSquare } from '../slices/apiService';


function SquareForm() {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const result = await calculateSquare(number);
			setResult(result);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div className="container mx-auto max-w-md mt-10 border rounded-sm p-10 bg-gray-50">
			<h1 className="text-3xl font-bold mb-4">Square Calculator</h1>
			<form onSubmit={handleSubmit} className="mb-4">
				<label className="block mb-2">
					Insira um numero:
					<input
						type="number"
						value={number}
						onChange={(event) => setNumber(event.target.value)}
						className="block w-full border border-gray-300 rounded p-2 mt-1"
					/>
				</label>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Calcular
				</button>
			</form>
			{result && (
				<p className="text-lg">
					Resultado: <span className="font-bold">{result}</span>
				</p>
			)}

		</div>
	);
};

export default SquareForm;
