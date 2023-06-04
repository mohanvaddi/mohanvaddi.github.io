/**
 * @description This function is used to insert html tags for bold and anchor tags
 * @param line Line of text
 */
export const insertHtml = (line: string) => {
	const boldRegex = /\*(.*?)\*/g;
	const anchorRegex = /\[(.*?)\]\((.*?)\)/g;
	const html = line
		.replace(boldRegex, '<span class="text-white">$1</span>')
		.replace(
			anchorRegex,
			'<a class="relative custom-underline-effect" href="$2" target="_blank"><span class="text-white">$1</span></a>'
		);
	return html;
};

export const scrollIntoView = (targetId: string) => {
	const targetElement = document.getElementById(targetId);
	if (targetElement) {
		targetElement.scrollIntoView({
			behavior: 'smooth'
		});
	}
};
