export default [
	{
		companyName: 'PointMotion Inc.',
		roles: [
			{
				role: 'Software Development Engineer',
				period: 'Aug 2022 - Present'
			},
			{
				role: 'SDE Intern',
				period: 'Apr 2022 - Jul 2022'
			}
		],
		description: [
			'Developing "[Sound Health](https://pointmotion.us/sound-health/)", a product that leverages motion-capture technology to analyze user\'s adherence and cognition by incorporating games and music to improve quality of life.',
			'Responsible for building and maintaining APIs for Object overlay games, including APIs for Animations, Game logic, Collision detection and Music, contributing to seamless game-play experiences.',
			'Designed and developed a user-friendly mobile application that can be used as a remote control to manipulate the games, which helped in improving the efficiency and effectiveness of testing processes.',
			'Contributed to the development of a chrome extension for user testers to easily record and share videos.',
			'Contributed to the development of a desktop application to automate system accuracy testing and eliminated the need for manual testing efforts.',
			'Worked on planning and Implementation of the back-end infrastructure for Stripe payment systems for the entire platform that encompass various functionalities such as subscription plans, automated payments, and coupon systems.',
			'Worked on the back-end implementation of diverse systems, including authentication, analytics, and rewards systems.',
			'Translated various product designs to responsive UI using Angular, Bootstrap, and SCSS on the front-end.',
			'Created comprehensive technical documentation and videos outlining the functionality of select features.',
			'Extensively collaborated with design, product, and business teams to understand their needs and develop successful features.',
			'Skills: Angular, Bootstrap, Phaser3, PostgreSQL, GraphQL, Hasura, NestJS, Ionic, Tauri, Rust, AWS Cloud Services (S3, SNS, Pinpoint), Novu, Stripe, Google Analytics, Mediapipe.'
		]
	},
	{
		companyName: 'CodeTantra',
		roles: [
			{
				role: 'Intern',
				period: 'May 2021 - Aug 2021'
			}
		],
		description: [
			'Contributed to the development of a platform that helped various educational institutions across India in facilitating online classes, exams, courses, and performance reports.',
			'Contributed to the development of automated and manual proctoring systems.',
			'Translated various product designs to responsive UI.',
			'Skills: ReactJs, Spring Boot, Java, MongoDB, Docker'
		]
	}
] as { companyName: string; roles: { role: string; period: string }[]; description: string[] }[];
