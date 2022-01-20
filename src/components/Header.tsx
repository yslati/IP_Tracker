import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid'
import Info from './Info';

const Header = () => {
  return (
	<div className="w-screen h-72 flex flex-col items-center">
		<img src="./images/pattern-bg.png" alt="" className=" w-screen h-full object-fill object-center" />
		<div className="absolute w-full items-center flex flex-col">
			<h1 className="text-2xl text-white mt-14 font-medium">IP Address Tracker</h1>
			
			
			<div className="flex items-center max-w-md bg-white rounded-xl mt-8" x-data="{ search: '' }">
				<input type="search" className="text-input w-96 px-5 py-1 text-veryDarkGray rounded-full focus:outline-none"
					placeholder="Search for any IP address or domain" 
				/>
				<button type="submit" className="flex items-center bg-veryDarkGray hover:bg-gray-700 justify-center w-12 h-12 rounded-r-xl">
					<ChevronRightIcon className="w-7 h-7 text-white" />
				</button>
			</div>
			<Info />
		</div>
	</div>
  )
};

export default Header;
