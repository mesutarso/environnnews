import heroStyles from '../styles/Hero.module.css';

const Videos = ({ title }) => {
	return (
		<div className={`col-md-12 ${heroStyles.environews_tv}`}>
			<div className='container'>
				<h5
					className={`border-start px-2 mb-3 border-success border-5 ${heroStyles.tv_title}`}>
					{title}
				</h5>
				<div className='row'>
					<div className='col-lg-7 col-md-12 col-sm-12'>
						<div className={heroStyles.video_responsive}>
							<iframe
								width='100%'
								height='480'
								src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
								frameBorder='1'
								allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								title='Embedded youtube'
							/>
						</div>
					</div>
					<div
						className={`col-lg-5 col-md-12 col-sm-12 col-12  ${heroStyles.videoContainer}`}>
						<div className='row'>
							<div
								className={`col-md-4 col-sm-4 col-4 ${heroStyles.smallVideo}`}>
								<iframe
									width='100%'
									height='90'
									src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
									frameBorder='1'
									allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									title='Embedded youtube'
								/>
							</div>
							<div className='col-md-8 col-sm-8 col-8'>
								<h5 className={`mb-1 ${heroStyles.title}`}>ENVIRONEWS</h5>
								<p className={`${heroStyles.videoDescription}`}>
									Le Parc national de Kahuzi-Biega détient désormais 60% de la
									population mondiale des gorilles de Grauer
								</p>
							</div>
						</div>
						<div className='row'>
							<div
								className={`col-md-4 col-sm-4 col-4 ${heroStyles.smallVideo}`}>
								<iframe
									width='100%'
									height='90'
									src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
									frameBorder='1'
									allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									title='Embedded youtube'
								/>
							</div>
							<div className='col-md-8 col-sm-8 col-8'>
								<h5 className={`mb-1 ${heroStyles.title}`}>ENVIRONEWS</h5>
								<p className={`${heroStyles.videoDescription}`}>
									Le Parc national de Kahuzi-Biega détient désormais 60% de la
									population mondiale des gorilles de Grauer
								</p>
							</div>
						</div>
						<div className='row'>
							<div
								className={`col-md-4 col-sm-4 col-4 ${heroStyles.smallVideo}`}>
								<iframe
									width='100%'
									height='90'
									src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
									frameBorder='1'
									allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									title='Embedded youtube'
								/>
							</div>
							<div className='col-md-8 col-sm-8 col-8'>
								<h5 className={`mb-1 ${heroStyles.title}`}>ENVIRONEWS</h5>
								<p className={`${heroStyles.videoDescription}`}>
									Le Parc national de Kahuzi-Biega détient désormais 60% de la
									population mondiale des gorilles de Grauer
								</p>
							</div>
						</div>
						<div className='row'>
							<div
								className={`col-md-4 col-sm-4 col-4 ${heroStyles.smallVideo}`}>
								<iframe
									width='100%'
									height='90'
									src={`https://www.youtube.com/embed/YkmSQZP7bn8`}
									frameBorder='1'
									allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									title='Embedded youtube'
								/>
							</div>
							<div className='col-md-8 col-sm-8 col-8'>
								<h5 className={`mb-1 ${heroStyles.title}`}>ENVIRONEWS</h5>
								<p className={`${heroStyles.videoDescription}`}>
									Le Parc national de Kahuzi-Biega détient désormais 60% de la
									population mondiale des gorilles de Grauer
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Videos;
