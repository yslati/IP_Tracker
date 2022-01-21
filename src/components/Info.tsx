import React from 'react';

const Info = () => {
	return (
		<div className="bg-white md:w-200 w-10/12 flex md:flex-row flex-col items-center rounded-xl md:mt-12 mt-6 py-5 z-10">
			<div className="md:border-r md:w-1/4 items-center flex flex-col md:mx-5 my-2  md:pl-5 md:pr-10">
				<h2 className="text-darkGray text-sm font-medium ">IP ADDRESS</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg">192.212.174.101</h1>
			</div>
			<div className="md:border-r md:w-1/4 items-center flex flex-col md:mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">LOCATION</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg">Brooklyn, NY 1001</h1>
			</div>
			<div className="md:border-r md:w-1/4 items-center flex flex-col md:mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">TIMEZONE</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg">UTC -05:00</h1>
			</div>
			<div className="md:w-1/4 items-center flex flex-col md:mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">ISP</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg">SpaceX Starlink</h1>
			</div>
		</div>
	);
};

export default Info;
