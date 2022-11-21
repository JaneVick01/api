import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
export default function Home() {
// pages/index.js
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [products, setShops] = useState([]); 
	
	useEffect(() => {
	  fetch("http://localhost:3003/listStores")
		.then(res => res.json())
		.then(
		  (data) => {
			setIsLoaded(true);
			 setShops
		(data.store001);
		console.log(data.store001);
		  },
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, [])
  if (error) {
	  return <div>Error</div>;
	} else if (!isLoaded) {
	  return <div>Loading...</div>;
	} else {
	  return (
		<div className={styles.container}>
		  {Array.from(products).map(store => (
			<div className={styles.main}>
			  <div>
				<h1 text={store.name} />
			  </div>
			</div>
		  ))}
		</div>
	  );
	}
}
