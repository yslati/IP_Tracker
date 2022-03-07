import React from 'react';

const Info = ({ data }: { data: any }) => {
	return (
		<div className="bg-white md:w-200 w-10/12 flex md:flex-row flex-col items-center rounded-xl md:mt-20 mt-6 py-5 z-10">
			<div className="md:border-r md:w-1/4 flex flex-col md:mx-5 my-2  md:pl-5 md:pr-10">
				<h2 className="text-darkGray text-sm font-medium ">IP ADDRESS</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg"> { data && data.ip } </h1>
			</div>
			<div className="md:border-r md:w-1/4 flex flex-col md:mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">LOCATION</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg"> { data && data.location.country } { data && data.location.region } </h1>
			</div>
			<div className="md:border-r md:w-1/4 flex flex-col md:mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">TIMEZONE</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg"> { data && data.location.timezone } </h1>
			</div>
			<div className="md:w-1/4 flex flex-col md:mx-5 my-2">
				<h2 className="text-darkGray text-sm font-medium ">ISP</h2>
				<h1 className="md:mt-1 font-medium text-veryDarkGray text md:tracking-normal tracking-wider md:text-2xl text-lg">{ data && data.isp }</h1>
			</div>
		</div>
	);
};

export default Info;
