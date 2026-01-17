import "./Hero.scss";
import LinkWithIcon from "@/shared/ui/LinkWithIcon";
import PeoplePNG from "./people.png";
import HeroCards from "./HeroCards";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__text">
				<p className="hero__pre-title">Your Journey to Tomorrow Begins Here</p>
				<h1 className="hero__title">
					Explore the Frontiers of Artificial Intelligence
				</h1>
				<p className="hero__description">
					Welcome to the epicenter of AI innovation. FutureTech AI News is your
					passport to a world where machines think, learn, and reshape the
					future. Join us on this visionary expedition into the heart of AI.
				</p>
			</div>

			<ul className="hero__statistics">
				<li className="hero__statistics-item">
					<h2 className="h3">
						300<span>+</span>
					</h2>
					<p>Resources available</p>
				</li>

				<li
					className="hero__statistics-item"
					aria-hidden="true"
				></li>

				<li className="hero__statistics-item">
					<h2 className="h3">
						12k<span>+</span>
					</h2>
					<p>Total Downloads</p>
				</li>

				<li
					className="hero__statistics-item"
					aria-hidden="true"
				></li>

				<li className="hero__statistics-item">
					<h2 className="h3">
						10k<span>+</span>
					</h2>
					<p>Active Users</p>
				</li>
			</ul>

			<div className="hero__explore">
				<div className="hero__explore-content">
					<div className="hero__explore-people">
						<img
							src={PeoplePNG}
							alt=""
						/>
					</div>
					<h3 className="h5">Explore 1000+ resources</h3>
					<p>Over 1,000 articles on tech trends and breakthroughs.</p>
					<LinkWithIcon
						title="Explore Resources"
						href="/"
						hasBorder
					/>
				</div>
			</div>

			<HeroCards />
		</section>
	);
};

export default Hero;
