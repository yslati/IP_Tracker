import React from 'react';

const Info = () => {
	return (
		<div className="bg-white w-200 flex rounded-xl mt-12 py-5 z-10">
			<div className="border-r w-1/4 flex flex-col mx-5 my-2 pl-5 pr-10">
				<h2 className="text-darkGray text-sm font-medium ">IP ADDRESS</h2>
				<h1 className="mt-1 font-medium text-veryDarkGray text-2xl">192.212.174.101</h1>
			</div>
			<div className="border-r w-1/4 flex flex-col mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">LOCATION</h2>
				<h1 className="mt-1 font-medium text-veryDarkGray text-2xl">Brooklyn, NY 1001</h1>
			</div>
			<div className="border-r w-1/4 flex flex-col mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">TIMEZONE</h2>
				<h1 className="mt-1 font-medium text-veryDarkGray text-2xl">UTC -05:00</h1>
			</div>
			<div className="w-1/4 flex flex-col mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">ISP</h2>
				<h1 className="mt-1 font-medium text-veryDarkGray text-2xl">SpaceX Starlink</h1>
			</div>
		</div>
	);
};

export default Info;
