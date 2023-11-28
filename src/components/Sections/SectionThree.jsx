const SectionThree = () => {
	const dummyBlogs = [
		{
			date: "2 oct 2023",
			title: "Generic title",
			intro: "Lorem ipsum dolor sit amet consectetur.",
		},
		{
			date: "2 oct 2023",
			title: "Generic title",
			intro: "Lorem ipsum dolor sit amet consectetur.",
		},
		{
			date: "2 oct 2023",
			title: "Generic title",
			intro: "Lorem ipsum dolor sit amet consectetur.",
		},
	];
	return (
		<div className="section-three-homepage">
			<h2>Recent Blogs</h2>
			<div className="blog-wrapper">
				{/* <div className="single-blog">
					<div className="single-blog-img"></div>
					<div className="blog-texts">
						<div className="single-blog-date">
							<span>2 oct 2023</span>
						</div>
						<div className="single-blog-title">
							<h5>Generic title</h5>
						</div>
						<div className="single-blog-intro">
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
					</div>
				</div> */}
				{dummyBlogs.map((blog, index) => {
					return (
						<div key={index} className="single-blog">
							<div className="single-blog-img"></div>
							<div className="blog-texts">
								<div className="single-blog-date">
									<span>{blog.date}</span>
								</div>
								<div className="single-blog-title">
									<h5>{blog.title}</h5>
								</div>
								<div className="single-blog-intro">
									<p>{blog.intro}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default SectionThree;
