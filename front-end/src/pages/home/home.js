import { useState } from "react";
import styles from './home.module.css'
import Search from "./search/search";
import Product from '../product/products'
const Home = () => {
    const [searchQuery, setSearchQuery] = useState('')
    function handleSearch() {
        console.log("search the items")
    }
    return (<div className={styles.container}>
                <div className={styles.box}>
                    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchItems={handleSearch} />
                    <Product/>
                </div>
                
    </div>)
}

export default Home;

// search box with filters, products, Layout