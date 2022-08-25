const animation = [
	{
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	},
	{
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {duration: 0.5, delay: 1, ease: "easeOut"},
		},
	},
	{
		initial: {
			y: 60,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {duration: 0.5, ease: "easeOut"},
		},
	},
];

export default animation;
