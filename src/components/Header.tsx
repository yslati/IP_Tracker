import React, { useState } from 'react';
import { ChevronRightIcon, RefreshIcon } from '@heroicons/react/solid'
import Info from './Info';
import axios from 'axios';

const checkValidIP = (str:string) => {

	const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
	return regexExp.test(str);
}

const checkDomain = (str:string) => {
	
	const regexExp = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
	return regexExp.test(str)
}



const Header = () => {

	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState()
	const [error, setError] = useState()

	const sendReq = (data:string) => {
		
		axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_UAJJkLpdCragMY1Z0CugmRpyQlQVI&${data}`)
		.then(res => {
			setData(res.data)
		})
		.catch(error => {
			console.log(`error fetching data: ${error}`);
			setError(error)
		})
		.finally(() => {
			setLoading(false)
			console.log(error);
			
		})
	}


	const handleSubmit = () => {
		console.log("handle");
		if (input.length > 6 && input.length < 30) {
			setLoading(true)
			if (checkValidIP(input))
				sendReq(`ipAddress=${input}`)
			else if (checkDomain(input))
					sendReq(`domain=${input}`)
			else {
				alert('invalid input ip/domain')
				setLoading(false)
			}
			setInput('')
		}
	}

	// const handleEnter = (event) => {
	// 	if (event.key === 'Enter') {
	// 		console.log('do validate')
	// 	}
	// }

	document.getElementById("ip/domain")
	?.addEventListener("keydown", (event) => {
		console.log('press');
		if (event.key === "Enter") {
			setTimeout(handleSubmit, 5000)
			console.log(input);
			// handleSubmit()
		}
	});

  return (
	<div className="w-screen h-72 flex flex-col items-center">
		<img src="./images/pattern-bg.png" alt="" className=" w-screen h-full object-fill object-center" />
		<div className="absolute w-full items-center flex flex-col">
			<h1 className="text-2xl text-white mt-14 font-medium">IP Address Tracker</h1>

			<div className=" flex items-center max-w-md bg-white rounded-xl md:mt-8 mt-5" >
				<input type="text" name='ip/domain' id='ip/domain' required minLength={6} maxLength={30}
					value={input} onChange={(e) => setInput(e.target.value)}
					className="text-input md:w-96 px-5 py-1 text-veryDarkGray rounded-full focus:outline-none appearance-none"
					placeholder="Search for any IP address or domain" 
				/>
				<button disabled={loading} onClick={handleSubmit} id="submitkey" type="submit" className="flex ml-auto items-center bg-veryDarkGray hover:bg-gray-700 justify-center w-12 h-12 rounded-r-xl">
					{!loading ? 
						<ChevronRightIcon className="w-7 h-7 text-white" />
					:	<RefreshIcon className='w-5 h-5 text-white animate-spin' />
					}
				</button>
			</div>
			<Info data={data} />
		</div>
	</div>
  )
};

export default Header;
