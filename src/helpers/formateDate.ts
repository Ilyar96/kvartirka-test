export const monthList = [
	"Янв",
	"Февр",
	"Март",
	"Апр",
	"Maй",
	"Июнь",
	"Июль",
	"Авг",
	"Сент",
	"Окт",
	"Нояб",
	"Дек",
];

export const formatDate = (date: Date) => {
	const day = date.getDate();
	const month = monthList[date.getMonth()];
	const year = date.getFullYear();

	return `${day} ${month} ${year}`;
};
