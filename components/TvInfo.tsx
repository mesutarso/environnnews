import React from 'react';
import { FaPlay } from 'react-icons/fa';
import EnvironewsStyle from '../styles/Environews.module.css';

const TvInfo = ({ title, description, phoneNumber }) => {
	return (
		<div>
			<div className='container p-md-5  mt-4'>
				<div className='row p-4 p-md-0'>
					<div className='border-success border-start px-2 border-5 col-md-10 '>
						<h5 className='px-2'>
							<strong data-testid='title'>{title}</strong>
						</h5>
					</div>
					<div className='col-md-8 mt-2  border-success border-1 border-start px-md-4'>
						<p data-testid='description'>{description}</p>
						<p data-testid='phone-number'>Tél : {phoneNumber}</p>
					</div>
					<div className='col-md-12 border-success border-1 border-start px-md-4'>
						<div className='row'>
							<div className='col-md-4 mt-3'>
								<div className={`${EnvironewsStyle.video}`}></div>
							</div>
							<div className='col-md-4 mt-3'>
								<div className={`${EnvironewsStyle.video}`}></div>
							</div>
							<div className='col-md-4 mt-3'>
								<div className={`${EnvironewsStyle.video}`}></div>
							</div>
						</div>
					</div>
					<div className='col-12 mt-5'>
						<a className='text-success '>
							<p className='d-flex '>
								<span className=' d-block'>VOIR PLUS</span>
								<i className={` d-block ${EnvironewsStyle.margin_lt}`}>
									<FaPlay />
								</i>
							</p>
						</a>

						<hr />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TvInfo;
