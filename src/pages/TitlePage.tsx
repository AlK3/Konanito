import React from 'react';
import { useParams } from 'react-router-dom';

export const TitlePage: React.FC = () => {
	fetch("https://translate.mentality.rip/translate", {
		method: "POST",
		body: JSON.stringify({
			q: "I am ",
			source: "en",
			target: "ru",
			format: "text"
		}),
		headers: { "Content-Type": "application/json" }
	}).then(r => r.json()).then(res => console.log(res));

	const { titleName } = useParams<{titleName?: string}>();

	return (
		<>
			{titleName}
		</>
	);
}